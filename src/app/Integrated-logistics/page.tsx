"use client";
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

const integratedLogistics = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F6F6F6] poppins">
      <div className="relative mx-auto block">
        <Nav />

        <HeroSection
          title="INTEGRATED LOGISTICS & SPECIAL PROJECTS"
          desktopImage="/hero-images/intergrated-logi.svg"
          mobileImage="/hero_arrow.svg"
          altText="Track and trace hero section"
        />

        {/* <div id="hero-section"
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
                                <h1 className="text-xl max-w-[200px] sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-normal text-[#0F2043] uppercase">
                                   Integrated Logistics
                                </h1>
                            </div>
                        </div>
                    </div>
                </div> */}
      </div>

      <div className="relative top-[-100px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HeroTitleAndParagraph
          title="Integrated Logistics & Special Projects"
          paragraph1="Seamlessly manage your entire supply chain with integrated logistics designed for Australia's unique challenges. Our scalable solutions bring together warehousing, fulfilment, and specialised transport - giving you full visibility, tighter control, and cost efficiency in one streamlined service."
          paragraph2=""
        />

        {/* first card */}
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 ">
          <PhotoDescriptionSection
            title="3PL & Warehousing"
            paragraph1="Scalable, secure, and strategically positioned, our warehousing network is designed to flex with your business. From pallet storage to bonded facilities, our third-party logistics solutions ensure your goods are always accessible, protected, and ready to move."
            subtitle2="Think flexible warehousing is only for enterprise giants?"
            subtitle1=""
            paragraph2="Not at all. Our local presence and global reach mean you can access enterprise-grade service without the bloated overhead."
            paragraph3=""
            buttonText="Explore Contract Logistics"
            buttonLink="/air-freight-quote"
            imageSrc="/services/3pl.png"
            reverse={false}
          />
        </div>

        {/* second card */}
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 ">
          <PhotoDescriptionSection
            title="Fulfilment & E-Commerce Services"
            paragraph1="We power fulfilment for brands that can't afford to miss a beat. Whether you're managing a multichannel retail operation or shipping direct-to-consumer, we handle pick-pack, kitting, labelling, and returns with speed and precision."
            subtitle2="Outsourced fulfilment won't cost you control..."
            subtitle1=""
            paragraph2="If you choose the right logistics provider. Our partner centers use advanced tech and SLA-driven systems to give you real-time visibility and seamless performance for an in-house-like experience."
            paragraph3=""
            buttonText="Get a tailored Assessment and Quote"
            buttonLink="/sea-freight-quote"
            imageSrc="/services/fullfillment.png"
            reverse={true}
          />
        </div>

        {/* third card */}
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 ">
          <PhotoDescriptionSection
            title="Inventory Management & Optimization"
            paragraph1="Carrying too much stock can tie up your capital, but carrying too little puts order fulfilment at risk. We can help you strike the perfect balance, using advanced WMS platforms and demand forecasting. You'll enjoy reduced storage costs, avoid stockouts, and keep your supply chain agile."
            subtitle2="You don't need large stocks to minimize disruptions..."
            subtitle1=""
            paragraph2="You need a reliable, agile logistics partner. Our lean, data-led strategies ensure you only carry what you need - nothing more, nothing less - all while being responsive to shifting demand."
            paragraph3=""
            buttonText="Optimize Your Inventory with Us"
            buttonLink="/air-freight-quote"
            imageSrc="/services/inventory-management.png"
            reverse={false}
          />
        </div>

        {/* fourth card */}
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 ">
          <PhotoDescriptionSection
            title="Special Project Transport"
            paragraph1="From heavy-lift to out-of-gauge, we're always up for the toughest transport challenges. Our team manages permits, escorts, route planning, and intermodal transfers, so your cargo moves smoothly, safely, and on schedule."
            subtitle2="Project cargo doesn't need to be an endless logistics headache..."
            subtitle1=""
            paragraph2="Our in-house consultants plan every move from start to finish, taking complexity off your plate, and serving peace of mind instead."
            paragraph3=""
            buttonText="Book an Unusual Move"
            buttonLink="/air-freight-quote"
            imageSrc="/services/special-project.png"
            reverse={true}
          />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ServiceCardRow />
      </div>

      <div
        className="relative h-64 sm:h-80 lg:h-96 lg:-mt-20 overflow-hidden"
        style={{ marginTop: "100px" }}
      >
        <div className="absolute inset-0">
          <Image
            src="/services/integrt-banner.svg"
            alt="Airport"
            width={1000}
            height={400}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col items-center justify-center text-center">
          <h2 className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-medium text-white mb-4 sm:mb-6 lg:mb-8 leading-tight">
            Commitment to
            <br />
            Personalized Service
          </h2>
          <button className="bg-[#E8AF30] text-[#282828] px-6 hover:text-white cursor-pointer duration-300 transition sm:px-8 py-1 sm:py-2 text-sm sm:text-base lg:text-base rounded-lg font-normal">
            Why Nexus
          </button>
        </div>
      </div>
      <Quote />
      <div className="py-6 lg:py-12">
        <LinkedinSection />
      </div>
    </div>
  );
};

export default integratedLogistics;
