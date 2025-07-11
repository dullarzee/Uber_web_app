import Logo from "./uberLogo";

export default function Footer() {
    return (
        <footer>
            <div className="w-full bg-black p-[5%] pt-[8%]">
                {/*large screen logo*/}
                <div className="hidden md:block">
                    <Logo />
                </div>
                {/*mobile logo*/}
                <div className="block md:hidden">
                    <Logo size={1.4} />
                </div>

                <h3 className="text-lg md:text-xl text-white my-10">
                    Visit Help Center
                </h3>
                <section className="grid grid-cols-1 lg:grid-cols-4 mt-15 gap-y-10">
                    <div>
                        <h4 className="text-white text-xl md:text-2xl mb-4">
                            Company
                        </h4>
                        <ul className="flex flex-col gap-y-5 **:text-sm **:lg:text-md">
                            <li className="">About Us</li>
                            <li className="">Our Offerings</li>
                            <li className="">Newsroom</li>
                            <li className="">Investors</li>
                            <li className="">Blog</li>
                            <li className="">Careers</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white text-xl md:text-2xl mb-4">
                            Products
                        </h4>
                        <ul className="flex flex-col gap-y-5 **:text-sm **:lg:text-md">
                            <li className="">Ride</li>
                            <li className="">Drive</li>
                            <li className="">Eat</li>
                            <li className="">Uber Freights</li>
                            <li className="">Gift Cards</li>
                            <li className="">Uber Health</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white text-xl md:text-2xl mb-4">
                            Global Citizenship
                        </h4>
                        <ul className="flex flex-col gap-y-5 **:text-sm **:lg:text-md">
                            <li className="">Safety</li>
                            <li className="">Sustainability</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white text-xl md:text-2xl mb-4">
                            Travel
                        </h4>
                        <ul className="flex flex-col gap-y-5 **:text-sm **:lg:text-md">
                            <li className="">Reserve</li>
                            <li className="">Airports</li>
                            <li className="">Cities</li>
                        </ul>
                    </div>
                </section>

                <div className="flex flex-col lg:flex-row justify-between w-full">
                    <div className="flex items-center justify-between my-14 w-[82%] lg:w-[41%] h-12">
                        <div className="border border-white w-8 h-8 rounded-full"></div>
                        <div className="border border-white w-8 h-8 rounded-full"></div>
                        <div className="border border-white w-8 h-8 rounded-full"></div>
                        <div className="border border-white w-8 h-8 rounded-full"></div>
                        <div className="border border-white w-8 h-8 rounded-full"></div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-y-4 justify-between w-[16%] **:font-semibold">
                        <button>English</button>
                        <button>Kaduna</button>
                    </div>
                </div>
                <div className="flex  items-center h-25 gap-4">
                    <button
                        className="flex w-40 h-12.5 text-whitep p-0.5 border border-gray-400 
                    rounded-md"
                    >
                        <div className="flex-1"></div>
                        <div className="flex-3">
                            <span className="block text-[0.6rem] md:text-xs m-0 w-full text-left">
                                GET IT ON
                            </span>
                            <span className="block w-full text-left text-lg md:text-xl p-0 m-0">
                                Google Play
                            </span>
                        </div>
                    </button>

                    <button
                        className="flex w-40 h-13.5 text-white p-0.5 border-2 border-gray-400 
                    rounded-md"
                    >
                        <div className="flex-1"></div>
                        <div className="flex-3">
                            <span className="block text-[0.6rem] md:text-xs m-0 w-full text-left">
                                GET IT ON
                            </span>
                            <span className="block w-full text-left text-lg md:text-xl p-0 m-0">
                                App Store
                            </span>
                        </div>
                    </button>
                </div>

                <div className="flex flex-col lg:flex-row gap-y-12 justify-between **:text-xs **:lg:text-sm **:text-gray-400 mt-7">
                    <p>&copy;2025 Uber Technologies Inc.</p>
                    <div className="flex gap-6">
                        <button>Privacy</button>
                        <button>Accessibility</button>
                        <button>Terms</button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
