"use client";
import Image from "next/image";
import LinkedinSection from "@/Components/LinkedinSection";
import React from "react";
import Nav from "@/Components/Nav";
import Quote from "@/Components/Quote";
import Link from "next/link";
import HeroSection from "@/Components/HeroSection";

const TrackAndTrace = () => {
  //   const [activeTab, setActiveTab] = useState("track");

  const features = [
    {
      icon: "/cargo_icon.svg",
      title: "Cargo Tracker",
      description:
        "A Global map, showing a complete view of your air and sea freight status end-to-end, including every consignment's current location with accurate ETAs, so you can plan better.",
    },
    {
      icon: "/performance_icon.svg",
      title: "Performance Reports",
      description:
        "Access 12-month trends on shipping performance, container behaviour across carriers and ports, and potential delays. Visual performance data lets you identify patterns and model future outcomes, helping you optimize your operations.",
    },
    {
      icon: "/order_icon.svg",
      title:
        "Order Manager for customers with large volumes and multiple shipments",
      description:
        "Full Control from purchase order to Delivery, including providing your team and suppliers with secure, real-time access to shipment data. Manage cargo releases, shipment optimization, packing manifests, exceptions, and approvals in one central platform, streamlining the entire fulfilment process.",
    },
    {
      icon: "/time_icon.svg",
      title: "Real-Time Alerts",
      description:
        "Automated notifications on delays, disruptions, and milestone updates let your team take immediate action, avoiding surprises and improving customer service.",
    },
    {
      icon: "/co2_icon.svg",
      title: "CO₂ Visibility",
      description:
        "Neo provides full visibility into your carbon emissions per shipment, enabling your team to track sustainability goals, reduce waste, and support greener supply chain initiatives.",
    },
    {
      icon: "/multiplatform_icon.svg",
      title: "Multiplatform Accessibility",
      description:
        "Neo's mobile-responsive dashboards provide instant access to real-time insights from any device.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F6F6F6] poppins">
      <div className="relative mx-auto block">
        <Nav />

        {/* <div id="hero-section"
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
                </div> */}

        <HeroSection
          title="TRACK AND TRACE"
          desktopImage="/trackAndTrace_hero_banner.svg"
          mobileImage="/hero_arrow.svg"
          altText="Track and trace hero section"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:-mt-28">
        {/* Track Now Section */}
        <div className="py-6 md:py-10">
          <h2 className="font-poppins font-bold text-[35px] lg:text-[50px] text-[#162F65] mb-8 lg:mb-16 leading-tight">
            Track Now
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left side - Dashboard Image */}
            <div className="order-2 lg:order-1 lg:-ml-42">
              <div className="relative w-full">
                <Image
                  src="/trackAndTrace_img1.svg"
                  alt="Tracking Portal Dashboard"
                  width={600}
                  height={450}
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
              </div>
            </div>

            {/* Right side - Content */}
            <div className="order-1 lg:order-2 space-y-6">
              <div className="space-y-4">
                <p className="font-poppins font-medium sm:text-[14px] md:text-[16px] lg:text-[18px] text-[#676767] leading-relaxed">
                  Track and trace your cargo as it makes its journey with the
                  Neo dashboard from Cargowise.
                </p>
                <p className="font-poppins font-medium sm:text-[14px] md:text-[16px] lg:text-[18px] text-[#676767] leading-relaxed">
                  Real-time insights of your transactions, shipments,
                  declarations, and orders give you the visibility you have been
                  asking for.
                </p>
              </div>

              <div className="pt-4">
                <Link href="https://www-n60prd.wisegrid.net/Portals/NEO/Desktop#/login/index">
                  <button className="bg-[#162F65] text-white rounded-[10px] px-[25.86px] py-[7.89px] font-poppins text-[14px] hover:bg-blue-950 hover:scale-105 transition-all duration-300">
                    Check My Tracking
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Route Visualiser Section */}
        <div className="py-6 md:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center relative">
            {/* Left side - Content */}
            <div className="order-1 lg:order-1 space-y-6 z-10">
              <h2 className="font-poppins font-bold text-[35px] lg:text-[55px] text-[#162F65] mb-8 lg:mb-2 leading-tight">
                Route Visualiser
              </h2>
              <p className="font-poppins font-medium sm:text-[18px] md:text-[18px] lg:text-[22px] text-[#676767] leading-relaxed">
                View your shipment&apos;s journey on a global map powered by
                satellite AIS and flight transponders for complete visibility
                from Purchase order to delivery. Color-coded alerts highlight
                delays in departure or arrival, giving you actionable insights.
              </p>
            </div>

            {/* Right side - Route Map Image */}
            <div className="order-2 lg:order-2 relative -ml-10 lg:-ml-92">
              <div className="w-full max-w-[1200px] h-auto">
                <Image
                  src="/trackAndTrace_img2.svg"
                  alt="Route Current Booking Log"
                  width={1200}
                  height={650}
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <section className="py-6 md:py-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid gap-6 sm:gap-8 md:grid-cols-1 lg:grid-cols-1">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-[#E3E3E3] rounded-[10px] p-6 sm:p-8 transition-all duration-300 ease-in-out hover:bg-[#E7E6DD]"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-6 lg:gap-12">
                    {/* Icon Image */}
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center">
                        <Image
                          src={feature.icon}
                          alt={`${feature.title} Icon`}
                          width={85}
                          height={77}
                          className="w-12 h-12 sm:w-16 sm:h-16 lg:w-[85px] lg:h-[77px] object-contain"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-poppins text-xl sm:text-2xl font-semibold text-[#162F65] mb-3 sm:mb-4 leading-tight">
                        {feature.title.includes("CO₂") ? (
                          <>
                            <span style={{ color: "#72942E" }}>CO₂</span>{" "}
                            {feature.title.replace("CO₂", "").trim()}
                          </>
                        ) : (
                          feature.title
                        )}
                      </h3>

                      <p className="font-poppins text-sm sm:text-base lg:text-lg text-[#162F65] font-medium leading-[28px]">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="py-6 md:py-10">
          <div className="bg-[#162F65] rounded-lg px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-12">
            <div className="max-w-4xl mx-auto flex flex-row items-center justify-center gap-3 sm:gap-4 text-left">
              {/* Icon Image */}
              <Image
                src="/call_icon1.svg"
                alt="Call Icon"
                width={20}
                height={32}
                className="w-[20px] h-[32px] sm:w-[24px] sm:h-[36px] lg:w-[29.17px] lg:h-[41.67px] object-contain"
              />

              {/* Text with links */}
              <p className="font-poppins sm:text-[24px] md:text-[24px] lg:text-[26px] text-white leading-snug">
                Call Richard on{" "}
                <span
                  className="underline cursor-pointer"
                  onClick={() => {
                    const confirmed = window.confirm(
                      "Do you want to call Richard?"
                    );
                    if (confirmed) {
                      window.location.href = "tel:+61730643904";
                    }
                  }}
                >
                  Number
                </span>{" "}
                for a free demo or to{" "}
                <Link href="/contactUs" className="underline cursor-pointer">
                  Reach Us
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section with Background Image */}
      <div
        className="relative h-64 sm:h-80 lg:h-96 lg:-mt-20 overflow-hidden"
        style={{ marginTop: "100px" }}
      >
        <div className="absolute inset-0">
          <Image
            src="/trackAndTrace_banner.svg"
            alt="Airport"
            width={1000}
            height={400}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/[0.6]"></div>
        </div>
        <Quote />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col items-center justify-center text-center">
          <h2 className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-medium text-white mb-4 sm:mb-6 lg:mb-8 leading-tight">
            Efficiency, Visibility, and Accuracy - Delivered
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

      <div className="py-6 lg:py-12">
        <LinkedinSection />
      </div>
    </div>
  );
};

export default TrackAndTrace;
