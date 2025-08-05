
import Image from "next/image";
import LinkedinSection from "@/Components/LinkedinSection";
import React from "react";
import Nav from "@/Components/Nav";
import PhotoDescriptionSection from "@/Components/PhotoDescriptionSection";
import HeroTitleAndParagraph from "@/Components/HeroTitleAndParagraph";
import ServiceCardRow from "@/Components/ServiceCardRow";
import Quote from "@/Components/Quote";
import HeroSection from "@/Components/HeroSection";
import { getAirAndFreightServiceData } from "@/sanity/lib/api";
import { urlFor } from "../../../client";
import { Metadata } from "next";
import { Link } from "lucide-react";

// interface CardSection {
//     card_1_title?: string;
//     card_1_subtitle?: string;
//     card_1_description?: string;
//     card_1_button_text?: string;
//     card_1_button_link?: string;
//     card_1_image?: string;
//     card_2_title?: string;
//     card_2_subtitle?: string;
//     card_2_description?: string;
//     card_2_button_text?: string;
//     card_2_button_link?: string;
//     card_2_image?: string;
//     card_3_title?: string;
//     card_3_subtitle_1?: string;
//     card_3_description_1?: string;
//     card_3_subtitle_2?: string;
//     card_3_description_2?: string;
//     card_3_button_text?: string;
//     card_3_button_link?: string;
//     card_3_image?: string;
// }

// interface SEOData {
//     page?: string;
//     title?: string;
//     description?: string;
//     keywords?: string[];
//     ogTitle?: string;
//     ogDescription?: string;
//     ogImage?: any; // Sanity image object
//     canonicalUrl?: string;
// }

// interface BottomBanner {
//     banner_title?: string;
//     button_text?: string;
//     button_link?: string;
//     image?: string;
//     imageAlt?: string;
// }

// interface HeroSection {
//     heroTitle?: string;
//     heroImage?: string;
// }

// interface AirAndFreightData {
//     hero_section?: HeroSection;
//     heading_title?: string;
//     heading_description?: string;
//     card_1_section?: CardSection;
//     card_2_section?: CardSection;
//     card_3_section?: CardSection;
//     bottom_banner?: BottomBanner;
//     seo?: SEOData; // Add SEO data to the interface
// }

const AirAndSeaFreight = async () => {
    // State to hold the fetched data
    // const [pageData, setPageData] = useState<AirAndFreightData | null>(null);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState<string | null>(null);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             setLoading(true);
    //             const data = await airAndFreightService();

    //             if (data && data.length > 0) {
    //                 setPageData(data[0]);
    //             } else {
    //                 setPageData(null);
    //             }
    //         } catch (err) {
    //             console.error("Failed to fetch Air & Sea Freight data:", err);
    //             setError("Failed to load page content.");
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     fetchData();
    // }, []);

    // if (loading) {
    //     return (
    //         <div className="min-h-screen flex items-center justify-center">
    //             <div className="text-lg">Loading...</div>
    //         </div>
    //     );
    // }

    // if (error) {
    //     return <div className="min-h-screen flex items-center justify-center text-red-600">{error}</div>;
    // }

    // if (!pageData) {
    //     return <div className="min-h-screen flex items-center justify-center">No content available.</div>;
    // }

    const pageData = await getAirAndFreightServiceData();

    if (!pageData) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-lg">No content available.</div>
            </div>
        );
    }



    return (
        <div className="min-h-screen bg-[#F6F6F6] poppins">
            <div className="relative mx-auto block">
                <Nav />
                <HeroSection
                    title={pageData.hero_section?.heroTitle || "Air & Sea Freight Services"}
                    desktopImage={pageData.hero_section?.heroImage || "/hero-images/air&sea.svg"}
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
                            <Link href={pageData.bottom_banner.button_link || "#"} >
                            <button
                                className="bg-[#E8AF30] text-[#282828] px-6 hover:text-white cursor-pointer duration-300 transition sm:px-8 py-1 sm:py-2 text-sm sm:text-base lg:text-base rounded-lg font-normal"
                                // onClick={() => {
                                //     if (pageData.bottom_banner?.button_link) {
                                //         window.location.href = pageData.bottom_banner.button_link;
                                //     }
                                // }}
                            >
                                {/* {pageData.bottom_banner.button_text} */} hii
                            </button>
                            </Link>
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

// export async function generateMetadata(): Promise<Metadata> {
//     try {
//         const pageData: AirAndFreightData[] = await airAndFreightService();
//         const seoData = pageData.length > 0 ? pageData[0].seo : null;

//         // Define fallback values for SEO in case Sanity data is missing
//         const defaultTitle = "Air & Sea Freight Services - Your Company Name";
//         const defaultDescription = "Our air and sea freight services offer speed, reliability, and cost-effectiveness for all your logistics needs. We handle cargo of any size with precision and care.";
//         const defaultKeywords = ["air freight", "sea freight", "ocean cargo", "freight forwarding", "logistics", "shipping", "international shipping", "cargo services"];
//         const defaultOgImage = "/path/to/your/default-og-image.jpg";
//         const defaultCanonicalUrl = "https://yourwebsite.com/air-and-sea-freight";

//         return {
//             title: seoData?.title || defaultTitle,
//             description: seoData?.description || defaultDescription,
//             keywords: seoData?.keywords || defaultKeywords,
//             openGraph: {
//                 title: seoData?.ogTitle || seoData?.title || defaultTitle,
//                 description: seoData?.ogDescription || seoData?.description || defaultDescription,
//                 images: seoData?.ogImage ? [urlFor(seoData.ogImage).url()] : [defaultOgImage],
//                 url: seoData?.canonicalUrl || defaultCanonicalUrl,
//                 type: "website",
//             },
//             alternates: {
//                 canonical: seoData?.canonicalUrl || defaultCanonicalUrl,
//             },
//         };
//     } catch (error) {
//         console.error("Error generating metadata:", error);
        
//         // Return fallback metadata if there's an error
//         return {
//             title: "Air & Sea Freight Services - Your Company Name",
//             description: "Our air and sea freight services offer speed, reliability, and cost-effectiveness for all your logistics needs.",
//             keywords: ["air freight", "sea freight", "logistics", "shipping"],
//         };
//     }
// }