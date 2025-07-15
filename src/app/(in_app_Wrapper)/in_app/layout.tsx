"use client";

import InAppNavBar from "../../../../components/inAppNavBar";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("../../../../components/interactiveMap"), {
    ssr: false,
});

export default function InAppLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    //const { locationState } = useLocationContext();

    return (
        <>
            <div className="">
                <InAppNavBar />
                <section className="pt-14 md:pt-26 bg-white">
                    <div className="flex flex-col lg:grid grid-cols-[31%_66%] min-h-[100vh] space-y-5 gap-x-[3%] bg-white p-4 md:p-8">
                        <div className="w-full">
                            <main>{children}</main>
                        </div>
                        <div className="h-90 lg:h-auto">
                            <Map />
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
