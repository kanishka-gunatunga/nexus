"use client"
import Image from "next/image";
import LinkedinSection from "@/Components/LinkedinSection";
import React from "react";
// import Link from "next/link";
import Nav from "@/Components/Nav";
import PhotoDescriptionSection from "@/Components/PhotoDescriptionSection";
import HeroTitleAndParagraph from "@/Components/HeroTitleAndParagraph";
import ServiceCardRow from "@/Components/ServiceCardRow";
import Quote from "@/Components/Quote";
import HeroSection from "@/Components/HeroSection";
// import { airAndFreightService } from "@/sanity/lib/air-and-freight-service";
// import { useEffect, useState } from "react";



const AirAndSeaFreight = () => {

    // interface Section {
    //     _type: string;
    //     title: string;
    //     paragraph1: string;
    //     paragraph2: string;
    //     paragraph3: string;
    //     subtitle: string;
    //     buttonText: string;
    //     buttonLink: string;
    //     image: {
    //         asset?: {
    //             _id: string;
    //             url: string;
    //         };
    //     };
    //     imageAlt: string;
    //     reverseOrder: boolean;
    // }

    // interface AirAndFreightServiceData {
    //     title: string;
    //     sections: Section[];
    // }
    // const [data, setData] = useState<AirAndFreightServiceData[] | null>(null);


    // useEffect(() => {
    //     airAndFreightService().then((res) => {
    //         console.log("Air and Sea Freight Data:", res)
    //         setData(res)
    //     })
    // }, [])

    // const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#F6F6F6] poppins">
            <div className="relative mx-auto block">

                <Nav />
                <HeroSection 
  title="Air & Sea Freight Services"
  desktopImage="/hero-images/air&sea.svg"
  mobileImage="/hero_arrow.svg"
  altText="Air and Sea Freight Hero Image"
/>

            </div>

            <div className="relative top-[-100px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <HeroTitleAndParagraph
                    title="Air & Sea Freight Services"
                    paragraph1="Offering speed, cost-effectiveness, and reliability, our air and sea freight services are built to match your urgency, budget, and cargo complexity. Whether you're racing against a deadline or coordinating large-scale shipments, we deliver precision logistics, reliable tracking, and personal attention."
                    paragraph2=""
                />

                {/* {data?.map((page, pageIndex) => (
                    <div key={pageIndex}>
                       

                        {page.sections.map((section, sectionIndex) => {
                            if (!section) return null;
                            if (section._type === "photoDescriptionSection") {
                                return (
                                    <PhotoDescriptionSection
                                        key={sectionIndex}
                                        title={section.title}
                                        paragraph1={section.paragraph1}
                                        paragraph2={section.paragraph2}
                                        paragraph3={section.paragraph3}
                                        subtitle1={section.subtitle}
                                        buttonText={section.buttonText}
                                        buttonLink={section.buttonLink}
                                        imageSrc={section.image?.asset?.url || ''}
                                        imageAlt={section.imageAlt}
                                        reverse={section.reverseOrder ?? false}
                                    />
                                );
                            }

                            return null;
                        })}
                    </div>
                ))} */}


                <div className="max-w-7xl px-4 sm:px-6 lg:px-8 ">
                    <PhotoDescriptionSection
                        title="Air Freight Services"
                        paragraph1="When time is critical, our air freight solutions move your cargo reliably. We tap into a global network of carriers and charter options, ensuring capacity even during peak congestion. You'll have end-to-end visibility from pickup to final delivery - no guesswork, no last-minute rate spikes"
                        subtitle2="Think air freight is always expensive?"
                        subtitle1=""
                        paragraph2="Our experts optimise routes, consolidate compatible loads, and negotiate directly with airlines, so we can secure air freight at rates that keep your margins intact."
                        paragraph3=""
                        buttonText="Book Air Freight"
                        buttonLink="/air-freight-quote"
                        imageSrc="/services/airplaneservice (2).png"
                        reverse={false}
                    />
                </div>


                
                <div className="max-w-7xl px-4 sm:px-6 lg:px-8 ">
                    <PhotoDescriptionSection
                        title="Sea Freight Services"
                        paragraph1="Our sea freight services are engineered for businesses moving volume across borders, without compromising control. Whether you need FCL, LCL, or break-bulk, we offer consistent scheduling, locked-in rates, and transparent coordination - all backed by powerful systems, efficient tracking, and on-ground expertise."
                        subtitle2="Our networks provide better pricing..."
                        subtitle1=""
                        paragraph2="What matters is strength at destination. Nexus Logix partners with leading global agents who deliver superior pricing, consistent transit times, and hands-on shipment tracking, without passing on inflated overheads - and that's a cost benefit for you."
                        paragraph3=""
                        buttonText="Book Sea Freight"
                        buttonLink="/sea-freight-quote"
                        imageSrc="/services/seafrieght.png"
                        reverse={true}
                    />
                </div>



                
                <div className="max-w-7xl px-4 sm:px-6 lg:px-8 ">
                    <PhotoDescriptionSection
                        title="Sea-Air Combination"
                        paragraph1="For shipments that can't justify full air freight costs but can't afford full sea timelines, our sea-air hybrid options provide a strategic alternative. We ship to a transhipment hub via sea, then fly the cargo to its final destination, slashing lead times but without high air freight premiums."
                        subtitle2="You don't have to choose between slow and expensive..."
                        subtitle1="Faster than sea, cheaper than air."
                        paragraph2="You can choose efficient instead. With smart planning, our sea-air options give you the best of both worlds; cost savings and time efficiency - all tailored to your specific delivery window."
                        paragraph3=""
                        buttonText="Explore Sea-Air Options"
                        buttonLink="/air-freight-quote"
                        imageSrc="/services/sea-air.png"
                        reverse={false}
                    />
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ServiceCardRow />
            </div>

            <div className="relative h-64 sm:h-80 lg:h-96 lg:-mt-20 overflow-hidden" style={{ marginTop: '100px' }}>
                <div className="absolute inset-0">
                    <Image
                        src="/sea-bottom-banner (2).svg"
                        alt="Airport"
                        width={1000}
                        height={400}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10"></div>
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

export default AirAndSeaFreight;
