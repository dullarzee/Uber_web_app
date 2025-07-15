"use client";

import {
    createContext,
    SetStateAction,
    useState,
    ReactNode,
    useContext,
} from "react";

export type coordinatesTypes = [number, number];
export type stopsCoordinatesTypes = [
    coordinatesTypes,
    coordinatesTypes,
    coordinatesTypes,
    coordinatesTypes
];
export type stopsAddressesTypes = [string, string, string, string];
export interface locationContextTypes {
    pickupCoordinates: coordinatesTypes;
    dropOffCoordinates: coordinatesTypes;
    pickupAddress: string;
    dropOffAddress: string;
    stopsCoordinates: stopsCoordinatesTypes;
    stopsAddresses: stopsAddressesTypes;
}
interface stateTypes {
    locationState: locationContextTypes;
    setLocationState: React.Dispatch<SetStateAction<locationContextTypes>>;
}

const locationContext = createContext<stateTypes | null>(null);

export default function LocationProviderContext({
    children,
}: {
    children: ReactNode;
}) {
    const [locationState, setLocationState] = useState<locationContextTypes>({
        pickupCoordinates: [9.0579, 7.4951],
        dropOffCoordinates: [9.0579, 7.4951],
        pickupAddress: "",
        dropOffAddress: "",
        stopsCoordinates: [
            [9.0579, 7.4951],
            [9.0579, 7.4951],
            [9.0579, 7.4951],
            [9.0579, 7.4951],
        ],
        stopsAddresses: ["", "", "", ""],
    });

    return (
        <locationContext.Provider value={{ locationState, setLocationState }}>
            {children}
        </locationContext.Provider>
    );
}

export function useLocationContext() {
    const context = useContext(locationContext);
    if (!context)
        throw new Error(
            "useLocationContext hook must be used inside LocationProviderContext component"
        );

    return context;
}
