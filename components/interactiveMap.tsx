"use client";

import {
    MapContainer,
    Marker,
    TileLayer,
    useMap,
    Tooltip,
    Polyline,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect, useState } from "react";
import polyline from "@mapbox/polyline";
import { useLocationContext, coordinatesTypes } from "./locationContexts";

L.Icon.Default.mergeOptions({
    iconUrl: "../images/marker-icon.png",
    iconRetinaUrl: "../images/marker-icon-2x.png",
    shadowUrl: "../images/marker-shadow.png",
});

export type boundsTypes = coordinatesTypes[] | null;

export default function InteractiveMap() {
    const { locationState } = useLocationContext();
    const [bounds, setBounds] = useState<boundsTypes>(null);
    const [pathStops, setPathStops] = useState<coordinatesTypes[] | null>(null);

    //component for updating map center on pickup location select
    function CenterSetter() {
        const map = useMap();

        useEffect(() => {
            map.flyTo(locationState.pickupCoordinates, 15);
        }, [locationState.pickupCoordinates]);

        return null;
    }

    function BoundSetter({ bounds }: { bounds: boundsTypes }) {
        const map = useMap();

        useEffect(() => {
            if (bounds) map.fitBounds(bounds, { padding: [20, 20] });
        }, [bounds]);

        return null;
    }

    const getRoadAwareRoute = async (coords: coordinatesTypes[]) => {
        const data = JSON.stringify({
            coordinates: coords,
        });
        const response = await fetch(`/in_app/roadRoutingApi`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: data,
        });
        const res1 = await response.json();
        const res2 = res1?.routes[0]?.geometry;
        console.log("suspected bug:", res1);
        const decodedPolyString = polyline?.decode(res2);
        setBounds(decodedPolyString);
    };

    //useEffect for setting bounds
    useEffect(() => {
        const fetchBounds = () => {
            const totalReverse: coordinatesTypes[] = [
                ...(Array(0) as coordinatesTypes[]),
            ];
            const total: coordinatesTypes[] = [
                ...(Array(0) as coordinatesTypes[]),
            ];

            //adding pickup location first
            totalReverse.push([
                locationState.pickupCoordinates[1],
                locationState.pickupCoordinates[0],
            ]);
            total.push(locationState.pickupCoordinates);

            if (
                (locationState.pickupAddress &&
                    locationState.stopsAddresses[0]) ||
                locationState.stopsAddresses[1] ||
                locationState.stopsAddresses[2] ||
                locationState.stopsAddresses[3]
            ) {
                locationState?.stopsCoordinates?.map((it, index) => {
                    //checking if the address has been autocompleted for the input
                    if (locationState.stopsAddresses[index]) {
                        //setting it to the correct format[lng, lat] for open route service to process correctly
                        totalReverse.push([it[1], it[0]]);

                        //keeping original data format to be saved in state
                        total.push(it);
                    }
                });
                getRoadAwareRoute(totalReverse);
                setPathStops(total);
                console.warn("evaluated road aware route for stops");
            } else if (
                locationState.pickupAddress &&
                locationState.dropOffAddress
            ) {
                //Open route service expects coordinates in the format
                //[lng, lat] instead of [lat, lng] so transforming the coordinates
                //temporarily for compatible data transit
                const coords: coordinatesTypes[] = [
                    [
                        locationState.pickupCoordinates[1],
                        locationState.pickupCoordinates[0],
                    ],
                    [
                        locationState.dropOffCoordinates[1],
                        locationState.dropOffCoordinates[0],
                    ],
                ];
                getRoadAwareRoute(coords);
                setPathStops([
                    locationState.pickupCoordinates,
                    locationState.dropOffCoordinates,
                ]);
                console.log(
                    "evaluated road aware route for only pick up and drop off original"
                );
            }
        };
        fetchBounds();
    }, [locationState]);

    return (
        <MapContainer
            center={locationState.pickupCoordinates}
            zoom={7}
            style={{ width: "100%", height: "100%" }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>Open street map</a>"
            />
            {locationState.pickupAddress && (
                <Marker position={locationState.pickupCoordinates}>
                    <Tooltip
                        permanent
                        direction="left"
                        offset={L.point(-30, 0)}
                        interactive={false}
                    >
                        Your current location
                    </Tooltip>
                </Marker>
            )}

            {pathStops?.map((it, index) => {
                if (index === 0) return;
                else {
                    return (
                        <Marker key={`${it[0]}${index}`} position={it}>
                            <Tooltip
                                permanent
                                direction={index % 2 ? "right" : "left"}
                                offset={
                                    index % 2 ? L.point(5, 0) : L.point(-30, 0)
                                }
                                interactive={false}
                            >
                                {index === pathStops.length - 1
                                    ? "Final Destination"
                                    : `Stop ${index}`}
                            </Tooltip>
                        </Marker>
                    );
                }
            })}

            {bounds && (
                <Polyline
                    positions={bounds}
                    pathOptions={{
                        color: "rgba(0,0,0,0.9)",
                        lineCap: "round",
                        lineJoin: "round",
                    }}
                />
            )}

            {/*marker for showing dropoffDestination */}
            {/*locationState.dropOffAddress && (
                <Marker position={locationState.dropOffCoordinates}>
                    <Tooltip
                        permanent
                        direction="center"
                        offset={[20, 20]}
                        interactive={false}
                    >
                        Destination
                    </Tooltip>
                </Marker>
            )*/}

            <CenterSetter />
            <BoundSetter bounds={bounds} />
        </MapContainer>
    );
}
