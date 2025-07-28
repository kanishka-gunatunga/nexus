"use client";
import Image from "next/image";
import Nav from "@/Components/Nav";
import React, { useEffect, useState } from "react";
import LinkedinSection from "@/Components/LinkedinSection";
import { insights } from "@/sanity/lib/insights";

interface insightData {
    heroTitle?: string;
    Page_subtitle?: string;
    main_post?: {
        postTitle?: string;
        Post_short_description?: string;
        postContent?: string;
        slug?: string;
        postImage?: string;
    };

    main_post_button_text?: string;
    right_section_post_1?: {
        postTitle?: string;
        Post_short_description?: string;
        postContent?: string;
        slug?: string;
        postImage?: string;
    };

    right_section_post_2?: {
        postTitle?: string;
        Post_short_description?: string;
        postContent?: string;
        slug?: string;
        postImage?: string;
    };

    latest_insights_title?: {
        postTitle?: string;
        Post_short_description?: string;
        postContent?: string;
        slug?: string;
        postImage?: string;
    }[];

    trending_insights_title?: {
        postTitle?: string;
        Post_short_description?: string;
        postContent?: string;
        slug?: string;
        postImage?: string;
    }[];
}

const InsightInner = () => {

    const [pageData, setPageData] = useState<insightData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const data = await insights();


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
        return;
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
                <div id="hero-section"
                    className="relative mx-auto -top-10 lg:-top-30 max-w-screen-4xl z-30">
                    <div className="relative w-full h-[200px] sm:h-[250px] md:h-[400px] lg:h-[450px] xl:h-[500px]">
                        <Image
                            src="/insights-banner.svg"
                            alt="Nexus X Logo"
                            width={1000}
                            height={400}
                            className="w-full h-full object-cover absolute inset-0"
                        />
                        <div className="absolute inset-0 flex items-center left-10 lg:left-60 justify-start">
                            <div className="text-left px-4">
                                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-normal text-[#0F2043] uppercase">
                                    INSIGHTS
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            <div className="container relative -top-22 lg:-top-50 mx-auto px-8 py-8 lg:py-12 max-w-7xl">
                {/* Hero Section */}
                <div className="space-y-6 lg:space-y-8">
                    {/* Main Title */}
                    <h1 className="text-[#162F65] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[50px] leading-tight lg:leading-[60px] tracking-[1.65px] max-w-md lg:max-w-lg">
                        Smart Ports and Automation
                    </h1>

                    {/* Subtitle */}
                    <p className="text-[#162F65] text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed lg:leading-[32px] font-medium max-w-5xl">
                        Stay ahead with expert opinions, market updates, and actionable
                        insights designed to drive smarter supply chain decisions.
                    </p>

                    {/* Hero Image */}
                    <div className="w-full max-w-5xl">
                        <Image
                            src="/insights/truck.png"
                            alt="Truck on coastal highway representing smart logistics and automation"
                            width={600}
                            height={400}
                            className="w-full h-auto rounded-[10px] object-cover aspect-[2/1]"
                        />
                    </div>
                </div>

                {/* Content Section */}
                <div className="mt-12 lg:mt-16 space-y-6 lg:space-y-8">
                    <div className="prose prose-lg max-w-none">
                        <p className="text-[#000000] text-sm sm:text-base lg:text-lg leading-relaxed lg:leading-relaxed mb-6">
                            Pellentesque sit amet volutpat urna. Aenean non pulvinar turpis,
                            eu lacinia justo. Ut aliquam ex a nisi dignissim, quis lobortis
                            tellus commodo. Nam semper sapien sit amet nisl rutrum, eu
                            volutpat diam vestibulum. Donec suscipit bibendum suscipit. Sed
                            condimentum nulla non convallis fringilla. Nam ut condimentum
                            eros. Integer finibus odio sem, ac fermentum erat placerat vitae.
                            Donec convallis mollis augue, in rhoncus metus dictum eu. Nunc eu
                            rhoncus arcu. Aenean malesuada tortor sit amet leo pulvinar
                            elementum.
                        </p>

                        <p className="text-[#000000] text-sm sm:text-base lg:text-lg leading-relaxed lg:leading-relaxed mb-6">
                            Sed ac leo sed metus dignissim semper sit amet sed augue. Integer
                            ligula quam, lacinia ut quam cursus, aliquam placerat tellus.
                            Pellentesque id nisl nec nisl interdum tincidunt id in libero.
                            Mauris est turpis, venenatis eu hendrerit sed, rhoncus vel quam.
                            Mauris ac orci vestibulum, tincidunt turpis et, condimentum justo.
                            Maecenas ut tempus lectus. Curabitur quis enim a turpis iaculis
                            varius. Duis auctor vestibulum tempus. Nunc fermentum, nulla non
                            varius finibus, libero elit vehicula nibh, a feugiat justo mauris
                            sit amet justo. Maecenas at neque nisl. Proin et sem id nibh
                            lobortis pellentesque. Donec fermentum tempor ante eget vulputate.
                        </p>

                        <p className="text-[#000000] text-sm sm:text-base lg:text-lg leading-relaxed lg:leading-relaxed mb-6">
                            Sed ac leo sed metus dignissim semper sit amet sed augue. Integer
                            ligula quam, lacinia ut quam cursus, aliquam placerat tellus.
                            Pellentesque id nisl nec nisl interdum tincidunt id in libero.
                            Mauris est turpis, venenatis eu hendrerit sed, rhoncus vel quam.
                            Mauris ac orci vestibulum, tincidunt turpis et, condimentum justo.
                            Maecenas ut tempus lectus. Curabitur quis enim a turpis iaculis
                            varius. Duis auctor vestibulum tempus. Nunc fermentum, nulla non
                            varius finibus, libero elit vehicula nibh, a feugiat justo mauris
                            sit amet justo. Maecenas at neque nisl. Proin et sem id nibh
                            lobortis pellentesque. Donec fermentum tempor ante eget vulputate.
                        </p>
                    </div>
                </div>

                {/* Related Insights Section */}
                <div className="mt-16 lg:mt-20">
                    <h2 className="text-[#162F65] text-base sm:text-lg lg:text-xl leading-relaxed lg:leading-[32px] font-normal mb-8 lg:mb-12">
                        This Insights may also be of interest to you.
                    </h2>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4">
                        {[1, 2, 3, 4].map((index) => (
                            <div key={index} className="relative group">
                                <div className="relative w-full h-44 rounded-[10px] overflow-hidden">
                                    <Image
                                        src="/insights/van.png"
                                        alt="Eco Freight logistics"
                                        width={600}
                                        height={600}
                                        className="w-full h-full object-cover"
                                    />


                                    {/* Text Overlay */}
                                    <div className="absolute inset-0">
                                        <div
                                            className="absolute bg-gradient-to-t from-[#002B64] to-[#00255700] inset-0" />
                                        <div className="absolute bottom-9 left-6 right-6">
                                            <h3 className="text-white font-bold text-sm lg:text-base leading-normal tracking-[0.6px]">
                                                Eco Freight
                                            </h3>
                                            <p className="text-white text-[10px] leading-[12px] mb-4">
                                                Sustainability is now a key focus in logistics. Electric trucks low-emission ships, and green warehouse practices are helping Australia move toward cleaner cargo operations.
                                            </p>
                                        </div>

                                        {/* Read More Button */}
                                        <div className="absolute bottom-4 left-6">
                                            <button
                                                className="bg-white text-[#162F65] px-3 py-1.5 rounded-[10px] text-xs font-medium hover:scale-105 transition-all duration-300">
                                                Read More
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="-mt-15 lg:-mt-50">
                <LinkedinSection />
            </div>

        </div>
    );
}

export default InsightInner;