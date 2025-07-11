import { SetStateAction, useRef, useEffect, useState } from "react";
import LocationSuggchild from "./locationSuggChild";
import { inputValueTypes, stopsTypes, suggVisibleTypes } from "./orderRideBars";

export interface coordinatesTypes {
    latitude: number;
    longitude: number;
    selectedPlace: string;
    places: string[];
}
export interface retrievedLocationTypes {
    formatted: string;
}
export interface suggestionTypes {
    place: string;
    address: string;
}
export default function LocationSuggNode({
    inputValue,
    setInputValues,
    setStops,
    pickUp = false,
    coordinates,
    setCoordinates,
    setSuggVisible,
    setStopsSuggVisible,
}: {
    inputValue: string;
    stops: stopsTypes;
    setInputValues: React.Dispatch<SetStateAction<inputValueTypes>>;
    setStops: React.Dispatch<SetStateAction<stopsTypes>>;
    pickUp?: boolean;
    coordinates: coordinatesTypes;
    setCoordinates: React.Dispatch<SetStateAction<coordinatesTypes>>;
    setSuggVisible: React.Dispatch<SetStateAction<suggVisibleTypes>>;
    setStopsSuggVisible: React.Dispatch<SetStateAction<boolean[]>>;
}) {
    const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);
    const [suggestions, setSuggestions] = useState<React.JSX.Element[] | null>(
        []
    );

    const retrieveSuggestions = async (searchStr: string) => {
        const response = await fetch(
            `/in_app/forwardGeocodeApi?searchStr=${searchStr}`
        );
        const { results } = await response.json();
        return results.slice(0, 6);
    };

    useEffect(() => {
        if (inputValue) {
            //converting inputted address to a more suitable format for open cage API
            const res1 = inputValue.replaceAll(",", "%2C");
            const res2 = res1.replaceAll(" ", "+");
            if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current);

            const suggestions: React.JSX.Element[] = [...Array(10)];
            timeoutIdRef.current = setTimeout(() => {
                retrieveSuggestions(res2).then(
                    (results: retrievedLocationTypes[]) => {
                        if (results.length > 0) {
                            results.map(
                                (
                                    result: retrievedLocationTypes,
                                    index: number
                                ) => {
                                    //seperating the name of the place from the address
                                    const place = result.formatted
                                        .split(",")
                                        .slice(0, 1)
                                        .join(",");
                                    const address = result.formatted
                                        .split(",")
                                        .slice(1)
                                        .join(",");
                                    console.log(address);
                                    suggestions.push(
                                        <LocationSuggchild
                                            key={index}
                                            type="location"
                                            setSuggVisible={setSuggVisible}
                                            setStopsSuggVisible={
                                                setStopsSuggVisible
                                            }
                                            place={place}
                                            address={address}
                                        />
                                    );
                                }
                            );
                            setSuggestions(suggestions);
                        }
                    }
                );
            }, 250);
        } else setSuggestions(null);
    }, [inputValue]);

    const handleDismiss = () => {
        setSuggVisible(() => ({
            pickUpSuggVisible: false,
            dropOffOriginalSuggVisible: false,
        }));

        setStopsSuggVisible([false, false, false, false]);
    };
    return (
        <>
            <section
                className="absolute top-[100%] left-0 w-full z-120
            bg-white shadow-2xl rounded-lg pl-4 pb-2"
            >
                <div className="flex items-center h-18 border-b border-b-gray-200 ">
                    <button className="text-[0.9rem] md:text-[1rem] text-black rounded-full px-4 py-2 bg-gray-300">
                        Saved places
                    </button>
                </div>
                <ul className="w-full bg-white">
                    {suggestions}
                    {!inputValue && pickUp && (
                        <LocationSuggchild
                            type="allowLocation"
                            coordinates={coordinates}
                            setCoordinates={setCoordinates}
                            setSuggVisible={setSuggVisible}
                            setStopsSuggVisible={setStopsSuggVisible}
                            setInputValues={setInputValues}
                        />
                    )}
                    <LocationSuggchild
                        type="setLocationOnMap"
                        setSuggVisible={setSuggVisible}
                        setStopsSuggVisible={setStopsSuggVisible}
                    />
                </ul>
            </section>

            {/*overlay for dismissing suggestion node*/}
            <div
                onClick={handleDismiss}
                className="fixed top-0 left-0 w-[100vw] h-[100vh] z-110"
            />
        </>
    );
}
