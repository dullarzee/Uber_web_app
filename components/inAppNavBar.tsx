"use client";

import Logo from "./uberLogo";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

export default function InAppNavBar() {
    const currentRoute: string = usePathname();
    const [miniDashboardVisible, setMiniDashboardVisible] = useState(false);

    return (
        <>
            <nav
                className="fixed z-100 flex items-center w-full h-18 top-0 left-0 bg-white px-[4.5%] border-b-4
             border-gray-200 justify-between"
            >
                <div className="flex items-center w-[32%] justify-between">
                    <div className="hidden md:block">
                        <Logo size={2} color="black" />
                    </div>
                    <div className="block md:hidden">
                        <Logo size={1.4} color="black" />
                    </div>
                    <div className="hidden md:flex relative top-[6px] items-end w-[60%] h-full">
                        <Link
                            href="/in_app/ride"
                            className={`flex items-center justify-center flex-1 gap-x-1.5 py-4 text-black text-lg border-b-4 text-center ${
                                currentRoute === "/in_app/ride"
                                    ? "border-b-black"
                                    : "border-transparent"
                            }`}
                        >
                            <svg className="w-7 h-6" viewBox="0 0 20 20">
                                <path d="M2 14v-3h-1c-0.552 0-1-0.448-1-1v0c0-0.552 0.448-1 1-1v0h1l4-7h8l4 7h1c0.552 0 1 0.448 1 1v0c0 0.552-0.448 1-1 1v0h-1v6c0 0.552-0.448 1-1 1v0h-1c-0.552 0-1-0.448-1-1v0-1h-10v1c0 0.552-0.448 1-1 1v0h-1c-0.552 0-1-0.448-1-1v0-3zM15.86 9l-2.86-5h-6l-2.86 5h11.72zM5.5 14c0.828 0 1.5-0.672 1.5-1.5s-0.672-1.5-1.5-1.5v0c-0.828 0-1.5 0.672-1.5 1.5s0.672 1.5 1.5 1.5v0zM14.5 14c0.828 0 1.5-0.672 1.5-1.5s-0.672-1.5-1.5-1.5v0c-0.828 0-1.5 0.672-1.5 1.5s0.672 1.5 1.5 1.5v0z"></path>
                            </svg>
                            Ride
                        </Link>
                        <Link
                            href="/in_app/courier"
                            className={`flex items-center justify-center flex-1 gap-x-1.5 py-4 text-black text-lg border-b-4 text-center ${
                                currentRoute === "/in_app/courier"
                                    ? "border-b-black"
                                    : "border-transparent"
                            }`}
                        >
                            <svg className="w-6 h-6" viewBox="0 0 20 20">
                                <path d="M14.83 4h5.17v6h-1v10h-18v-10h-1v-6h5.17c-0.11-0.3-0.174-0.646-0.174-1.008 0-1.657 1.343-3 3-3 0.772 0 1.475 0.291 2.007 0.77l-0.003-0.002c0.529-0.476 1.233-0.768 2.004-0.768 1.657 0 3 1.343 3 3 0 0.361-0.064 0.708-0.181 1.029l0.007-0.021zM8 10h-5v8h5v-8zM12 10v8h5v-8h-5zM8 6h-6v2h6v-2zM12 6v2h6v-2h-6zM8 4c0.552 0 1-0.448 1-1s-0.448-1-1-1v0c-0.552 0-1 0.448-1 1s0.448 1 1 1v0zM12 4c0.552 0 1-0.448 1-1s-0.448-1-1-1v0c-0.552 0-1 0.448-1 1s0.448 1 1 1v0z"></path>
                            </svg>
                            Courier
                        </Link>
                    </div>
                </div>

                {/*hamburger*/}
                <div className="md:hidden">
                    <svg className="w-5 h-4" xmlns="http://www.w3.org/2000/svg">
                        <g fill="#151515" fillRule="evenodd">
                            <path d="M0 0h32v2H0zM0 8h32v2H0zM0 16h32v2H0z" />
                        </g>
                    </svg>
                </div>

                <div className="relative hidden md:flex items-center w-[19%] h-full justify-between gap-5 text-black self-start">
                    <button className="px-6 py-2 flex-1 text-lg bg-gray-200 rounded-full">
                        Activity
                    </button>
                    <div
                        className="flex items-center justify-between flex-1 cursor-pointer"
                        onClick={() => setMiniDashboardVisible(true)}
                    >
                        <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                        <svg
                            className={`w-6 h-6 ${
                                miniDashboardVisible ? "rotate-180" : ""
                            }`}
                            viewBox="0 0 24 24"
                        >
                            <path d="M5.293 9.707l6 6c0.391 0.391 1.024 0.391 1.414 0l6-6c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
                        </svg>
                    </div>

                    {/*mini dashboard*/}
                    {miniDashboardVisible && (
                        <div>
                            <div
                                className="fixed top-0 left-0 w-[100vw] h-[100vh] z-110"
                                onClick={() => setMiniDashboardVisible(false)}
                            />
                            <section className="absolute z-120 flex flex-col gap-y-4 w-105 h-120 bg-white top-[110%] rounded-xl shadow-2xl right-0 p-5">
                                <div className="flex max-h-20">
                                    <h2 className="text-4xl text-black flex-3 line-clamp-2">
                                        Adefila Timmy
                                    </h2>
                                    <div className="w-17 h-17 rounded-full bg-gray-200"></div>
                                </div>

                                <div className="flex h-23 gap-x-2.5">
                                    <div className="flex-1 rounded-xl bg-gray-100"></div>
                                    <div className="flex-1 rounded-xl bg-gray-100"></div>
                                    <div className="flex-1 rounded-xl bg-gray-100"></div>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between bg-gray-100 p-4 rounded-xl">
                                        <h3 className="text-black text-[1.4rem]">
                                            Uber Cash
                                        </h3>
                                        <span className="text-black text-[1.7rem]">
                                            NGN 0.00
                                        </span>
                                    </div>
                                    <div className="w-full divide-y divide-gray-100">
                                        <button className="flex items-center gap-x-4 w-full py-4 pl-8 text-xl">
                                            <span>Manage account</span>
                                        </button>
                                        <button className="flex items-center gap-x-4 w-full py-4 pl-8 text-xl">
                                            <span>Promotions</span>
                                        </button>
                                        <button className="w-full py-4 text-red-600 bg-gray-100 text-xl rounded-xl">
                                            Sign out
                                        </button>
                                    </div>
                                </div>
                            </section>
                        </div>
                    )}
                </div>
            </nav>
        </>
    );
}
