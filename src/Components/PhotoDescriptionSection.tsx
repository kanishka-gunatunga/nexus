'use client';

import Image from 'next/image';
import Link from 'next/link';

type Props = {
  title: string;
  paragraph1: string;
  subtitle: string;
  paragraph2: string;
  buttonText: string;
  buttonLink: string;
  imageSrc: string;
  imageAlt?: string;
  reverse?: boolean; 
};

export default function PhotoDescriptionSection({
  title,
  paragraph1,
  subtitle,
  paragraph2,
  buttonText,
  buttonLink,
  imageSrc,
  imageAlt = 'Image',
  reverse = false,
}: Props) {
  return (
    <div
      className={`bg-transparent px-0 py-6 md:py-10 flex flex-col lg:flex-row gap-10 ${
        reverse ? 'lg:flex-row-reverse' : ''
      }`}
    >
      {/* Image */}
      <div className="flex-1 flex justify-center items-center">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={620}
          height={460}
          className="rounded-[10px] sm:w-full md:w-full lg:max-w-[620px] h-auto lg:max-h-[460px] object-cover"
        />
      </div>

      {/* Text Content */}
      <div className="flex-1 flex flex-col justify-center">
        <h2 className="font-poppins font-semibold text-[33px]  text-[#162F65] mb-4">
          {title}
        </h2>

        {/* <p className="font-poppins font-medium text-[18px] text-[#676767] mb-4 leading-relaxed text-justify md:text-left"> */}
        <p className="font-poppins font-medium text-xs sm:text-sm lg:text-base text-[#676767] mb-4 leading-relaxed text-justify md:text-left">
          {paragraph1}
        </p>

        <p className="font-poppins font-medium text-[22px] text-[#162F65] mb-2">
          {subtitle}
        </p>

        {/* <p className="font-poppins font-medium text-[18px] text-[#676767] mb-4 leading-relaxed text-justify md:text-left"> */}
        <p className="font-poppins font-medium text-xs sm:text-sm lg:text-base text-[#676767] mb-4 leading-relaxed text-justify md:text-left">
          {paragraph2}
        </p>

        <Link href={buttonLink}>
          <button className="bg-[#162F65] text-white rounded-[10px] px-[25.86px] py-[7.89px] font-poppins text-[14px] hover:bg-[#1d3d87] transition duration-300">
            {buttonText}
          </button>
        </Link>
      </div>
    </div>
  );
}
