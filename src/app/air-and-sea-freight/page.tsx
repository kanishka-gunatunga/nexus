"use client"
import Image from "next/image";
import LinkedinSection from "@/Components/LinkedinSection";
import React, { useEffect, useState } from "react"; // Import useEffect and useState
import Nav from "@/Components/Nav";
import PhotoDescriptionSection from "@/Components/PhotoDescriptionSection";
import HeroTitleAndParagraph from "@/Components/HeroTitleAndParagraph";
import ServiceCardRow from "@/Components/ServiceCardRow";
import Quote from "@/Components/Quote";
import HeroSection from "@/Components/HeroSection";
import { airAndFreightService } from "@/sanity/lib/air-and-freight-service"; // Ensure this path is correct


interface CardSection {
    card_1_title?: string;
    card_1_subtitle?: string;
    card_1_description?: string;
    card_1_button_text?: string;
    card_1_button_link?: string;
    card_1_image?: string;
    card_2_title?: string;
    card_2_subtitle?: string;
    card_2_description?: string;
    card_2_button_text?: string;
    card_2_button_link?: string;
    card_2_image?: string;
    card_3_title?: string;
    card_3_subtitle_1?: string;
    card_3_description_1?: string;
    card_3_subtitle_2?: string;
    card_3_description_2?: string;
    card_3_button_text?: string;
    card_3_button_link?: string;
    card_3_image?: string;
}

interface BottomBanner {
    banner_title?: string;
    button_text?: string;
    button_link?: string;
    image?: string;
    imageAlt?: string;
}

interface AirAndFreightData {
    hero_title?: string;
    heading_title?: string;
    heading_description?: string;
    card_1_section?: CardSection;
    card_2_section?: CardSection;
    card_3_section?: CardSection;
    bottom_banner?: BottomBanner;
}


const AirAndSeaFreight = () => {
    // State to hold the fetched data
    const [pageData, setPageData] = useState<AirAndFreightData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const data = await airAndFreightService();
                
              
                if (data && data.length > 0) {
                    setPageData(data[0]);
                } else {
                    setPageData(null); 
                }
            } catch (err) {
                console.error("Failed to fetch Air & Sea Freight data:", err);
                setError("Failed to load page content.");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []); 

    if (loading) {
        return ;
    }

    if (error) {
        return <div className="min-h-screen flex items-center justify-center text-red-600">{error}</div>;
    }

    if (!pageData) {
        return <div className="min-h-screen flex items-center justify-center">No content available.</div>;
    }

    return (
        <div className="min-h-screen bg-[#F6F6F6] poppins">
            <div className="relative mx-auto block">
                <Nav />
                <HeroSection
                    // Use data from Sanity for hero title
                    title={pageData.hero_title || "Air & Sea Freight Services"}
                    
                    desktopImage="/hero-images/air&sea.svg"
                    mobileImage="/hero_arrow.svg"
                    altText="Air and Sea Freight Hero Image"
                />
            </div>

            <div className="relative top-[-100px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <HeroTitleAndParagraph
                    
                    title={pageData.heading_title || "Air & Sea Freight Services"}
                    paragraph1={pageData.heading_description || "Offering speed, cost-effectiveness, and reliability, our air and sea freight services are built to match your urgency, budget, and cargo complexity. Whether you're racing against a deadline or coordinating large-scale shipments, we deliver precision logistics, reliable tracking, and personal attention."}
                    paragraph2="" 
                />

                {/* Card 1 Section (Air Freight) */}
                {pageData.card_1_section && (
                    <div className="max-w-7xl px-4 sm:px-6 lg:px-8 ">
                        <PhotoDescriptionSection
                            title={pageData.card_1_section.card_1_title || ""}
                            paragraph1={pageData.card_1_section.card_1_description || ""}
                            subtitle1={pageData.card_1_section.card_1_subtitle || ""} 
                            buttonText={pageData.card_1_section.card_1_button_text || ""}
                            buttonLink={pageData.card_1_section.card_1_button_link || ""}
                            imageSrc={pageData.card_1_section.card_1_image || ""}
                            reverse={false}
                           
                            paragraph2=""
                            paragraph3=""
                            subtitle2=""
                        />
                    </div>
                )}

                {/* Card 2 Section (Sea Freight) */}
                {pageData.card_2_section && (
                    <div className="max-w-7xl px-4 sm:px-6 lg:px-8 ">
                        <PhotoDescriptionSection
                            title={pageData.card_2_section.card_2_title || ""}
                            paragraph1={pageData.card_2_section.card_2_description || ""}
                            subtitle1={pageData.card_2_section.card_2_subtitle || ""} 
                            buttonText={pageData.card_2_section.card_2_button_text || ""}
                            buttonLink={pageData.card_2_section.card_2_button_link || ""}
                            imageSrc={pageData.card_2_section.card_2_image || ""}
                            reverse={true}
                           
                            paragraph2=""
                            paragraph3=""
                            subtitle2=""
                        />
                    </div>
                )}

                {/* Card 3 Section (Sea-Air Combination) */}
                {pageData.card_3_section && (
                    <div className="max-w-7xl px-4 sm:px-6 lg:px-8 ">
                        <PhotoDescriptionSection
                            title={pageData.card_3_section.card_3_title || ""}
                            paragraph1={pageData.card_3_section.card_3_description_1 || ""}
                            subtitle1={pageData.card_3_section.card_3_subtitle_1 || ""}
                            subtitle2={pageData.card_3_section.card_3_subtitle_2 || ""}
                            paragraph2={pageData.card_3_section.card_3_description_2 || ""}
                            buttonText={pageData.card_3_section.card_3_button_text || ""}
                            buttonLink={pageData.card_3_section.card_3_button_link || ""}
                            imageSrc={pageData.card_3_section.card_3_image || ""}
                            reverse={false} 
                            paragraph3="" 
                        />
                    </div>
                )}
            </div>

           
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ServiceCardRow />
            </div>

            {/* Bottom Banner */}
            {pageData.bottom_banner && (
                <div className="relative h-64 sm:h-80 lg:h-96 lg:-mt-20 overflow-hidden" style={{ marginTop: '100px' }}>
                    <div className="absolute inset-0">
                        {pageData.bottom_banner.image && (
                            <Image
                                src={pageData.bottom_banner.image}
                                alt={pageData.bottom_banner.imageAlt || "Bottom banner image"}
                                width={1920}
                                height={400}
                                className="w-full h-full object-cover"
                            />
                        )}
                        <div className="absolute inset-0 bg-black/10"></div>
                    </div>

                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col items-center justify-center text-center">
                        <h2 className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-medium text-white mb-4 sm:mb-6 lg:mb-8 leading-tight">
                            {pageData.bottom_banner.banner_title}
                        </h2>
                        {pageData.bottom_banner.button_text && (
                            <button
                                className="bg-[#E8AF30] text-[#282828] px-6 hover:text-white cursor-pointer duration-300 transition sm:px-8 py-1 sm:py-2 text-sm sm:text-base lg:text-base rounded-lg font-normal"
                                onClick={() => {
                                    if (pageData.bottom_banner?.button_link) {
                                        window.location.href = pageData.bottom_banner.button_link;
                                    }
                                }}
                            >
                                {pageData.bottom_banner.button_text}
                            </button>
                        )}
                    </div>
                </div>
            )}
            <Quote />
            <div className="py-6 lg:py-12">
                <LinkedinSection />
            </div>
        </div>
    );
}

export default AirAndSeaFreight;