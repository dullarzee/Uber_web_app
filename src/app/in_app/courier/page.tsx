"use client";

import Image from "next/image";
import { useState } from "react";
import OrderRideBars from "../../../../components/orderRideBars";

export default function CourierPage() {
    const [courierType, setCourierType] = useState("send");
    return (
        <>
            <div className="border-2 font-medium border-gray-100 w-full rounded-xl">
                <div>
                    <Image
                        alt="cartoon of man delivering goods"
                        className="rounded-lg w-full"
                        src="/images/courierHero.png"
                        width={500}
                        height={400}
                    />
                </div>
                <div className="p-4">
                    <h1 className="text-[2rem] my-4 text-black">Courier</h1>
                    <p className="text-lg text-black/60">
                        Have a courier deliver something to you. Get packages
                        delivered in the time it takes to drive there.
                    </p>

                    <div className="flex flex-col mt-4">
                        <div className="flex p-1 bg-gray-200 rounded-xl **:text-[1.1rem] **:text-black">
                            <button
                                onClick={() => setCourierType("send")}
                                className={`flex-1 rounded-xl py-3 border-black ${
                                    courierType === "send"
                                        ? "border-3 bg-white"
                                        : ""
                                }`}
                            >
                                Send
                            </button>
                            <button
                                onClick={() => setCourierType("receive")}
                                className={`flex-1 rounded-xl py-3 border-black ${
                                    courierType === "receive"
                                        ? "border-3 bg-white"
                                        : ""
                                }`}
                            >
                                Receive
                            </button>
                            <button
                                onClick={() => setCourierType("pickup")}
                                className={`flex-1 rounded-xl py-3 border-black ${
                                    courierType === "pickup"
                                        ? "border-3 bg-white"
                                        : ""
                                }`}
                            >
                                Store Pickup
                            </button>
                        </div>

                        <OrderRideBars type="courier" />
                    </div>
                </div>
            </div>
        </>
    );
}
