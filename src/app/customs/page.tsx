"use client";
import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import Nav from "@/Components/Nav";
import Image from "next/image";
import LinkedinSection from "@/Components/LinkedinSection";
import Quote from "@/Components/Quote";
import ServiceCardRow from "@/Components/ServiceCardRow";
import PhotoDescriptionSection from "@/Components/PhotoDescriptionSection";
import Link from "next/link";

const CustomsPage = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeService, setActiveService] = useState<string | null>(null);

  const services = [
    "Technology for Smarter Decisions",
    "Pre-Entry/Exit Strategy & Planning",
    "Entry/Exit Processing & Documentation",
    "HS Classification & Duty Optimization",
    "Post-Entry/Exit Compliance & Optimization",
    "Duty Drawbacks & Rebates",
    "Australian Trusted Trader Support",
  ];

  const serviceContents = {
    "Technology for Smarter Decisions":
      "Our advanced supply chain visibility tools, digital documentation, and emissions transparency empower our customers to make informed decisions.",
    "Pre-Entry/Exit Strategy & Planning":
      "We work with you to develop tailored import/export plans that maximise duty savings, accurately identify tariff classifications, and proactively address potential clearance issues before they arise.",
    "Entry/Exit Processing & Documentation":
      "Our team handles the complete lodgement of import and export declarations, electronic documentation, and cargo release coordination, removing the hassle for you.",
    "HS Classification & Duty Optimization":
      "By applying precise product classification and comprehensive tariff analysis, we minimise your duties and reduce the risk of penalties.",
    "Post-Entry/Exit Compliance & Optimization":
      "We review and amend declarations as needed, manage refund claims, and ensure your operations remain fully compliant amid changing regulations.",
    "Duty Drawbacks & Rebates":
      "Recover duties paid on exported goods efficiently through our streamlined drawback claims process, improving your cash flow.",
    "Australian Trusted Trader Support":
      "Receive expert assistance throughout the accreditation process, compliance checks, and audit preparation, helping your business benefit from faster clearance and reduced border inspections.",
  };

  const toggleDropdown = (service: string) => {
    setActiveService((prev) => (prev === service ? null : service));
  };

  return (
    <div className="min-h-screen bg-[#F6F6F6] poppins">
      {/* Header */}
      <Nav />

      {/* Hero Section */}
      <div
        id="hero-section"
        className="relative mx-auto -top-10 lg:-top-30 max-w-screen-4xl z-30"
      >
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
              <h1 className="text-l sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-normal text-[#0F2043] uppercase">
                CUSTOMS CLEARANCE
                <br />& COMPLIANCE
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Customs and Border Processing Section */}
      <section className="lg:-mt-47 py-16 lg:py-24 bg-[#F6F6F6] poppins relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#162F65] mb-6 lg:mb-8">
            Customs and
            <br />
            Border Processing
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Left Column - Image */}
            <div className="order-2 lg:order-1 flex flex-col h-full">
              <div className="relative flex-1 flex justify-center items-center">
                <Image
                  src="/customs_img1.svg"
                  alt="Business professionals working on customs documentation"
                  width={800}
                  height={600}
                  className="
        w-full h-full rounded-lg 
        sm:h-auto md:h-auto 
        sm:w-full md:w-full 
        lg:h-full lg:w-full 
      "
                />
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="order-1 lg:order-2 flex flex-col h-full">
              <p className="font-poppins font-medium text-[18px] text-[#676767] leading-relaxed mb-4 lg:mb-2">
                Navigating customs regulations and border processes in Australia
                and abroad can be complex, but it doesn&apos;t have to slow your
                supply chain. Our customs specialists manage every aspect - from
                HS classification and duty optimisation to documentation and
                compliance - ensuring your goods move across borders quickly,
                smoothly, and cost-effectively.
              </p>

              <div className="mb-6 lg:mb-2 bg-white rounded-lg p-6 flex-0">
                <h3 className="text-xl sm:text-2xl font-semibold text-[#162F65] mb-2">
                  Customs and Border Processing
                </h3>
                <p className="font-poppins font-medium text-[18px] text-[#676767] leading-relaxed">
                  Planning and being ready to engage with customs and border
                  authorities is essential for fast clearance and minimizing
                  delays. Our teams begin their work long before your goods
                  arrive at customs to ensure the best possible outcomes.
                </p>
              </div>

              {/* Technology Section */}
              {/* <div className="bg-[#162F65] rounded-lg mb-2 flex-0">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="w-full flex items-center justify-between text-white hover:bg-blue-800 transition-colors duration-200 rounded px-4 sm:px-6 h-[66px]"
                >
                  <span className="text-lg sm:text-xl font-semibold">
                    Technology for Smarter Decisions
                  </span>
                  {isExpanded ? (
                    <ChevronUp className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
                  )}
                </button>
                {isExpanded && (
                  <div className="mt-4 px-4 sm:px-6 pb-4 animate-fadeIn">
                    <div className="text-white text-sm sm:text-base border-l-2 border-orange-500 pl-4">
                      Our advanced technology platform provides real-time
                      insights and automated processes to streamline your
                      customs operations and reduce manual errors.
                    </div>
                  </div>
                )}
              </div> */}

              {/* Services List */}
              <div className="space-y-2 mb-2 flex-0">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() => toggleDropdown(service)}
                      className={`w-full flex items-center justify-between px-4 sm:px-6 transition-colors duration-200 h-[66px] rounded-lg ${
                        activeService === service
                          ? "bg-[#162F65] text-white"
                          : "bg-white text-blue-900 hover:bg-gray-50"
                      }`}
                    >
                      <span className="text-left text-base sm:text-lg font-semibold">
                        {service}
                      </span>
                      {activeService === service ? (
                        <ChevronUp className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
                      )}
                    </button>

                    {activeService === service && (
                      <div className="px-4 sm:px-6 pb-4 sm:pb-6 animate-fadeIn">
                        <div className="font-poppins font-medium text-[18px] text-[#676767] leading-relaxed">
                          {
                            serviceContents[
                              service as keyof typeof serviceContents
                            ]
                          }
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section - Tight to Image */}
          <div className="mt-6">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Customs doesn&apos;t have to be a block...
            </h3>
            <p className="font-poppins font-medium text-[18px] text-[#676767] leading-relaxed mb-6 max-w-4xl">
              If you and your goods arrive with a good plan and in compliance
              with local regulations. We make that happen by simplifying
              compliance and reducing inspection delays.
            </p>
            <Link href="/contactUs">
              <button className="bg-[#162F65] text-white rounded-[10px] px-[25.86px] py-[7.89px] font-poppins text-[14px] hover:bg-[#1d3d87] transition duration-300">
                Simplify Customs with Us
              </button>
            </Link>
          </div>
        </div>

        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fadeIn {
            animation: fadeIn 0.3s ease-out;
          }
        `}</style>
      </section>

      {/* Supply Chain Consultancy Section */}
      <section className="py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PhotoDescriptionSection
            title="Supply Chain Consultancy & Audits"
            paragraph1="Our comprehensive audits uncover inefficiencies across your entire supply chain from procurement to last-mile delivery. We provide actionable insights and customised roadmaps that cut costs and improve service quality. We also guide you through the process of becoming an Australian Trusted Trader (ATT), unlocking benefits such as reduced red tape at the border, priority goods processing, duty deferral options, and a dedicated Australian Border Force account manager."
            subtitle="Audits are more than box-ticking exercises..."
            paragraph2="We turn audit insights into immediate ROI, delivering cost savings and enhanced performance from day one."
            paragraph3=""
            buttonText="Get Started with a Supply Chain Audit"
            buttonLink="/contactUs"
            imageSrc="/customs_img2.png"
            reverse={true}
          />
        </div>
      </section>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ServiceCardRow />
      </div>
      <Quote />

      {/* CTA Section */}
      <section className="relative py-4 lg:py-2">
        <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/customs_banner.svg"
              alt="Airport"
              width={1000}
              height={400}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/35"></div>
          </div>

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

export default CustomsPage;
