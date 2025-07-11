import { Metadata } from "next";
import Image from "next/image";
import OrderRideBars from "../../components/orderRideBars";
import Logo from "../../components/uberLogo";
import NavBar from "../../components/navBar";
import Footer from "../../components/footer";

export const metadata: Metadata = {
    title: "Uber",
    description: "Ride with style",
};
export default function Home() {
    return (
        <>
            <NavBar />
            <div className="bg-white min-h-[100vh] border">
                {/*1st hero section*/}
                <section className="grid grid-cols-1 lg:grid-cols-2 pt-20 px-[5%] lg:p-20 my-20">
                    <div>
                        <div className="lg:w-4/5">
                            <h1 className="text-black text-4xl md:text-6xl font-bold">
                                Go anywhere with Uber
                            </h1>
                            <div className="flex flex-col gap-y-5 mt-5 md:mt-10">
                                <OrderRideBars type="homepage" />

                                <div className="flex flex-col md:flex-row items-start gap-y-4 w-full">
                                    <button className=" grow-0 shrink-0 px-8 py-3 text-lg rounded-lg text-white bg-black">
                                        See Prices
                                    </button>
                                    <p
                                        className="inline-flex w-full items-center md:justify-end text-black text-md md:text-lg 
                                 underline underline-offset-8 decoration-2 decoration-gray-300"
                                    >
                                        Log in to see your recent activity
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Image
                            alt="cartoon hero"
                            className="hidden lg:block w-full"
                            width={500}
                            height={400}
                            src="/images/homePageHero1.png"
                        />
                    </div>
                </section>

                <section className="pt-10 p-[5%] lg:p-20">
                    <h1 className="text-2xl md:text-[2.6rem] text-black font-semibold">
                        Suggestions
                    </h1>
                    <div className="flex my-10 sm:w-full md:w-95 h-43 md:h-46 bg-gray-100 p-4 rounded-lg">
                        <div className="w-1/2">
                            <h2 className="text-black font-semibold">Ride</h2>
                            <p className="text-black text-xs md:text-sm">
                                Go anywhere with Uber. Request a ride, hop in
                                and go.
                            </p>
                            <button className="px-5 py-2 text-black mt-4 bg-white rounded-full font-medium">
                                Details
                            </button>
                        </div>
                        <div className=" flex items-center justify-center w-1/2">
                            <Image
                                alt="a car"
                                src="/images/carHeroHomePage.png"
                                className="rounded-xl border w-4/5"
                                width={500}
                                height={300}
                            />
                        </div>
                    </div>
                </section>

                {/*2nd hero section*/}
                <section className="grid grid-cols-1 lg:grid-cols-2 p-[5%] lg:p-20 lg:pt-10 my-20 gap-y-6">
                    <div className="flex flex-col justify-center">
                        <div className="w-full lg:w-4/5">
                            <h1 className="text-black text-3xl lg:text-4xl font-bold">
                                Log in to see your recent activity
                            </h1>
                            <p className="text-md md:text-lg my-7 text-black">
                                View past trips, tailored suggestions, support
                                resources and more.
                            </p>
                            <button className="px-7 py-4 text-md md:text-xl rounded-xl bg-black text-white">
                                Log in to your account
                            </button>
                            <button
                                className="inline-flex w-full items-center text-black text-md md:text-lg mt-5
                                 underline underline-offset-8 decoration-2 decoration-gray-300"
                            >
                                Don&apos;t have an Uber account? Sign up
                            </button>
                        </div>
                    </div>
                    <div>
                        <Image
                            alt="cartoon hero"
                            className="w-full"
                            width={500}
                            height={400}
                            src="/images/homePageHero2.png"
                        />
                    </div>
                </section>

                <section className="grid grid-cols-1 lg:grid-cols-2 p-[5%] lg:p-20 my-20 gap-y-5">
                    <div className="order-2 lg:order-1">
                        <Image
                            alt="cartoon hero"
                            className="w-full rounded-lg"
                            width={350}
                            height={500}
                            src="/images/homePageHero3.png"
                        />
                    </div>
                    <div className="flex flex-col items-end justify-center order-1 lg:order-2">
                        <div className="w full lg:w-4/5">
                            <h1 className="text-black text-3xl lg:text-4xl font-bold">
                                Drive when you want, make what you need
                            </h1>
                            <p className="text-md md:text-lg my-7 text-black">
                                Make money on your schedule with deliveries or
                                rides-or both. You can use your own car or
                                choose a rental through Uber.
                            </p>
                            <div className="flex flex-col lg:flex-row items-start gap-y-3 w-full">
                                <button className=" grow-0 shrink-0 px-8 py-3 text-md lg:text-lg rounded-lg text-white bg-black">
                                    Get started
                                </button>
                                <p
                                    className="inline-flex w-full items-center justify-start lg:justify-end text-black text-md md:text-lg 
                                 underline underline-offset-8 decoration-2 decoration-gray-300"
                                >
                                    Already have an account? Sign in
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="grid grid-cols-1 lg:grid-cols-2 p-[5%] lg:p-20 lg:pt-10 my-20 gap-y-6">
                    <div className="flex flex-col justify-center">
                        <div className="w-full lg:w-4/5">
                            <h1 className="text-black text-3xl lg:text-4xl font-bold">
                                The Uber you know, reimagined for business
                            </h1>
                            <p className="text-md md:text-lg my-7 text-black">
                                Uber for Business is a platform for managing
                                global rides amd meals, and local deliveries,
                                for companies of any size.
                            </p>
                            <button className="px-7 py-4 text-md md:text-xl rounded-xl bg-black text-white">
                                Get Started
                            </button>
                            <button
                                className="inline-flex w-full items-center text-black text-md md:text-lg mt-5
                                 underline underline-offset-8 decoration-2 decoration-gray-300"
                            >
                                Check out our solutions
                            </button>
                        </div>
                    </div>
                    <div>
                        <Image
                            alt="cartoon hero"
                            className="w-full"
                            width={500}
                            height={400}
                            src="/images/homePageHero4.png"
                        />
                    </div>
                </section>

                <section className="w-full p-[5%] bg-gray-100">
                    <h1 className="text-[1.6rem] md:text-4xl text-black mb-6">
                        It&apos;s easier in the apps
                    </h1>
                    <div className="flex flex-col lg:flex-row gap-y-8 w-full justify-between">
                        <div
                            className="flex w-full lg:w-[47.5%] h-auto lg:h-60 bg-white border-1
                     border-gray-400/50 p-2 lg:border-0 gap-x-3"
                        >
                            <div className="w-3/8 grow-0">
                                <div className="flex justify-center items-center w-full h-25 bg-black rounded-xl">
                                    <Logo />
                                </div>
                            </div>
                            <div className="flex flex-col justify-center w-[55%] lg:w-[45%]">
                                <h2 className="text-2xl lg:text-3xl leading-[130%] text-black">
                                    Download the Uber app
                                </h2>
                                <p className="text-black hidden lg:block">
                                    Scan to download
                                </p>
                            </div>
                            <div className="flex-1 items-center justify-center">
                                {/*for the arrow*/}
                            </div>
                        </div>

                        <div
                            className="flex w-full lg:w-[47.5%] h-auto lg:h-60 bg-white border-1 border-gray-400/50
                     p-2 lg:border-0 gap-x-3"
                        >
                            <div className="w-3/8 grow-0"></div>
                            <div className="flex flex-col justify-center w-[55%] lg:w-[45%]">
                                <h2 className="text-2xl lg:text-3xl leading-[130%] text-black">
                                    Download the Driver app
                                </h2>
                                <p className="text-black hidden lg:block">
                                    Scan to download
                                </p>
                            </div>
                            <div className="flex-1 items-center justify-center">
                                {/*for the arrow*/}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}
