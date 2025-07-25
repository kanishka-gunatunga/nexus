"use client";
import React from "react";
import Image from "next/image";
import Nav from "@/Components/Nav";
import LinkedinSection from "@/Components/LinkedinSection";
import Quote from "@/Components/Quote";
import Link from "next/link";
import HeroSection from "@/Components/HeroSection";

interface Service {
  label: string;
  description: string;
  src: string;
  alt: string;
  link: string;
}

const ServicesPage = () => {
  const services: Service[] = [
    {
      label: "Air & Sea Freight",
      description:
        "Looking for express air shipments for urgent deliveries or cost-effective sea freight solutions for bulk transport?\n\nWe optimize routes, consolidate loads, and secure competitive rates to keep your cargo moving without unexpected costs or challenges, while avoiding delays.",
      src: "/air-sea-freight.svg",
      alt: "Air and Sea Freight Services",
      link: "/air-and-sea-freight",
    },
    {
      label: "Customs Clearance & Compliance",
      description:
        "Customs and compliance doesn't have to be a bottleneck. We simplify international and domestic border processes by expertly handling HS classifications, duty optimisation, documentation, and other procedures, including audits - ensuring your goods clear swiftly and cost-effectively.",
      src: "/Customs_Clearance.svg",
      alt: "Customs Clearance Services",
      link: "/customs",
    },
    {
      label: "3PL, Warehousing & Special Projects",
      description:
        "From end-to-end supply chain management to specialized project transport for heavy-lift or out-of-gauge cargo, our integrated solutions and experienced consultants streamline warehousing, fulfilment, and special moves - providing a unique personalized approach for each client. We offer 3PL and Warehousing, Fulfilment and eCommerce, and Inventory Management and Optimization, all scalable and tailored to your unique requirements.",
      src: "/warehousing.svg",
      alt: "Warehousing and 3PL Services",
      link: "/Integrated-logistics",
    },
    {
      label: "Road & Rail Transport",
      description:
        "Navigating Australia's vast distances often requires more than one mode of transport, with local expertise at every stage. Our comprehensive road and rail services cover everything from onsite collection to final delivery, ensuring reliable and cost-effective transport across even the most challenging corridors.",
      src: "/road-rail.svg",
      alt: "Road and Rail Transport Services",
      link: "/road-and-rail",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F6F6F6] poppins">
      <div className="relative mx-auto block">
        <Nav />

        <HeroSection
          title="Services"
          desktopImage="/services_hero_banner.svg"
          mobileImage="/hero_arrow.svg"
          altText="Service hero section"
        />
      </div>

      {/* Comprehensive Solutions Section */}
      <div className="lg:-mt-28 lg:pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4 sm:gap-6 lg:gap-10 mb-6 sm:mb-8 lg:mb-10">
            <h1 className="text-2xl sm:text-3xl lg:text-[50px] font-semibold text-[#162F65] text-center lg:text-left mb-4 sm:mb-0 leading-tight mx-auto sm:mx-0">
              Comprehensive
              <br className="hidden sm:block" /> Solutions
            </h1>
            <p className="text-[#676767] font-medium text-xs sm:text-sm lg:text-lg leading-[25px] max-w-lg sm:max-w-xl text-center sm:text-left text-justify">
              Whether it&#39;s retail, manufacturing, mining, automotive, or any
              other industry, our specialists understand each one&#39;s unique
              challenges, constraints, and regulations. In particular, we
              understand the value of proactive, swift communication, and we
              strive to keep our customers in the loop at all times - you&#39;ll
              notice this difference immediately and we&#x27;ll earn your trust
              within the first month. Our dedicated teams work with you, as an
              extension of your office, to deliver compliant, tailored solutions
              that scale with your business.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid Section */}
      <section className="py-4 lg:py-6 mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto px-4 sm:px-6 items-stretch">
          {services.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className="relative group cursor-pointer"
            >
              <div
                className="relative w-full flex flex-col overflow-hidden bg-[#162F65CC]/80 rounded-lg 
  sm:min-h-[600px]
          min-h-[400px] 
          h-full"
              >
                {" "}
                {/* kicks in when 2 columns appear */}
                {/* Background image */}
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t" />
                <div className="absolute bg-[url('/x.png')] opacity-3 bg-no-repeat bg-contain inset-0 w-full h-full" />
                {/* Foreground content */}
                <div className="relative p-6 lg:p-8 flex flex-col justify-between flex-1 text-white">
                  {/* Description */}
                  <div className="flex-1">
                    <p className="text-left font-medium pt-2 lg:pt-10 px-6 text-sm sm:text-base lg:text-xl text-[#FFFFFF] leading-[30px] whitespace-pre-line">
                      {item.description}
                    </p>
                  </div>

                  {/* Label + Icon */}
                  <div className="flex flex-row gap-3 items-center mt-6">
                    <svg
                      className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mb-2 flex-shrink-0 transition-transform duration-300 ease-in-out"
                      width="81"
                      height="82"
                      viewBox="0 0 81 82"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="40.5"
                        cy="41"
                        r="37.7635"
                        stroke="white"
                        strokeWidth="5.47297"
                      />
                      <path
                        className="origin-center transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-45"
                        d="M50.7383 33.4925C50.7693 32.847 50.5433 32.2156 50.1099 31.7363C49.6764 31.257 49.0708 30.9689 48.4254 30.935L34.6517 30.2429C34.3319 30.2269 34.0121 30.274 33.7105 30.3815C33.4089 30.489 33.1314 30.6549 32.894 30.8697C32.4143 31.3034 32.1266 31.9099 32.0942 32.5558C32.0617 33.2016 32.2872 33.8339 32.7209 34.3136C33.1547 34.7932 33.7612 35.0809 34.407 35.1133L42.3021 35.51L29.309 47.26C28.8294 47.6937 28.5418 48.3001 28.5093 48.9459C28.4769 49.5916 28.7023 50.2238 29.136 50.7034C29.5697 51.183 30.1761 51.4706 30.8219 51.5031C31.4676 51.5355 32.0998 51.3101 32.5794 50.8764L45.5725 39.1264L45.1759 47.0215C45.1598 47.3413 45.2069 47.6612 45.3144 47.9628C45.422 48.2644 45.5878 48.5418 45.8026 48.7793C46.0174 49.0168 46.2768 49.2097 46.5661 49.3469C46.8554 49.4841 47.1689 49.563 47.4887 49.5791C47.8085 49.5952 48.1283 49.5481 48.4299 49.4405C48.7315 49.333 49.009 49.1671 49.2465 48.9523C49.484 48.7376 49.6768 48.4781 49.8141 48.1888C49.9513 47.8995 50.0302 47.586 50.0463 47.2662L50.7383 33.4925Z"
                        fill="white"
                      />
                    </svg>
                    <h3 className="text-sm sm:text-base text-left leading-[35px] lg:text-[36px] text-white font-medium">
                      {item.label}
                    </h3>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Quote />
      </section>

      {/* CTA Section */}
      <section className="relative py-4 lg:py-2">
        <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
          <Image
            src="/services-banner2.svg"
            alt="Airport"
            fill
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/[0.6]"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col items-center justify-center text-center">
            <h2 className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-medium text-white mb-4 sm:mb-6 lg:mb-8 leading-tight">
              Trusted Partners,
              <br />
              Reliable Freight Solutions
            </h2>
            <button className="bg-[#E8AF30] text-[#282828] px-6 hover:text-white cursor-pointer duration-300 transition sm:px-8 py-1 sm:py-2 text-sm sm:text-base lg:text-base rounded-lg font-normal">
              Why Nexus
            </button>
          </div>

          {/*<div*/}
          {/*    className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-8 text-white text-sm sm:text-base lg:text-lg font-light">*/}
          {/*    Sydney Airport*/}
          {/*</div>*/}
        </div>
      </section>

      {/* LinkedIn Section */}
      <div className="py-4">
        <LinkedinSection />
      </div>
    </div>
  );
};

export default ServicesPage;
