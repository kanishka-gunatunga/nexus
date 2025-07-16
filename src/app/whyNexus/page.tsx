"use client"
import Image from "next/image";
import LinkedinSection from "@/Components/LinkedinSection";
import React from "react";
// import Link from "next/link";
import Nav from "@/Components/Nav";
// import PhotoDescriptionSection from "@/Components/PhotoDescriptionSection";
// import HeroTitleAndParagraph from "@/Components/HeroTitleAndParagraph";
import ServiceCardRow from "@/Components/ServiceCardRow";
import Quote from "@/Components/Quote";



const airAndSeaFreight = () => {

    // const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#F6F6F6] poppins">
            <div className="relative max-w-7xl mx-auto block">

                <Nav />

                <div id="hero-section"
                    className="relative mx-auto -top-10 lg:-top-30 max-w-screen-4xl z-30">
                    <div className="relative w-full h-[200px] sm:h-[250px] md:h-[400px] lg:h-[450px] xl:h-[500px]">
                        <Image
                            src="/lead-banner.png"
                            alt="Nexus X Logo"
                            width={1000}
                            height={400}
                            className="w-full h-full object-cover absolute inset-0"
                        />
                        <div className="absolute inset-0 flex items-center left-10 lg:left-60 justify-start">
                            <div className="text-left px-4">
                                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-normal text-[#0F2043] uppercase">
                                    Why Nexus
                                </h1>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="relative top-[-100px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="bg-transparent px-4 py-6 md:py-10 flex flex-col lg:flex-row gap-6 items-center lg:items-end">
                    {/* Image Section */}
                    <div className="w-full lg:w-[30%] flex justify-center">
                        <Image
                            src="/why-nexus.png"
                            alt="Nexus X Logo"
                            width={620}
                            height={460}
                            className="rounded-[10px] px-4 lg:px-0 max-w-full lg:max-w-[435px] h-auto lg:max-h-[420px] object-cover"
                        />
                    </div>
                    {/* Text Section */}
                    <div className="w-full lg:w-[70%] flex flex-col justify-center">
                        <h2 className="mb-4 font-bold text-[55px] leading-[1.1] text-[#162F65] font-poppins">
                            History &
                        </h2>

                        <h2 className="mb-4 font-bold text-[55px] leading-[1.1] text-[#162F65] font-poppins">
                            Inspiration
                        </h2>
                        <p
                            className="text-[16px] text-[#676767] font-poppins font-medium text-justify sm:text-left"
                        >
                            Nexus Logix is an Australian freight forwarder and logistics provider, headquartered in Brisbane. Founded by a group of seasoned industry professionals who recognised an opportunity to blend deep regional knowledge with modern systems and global networks, Nexus Logix operates akin to a finely tuned Fl pit crew supporting -customers as they race ahead towards their goals. From day one, our mission has been clear: to be the steadfast partner that understands your business needs and moves your cargo with precision and care.
                        </p>

                    </div>
                </div>

                {/* <Image src="/plane1.png" alt="Nexus X Logo" width={1000} height={400} className="w-full h-full object-cover absolute inset-0" />

                <HeroTitleAndParagraph
                    title="Air & Sea Freight Services"
                    paragraph1="Offering speed, cost-effectiveness, and reliability, our air and sea freight services are built to match your urgency, budget, and cargo complexity. Whether you're racing against a deadline or coordinating large-scale shipments, we deliver precision logistics, reliable tracking, and personal attention."
                    paragraph2=""
                /> */}


            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ServiceCardRow />
            </div>

            <div className="relative h-64 sm:h-80 lg:h-96 lg:-mt-20 overflow-hidden" style={{ marginTop: '100px' }}>
                <div className="absolute inset-0">
                    <Image
                        src="/services/sea-bottom-banner.png"
                        alt="Airport"
                        width={1000}
                        height={400}
                        className="w-full h-full object-cover"
                    />

                </div>

                <div
                    className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col items-center justify-center text-center">
                    <h2 className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-medium text-white mb-4 sm:mb-6 lg:mb-8 leading-tight">
                        Australian Expertise,
                        <br />
                        Global Strength
                    </h2>
                    <button
                        className="bg-[#E8AF30] text-[#282828] px-6 hover:text-white cursor-pointer duration-300 transition sm:px-8 py-1 sm:py-2 text-sm sm:text-base lg:text-base rounded-lg font-normal">
                        Why Nexus
                    </button>
                </div>

                {/*<div*/}
                {/*    className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-8 text-white text-sm sm:text-base lg:text-lg font-light">*/}
                {/*    Sydney Airport*/}
                {/*</div>*/}
            </div>
            <Quote />
            <div className="py-6 lg:py-12">
                <LinkedinSection />
            </div>
        </div>
    );
}

export default airAndSeaFreight;
