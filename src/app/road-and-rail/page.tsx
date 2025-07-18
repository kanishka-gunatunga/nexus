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

const roadAndRail = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F6F6F6] poppins">
      <div className="relative max-w-7xl mx-auto block">
        <Nav />

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
                <h1 className="text-l sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-4xl font-normal text-[#0F2043] uppercase">
                  ROAD & RAIL TRANSPORT
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HeroTitleAndParagraph
          title="Road & Rail Transport"
          paragraph1="Wheels and tracks alone aren't enough to successfully navigate Australia's scale - you'll need strategy, strong partnerships, on-ground expertise, and industry experience."
          paragraph2="Our experts build road and rail services that provide reliable coverage across every corridor, from regional pickups to metro deliveries and everything in between. With over 25 years of experience, our teams match every job to the right provider and mode, so that your freight arrives safely, on-time."
        />

        {/* first card */}
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 ">
          <PhotoDescriptionSection
            title="Road Transport"
            paragraph1="From origin, where our agents secure sharp ex works rates, to port handover, to cross-country highways via hand-picked carriers, and all the way through to final-mile delivery - we manage it all and coordinate the entire journey with precision."
            paragraph3="Whether it's a 100 km hop or a 1,000 km haul, we assign the right operator for each shipment, ensuring reliable transit and competitive pricing every step of the way."
            subtitle="Think only global players can
offer true end-to-end logistics?"
            paragraph2={`Think again. Our global agent network and route-specialist carriers deliver unified origin, domestic, and final-mile service - without the "global" price tag.`}
            buttonText="Book Road Transport"
            buttonLink="/air-freight-quote"
            imageSrc="/road-and-rail-img1.png"
            reverse={false}
          />
        </div>

        {/* second card */}
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 ">
          <PhotoDescriptionSection
            title="Rail (and Road) Freight"
            paragraph1="For high-volume domestic moves, rail freight offers unbeatable efficiency, especially when paired with our last-mile delivery options. Whether you're transporting containerised freight, pallets, or bulk commodities, we leverage Australia's major rail corridors to keep your costs low and your operations moving."
            subtitle="Rail doesn't have to be slow or rigid..."
            paragraph2="You just need to plan it right, and that's where we shine. Our intermodal planning blends rail's long-haul efficiency with the flexibility of on-road delivery - giving you predictable transit times, scalable capacity, and a serious cost advantage."
            paragraph3=""
            buttonText="Explore Rail Options"
            buttonLink="/sea-freight-quote"
            imageSrc="/road-and-rail-img2.png"
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
            src="/roadAndRail_banner.svg"
            alt="Airport"
            width={1000}
            height={400}
            className="w-full h-full object-cover"
          />
          {/* <div className="absolute inset-0 bg-black/90"></div> */}
        </div>
        <Quote />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col items-center justify-center text-center">
          <h2 className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-medium text-white mb-4 sm:mb-6 lg:mb-8 leading-tight">
            Global Reach
            <br />
            Regional Expertise
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

export default roadAndRail;
