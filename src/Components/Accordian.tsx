"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

type CardItem = {
  title: string;
  content: string;
};

type AccordionItem = {
  title: string;
  content: string;
};

type AccordianProps = {
  image: string;
  description?: string;
  cards: CardItem[];
  accordionItems: AccordionItem[];
};

const Accordian: React.FC<AccordianProps> = ({
  image,
  description,
  cards,
  accordionItems,
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleToggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section>
      <div className="grid lg:grid-cols-2 gap-8 items-stretch">
        {/* Left Column - Image */}
        <div className="flex flex-col h-full">
          <div className="relative flex-1 flex justify-center items-center h-full">
            <Image
              src={image}
              alt="Focus"
              width={800}
              height={600}
              className="
          w-full h-full 
          object-cover 
          rounded-lg 
          sm:h-auto md:h-auto 
          sm:w-full md:w-full 
          lg:h-full lg:w-full 
          max-h-[500px]
          shadow
        "
            />
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="flex flex-col h-full">
          {/* Description */}
          <div className="font-poppins font-medium text-[18px] text-[#676767] leading-relaxed mb-4">
            {description}
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-4">
            {cards.map((card, idx) => (
              <div key={idx} className="bg-white rounded-[10px] p-8 shadow-sm">
                <h3 className="font-poppins font-semibold text-[18px] text-[#162F65] mb-1">
                  {card.title}
                </h3>
                <p className="font-poppins font-medium text-[16px] text-[#676767] sm:text-[16px]">
                  {card.content}
                </p>
              </div>
            ))}
          </div>

          {/* Accordion */}
          <div className="mt-2 flex flex-col gap-4">
            {accordionItems.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={index}
                  className="rounded-[10px] overflow-hidden shadow-sm"
                >
                  <button
                    className={`w-full flex justify-between items-center px-4 py-4 transition-colors duration-500 ${
                      isActive
                        ? "bg-[#162F65] text-white"
                        : "bg-white text-black hover:bg-gray-100"
                    }`}
                    onClick={() => handleToggle(index)}
                  >
                    <span
                      className={`text-left font-poppins font-semibold text-[18px] text-[#162F65] ${
                        isActive ? "text-white" : ""
                      }`}
                    >
                      {item.title}
                    </span>
                    <ChevronDown
                      className={`transform transition-transform duration-500 ${
                        isActive ? "rotate-180" : ""
                      } ${isActive ? "text-white" : "text-black"}`}
                      size={20}
                    />
                  </button>
                  {isActive && (
                    <div className="px-4 py-3 font-poppins font-medium text-[16px] text-[#676767] sm:text-[16px]">
                      {item.content}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Accordion Section */}
    </section>
  );
};

export default Accordian;
