import Image from "next/image";
import { FaRocket } from "react-icons/fa6";

const Hero = () => {
    return (
        <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-12 lg:py-20 mb-12 lg:mb-24 w-full">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">

                {/* Left Content */}
                <div className="flex flex-col items-start text-left max-w-7xl mx-auto px-6">
                    {/* Headline */}
                    <h1 className="font-display text-[60px] font-normal leading-[1.2] tracking-normal text-gray-900 uppercase">
                        TURN YOUR <br />
                        SCREEN TIME <br />
                        INTO <span className="inline-block bg-[linear-gradient(91.05deg,#2C6975_0.24%,#68B2A0_100%)] bg-clip-text text-transparent">REAL VALUE</span>
                    </h1>

                    {/* Subtext */}
                    <p className="mt-1 text-gray-500 w-full font-medium text-[24px] leading-[1.2] tracking-normal">
                        Watch reels, earn real coins, and trade creator tokens BingMine lets you grow with the creators you believe in.
                    </p>

                    {/* CTA */}
                    <button className="mt-10 group inline-flex items-center justify-center gap-[10px] rounded-[20px] bg-[linear-gradient(91.05deg,#2C6975_0.24%,#68B2A0_100%)] w-[250px] h-[60px] p-[10px] text-white font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">
                        Coming Soon
                        <FaRocket className="text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </button>
                </div>

                {/* Right Phone */}
                <div className="flex-1 w-full flex justify-center lg:justify-end relative mt-12 lg:mt-0 lg:-translate-x-6">
                    <div className="relative w-[408px] h-[680px]">
                        <div className="relative w-full h-full transition-transform duration-700 ease-out cursor-pointer">
                            <Image
                                src="/assets/phone-mockup.png"
                                alt="BingMine App Interface"
                                fill
                                priority
                                className="object-contain drop-shadow-xl"
                                sizes="(max-width: 768px) 100vw, 408px"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
