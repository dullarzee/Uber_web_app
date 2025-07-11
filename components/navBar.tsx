import Logo from "./uberLogo";
export default function NavBar() {
    return (
        <div>
            {/*nav bar for large screens*/}
            <nav
                className="hidden md:flex fixed items-center top-0 left-0 w-full 
            h-18 bg-black px-[5%] gap-x-15 justify-between z-20"
            >
                <div
                    className="flex items-center justify-between sm:w-[50%] lg:w-2/6 h-full **:text-[1.05rem]
                     **:font-normal **:text-white"
                >
                    <Logo />
                    <button className="">Ride</button>
                    <button className="">Drive</button>
                    <button className="">Uber Eats</button>
                    <button className="">About</button>
                </div>

                <div className="flex items-center w-[40%] lg:w-1/4 justify-between">
                    <button>EN</button>
                    <button>Help</button>
                    <button>Sign Up</button>
                    <button className="px-4 py-2 bg-white text-black rounded-full text-lg">
                        Log In
                    </button>
                </div>
            </nav>

            {/*Nav bar for mobile*/}
            <nav
                className="flex md:hidden fixed items-center top-0 left-0 w-full 
                    h-15 bg-black px-[5%] gap-x-15 justify-between z-20"
            >
                <Logo size={1.4} />

                <div className="flex items-center gap-x-3">
                    <button className="text-sm">Sign Up</button>
                    <button className="px-3 py-1.5 bg-white text-black rounded-full text-md">
                        Log In
                    </button>
                    <div className="w-5.5 h-5.5 border border-white"></div>
                </div>
            </nav>
        </div>
    );
}
