'use client ';
import React, { useState } from 'react';
import Image from 'next/image';


type HeroSectionProps = {
  title: string;
  imageSrc: string;
  imageAlt: string;
}

export default function HeroSection({ title, imageSrc, imageAlt }: HeroSectionProps) {
  return (<div id="hero-section"
    className="relative mx-auto -top-10 lg:-top-30 max-w-screen-4xl z-30">
    <div className="relative w-full h-[200px] sm:h-[250px] md:h-[400px] lg:h-[450px] xl:h-[500px]">
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={1000}
        height={400}
        className="w-full h-full lg:object-cover absolute inset-0 "
      />
      <div className="absolute inset-0 flex items-center left-5 lg:left-60 justify-start">
        <div className="text-left px-4">
          <h1 className="sm:text-[26px] md:text-[36px] lg:text-[46px]  font-normal text-[#0F2043] uppercase">
            {title}
          </h1>

        </div>
      </div>
    </div>
  </div>
  );
}