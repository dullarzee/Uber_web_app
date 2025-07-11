import { SetStateAction, useState } from "react";
import type { coordinatesTypes } from "./locationSuggNode";
import type { inputValueTypes, suggVisibleTypes } from "./orderRideBars";

export default function LocationSuggchild({
    type = "location",
    place,
    address,
    setCoordinates,
    setSuggVisible,
    setStopsSuggVisible,
    setInputValues,
}: {
    type: "location" | "allowLocation" | "setLocationOnMap";
    place?: string;
    address?: string;
    coordinates?: coordinatesTypes;
    setCoordinates?: React.Dispatch<SetStateAction<coordinatesTypes>>;
    setSuggVisible: React.Dispatch<SetStateAction<suggVisibleTypes>>;
    setStopsSuggVisible: React.Dispatch<SetStateAction<boolean[]>>;
    setInputValues?: React.Dispatch<SetStateAction<inputValueTypes>>;
}) {
    const [isRetrievingPos, setIsRetrievingPos] = useState(false);

    const GeocodeProcess = async (latitude: number, longitude: number) => {
        try {
            const response = await fetch(
                `/in_app/geocodeApi?lat=${latitude}&long=${longitude}`,
                {
                    method: "GET",
                }
            );
            const { results } = await response.json();
            const address = results[0].formatted;
            console.log(address);
            if (setInputValues) {
                setInputValues((prev) => ({
                    ...prev,
                    pickUp: address,
                }));
            }
        } catch (error) {
            console.log("failed to fetch addresses", error);
        }
    };

    const handleLocationAccess = () => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                if (setCoordinates) {
                    setCoordinates((prev) => ({
                        ...prev,
                        latitude: latitude,
                        longitude: longitude,
                    }));
                    console.log("tried setting location in input");
                }
                console.log("latitude:", latitude, "longitude:", longitude);
                setIsRetrievingPos(false);
                GeocodeProcess(latitude, longitude);
            },
            (error) => {
                console.log("error retrieving position: ", error);
                setIsRetrievingPos(false);
            },
            {
                enableHighAccuracy: true,
                timeout: 7000,
                maximumAge: 0,
            }
        );
    };
    const handleClick = async () => {
        if (type === "allowLocation") {
            setIsRetrievingPos(true);
            handleLocationAccess();
            setTimeout(() => {
                setSuggVisible({
                    pickUpSuggVisible: false,
                    dropOffOriginalSuggVisible: false,
                });
                setStopsSuggVisible([false, false, false, false]);
            }, 2500);
        } else if (type === "location" || type === "setLocationOnMap") {
            setSuggVisible({
                pickUpSuggVisible: false,
                dropOffOriginalSuggVisible: false,
            });
            setStopsSuggVisible([false, false, false, false]);
        }
    };

    return (
        <>
            <li
                onClick={handleClick}
                className="flex w-full gap-y-3 border-b border-b-gray-200 min-h-18 md:min-h-22 p-2.5 pl-0 cursor-pointer"
            >
                <div className="flex flex-1 items-center justify-center">
                    <div
                        className={`flex items-center justify-center w-10.5 h-10.5 rounded-full ${
                            type === "allowLocation"
                                ? "bg-black"
                                : "bg-gray-200"
                        }`}
                    >
                        {type === "allowLocation" && (
                            <svg
                                className="w-5 h-5 fill-white"
                                viewBox="0 0 16 16"
                            >
                                <path d="M15.5 7h-1.587c-0.422-2.51-2.403-4.487-4.913-4.91v-1.59c0-0.277-0.223-0.5-0.5-0.5h-1c-0.277 0-0.5 0.224-0.5 0.5v1.59c-2.511 0.422-4.491 2.4-4.913 4.91h-1.587c-0.277 0-0.5 0.223-0.5 0.5v1c0 0.277 0.224 0.5 0.5 0.5h1.587c0.422 2.51 2.403 4.488 4.913 4.91v1.59c0 0.277 0.223 0.5 0.5 0.5h1c0.277 0 0.5-0.223 0.5-0.5v-1.59c2.511-0.422 4.491-2.401 4.913-4.91h1.587c0.277 0 0.5-0.223 0.5-0.5v-1c0-0.277-0.223-0.5-0.5-0.5zM11.873 7h-2.873v-2.869c1.405 0.362 2.511 1.466 2.873 2.869zM7 4.131v2.869h-2.873c0.362-1.404 1.469-2.506 2.873-2.869zM4.127 9h2.873v2.869c-1.405-0.361-2.511-1.464-2.873-2.869zM9 11.868v-2.868h2.873c-0.363 1.404-1.469 2.507-2.873 2.869z"></path>
                            </svg>
                        )}

                        {type === "location" && (
                            <svg
                                className="w-6 h-6 fill-black"
                                viewBox="0 -960 960 960"
                                fill="#1f1f1f"
                            >
                                <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
                            </svg>
                        )}

                        {type === "setLocationOnMap" && (
                            <svg
                                className="w-6 h-6 fill-black"
                                viewBox="0 -960 960 960"
                                width="24px"
                                fill="#1f1f1f"
                            >
                                <path d="M440-400h80v-120h120v-80H520v-120h-80v120H320v80h120v120Zm40 214q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
                            </svg>
                        )}
                    </div>
                </div>
                <div className="flex flex-col justify-center flex-5">
                    <h2 className="text-md md:text-lg font-semibold text-black line-clamp-1">
                        {type === "allowLocation" && !isRetrievingPos
                            ? "Allow location access"
                            : type === "allowLocation" && isRetrievingPos
                            ? "retrieving position..."
                            : ""}
                        {type === "setLocationOnMap" && "Set location on map"}
                        {type === "location" && place}
                    </h2>
                    <p className="text-sm md:text-md text-black line-clamp-3">
                        {type === "allowLocation" &&
                            "It provides your pickup address"}
                        {type === "location" && address}
                    </p>
                </div>
            </li>
        </>
    );
}
