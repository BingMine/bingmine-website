import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="w-full">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-6">
                <div className="flex items-center justify-between">

                    {/* LEFT: Logo */}
                    <Link href="/" className="flex items-center">
                        <div className="relative h-16 w-56">
                            <Image
                                src="/assets/logo.png"
                                alt="BingMine Logo"
                                fill
                                priority
                                className="object-contain object-left"
                            />
                        </div>
                    </Link>

                    {/* CENTER: Nav Links */}
                    <div className="hidden lg:flex items-center gap-12 text-gray-700 text-lg font-semibold">
                        <Link href="#" className="hover:text-brand-primary transition">
                            Home
                        </Link>
                        <Link href="#" className="hover:text-brand-primary transition">
                            Feature
                        </Link>
                        <Link href="#" className="hover:text-brand-primary transition">
                            Product
                        </Link>
                        <Link href="#" className="hover:text-brand-primary transition">
                            FAQ
                        </Link>
                    </div>

                    {/* RIGHT: Auth Buttons */}
                    <div className="hidden sm:flex items-center gap-4">
                        <button
                            className="flex items-center justify-center w-[100px] h-[50px] gap-[10px] rounded-[20px] text-gray-700 font-medium transition hover:opacity-80"
                            style={{
                                background: "linear-gradient(#fff, #fff) padding-box, linear-gradient(91.05deg, #2C6975 0.24%, #68B2A0 100%) border-box",
                                border: "1px solid transparent",
                            }}
                        >
                            Login
                        </button>
                        <button className="flex items-center justify-center w-[100px] h-[50px] gap-[10px] rounded-[20px] bg-[linear-gradient(91.05deg,#2C6975_0.24%,#68B2A0_100%)] text-white font-medium hover:opacity-90 transition">
                            Sign up
                        </button>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
