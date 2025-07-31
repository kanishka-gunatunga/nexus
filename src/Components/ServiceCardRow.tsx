'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


import { ServiceCardRowSection } from "@/sanity/lib/service-card-row";

interface ServiceCardData {
  section_title?: string;
  card_1_icon?: string;
  card_1_title?: string;
  card_1_button_link?: string;
  card_2_icon?: string;
  card_2_title?: string;
  card_2_button_link?: string;
  card_3_icon?: string;
  card_3_title?: string;
  card_3_button_link?: string;
  card_4_icon?: string;
  card_4_title?: string;
  card_4_button_link?: string;
}


export default function ServiceCardRow() {


  const [sectionData, setSectionData] = useState<ServiceCardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await ServiceCardRowSection();


        if (data && data.length > 0) {
          setSectionData(data[0]);
        } else {
          setSectionData(null); // No data found
        }
      } catch (err) {
        console.error("Failed to fetch Service Card Row section data:", err);
        setError("Failed to load Service Card Row section content.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this runs once on mount
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <div className="bg-[#F6F6F6] py-6 px-4">
      <h3 className="text-[#162F65] text-lg font-semibold mb-4 font-poppins">
       {sectionData?.section_title || " These services may also be of interest to you."}
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {[
          {
        icon: sectionData?.card_1_icon || "/icons/plane-black.svg",
        title: sectionData?.card_1_title || "AIR & SEA\nFREIGHT",
        link: sectionData?.card_1_button_link || "/air-and-sea-freight",
        alt: "Air & Sea Freight",
          },
          {
        icon: sectionData?.card_2_icon || "/icons/truck.svg",
        title: sectionData?.card_2_title || "ROAD & RAIL\nTRANSPORT",
        link: sectionData?.card_2_button_link || "/road-and-rail",
        alt: "Road & Rail",
          },
          {
        icon: sectionData?.card_3_icon || "/icons/box.svg",
        title: sectionData?.card_3_title || "INTEGRATED\nLOGISTICS",
        link: sectionData?.card_3_button_link || "/Integrated-logistics",
        alt: "Integrated Logistics",
          },
          {
        icon: sectionData?.card_4_icon || "/icons/cart.svg",
        title: sectionData?.card_4_title || "CUSTOMS CLEARANCE\n& COMPLIANCE",
        link: sectionData?.card_4_button_link || "/customs",
        alt: "Customs Clearance",
          },
        ].map((card, idx) => (
          <Link href={card.link} key={idx}>
        <div
          className={`group flex flex-col items-center justify-center text-center p-4 rounded-md w-full h-full transition shadow-md ${
            isActive(card.link)
          ? 'bg-[#162F65] text-white'
          : 'bg-white text-black hover:bg-[#162F65] hover:text-white'
          }`}
        >
          <Image
            src={card.icon}
            alt={card.alt}
            width={60}
            height={60}
            className={`mb-3 transition duration-300 ${
          isActive(card.link) ? 'invert' : 'group-hover:invert'
            }`}
          />
          <p className="font-poppins text-[17px] font-semibold leading-tight whitespace-pre-line">
            {card.title}
          </p>
        </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
