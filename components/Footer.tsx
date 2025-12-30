import Link from "next/link";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-[#141414] border-t border-gray-800 mt-auto">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-8 flex flex-col gap-8">

                {/* Top Section */}
                <div className="flex flex-col sm:flex-row justify-between items-start gap-10">

                    {/* Contact */}
                    <div className="flex flex-col gap-2">
                        <h3 className="font-semibold text-white text-lg">
                            Contact Us
                        </h3>
                        <p className="text-gray-400">
                            Email:{" "}
                            <a
                                href="mailto:contact@bingmine.in"
                                className="hover:text-brand-primary transition-colors text-gray-300"
                            >
                                teambm@bingmine.com
                            </a>
                        </p>
                    </div>

                    {/* Socials */}
                    <div className="flex flex-col gap-2 sm:items-end">
                        <h3 className="font-semibold text-white text-lg">
                            Follow us
                        </h3>
                        <div className="flex gap-4">
                            <Link
                                href="#"
                                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition text-pink-500"
                            >
                                <FaInstagram size={20} />
                            </Link>
                            <Link
                                href="#"
                                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition text-white"
                            >
                                <FaXTwitter size={20} />
                            </Link>
                            <Link
                                href="#"
                                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition text-blue-500"
                            >
                                <FaLinkedin size={20} />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">

                    <div className="flex gap-4 flex-wrap justify-center md:justify-start">
                        <Link href="#" className="hover:text-white transition">
                            Terms & Service
                        </Link>
                        <span className="text-gray-700">|</span>
                        <Link href="#" className="hover:text-white transition">
                            Privacy Policy
                        </Link>
                        <span className="text-gray-700">|</span>
                        <Link href="#" className="hover:text-white transition">
                            Cookie Policy
                        </Link>
                    </div>

                    <div className="text-center md:text-right text-gray-400">
                        © 2025, BingMine Pvt. Ltd. All Rights Reserved.
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
