import Image from "next/image";
import { FaRocket } from "react-icons/fa6";

const Hero = () => {
    return (
        <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-8 lg:py-20 mb-12 lg:mb-24 w-full overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

                {/* Left Content */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-1/2">
                    {/* Headline */}
                    <h1 className="font-display text-4xl sm:text-5xl lg:text-[56px] font-normal leading-[1.1] sm:leading-[1.2] tracking-normal text-gray-900 uppercase">
                        TURN YOUR <br className="hidden sm:block" />
                        SCREEN TIME <br className="hidden sm:block" />
                        INTO <span className="inline-block bg-[linear-gradient(91.05deg,#2C6975_0.24%,#68B2A0_100%)] bg-clip-text text-transparent">REAL VALUE</span>
                    </h1>

                    {/* Subtext */}
                    <p className="mt-4 sm:mt-6 text-gray-500 w-full font-medium text-lg sm:text-xl lg:text-[24px] leading-relaxed lg:leading-[1.2] tracking-normal max-w-lg lg:max-w-none">
                        Watch reels, earn real coins, and trade creator tokens BingMine lets you grow with the creators you believe in.
                    </p>

                    {/* CTA */}
                    <button className="mt-8 lg:mt-10 group inline-flex items-center justify-center gap-[10px] rounded-[20px] bg-[linear-gradient(91.05deg,#2C6975_0.24%,#68B2A0_100%)] w-full sm:w-[250px] h-[60px] p-[10px] text-white font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">
                        Coming Soon
                        <FaRocket className="text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </button>
                </div>

                {/* Right Phone */}
                <div className="flex-1 w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
                    <div className="relative w-full max-w-[320px] sm:max-w-[408px]">
                        <Image
                            src="/assets/phone-mockup.png"
                            alt="BingMine App Interface"
                            width={408}
                            height={680}
                            priority
                            className="w-full h-auto object-contain drop-shadow-xl"
                            sizes="(max-width: 640px) 320px, (max-width: 1024px) 408px, 408px"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
