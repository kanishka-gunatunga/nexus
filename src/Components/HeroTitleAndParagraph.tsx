'use client';


type Props = {
  title: string;
  paragraph1: string;
  paragraph2: string;
};

export default function HeroTitleAndParagraph({
  title,
  paragraph1,
  paragraph2,
}: Props) {
  return (
    <div
      className={`bg-transparent px-6 md:px-10 flex flex-col md:flex-row gap-6
        'md:flex-row-reverse' : ''
      }`}
    >
    
    
      {/* Text Content */}
      <div className="flex-1 flex flex-col justify-center">
        <h2
          className="font-poppins font-bold text-[55px] text-[#162F65] mb-4 max-w-[600px] leading-tight"
        >
          {title}
        </h2>

        <p className="font-poppins font-medium text-[19px] text-[#676767] mb-4 leading-relaxed">
          {paragraph1}
        </p>

        <p className="font-poppins font-medium text-[19px] text-[#676767] mb-6 leading-relaxed">
          {paragraph2}
        </p>
      </div>
    </div>
  );
}
