"use client"
import Image from "next/image";
import LinkedinSection from "@/Components/LinkedinSection";
import React from "react";
// import Link from "next/link";
import Nav from "@/Components/Nav";
import ServiceCardRow from "@/Components/ServiceCardRow";
import Quote from "@/Components/Quote";



import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';



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

                {/* cards */}

                <div className="flex flex-col sm:flex-row justify-between gap-4 my-8 px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-lg shadow p-5 sm:p-6 md:p-8   flex-1">
                        <h3 className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-semibold text-[#162F65] mb-2">
                            Delightful Service
                        </h3>
                        <p className="text-[16px] sm:text-[18px] md:text-[20px] text-[#676767] font-poppins font-medium">
                            Transparent, genuine care that puts you first
                        </p>
                    </div>
                    <div className="bg-white rounded-lg shadow p-5 sm:p-6 md:p-8  flex-1">
                        <h3 className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-semibold text-[#162F65] mb-2">
                            Competitive Pricing
                        </h3>
                        <p className="text-[16px] sm:text-[18px] md:text-[20px] text-[#676767] font-poppins font-medium">
                            Through strong global networks
                        </p>
                    </div>
                    <div className="bg-white rounded-lg shadow p-5 sm:p-6 md:p-8   flex-1">
                        <h3 className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-semibold text-[#162F65] mb-2">
                            Local Expertise
                        </h3>
                        <p className="text-[16px] sm:text-[18px] md:text-[20px] text-[#676767] font-poppins font-medium">
                            Team with 25 years of Local Experience
                        </p>
                    </div>
                </div>


                {/* second row */}
                <div className="flex flex-col sm:flex-row justify-between gap-4 my-8 px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-lg shadow p-5 sm:p-6 md:p-8 w-full max-w-[22rem] sm:w-[100%] flex-1">
                        <h3 className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-semibold text-[#162F65] mb-2">
                            Real Time Visibility
                        </h3>
                        <p className="text-[16px] sm:text-[18px] md:text-[20px] text-[#676767] font-poppins font-medium">
                            Track every shipment with CargoWise Neo.
                        </p>
                    </div>

                    <div className="bg-[#162F65] rounded-lg shadow p-5 sm:p-6 md:p-8 w-full sm:w-[100%] w-full max-w-full flex-1 ">
                        <h3 className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-semibold text-white mb-2">
                            Sustainability
                        </h3>

                        <span className="text-[16px] sm:text-[18px] md:text-[20px] text-gray-300">
                            Track
                        </span>
                        <span className="mx-1"></span>

                        <span className="text-[16px] sm:text-[18px] md:text-[20px] text-[#5DF706] ">
                            Co2
                        </span>
                        <span className="mx-1"></span>
                        <span className="text-[16px] sm:text-[18px] md:text-[20px] text-gray-300">
                            emission of every shipment with CargoWise Neo.
                        </span>
                    </div>

                    <div className="bg-white rounded-lg shadow p-5 sm:p-6 md:p-8  flex-1 w-full sm:w-[100%]">
                        <h3 className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-semibold text-[#162F65] mb-2">
                            Supply Chain Audits
                        </h3>
                        <p className="text-[16px] sm:text-[18px] md:text-[20px] text-[#676767] font-poppins font-medium">
                            Identify gaps, cut costs, improve performance.
                        </p>
                    </div>
                </div>



                {/* third row */}
                <div className="my-8 gap-4 flex flex-wrap justify-center px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-lg shadow px-5 py-2  w-full flex-1 lg:flex lg:flex-row items-center justify-start gap-[5rem]">
                        <h3 className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-semibold text-[#162F65]">
                            Powered by CargoWise
                        </h3>
                        <p className="text-[16px] sm:text-[18px] md:text-[20px] text-[#676767] font-poppins font-medium">
                            Manage Your Supply Chain with the Worlds Most trusted ERP
                        </p>
                    </div>
                </div>




            </div>


            <div className="w-full bg-[#0F2043] relative flex min-h-[600px] sm:min-h-0 md:min-h-[400px]">
                <div className="w-full flex">
                    <Image
                        src={"/x-croped.png"}
                        alt="Nexus X Logo"
                        width={1000}
                        height={400}
                        className="lg:max-w-[400px] lg:max-h-[400px] w-full md:h-[400px] object-contain opacity-10"
                    />
                </div>

                <div className="absolute inset-0 flex items-center z-10 justify-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:pl-[190px] lg:pl-8  flex flex-col lg:flex-row justify-between items-center gap-8">
                        {/* Heading Section */}
                        <div className="flex flex-col mb-4 text-center lg:text-left w-full lg:w-1/3  mr:[0] lg:mr-[60px] ">
                            <h2
                                className="text-white font-poppins font-semibold text-[55px] leading-tight font-poppins"
                            >
                                Vision &amp;
                            </h2>
                            <h2 className="text-white font-poppins font-semibold text-[55px] leading-tight font-poppins">
                                Achievements
                            </h2>
                        </div>
                        {/* Text Section */}
                        <div className="flex flex-col mb-4 w-full lg:w-2/3 px-4">
                            <p className="text-white text-[18px] font-normal font-poppins text-justify" style={{ fontStyle: "normal" }}>
                                Driven by an ambition to simplify the complexities of global freight, we have dedicated ourselves to delivering a service that is both personal and agile. Over nearly three decades, our people's reputation for reliability and innovation has enabled us to serve importers, exporters, and supply chain managers across Australia, New Zealand, and the wider Asia-Pacific region. Just as a race car relies on every component for peak performance, we ensure every shipment is managed flawlessly – allowing you to focus on the finish line.
                            </p>
                        </div>
                    </div>
                </div>
            </div>







            <div className="max-w-7xl mx-auto block mt-10 px-4 sm:px-6 lg:px-8">
                <Image
                    src={"/nexus-core.svg"}
                    alt="Nexus X Logo"
                    width={1000}
                    height={400}
                    className="w-full h-auto object-contain"
                />

            </div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-4 sm:px-6 lg:px-8 my-10">

                <div className="w-full md:w-1/3 text-center md:text-left">
                    <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-gray-800 leading-tight">
                        Our customers’
                    </h2>
                    <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-[#E8AF30] leading-tight">
                       words not ours
                    </h2>
                    <p className="text-gray-600 text-sm xs:text-base sm:text-lg mt-4">
                        For nearly 30 years, we&apos;ve moved cargo (and some mountains) to achieve outstanding successes for our customers.
                    </p>
                </div>

                <div className="w-full md:w-1/2 mt-8 md:mt-0">
                    <Swiper
                        modules={[Navigation]}
                        navigation={{
                            nextEl: '.next-btn',
                            prevEl: '.prev-btn',
                        }}
                        spaceBetween={20}
                        slidesPerView={1}
                        className="relative"
                    >
                        <SwiperSlide>
                            <div className="bg-white p-6 rounded-lg shadow">
                                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                                    "Working with Nexus Logix has really eased the stress off of our supply chain.
                                    Their team handles everything and keeps us in the loop, which makes a huge difference"
                                </p>
                                <div className="flex items-center gap-4">
                                    <Image
                                        src="/avatar2.png" // replace with your actual image path
                                        alt="Amit Fernando"
                                        width={50}
                                        height={50}
                                        className="rounded-full"
                                    />
                                    <div>
                                        <p className="font-semibold text-gray-800">Amit Fernando</p>
                                        <p className="text-sm text-gray-600">Founder & CEO, NovaTech Solutions</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>


                         <SwiperSlide>
                            <div className="bg-white p-6 rounded-lg shadow">
                                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                                    "Working with Nexus Logix has really eased the stress off of our supply chain.
                                    Their team handles everything and keeps us in the loop, which makes a huge difference"
                                </p>
                                <div className="flex items-center gap-4">
                                    <Image
                                        src="/avatar2.png" // replace with your actual image path
                                        alt="Amit Fernando"
                                        width={50}
                                        height={50}
                                        className="rounded-full"
                                    />
                                    <div>
                                        <p className="font-semibold text-gray-800">Amit Fernando</p>
                                        <p className="text-sm text-gray-600">Founder & CEO, NovaTech Solutions</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                         <SwiperSlide>
                            <div className="bg-white p-6 rounded-lg shadow">
                                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                                    "Working with Nexus Logix has really eased the stress off of our supply chain.
                                    Their team handles everything and keeps us in the loop, which makes a huge difference"
                                </p>
                                <div className="flex items-center gap-4">
                                    <Image
                                        src="/avatar2.png" // replace with your actual image path
                                        alt="Amit Fernando"
                                        width={50}
                                        height={50}
                                        className="rounded-full"
                                    />
                                    <div>
                                        <p className="font-semibold text-gray-800">Amit Fernando</p>
                                        <p className="text-sm text-gray-600">Founder & CEO, NovaTech Solutions</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                       
                    </Swiper>

                   
                    <div className="flex justify-end gap-2 mt-4">
                        <button className="prev-btn w-8 h-8 rounded-full bg-[#162F65] text-white flex items-center justify-center">
                            &lt;
                        </button>
                        <button className="next-btn w-8 h-8 rounded-full bg-[#162F65] text-white flex items-center justify-center">
                            &gt;
                        </button>
                    </div>
                </div>
            </div>


            <Quote />
            <div className="py-6 lg:py-12">
                <LinkedinSection />
            </div>
        </div>
    );
}

export default airAndSeaFreight;
