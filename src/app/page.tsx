"use client"
import Image from "next/image";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import Testimonial from "@/Components/Testimonial";
import LinkedinSection from "@/Components/LinkedinSection";
import Quote from "@/Components/Quote";
import CountUp from "react-countup";
import Nav from "@/Components/Nav";
// import { useInView } from 'react-intersection-observer';

export default function Home() {

    const images = ["/plane1.png", "/slid1.png","/slid2.png","/slid3.png","/slid4.png"];
    const mobileImages = ["/img_5.png", "/img_6.png","/img_7.png","/img_8.png","/img_9.png"];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const [currentMobileImageIndex, setCurrentMobileImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                (prevIndex + 1) % images.length
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentMobileImageIndex((prevIndex) =>
                (prevIndex + 1) % mobileImages.length
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [mobileImages.length]);


    const sections = [
        {
            title: "Who is Nexus Logix",
            description:
                "Homegrown in Australia and backed by global expertise, we strive to be your responsive, agile freight and logistics partner. \n\nAs a player in a global supply chain, you are like an F1 race driver, which means every second counts. That's why we're your dedicated pit crew, ever ready to support your cargo in motion.",
            imageSrc: "/3-men.png",
            imageAlt: "Nexus Logix Team",
            reverse: false,
            buttonTitle: "Explore More"
        },
        {
            title: "Your Supply Chain is Now Visible, Measurable, and Transparent",
            description:
                "50% of customers track their shipments - You can too! \n\nPowered by Neo, Nexus Logix delivers live tracking that shows your shipment's exact location on an interactive world map in real time. Get automated milestone alerts, 12-month performance stats, financial summaries, and detailed CO₂ emission data for every shipment all accessible on any device, right at your fingertips.",
            imageSrc: "/cargo-wise.png",
            imageAlt: "Cargo Tracking",
            reverse: true,
            buttonTitle: "Learn More"
        },
    ];

    const stats = [
        {value: 39, label: "Countries", suffix: "+"},
        {value: 76, label: "Global Partner Offices"},
    ];


    const values = [
        {
            icon: "/dependability.png",
            title: "DEPENDABILITY",
            subtitle: "You can count on us.",
        },
        {
            icon: "/accountability.png",
            title: "ACCOUNTABILITY",
            subtitle: "We accept responsibility.\nNo Excuses.",
        },
        {
            icon: "/transparancy.png",
            title: "TRANSPARENCY",
            subtitle: "Clear communication.\nNo Surprises.",
        },
        {
            icon: "/commitment.png",
            title: "COMMITMENT",
            subtitle: "We go the extra mile.",
        },
        {
            icon: "/care.png",
            title: "CARE",
            subtitle: "Your shipment is our shipment.",
        },
    ];

    const services = [
        {
            src: "/forwarding_service.png",
            alt: "Freight forwarding service",
            label: "Air & Sea Freight",
            description: `Be it express air shipments for urgent deliveries or cost-effective sea freight solutions for bulk transport we optimise routes, consolidate loads, and secure competitive rates to keep your cargo moving without unexpected costs or challenges, while avoiding delays.`,
        },
        {
            src: "/Customs_Clearance.png",
            alt: "Customs Clearance & Compliance",
            label: "Customs Clearance & Compliance",
            description: `Navigating Australia’s vast distances often requires more than one mode of transport, with local expertise at every stage. Our comprehensive road and rail services cover everything from onsite collection to final delivery, ensuring reliable and cost-effective transport.`,
        },
        {
            src: "/warehousing.png",
            alt: "3PL, Warehousing & Special Projects",
            label: "3PL, Warehousing & Special Projects",
            description: `From end-to-end supply chain management to specialised project transport for heavy-lift or out-of-gauge cargo, our integrated solutions and experienced consultants streamline warehousing, fulfilment, and special moves – providing a unique personalised approach for each client.`,
        },
        {
            src: "/transport.png",
            alt: "Road & Rail Transport",
            label: "Road & Rail Transport",
            description: `Customs and compliance doesn’t have to be a bottleneck. We simplify international and domestic border processes by expertly handling HS classifications, duty optimisation, documentation, and other procedures, including audits – ensuring your goods clear swiftly and cost-effectively.`,
        },
    ];

    const [activeService, setActiveService] = useState(services[0]);


    return (
        <div className="min-h-screen bg-[#F6F6F6] poppins">
            <section className="relative min-h-[70vh] sm:min-h-[80vh] lg:min-h-[100vh] overflow-hidden">

                <div className="absolute hidden lg:block inset-0">
                    <div className="absolute flex flex-row justify-end right-0 w-full h-full">
                        <Image
                            key={images[currentMobileImageIndex]}
                            src={images[currentMobileImageIndex]}
                            alt="Airplane"
                            width={400}
                            height={1200}
                            className="w-full sm:w-auto h-[400px] sm:h-[500px] lg:h-[620px] object-contain relative z-40"
                        />
                    </div>

                    <div className="absolute -left-50 -top-10 inset-0 flex items-center">
                        <div className="w-full h-full flex justify-center">
                            <Image
                                src="/x1.png"
                                alt="Nexus X Logo"
                                width={600}
                                height={600}
                                className="w-full sm:w-auto h-[600px] sm:h-[800px] lg:h-[970px] object-contain z-30"
                            />
                        </div>
                    </div>
                </div>

                <Nav/>

                <div id="hero-background-image"
                     className="relative w-full h-[400px] mobile:h-[500px] sm:h-[600px] md:h-[800px] -mt-20 lg:hidden overflow-hidden">
                    <Image
                        key={mobileImages[currentImageIndex]}
                        src={mobileImages[currentImageIndex]}
                        alt="Airplane"
                        width={1000}
                        height={400}
                        className="w-full h-full object-cover absolute inset-0"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 100vw"
                    />
                </div>

                <div id="mobile-hero-content"
                     className="relative flex flex-col -top-10 md:-top-40 border-[#D9D9D9] container mx-auto border-b-2 pb-4 justify-center items-center text-center
                            w-full px-4 sm:px-6 lg:hidden z-10">
                    <div
                        className="w-full max-w-lg mx-auto">
                        <h1 className="text-2xl mobile:text-3xl sm:text-4xl font-bold text-[#114284] leading-tight mb-4 sm:mb-6">
                            Supply Chains Never Sleep.
                            <br className="sm:hidden"/>Neither Do We.
                        </h1>
                        <p className="text-sm mobile:text-base sm:text-lg text-[#676767] font-medium mb-6 sm:mb-8 leading-relaxed">
                            As your agile logistics partner, we operate as an extension of your
                            business, so you enjoy peace of mind, and responsive service.
                        </p>
                        <button
                            className="bg-[#071940] text-white
                                   px-6 py-2 mobile:px-8 mobile:py-3 text-sm font-medium  rounded-[10px] hover:bg-blue-950 hover:scale-105 transition-all duration-300"
                        >
                            Explore More
                        </button>
                    </div>
                </div>


                <div className="relative hidden lg:block z-50 mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-24">
                    <div className="w-full sm:w-3/4 lg:w-1/2 text-center sm:text-left">
                        <h1 className="text-2xl sm:text-3xl lg:text-[45px] font-bold text-[#114284] leading-tight mb-4 sm:mb-6">
                            Supply Chains
                            <br/>
                            Never Sleep.
                            <br/>
                            Neither Do We.
                        </h1>
                        <p className="text-sm sm:text-base lg:text-xl text-[#676767] font-medium mb-6 sm:mb-8 max-w-md leading-relaxed">
                            As your agile logistics partner, we operate as an extension of your
                            business, so you enjoy peace of mind, and responsive service.
                        </p>
                        <button
                            className="bg-[#071940] text-white px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base lg:text-xl font-medium rounded-[10px] hover:bg-blue-950 hover:scale-105 transition-all duration-300"
                        >
                            Explore More
                        </button>
                    </div>
                </div>

                <Quote/>

                <section className="relative py-6 md:-top-20 lg:-top-0 z-40 sm:py-8">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                        {/*<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 sm:gap-3">*/}
                        {/*    {values.map((value, index) => (*/}
                        {/*        <div*/}
                        {/*            key={index}*/}
                        {/*            className="flex flex-col items-center sm:items-start text-center sm:text-left"*/}
                        {/*        >*/}
                        {/*            <div className="mb-4 sm:mb-6">*/}
                        {/*                <Image*/}
                        {/*                    src={value.icon}*/}
                        {/*                    alt={`${value.title} icon`}*/}
                        {/*                    width={48}*/}
                        {/*                    height={48}*/}
                        {/*                    className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16"*/}
                        {/*                />*/}
                        {/*            </div>*/}
                        {/*            <h3 className="text-[#225395] font-semibold text-base sm:text-lg lg:text-xl italic mb-2">*/}
                        {/*                {value.title}*/}
                        {/*            </h3>*/}
                        {/*            <p className="text-[#0C2D59] font-medium text-xs sm:text-sm lg:text-sm whitespace-pre-line">*/}
                        {/*                {value.subtitle}*/}
                        {/*            </p>*/}
                        {/*        </div>*/}
                        {/*    ))}*/}
                        {/*</div>*/}

                        <div
                            className="flex overflow-x-auto lg:mx-auto lg:grid lg:grid-cols-5 gap-4 lg:gap-1 pb-4 lg:pb-0 snap-x snap-mandatory scrollbar-hide touch-pan-x lg:justify-items-center">
                            {values.map((value, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center lg:items-start text-center lg:text-left min-w-[150px] lg:min-w-0 snap-center px-2"
                                >
                                    <div className="mb-0.5 sm:mb-1 lg:mb-2">
                                        <Image
                                            src={value.icon}
                                            alt={`${value.title} icon`}
                                            width={48}
                                            height={48}
                                            className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16"
                                        />
                                    </div>
                                    <h3 className="text-[#225395] font-semibold text-base sm:text-lg lg:text-xl italic">
                                        {value.title}
                                    </h3>
                                    <p className="text-[#0C2D59] font-medium text-[10px] lg:text-xs leading-4 whitespace-pre-line">
                                        {value.subtitle}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </section>

            <div className="py-4 sm:py-6 lg:py-8">
                <div className="max-w-7xl mx-auto px-8 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
                        <div className="relative">
                            <div
                                className="relative w-full h-[200px] sm:h-[250px] lg:h-[500px] rounded-xl overflow-hidden"
                            >
                                <Image
                                    src="/truck.png"
                                    alt="truck in logistics operation"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                                    priority
                                />
                            </div>
                            <div
                                className="absolute text-center rounded-[10px] -bottom-4 sm:-bottom-5 lg:-bottom-6 left-4 sm:left-5 lg:left-6 bg-[#225395] text-white px-6 sm:px-8 lg:px-10 py-2 sm:py-2.5 lg:py-3 shadow-lg"
                            >
                                <div className="text-center">
                                    <p className="text-sm sm:text-base lg:text-lg font-semibold mb-0.5 sm:mb-1">
                                        Team with
                                    </p>
                                    <p className="text-3xl sm:text-5xl lg:text-6xl font-bold">
                                        25
                                    </p>
                                    <p className="text-lg sm:text-xl lg:text-3xl font-semibold">
                                        Years
                                    </p>
                                    <p className="text-xs sm:text-sm lg:text-sm mt-0.5 sm:mt-1">
                                        Industry
                                        <br/>
                                        Experience
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-[#162F65] mb-4 sm:mb-6 lg:mb-8 text-left">
                                Why Nexus Logix
                            </h2>
                            <div
                                className="space-y-4 sm:space-y-5 lg:space-y-6 text-sm sm:text-base lg:text-base text-[#676767] font-medium leading-[25px] text-left">
                                <p>
                                    Established in Australia by a group of logistics professionals,
                                    each with over 25+ years of experience across Australia, Oceania,
                                    and Asia Pacific, our business is built on a foundation of local
                                    expertise and global reach.
                                </p>
                                <p>
                                    We know that we aren&#39;t simply moving your cargo - we&#39;re moving
                                    your business, your reputation, and your ambitions. With
                                    dependability, accountability, and transparency at our core, we
                                    take personal ownership of every shipment and are aligned with
                                    your goals, ensuring you have the peace of mind you deserve.
                                </p>
                                <p>
                                    Challenging the present impersonal approach to freight forwarding,
                                    our service is driven by genuine commitment and care, putting you
                                    first so that your needs shape every decision. As your dedicated
                                    logistics team, we deliver value, act with integrity, and provide
                                    personalized support at a moment&#39;s notice, functioning as an
                                    extension of your office.
                                </p>
                            </div>
                            <p className="text-[#225395] text-lg sm:text-xl lg:text-2xl font-medium mt-4 sm:mt-6 lg:mt-8 text-left">
                                - This is the Nexus Way
                            </p>
                            <button
                                className="bg-[#071940] text-white px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base lg:text-lg font-medium mt-4 sm:mt-6 lg:mt-8  rounded-[10px] hover:bg-blue-950 flex items-left lg:items-center w-fit mx-0 hover:scale-105 transition-all duration-300"
                            >
                                Explore More
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative bg-[#0F2043] text-white py-6 sm:py-8 lg:py-16">
                <div
                    className="absolute bg-[url('/x.png')] h-[200px] sm:h-[300px] md:h-[500px] md:-top-25 -top-5  bg-no-repeat bg-contain inset-0 w-full sm:w-1/3 lg:w-[400px] lg:h-[400px] lg:-top-15 opacity-5"
                />
                <div className="relative max-w-7xl mx-0 lg:mx-auto px-8 lg:px-12">
                    <div
                        className="flex flex-col items-start lg:items-center gap-2 lg:gap-8 lg:flex-row lg:justify-between">
                        <h2 className="text-xl sm:text-2xl lg:text-5xl font-semibold text-[#FFFFFF] text-left leading-tight sm:leading-[48px] lg:leading-[57px]">
                            Connecting<br className="hidden lg:block"/> you worldwide...
                        </h2>
                        <div className="flex flex-row justify-between gap-4 sm:gap-6 lg:gap-12 text-left">
                            {stats.map((stat, index) => (
                                <div key={index} className="group">
                                    <p className="text-xl sm:text-2xl lg:text-6xl font-semibold text-[#FFFFFF] mb-2 group-hover:scale-105 transition-transform duration-300">
                                        <CountUp
                                            start={0}
                                            end={stat.value}
                                            duration={2.5}
                                            delay={0}
                                            suffix={stat.suffix || ''}
                                            enableScrollSpy={false}
                                            redraw={false}
                                            startOnMount={false}
                                            onStart={() => {
                                            }}
                                            onEnd={() => {
                                            }}
                                        >
                                            {({countUpRef}) => (
                                                <span ref={countUpRef}/>
                                            )}
                                        </CountUp>
                                    </p>
                                    <p className="text-xs sm:text-sm lg:text-xl text-[#FFFFFF]">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                            <div>
                                <p className="text-xl sm:text-2xl lg:text-6xl font-semibold text-[#559000] mb-2 group-hover:scale-105 transition-transform duration-300">
                                    CO₂
                                </p>
                                <p className="text-xs sm:text-sm lg:text-xl text-[#559000]">
                                    Track & Trace
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*<div className="bg-[#F6F6F6] relative z-10 py-6 sm:py-8 lg:py-16 poppins">*/}
            {/*    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">*/}
            {/*        <div*/}
            {/*            className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4 sm:gap-6 lg:gap-10 mb-6 sm:mb-8 lg:mb-10">*/}
            {/*            <h2 className="text-2xl sm:text-3xl lg:text-6xl font-semibold text-[#162F65] text-center mb-4 sm:mb-0 leading-tight mx-auto sm:mx-0">*/}
            {/*                Comprehensive*/}
            {/*                <br className="hidden sm:block"/> Solutions*/}
            {/*            </h2>*/}
            {/*            <p className="text-[#676767] font-medium text-xs sm:text-sm lg:text-xl leading-[25px] max-w-lg sm:max-w-xl text-center sm:text-left">*/}
            {/*                Whether it&#39;s retail, manufacturing, mining, automotive, or any other*/}
            {/*                industry, our specialists understand each one&#39;s unique challenges,*/}
            {/*                constraints, and regulations. In particular, we understand the value*/}
            {/*                of proactive, swift communication, and we strive to keep our customers*/}
            {/*                in the loop at all times - you&#39;ll notice this difference immediately*/}
            {/*                and we&#39;ll earn your trust within the first month. Our dedicated teams*/}
            {/*                work with you, as an extension of your office, to deliver compliant,*/}
            {/*                tailored solutions that scale with your business.*/}
            {/*            </p>*/}
            {/*        </div>*/}

            {/*        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-10">*/}
            {/*            <div id="main-card"*/}
            {/*                className="bg-[#002453] relative w-full lg:w-2/3 rounded-lg text-center transition-colors duration-300">*/}
            {/*                <div*/}
            {/*                    className="absolute bg-[url('/x.png')] opacity-5 bg-no-repeat bg-cover bottom-0 inset-0 items-center h-full"/>*/}
            {/*                <div*/}
            {/*                    className="relative p-4 sm:p-6 lg:p-8 flex flex-col items-center justify-between h-full">*/}
            {/*                    <div>*/}
            {/*                        <p className="text-left font-medium pt-2 lg:pt-10 px-6 text-sm sm:text-base lg:text-[22px] text-[#FFFFFF] leading-[30px] whitespace-pre-line">*/}
            {/*                            {activeService.description}*/}
            {/*                        </p>*/}
            {/*                    </div>*/}

            {/*                    <div className="flex flex-row gap-2 group items-center pt-4 sm:pt-6 lg:pt-8">*/}
            {/*                        <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mb-2 flex-shrink-0 transition-transform duration-300 ease-in-out" width="81"*/}
            {/*                             height="82" viewBox="0 0 81 82" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
            {/*                            <circle cx="40.5" cy="41" r="37.7635" stroke="white" strokeWidth="5.47297"/>*/}
            {/*                            <path*/}
            {/*                                className="origin-center group-hover:rotate-45 transition-transform duration-300 ease-in-out"*/}
            {/*                                d="M50.7383 33.4925C50.7693 32.847 50.5433 32.2156 50.1099 31.7363C49.6764 31.257 49.0708 30.9689 48.4254 30.935L34.6517 30.2429C34.3319 30.2269 34.0121 30.274 33.7105 30.3815C33.4089 30.489 33.1314 30.6549 32.894 30.8697C32.4143 31.3034 32.1266 31.9099 32.0942 32.5558C32.0617 33.2016 32.2872 33.8339 32.7209 34.3136C33.1547 34.7932 33.7612 35.0809 34.4070 35.1133L42.3021 35.51L29.3090 47.26C28.8294 47.6937 28.5418 48.3001 28.5093 48.9459C28.4769 49.5916 28.7023 50.2238 29.1360 50.7034C29.5697 51.183 30.1761 51.4706 30.8219 51.5031C31.4676 51.5355 32.0998 51.3101 32.5794 50.8764L45.5725 39.1264L45.1759 47.0215C45.1598 47.3413 45.2069 47.6612 45.3144 47.9628C45.4220 48.2644 45.5878 48.5418 45.8026 48.7793C46.0174 49.0168 46.2768 49.2097 46.5661 49.3469C46.8554 49.4841 47.1689 49.5630 47.4887 49.5791C47.8085 49.5952 48.1283 49.5481 48.4299 49.4405C48.7315 49.3330 49.0090 49.1671 49.2465 48.9523C49.4840 48.7376 49.6768 48.4781 49.8141 48.1888C49.9513 47.8995 50.0302 47.5860 50.0463 47.2662L50.7383 33.4925Z"*/}
            {/*                                fill="white"/>*/}
            {/*                        </svg>*/}

            {/*                        <h3 className="text-sm sm:text-base lg:text-[36px] text-white font-medium">*/}
            {/*                            {activeService.label}*/}
            {/*                        </h3>*/}
            {/*                    </div>*/}

            {/*                </div>*/}
            {/*            </div>*/}

            {/*            <div*/}
            {/*                className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">*/}
            {/*                {services.map((item, index) => (*/}
            {/*                    <div*/}
            {/*                        key={index}*/}
            {/*                        className="relative group cursor-pointer"*/}
            {/*                        onMouseEnter={() => setActiveService(item)}*/}
            {/*                        onClick={() => setActiveService(item)}*/}
            {/*                    >*/}
            {/*                        <div className="relative w-full h-40 sm:h-48 lg:h-56 rounded-lg overflow-hidden">*/}
            {/*                            <Image*/}
            {/*                                src={item.src}*/}
            {/*                                alt={item.alt}*/}
            {/*                                fill*/}
            {/*                                className="object-cover transition-transform duration-300 group-hover:scale-105"*/}
            {/*                            />*/}
            {/*                            <div*/}
            {/*                                className={`absolute inset-0 transition-all duration-300 ${activeService.label === item.label ? 'bg-[#002B64]/70' : 'bg-gradient-to-t from-[#002B64]/40 to-[#00255700]/10'}`}*/}
            {/*                            />*/}
            {/*                            <p className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white font-medium text-xs sm:text-sm lg:text-lg">*/}
            {/*                                {item.label}*/}
            {/*                            </p>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                ))}*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <div className="bg-[#F6F6F6] relative z-10 py-6 sm:py-8 lg:py-16 poppins">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div
                        className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4 sm:gap-6 lg:gap-10 mb-6 sm:mb-8 lg:mb-10">
                        <h2 className="text-2xl sm:text-3xl lg:text-6xl font-semibold text-[#162F65] text-center lg:text-left mb-4 sm:mb-0 leading-tight mx-auto sm:mx-0">
                            Comprehensive
                            <br className="hidden sm:block"/> Solutions
                        </h2>
                        <p className="text-[#676767] font-medium text-xs sm:text-sm lg:text-base leading-[25px] max-w-lg sm:max-w-xl text-center sm:text-left">
                            Whether it&#39;s retail, manufacturing, mining, automotive, or any other
                            industry, our specialists understand each one&#39;s unique challenges,
                            constraints, and regulations. In particular, we understand the value
                            of proactive, swift communication, and we strive to keep our customers
                            in the loop at all times - you&#39;ll notice this difference immediately
                            and we&#x27;ll earn your trust within the first month. Our dedicated teams
                            work with you, as an extension of your office, to deliver compliant,
                            tailored solutions that scale with your business.
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-10">
                        <div id="main-card"
                             className="bg-[#002453] relative w-full lg:w-2/3 rounded-lg text-center transition-colors duration-300">
                            <div
                                className="absolute bg-[url('/x.png')] opacity-5 bg-no-repeat bg-cover bottom-0 inset-0 items-center h-full"/>
                            <div
                                className="relative p-4 sm:p-6 lg:p-8 flex flex-col items-center justify-between h-full">
                                <div>
                                    <p className="text-left font-medium pt-2 lg:pt-10 px-6 text-sm sm:text-base lg:text-xl text-[#FFFFFF] leading-[30px] whitespace-pre-line">
                                        {activeService.description}
                                    </p>
                                </div>

                                <div className="flex flex-row gap-2 group justify-start items-center pt-4 sm:pt-6 lg:pt-8">
                                    <svg
                                        className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mb-2 flex-shrink-0 transition-transform duration-300 ease-in-out"
                                        width="81"
                                        height="82" viewBox="0 0 81 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="40.5" cy="41" r="37.7635" stroke="white" strokeWidth="5.47297"/>
                                        <path
                                            className="origin-center transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-45" // Added scale-110 for a more pronounced effect without layout shift
                                            d="M50.7383 33.4925C50.7693 32.847 50.5433 32.2156 50.1099 31.7363C49.6764 31.257 49.0708 30.9689 48.4254 30.935L34.6517 30.2429C34.3319 30.2269 34.0121 30.274 33.7105 30.3815C33.4089 30.489 33.1314 30.6549 32.894 30.8697C32.4143 31.3034 32.1266 31.9099 32.0942 32.5558C32.0617 33.2016 32.2872 33.8339 32.7209 34.3136C33.1547 34.7932 33.7612 35.0809 34.4070 35.1133L42.3021 35.51L29.3090 47.26C28.8294 47.6937 28.5418 48.3001 28.5093 48.9459C28.4769 49.5916 28.7023 50.2238 29.1360 50.7034C29.5697 51.183 30.1761 51.4706 30.8219 51.5031C31.4676 51.5355 32.0998 51.3101 32.5794 50.8764L45.5725 39.1264L45.1759 47.0215C45.1598 47.3413 45.2069 47.6612 45.3144 47.9628C45.4220 48.2644 45.5878 48.5418 45.8026 48.7793C46.0174 49.0168 46.2768 49.2097 46.5661 49.3469C46.8554 49.4841 47.1689 49.5630 47.4887 49.5791C47.8085 49.5952 48.1283 49.5481 48.4299 49.4405C48.7315 49.3330 49.0090 49.1671 49.2465 48.9523C49.4840 48.7376 49.6768 48.4781 49.8141 48.1888C49.9513 47.8995 50.0302 47.5860 50.0463 47.2662L50.7383 33.4925Z"
                                            fill="white"/>
                                    </svg>

                                    <h3 className="text-sm sm:text-base text-left leading-[35px] lg:text-[36px] text-white font-medium">
                                        {activeService.label}
                                    </h3>
                                </div>

                            </div>
                        </div>

                        <div
                            className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                            {services.map((item, index) => (
                                <div
                                    key={index}
                                    className="relative group cursor-pointer"
                                    onMouseEnter={() => setActiveService(item)}
                                    onClick={() => setActiveService(item)}
                                >
                                    <div className="relative w-full h-40 sm:h-48 lg:h-56 rounded-lg overflow-hidden">
                                        <Image
                                            src={item.src}
                                            alt={item.alt}
                                            fill
                                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                        <div
                                            className={`absolute inset-0 transition-all duration-300 ${activeService.label === item.label ? 'bg-[#002B64]/70' : 'bg-gradient-to-t from-[#002B64]/40 to-[#00255700]/10'}`}
                                        />
                                        <p className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white font-normal text-xs sm:text-sm lg:text-lg">
                                            {item.label}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#F6F6F6] py-6 sm:py-8 poppins">
                <div className="px-4 sm:px-6 lg:px-8">
                    {sections.map((section, index) => (
                        <div
                            key={index}
                            className="relative bg-[#F6F6F6] mb-2 sm:mb-12 last:mb-0"
                        >
                            {index === 0 && (
                                <div
                                    className="absolute inset-0 bg-[url('/x.png')] bg-no-repeat hidden md:block md:w-[400px] md:h-[600px] bg-contain lg:w-[850px] lg:h-[850px] -top-10 lg:-top-44"
                                />
                            )}
                            <div
                                className={`max-w-7xl relative mx-auto items-center flex flex-col ${
                                    section.reverse ? "md:flex-row-reverse border-[#D9D9D9] container mx-auto border-b-2" : "md:flex-row"
                                } gap-4 sm:gap-8 md:gap-12 lg:gap-16 p-4 sm:p-6 lg:px-12`}
                            >
                                <div className="w-full md:w-3/5 flex flex-col justify-between">
                                    <div>
                                        <h2
                                            className="font-semibold text-xl sm:text-2xl lg:text-[40px] text-[#162F65] max-w-3xl text-center md:text-left"
                                        >
                                            {section.title}
                                        </h2>
                                        <p
                                            className={`text-xs sm:text-sm lg:text-base font-medium ${
                                                section.reverse ?  "mt-1 sm:mt-2 lg:mt-3" : "mt-2 sm:mt-4 lg:mt-8"} text-[#676767] max-w-2xl leading-[25px] text-center md:text-left whitespace-pre-line`}
                                        >
                                            {section.description}
                                        </p>
                                        <div className="mt-4 sm:mt-6 lg:mt-8 text-center md:text-left">
                                            <Link href="#">
                                                <button
                                                    className="bg-[#071940] cursor-pointer text-white text-sm sm:text-base lg:text-lg font-medium px-4 sm:px-6 py-2 sm:py-3 rounded-[10px] hover:bg-blue-950 hover:scale-105 transition-all duration-300"
                                                >
                                                    {section.buttonTitle}
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-2/5 mt-4 sm:mt-6 md:mt-0">
                                    <Image
                                        src={section.imageSrc}
                                        alt={section.imageAlt}
                                        width={600}
                                        height={800}
                                        className="rounded-lg object-cover w-full h-auto"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-[#F6F6F6] py-2 sm:py-4 lg:py-6">
                <div className="">
                    <div
                        className="flex flex-col px-4 sm:px-6 mb-2 lg:mb-8 lg:px-8 max-w-7xl mx-auto lg:flex-row justify-between gap-2 lg:gap-8 items-center md:items-start">
                        <h2 className="text-xl sm:text-2xl lg:text-5xl text-[#0F2043] font-semibold text-center sm:text-left mb-1 leading-[50px] max-w-xl">
                            Success Stories from Our Clients
                        </h2>
                        <p className="text-[#676767] text-sm sm:text-base lg:text-lg font-medium text-center md:text-left mb-6 sm:mb-8 lg:mb-12 max-w-2xl leading-[25px]">
                            For over 25+ years, we&#39;ve moved cargo (and some mountains) to achieve outstanding
                            successes for our customers.
                        </p>
                    </div>
                    <Testimonial/>
                </div>
            </div>

            <div className="pb-14">
                <LinkedinSection/>
            </div>

        </div>
    );
}

