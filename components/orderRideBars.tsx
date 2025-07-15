"use client";

import { ChangeEvent, useState } from "react";
import LocationSuggNode from "./locationSuggNode";
import {
    useLocationContext,
    stopsAddressesTypes,
    stopsCoordinatesTypes,
    coordinatesTypes,
} from "./locationContexts";

export interface suggVisibleTypes {
    pickUpSuggVisible: boolean;
    dropOffOriginalSuggVisible: boolean;
}

export interface inputValueTypes {
    pickUp: string;
    dropOffOriginal: string;
}

export type stopsTypes = string[];

export default function OrderRideBars({
    type = "homepage",
}: {
    type: "homepage" | "ride" | "courier";
}) {
    const { setLocationState } = useLocationContext();
    //state variables for keeping the trip data(pickup and drop off location)
    //before loading it into context
    const [dropOffLocations, setDropOffLocations] = useState<number>(1);
    const [inputValues, setInputValues] = useState({
        pickUp: "",
        dropOffOriginal: "",
    });
    const [stops, setStops] = useState<stopsAddressesTypes>(["", "", "", ""]);
    const [suggVisible, setSuggVisible] = useState({
        pickUpSuggVisible: false,
        dropOffOriginalSuggVisible: false,
    });
    const [stopsSuggVisible, setStopsSuggVisible] = useState<boolean[]>([
        false,
        false,
        false,
        false,
    ]);

    const handleSetStopValue = (
        e: ChangeEvent<HTMLInputElement>,
        index: number
    ) => {
        const array: stopsAddressesTypes = [...stops];
        array[index] = e.target.value;
        setStops(array);
    };

    const handleSetPickUp = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValues((prev) => ({
            ...prev,
            pickUp: e.target.value,
        }));
    };
    const handleSetDropOffOriginal = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValues((prev) => ({
            ...prev,
            dropOffOriginal: e.target.value,
        }));
    };

    //minor function for setting first stop coordinate from dropoff input after clicking bus-stops increase button
    const minorFunc = (
        coords: coordinatesTypes,
        stopsCoordinates: stopsCoordinatesTypes
    ): stopsCoordinatesTypes => {
        stopsCoordinates[0] = [...coords];
        return stopsCoordinates;
    };
    const handleAddStopClick = () => {
        if (dropOffLocations === 1) {
            const array: stopsAddressesTypes = [...stops];
            array[0] = inputValues.dropOffOriginal;
            setStops(array);
            setLocationState((prev) => ({
                ...prev,
                stopsAddresses: array,
                stopsCoordinates: minorFunc(
                    prev.dropOffCoordinates,
                    prev.stopsCoordinates
                ),
            }));
        }
        //increasing number of stops input on click until a maximum of 4 inputs
        setDropOffLocations((prev) => Math.min(prev + 1, 4));
    };

    const handleSetStopsSuggVisible = (index: number) => {
        const array: boolean[] = [...stopsSuggVisible];
        array[index] = !array[index];
        setStopsSuggVisible(array);
    };

    return (
        <form className="flex flex-col gap-y-5 mt-10">
            {/*absolutely positioned design*/}
            <section className="relative flex flex-col gap-y-5">
                {/*Inputs*/}
                {type === "homepage" && (
                    <div
                        className="absolute flex flex-col w-10 h-[85%] items-center
                                 justify-center gap-y-2 z-4"
                    >
                        <div className="w-2.5 h-2.5 rounded-full bg-black" />
                        <div className="w-[2px] bg-black h-[37.5%] " />
                        <div className="w-2.5 h-2.5 bg-black" />
                    </div>
                )}
                <div className="relative">
                    {/*absolutely positioned div aesthetic*/}
                    {type === "ride" && (
                        <div className="flex h-full w-6 items-center justify-center">
                            <div
                                className="absolute flex items-center justify-center top-[35%] left-[4%] 
                    rounded-full bg-black w-4.5 h-4.5"
                            >
                                <span className="w-[5px] h-[5px] bg-white rounded-full" />
                            </div>
                        </div>
                    )}
                    <input
                        value={inputValues.pickUp}
                        onChange={handleSetPickUp}
                        onFocus={() =>
                            setSuggVisible((prev) => ({
                                ...prev,
                                pickUpSuggVisible: true,
                            }))
                        }
                        type="text"
                        className="w-full p-4 h-11 md:h-13 bg-gray-100 text-[0.95rem] md:text-lg px-10 text-black rounded-md"
                        placeholder="Pickup location"
                    />
                    {suggVisible.pickUpSuggVisible && (
                        <LocationSuggNode
                            belongTo="pickup"
                            inputValue={inputValues.pickUp}
                            stops={stops}
                            setInputValues={setInputValues}
                            setStops={setStops}
                            pickUp={true}
                            setSuggVisible={setSuggVisible}
                            setStopsSuggVisible={setStopsSuggVisible}
                        />
                    )}
                </div>

                {dropOffLocations === 1 ? (
                    <div className="relative">
                        {/*absolutely positioned div aesthetic*/}
                        {type === "ride" && (
                            <div className="flex h-full w-6 items-center justify-center">
                                <div
                                    className="absolute flex items-center justify-center top-[35%] left-[4%] 
                     bg-black w-4.5 h-4.5"
                                >
                                    <span className="w-[5px] h-[5px] bg-white" />
                                </div>
                            </div>
                        )}
                        <input
                            value={inputValues.dropOffOriginal}
                            onChange={handleSetDropOffOriginal}
                            onFocus={() =>
                                setSuggVisible((prev) => ({
                                    ...prev,
                                    dropOffOriginalSuggVisible: true,
                                }))
                            }
                            type="text"
                            className="w-full p-4 h-11 md:h-13 bg-gray-100 text-[0.95rem] md:text-lg px-10 text-black rounded-md"
                            placeholder="Dropoff location"
                        />

                        {/*button for adding dropoff locations*/}
                        {type === "ride" && (
                            <div
                                onClick={handleAddStopClick}
                                className="absolute cursor-pointer left-[88%] top-0 h-full w-8 flex justify-center items-center "
                            >
                                <div
                                    role="button"
                                    className=" flex items-center justify-center rounded-full w-6 h-6
                        bg-black text-xl  text-white "
                                >
                                    +
                                </div>
                            </div>
                        )}

                        {suggVisible.dropOffOriginalSuggVisible && (
                            <LocationSuggNode
                                belongTo="dropOff"
                                inputValue={inputValues.dropOffOriginal}
                                stops={stops}
                                setInputValues={setInputValues}
                                setStops={setStops}
                                setSuggVisible={setSuggVisible}
                                setStopsSuggVisible={setStopsSuggVisible}
                            />
                        )}
                    </div>
                ) : (
                    [...Array(dropOffLocations)].map((_, index) => (
                        <div key={index} className="relative">
                            {/*absolutely positioned div aesthetic*/}
                            <div className="flex h-full w-6 items-center justify-center">
                                <div
                                    className="absolute flex items-center justify-center top-[35%] left-[4%] 
                     bg-black w-4.5 h-4.5"
                                >
                                    <span className="block p-0.5">
                                        {index + 1}
                                    </span>
                                </div>
                            </div>
                            <input
                                value={stops[index]}
                                onChange={(e) => handleSetStopValue(e, index)}
                                onFocus={() => handleSetStopsSuggVisible(index)}
                                type="text"
                                className="w-full p-4 h-11 md:h-13 bg-gray-100 text-[0.95rem] md:text-lg px-10 text-black rounded-md"
                                placeholder="Add a stop"
                            />

                            {/*button for adding dropoff locations*/}
                            {dropOffLocations === index + 1 &&
                                index !== 3 &&
                                type === "ride" && (
                                    <div
                                        onClick={handleAddStopClick}
                                        className="absolute left-[88%] cursor-pointer top-0 h-full w-8 flex justify-center items-center "
                                    >
                                        <div
                                            role="button"
                                            className=" flex items-center justify-center rounded-full w-6 h-6
                                        bg-black text-xl text-white "
                                        >
                                            +
                                        </div>
                                    </div>
                                )}
                            {stopsSuggVisible[index] && (
                                <LocationSuggNode
                                    belongTo={`stop${index + 1}`}
                                    inputValue={stops[index]}
                                    stops={stops}
                                    setInputValues={setInputValues}
                                    setStops={setStops}
                                    setSuggVisible={setSuggVisible}
                                    setStopsSuggVisible={setStopsSuggVisible}
                                />
                            )}
                        </div>
                    ))
                )}

                <div className="flex flex-row md:flex-col gap-x-3 space-y-6 items-start">
                    {/*pickup now*/}
                    {type === "ride" && (
                        <div className="relative w-[45%] md:w-full">
                            {/*absolutely positioned div aesthetic*/}
                            <div className="flex h-full w-6 items-center justify-center">
                                <div
                                    className="absolute flex items-center justify-center top-[35%] left-[4%] 
                     bg-black w-4.5 h-4.5"
                                >
                                    <span className="w-[5px] h-[5px] bg-white" />
                                </div>
                            </div>

                            <button
                                className="w-full md:w-full p-2.5 md:p-4 md:h-13 bg-gray-100 text-[0.95rem] md:text-lg text-center md:text-left md:px-10
                                 text-black placeholder-black rounded-full md:rounded-md"
                            >
                                Pickup now
                            </button>

                            {/*dropdown button*/}
                            <div className="absolute left-[80%] md:left-[88%] top-0 h-full w-8 flex justify-center items-center ">
                                <svg className="w-5.5" viewBox="0 0 24 24">
                                    <path d="M5.293 9.707l6 6c0.391 0.391 1.024 0.391 1.414 0l6-6c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
                                </svg>
                            </div>
                        </div>
                    )}

                    {/*For me button*/}
                    {type === "ride" && (
                        <div
                            role="button"
                            className="flex w-[40%] items-center text-[0.95rem] md:text-lg space-x-3 justify-between p-2 bg-gray-100 rounded-full"
                        >
                            <svg className="w-4" viewBox="0 0 32 32">
                                <path d="M18 22.082v-1.649c2.203-1.241 4-4.337 4-7.432 0-4.971 0-9-6-9s-6 4.029-6 9c0 3.096 1.797 6.191 4 7.432v1.649c-6.784 0.555-12 3.888-12 7.918h28c0-4.030-5.216-7.364-12-7.918z"></path>
                            </svg>
                            <span className="text-black text-md">For me</span>
                            <svg className="w-4" viewBox="0 0 24 24">
                                <path d="M5.293 9.707l6 6c0.391 0.391 1.024 0.391 1.414 0l6-6c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
                            </svg>
                        </div>
                    )}
                </div>
            </section>
            {type === "homepage" && (
                <div className="flex w-full justify-between">
                    <input
                        type="text"
                        className="w-[48.5%] p-4 h-13 bg-gray-200 text-lg text-black rounded-md"
                        placeholder="Today"
                    />
                    <input
                        type="text"
                        className="w-[48.5%] grow-0 p-4 h-13 bg-gray-200 text-lg text-black rounded-md"
                        placeholder="Now"
                    />
                </div>
            )}
            <button
                className="text-lg md:text-xl disabled:bg-gray-100 bg-black disabled:text-gray-500
             w-full py-2.5 md:py-3.5 rounded-lg text-white"
            >
                Search
            </button>
        </form>
    );
}
