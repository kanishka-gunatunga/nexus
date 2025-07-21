"use client"
import Image from "next/image";
import LinkedinSection from "@/Components/LinkedinSection";
import React from "react";
// import Link from "next/link";
import Nav from "@/Components/Nav";
// import ServiceCardRow from "@/Components/ServiceCardRow";
import Quote from "@/Components/Quote";

import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Accordian from "@/Components/Accordian";
import Link from "next/link";


const airAndSeaFreight = () => {

    // const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#F6F6F6] poppins">
            <div className="relative mx-auto block">

                <Nav/>

                <div id="hero-section"
                     className="relative mx-auto -top-10 lg:-top-30 max-w-screen-4xl z-30">
                    <div className="relative w-full h-[200px] sm:h-[250px] md:h-[400px] lg:h-[450px] xl:h-[500px]">
                        <Image
                            src="/why-nexus/banner.svg"
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

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div
                    className="bg-transparent -mt-0 lg:-mt-45 px-4 py-6 md:py-10 flex flex-col lg:flex-row gap-6 items-center lg:items-start">
                    {/* Image Section */}
                    <div className="w-full lg:w-[30%] flex justify-center">
                        <Image
                            src="/why-nexus/history-inspiration.png"
                            alt="Nexus X Logo"
                            width={620}
                            height={460}
                            className="rounded-[10px] px-4 lg:px-0 max-w-full lg:max-w-[435px] h-auto lg:max-h-[420px] object-cover"
                        />
                    </div>
                    {/* Text Section */}
                    <div className="w-full flex flex-col justify-start">
                        <h2 className="mb-4 font-bold text-[32px] sm:text-[40px] md:text-[60px] lg:text-[70px] leading-[1.1] text-[#162F65] font-poppins">
                            History &amp;
                            <br/>Inspiration
                        </h2>

                        {/*<h2 className="mb-4 font-bold text-[32px] sm:text-[40px] md:text-[60px] lg:text-[83px] leading-[1.1] text-[#162F65] font-poppins">*/}
                        {/*    Inspiration*/}
                        {/*</h2>*/}
                        <p
                            className="text-sm sm:text-base lg:text-[18px] text-[#676767] font-poppins"
                        >
                            Nexus Logix is an Australian freight forwarder and logistics provider, headquartered in
                            Brisbane. Founded by a group of seasoned industry professionals who recognised an
                            opportunity to blend deep regional knowledge with modern systems and global networks, Nexus
                            Logix operates akin to a finely tuned Fl pit crew supporting -customers as they race ahead
                            towards their goals. From day one, our mission has been clear: to be the steadfast partner
                            that understands your business needs and moves your cargo with precision and care.
                        </p>

                    </div>
                </div>

                {/* cards */}

                <div className="my-[50px]">
                    <div className="flex flex-col sm:flex-row justify-between gap-4 my-8 px-4 sm:px-6 lg:px-8">
                        <div className="bg-white rounded-lg shadow p-5 sm:p-6 md:p-8   flex-1">
                            <h3 className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-semibold text-[#162F65] mb-2">
                                Delightful Service
                            </h3>
                            <p className="text-paragraph sm:text-[18px] md:text-[20px] text-[#676767] font-poppins font-medium">
                                Transparent, genuine care that puts you first
                            </p>
                        </div>
                        <div className="bg-white rounded-lg shadow p-5 sm:p-6 md:p-8  flex-1">
                            <h3 className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-semibold text-[#162F65] mb-2">
                                Competitive Pricing
                            </h3>
                            <p className="text-paragraph sm:text-[18px] md:text-[20px] text-[#676767] font-poppins font-medium">
                                Through strong global networks
                            </p>
                        </div>
                        <div className="bg-white rounded-lg shadow p-5 sm:p-6 md:p-8   flex-1">
                            <h3 className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-semibold text-[#162F65] mb-2">
                                Local Expertise
                            </h3>
                            <p className="text-paragraph sm:text-[18px] md:text-[20px] text-[#676767] font-poppins font-medium">
                                Team with 25 years of Local Experience
                            </p>
                        </div>
                    </div>

                    {/* second row */}
                    <div className="flex flex-col sm:flex-row justify-between gap-4 my-8 px-4 sm:px-6 lg:px-8">
                        <div
                            className="bg-white rounded-lg shadow p-5 sm:p-6 md:p-8 w-full lg:max-w-[22rem] sm:w-[100%] flex-1">
                            <h3 className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-semibold text-[#162F65] mb-2">
                                Real Time Visibility
                            </h3>
                            <p className="text-paragraph sm:text-[18px] md:text-[20px] text-[#676767] font-poppins font-medium">
                                Track every shipment with CargoWise Neo.
                            </p>
                        </div>

                        <div
                            className="bg-[#162F65] rounded-lg shadow p-5 sm:p-6 md:p-8 w-full sm:w-[100%] w-full max-w-full flex-1 ">
                            <h3 className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-semibold text-white mb-2">
                                Sustainability
                            </h3>

                            <span className="text-paragraph sm:text-[18px] md:text-[20px] text-gray-300">
                                Track
                            </span>
                            <span className="mx-1"></span>

                            <span className="text-paragraph sm:text-[18px] md:text-[20px] text-[#5DF706] ">
                                Co2
                            </span>
                            <span className="mx-1"></span>
                            <span className="text-paragraph sm:text-[18px] md:text-[20px] text-gray-300">
                                emission of every shipment with CargoWise Neo.
                            </span>
                        </div>

                        <div className="bg-white rounded-lg shadow p-5 sm:p-6 md:p-8  flex-1 w-full sm:w-[100%]">
                            <h3 className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-semibold text-[#162F65] mb-2">
                                Supply Chain Audits
                            </h3>
                            <p className="text-paragraph sm:text-[18px] md:text-[20px] text-[#676767] font-poppins font-medium">
                                Identify gaps, cut costs, improve performance.
                            </p>
                        </div>
                    </div>

                    {/* third row */}
                    <div className="my-8 gap-4 flex flex-wrap justify-center px-4 sm:px-6 lg:px-8">
                        <div
                            className="bg-white rounded-lg shadow px-5 py-2  w-full flex-1 lg:flex lg:flex-row items-center justify-start gap-[5rem]">
                            <h3 className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-semibold text-[#162F65]">
                                Powered by CargoWise
                            </h3>
                            <p className="text-paragraph sm:text-[18px] md:text-[20px] text-[#676767] font-poppins font-medium">
                                Manage Your Supply Chain with the World&rsquo;s Most trusted ERP
                            </p>
                        </div>
                    </div>
                </div>


            </div>

            <div className="w-full bg-[#0F2043] relative flex min-h-[600px] sm:min-h-0 md:min-h-[400px] vision-section">
                <div className="w-full flex">
                    <Image
                        src={"/x-croped.png"}
                        alt="Nexus X Logo"
                        width={1000}
                        height={400}
                        className="lg:max-w-[400px] lg:max-h-[400px] w-full md:h-[400px] object-cover opacity-10 vision-image"
                    />
                </div>

                <div className="absolute inset-0 flex items-center z-10 justify-center">
                    <div
                        className="max-w-7xl mx-auto px-4 sm:px-6  lg:pl-8  flex flex-col lg:flex-row justify-between items-center gap-8 vision-achievements">
                        <div
                            className="flex flex-col mb-4 text-center lg:text-left w-full lg:w-1/3  mr:[0] lg:mr-[60px] ">
                            <h2
                                className="text-white font-poppins font-semibold text-[32px] sm:text-[40px] md:text-[48px] lg:text-[66px] leading-tight font-poppins"
                            >
                                Vision
                            </h2>
                            <h2 className="text-white font-poppins font-semibold text-[32px] sm:text-[40px] md:text-[48px] lg:text-[66px] leading-tight font-poppins">
                                Achievements
                            </h2>
                        </div>
                        <div className="flex flex-col mb-4 w-full lg:w-2/3 px-4">
                            <p className="text-white text-[18px] font-normal font-poppins text-justify"
                               style={{fontStyle: "normal"}}>
                                Driven by an ambition to simplify the complexities of global freight, we have dedicated
                                ourselves to delivering a service that is both personal and agile. Over nearly three
                                decades, our people&rsquo;s reputation for reliability and innovation has enabled us to
                                serve importers, exporters, and supply chain managers across Australia, New Zealand, and
                                the wider Asia-Pacific region. Just as a race car relies on every component for peak
                                performance, we ensure every shipment is managed flawlessly – allowing you to focus on
                                the finish line.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl hidden lg:block mx-auto mt-[50px] lg:mt-[100px] px-4 sm:px-6 lg:px-8">
                <Image
                    src={"/nexus-core.svg"}
                    alt="Nexus X Logo"
                    width={1000}
                    height={400}
                    className="w-full h-auto object-contain"
                />
            </div>

            <div className="max-w-7xl block lg:hidden mx-auto mt-[50px] lg:mt-[100px] px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto mb-4 md:mb-10">
                    <h2 className="text-[#737887] text-3xl ml-6 sm:text-4xl md:text-5xl font-bold mb-2 text-left leading-tight">
                        Our Core Values
                    </h2>
                    <p className="text-gray-600 text-xs sm:text-sm text-left leading-relaxed">
                        Every decision at Nexus Logix is anchored in our commitment to responsiveness,
                        personalisation, precision, accountability, and a desire to function as an extension of your
                        office. Much like an elite F1 pit crew supports its star driver, we&#39;ve transformed the
                        intricacies
                        of international logistics into comprehensive, customer-focused solutions just for you.
                    </p>
                </div>

                {/* The Nexus Way - Australian Culture Section */}
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-[#8c8c8c] text-5xl sm:text-7xl font-bold text-center leading-tight mb-2">
                        The Nexus Way
                    </h1>
                    <h2 className="text-[#737887] mr-6 text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-right leading-tight">
                        Australian Culture
                    </h2>
                    <p className="text-gray-600 text-xs sm:text-sm text-right leading-relaxed">
                        Proudly homegrown, our approach is underpinned by the direct, resilient, and
                        warm spirit synonymous with our local culture. Our clear communication,
                        genuine relationships, and straightforward style reflect the rugged ingenuity of
                        Australia – delivering consistency and excellence, lap after lap, race after race.
                    </p>
                </div>
            </div>

            <div
                className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-4 sm:px-6 lg:px-8 mt-[50px] lg:mt-[100px]">
                <div className="w-full md:w-1/3 text-center md:text-left">
                    <h2 className="text-[32px] sm:text-[30px] md:text-[36px] lg:text-[48px] font-semibold text-[#6E7483] leading-tight">
                        Our customers&rsquo;
                    </h2>
                    <h2 className="text-[32px] sm:text-[30px] md:text-[36px] lg:text-[48px] font-semibold text-[#E8AF30] leading-tight">
                        words not ours
                    </h2>
                    <p className="text-[#676767] font-normal text-sm xs:text-base sm:text-lg mt-4">
                        For nearly 30 years, we&apos;ve moved cargo (and some mountains) to achieve outstanding
                        successes for our customers.
                    </p>
                </div>

                <div className="w-full md:w-1/2 lg:mt-8 mt-0">
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
                            <div className="bg-white p-8 rounded-lg shadow">
                                <p className="text-[#676767] font-normal text-sm xs:text-base sm:text-lg leading-relaxed mb-4">
                                    Working with Nexus Logix has really eased the stress off of our supply chain.
                                    Their team handles everything and keeps us in the loop, which makes a huge
                                    difference
                                </p>
                                <div className="flex items-center gap-4">
                                    <Image
                                        src="/avatar2.png"
                                        alt="Amit Fernando"
                                        width={50}
                                        height={50}
                                        className="rounded-full"
                                    />
                                    <div>
                                        <p className="text-[#676767] font-normal text-sm xs:text-base sm:text-lg">Amit
                                            Fernando</p>
                                        <p className="text-[#676767] font-normal text-sm xs:text-base sm:text-lg">Founder &amp; CEO,
                                            NovaTech Solutions</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="bg-white p-8 rounded-lg shadow">
                                <p className="text-[#676767] font-normal text-sm xs:text-base sm:text-lg leading-relaxed mb-4">
                                    &quot;Working with Nexus Logix has really eased the stress off of our supply chain.
                                    Their team handles everything and keeps us in the loop, which makes a huge
                                    difference&quot;
                                </p>
                                <div className="flex items-center gap-4">
                                    <Image
                                        src="/avatar2.png"
                                        alt="Amit Fernando"
                                        width={50}
                                        height={50}
                                        className="rounded-full"
                                    />
                                    <div>
                                        <p className="text-[#676767] font-normal text-sm xs:text-base sm:text-lg">Amit
                                            Fernando</p>
                                        <p className="text-[#676767] font-normal text-sm xs:text-base sm:text-lg">Founder &amp; CEO,
                                            NovaTech Solutions</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>

                    <div className="flex justify-end gap-2 mt-4">
                        <button
                            className="prev-btn w-8 h-8 rounded-full bg-[#162F65] text-white flex items-center justify-center">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M13.9806 6L15.3906 7.41L10.8106 12L15.3906 16.59L13.9806 18L7.98062 12L13.9806 6Z"
                                    fill="white"/>
                            </svg>

                        </button>
                        <button
                            className="next-btn w-8 h-8 rounded-full bg-[#162F65] text-white flex items-center justify-center">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10.0194 6L8.60938 7.41L13.1894 12L8.60938 16.59L10.0194 18L16.0194 12L10.0194 6Z"
                                    fill="white"/>
                            </svg>

                        </button>
                    </div>
                </div>
            </div>


            <div className="max-w-7xl mx-auto px-8  sm:px-8 lg:px-8 mt-[50px] lg:mt-[100px]">
                <div
                    className={`bg-transparent px-0 py-6 md:py-10 flex flex-col lg:flex-row gap-10  'lg:flex-row-reverse' : ''
                        }`}
                >
                    {/* Image */}
                    <div className="flex-1 flex justify-center items-center">
                        <Image
                            src="/sustainability.png"
                            alt="Sustainability"
                            width={620}
                            height={460}
                            className="rounded-[10px] sm:w-full md:w-full lg:max-w-[620px] h-auto lg:max-h-[460px] object-cover"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 flex flex-col justify-center">
                        <h2 className="font-bold text-[32px] sm:text-[40px] md:text-[48px] lg:text-[60px] leading-[1.1] text-[#162F65] font-poppins mb-2">
                            Sustainability
                            <br/>
                            at Nexus Logix
                        </h2>

                        {/*<h2 className="mb-4 font-bold text-[32px] sm:text-[40px] md:text-[48px] lg:text-[67px] leading-[1.1] text-[#162F65] font-poppins">*/}
                        {/*    at Nexus Logix*/}
                        {/*</h2>*/}


                        <p className="font-poppins font-semibold text-xl text-[#162F65] leading-[26px] mb-2">
                            Moving Freight. Minimising Footprint. Or Moving Freight Towards a Greener Future or Moving
                            Greener
                        </p>

                        {/* <p className="font-poppins font-medium text-[18px] text-[#676767] mb-4 leading-relaxed text-justify md:text-left"> */}
                        <p className="font-poppins font-normal text-xs sm:text-sm lg:text-base text-[#676767] leading-relaxed text-justify md:text-left">
                            At Nexus Logix, sustainability is a conscious mindset that drives every decision we make. As
                            a majority Australian-owned company with a global footprint, we are committed to reducing
                            our environmental impact while empowering our customers to do the same. Our approach
                            integrates green strategies at every level - from the partners we choose and the technology
                            we invest in, to the everyday practices that guide our operations.
                        </p>


                    </div>
                </div>
            </div>


            <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8 mt-[50px] lg:mt-[100px]">
                <div className="flex flex-row justify-center mb-12">
                    <h2 className="font-bold text-[32px] sm:text-[40px] md:text-[48px] lg:text-[50px] leading-[1.1] text-[#162F65] font-poppins">
                        Our Focus Areas
                    </h2>
                </div>
                <Accordian

                    image="/sus-accord.png"
                    cards={[
                        {
                            title: 'Carbon-Conscious Freight Solutions',
                            content: 'We prioritise cost- and carbon-efficient routing, consolidated loads, and collaborations with carriers that invest in low-emissions technologies.'
                        },

                    ]}
                    accordionItems={[
                        {
                            title: 'Technology for Smarter Decisions',
                            content: 'Our advanced supply chain visibility tools, digital documentation, and emissions transparency empower our customers to make informed decisions.'
                        },
                        {
                            title: 'Responsible Partnerships',
                            content: 'We proudly partner with global networks and suppliers that share our commitment to ESG values, ensuring ethical sourcing, strict compliance, and sustainability-led innovation.'
                        },
                        {
                            title: 'Internal Green Practices',
                            content: 'From transitioning to paperless operations to implementing energy-efficient office practices, we continuously embed sustainable habits into our culture and workflows.'
                        },
                        {
                            title: 'Carbon Emissions Reporting',
                            content: 'Using CargoWise ERP, we track estimated CO₂ outputs for every shipment and provide ISO 14083/GLEC-compliant reports. Detailed ESG dashboards, integration with specialist carbon accounting platforms, and tailored advisory support are also available.'
                        },
                    ]}
                />
            </div>

            <div className="w-full hidden lg:block bg-[#0F2043] mt-[50px] lg:mt-[100px]">
                <div
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
                    <Image
                        // src={"/road-to.svg"}
                        src="/why-nexus/road.svg"
                        alt="Nexus X Logo"
                        width={1800}
                        height={1200}
                        className="object-cover"
                    />
                </div>
            </div>

            <div className="w-full block lg:hidden bg-[#0F2043] mt-[50px] lg:mt-[100px]">
                <div
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
                    <Image
                        src="/why-nexus/road-map.svg"
                        alt="Nexus X Logo"
                        width={800}
                        height={1200}
                        className="object-cover"
                    />
                </div>
            </div>


            <div className="relative h-64 sm:h-80 lg:h-96 mt-10 overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/why-nexus/why-nexus-ribbon.png"
                        // src="/leadership.svg"
                        alt="Airport"
                        width={1000}
                        height={400}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>

                <div
                    className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col items-center justify-center text-center">
                    <h2 className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-medium text-white mb-4 sm:mb-6 lg:mb-8 leading-tight">
                        Australian Expertise, Global Strength
                    </h2>
                    <Link href="/services">
                        <button
                            className="bg-[#E8AF30] text-[#282828] px-6 hover:text-white cursor-pointer duration-300 transition sm:px-8 py-1 sm:py-2 text-sm sm:text-base lg:text-base rounded-lg font-normal">
                            View Services
                        </button>
                    </Link>
                </div>

                {/*<div*/}
                {/*    className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-8 text-white text-sm sm:text-base lg:text-lg font-light">*/}
                {/*    Sydney Airport*/}
                {/*</div>*/}
            </div>

            <Quote/>
            <div className="py-6 lg:py-12">
                <LinkedinSection/>
            </div>
        </div>
    );
}

export default airAndSeaFreight;
