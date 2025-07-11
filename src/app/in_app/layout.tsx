import { Metadata } from "next";
import InAppNavBar from "../../../components/inAppNavBar";

export const metadata: Metadata = {
    title: "Uber App",
};

export default function InAppLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <div className="">
                <InAppNavBar />
                <section className="pt-14 md:pt-26 bg-white">
                    <div className="flex flex-col lg:grid grid-cols-[31%_66%] min-h-[100vh] space-y-5 gap-x-[3%] bg-white p-4 md:p-8">
                        <div className="w-full">
                            <main>{children}</main>
                        </div>
                        <div className="border-green-500 border h-90 lg:h-auto /lg:w-auto"></div>
                    </div>
                </section>
            </div>
        </>
    );
}
