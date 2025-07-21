"use client"
import Image from "next/image";
import LinkedinSection from "@/Components/LinkedinSection";
import Quote from "@/Components/Quote";
import React from "react";
// import Link from "next/link";
import Nav from "@/Components/Nav";
import Link from "next/link";

const teamMembers = [
    {
        id: 1,
        name: "Samantha Smith",
        title: "Commercial Manager, Exports",
        flipBg: "/leadership/flip-8.png",
        description:
            "With over 25 years of experience,\n" +
            "Samantha turns the myth that exporting is overly complex into a routine, simple, and seamless reality for you. She is certified to handle dangerous goods and possesses extensive experience and knowledge in obtaining quarantine certification and handling food products. So, whether it's dangerous goods or oversized machinery, her deep technical knowledge and global connections ensure your shipments move smoothly and safely.\n\nTalk to Samantha about your export needs",
        image: "/Samantha Smith.png",
    },
    {
        id: 2,
        name: "Josie Murgadas",
        title: "Commercial Manager, Exports",
        flipBg: "/leadership/flip-5.png",
        description:
            "Josie, our door-to-door specialist with 30+ years navigating global suppliers and customs, consistently disproves the notion that imports are uncontrollable. Her expert coordination means she not only reacts to problems - but actively prevents them before they arise.\n\nReach out to Josie and discover smarter ways to import",
        image: "/Josie Murgadas.png",
    },
    {
        id: 3,
        name: "Tervin Pinto",
        title: "Operations Manager",
        flipBg: "/leadership/flip-9.png",
        description:
            "With 15+ years in logistics operations and qualified to handle dangerous goods, Tervin shatters the belief that shipments vanish into the void once dispatched. His proactive follow-up ensures each delivery is personally checked and confirmed for flawless execution.\n\nTervin can show you what proactive service really feels like",
        image: "/Tervin Pinto.png",
    },
    {
        id: 4,
        name: "Richard Mallon",
        title: "Director, Business Development",
        flipBg: "/leadership/flip-7.png",
        description:
            "For 30+ years, Richard has managed logistics for leading brands, listening, auditing, and crafting bespoke strategies that debunk the idea that freight companies don't truly understand your industry.\n\nBook a Supply Chain Review/Call with Richard - He always understands",
        image: "/Richard Mallon.png",
    },
    {
        id: 5,
        name: "Joaquim Nobre",
        title: "Portfolio Manager, Imports",
        flipBg: "/leadership/flip-4.png",
        description:
            "Joaquim has earned over three decades of client loyalty through consistent, honest service that overturns the notion that reliable logistics operators are hard to find. His expertise ensures your imports are always managed with trust, precision, and a smile, even under pressure.\n\nSpeak to Joaquim about long-term import strategies",
        image: "/Joaquim Nobre.png",
    },
    {
        id: 6,
        name: "Amber Weber",
        title: "Portfolio Manager, Exports",
        flipBg: "/leadership/flip-1.png",
        description:
            "Known for her speed, precision, and relentless follow-up, Amber flips the script on the belief that you must chase for updates. She keeps suppliers and carriers in constant communication so you can enjoy seamless service and regular updates with no prompting from your end.\n\nSay hi to Amber and she'll keep you updated with no headache",
        image: "/Amber Weber.png",
    },
    {
        id: 7,
        name: "Guha Shanka",
        title: "Chief Marketing Officer",
        flipBg: "/leadership/flip-3.png",
        description:
            "With over 20 years working across leading Japanese and multinational conglomerates, Guha strives to implement our deeply rooted customer-first philosophy. He consistently challenges the notion that that logistics providers don’t understand client needs, by putting client success at the heart of every strategic move and every day-to-day interaction. \n\nReach out to Guha about any questions you may have",
        image: "/Guha Shanka.png",
    },
    {
        id: 8,
        name: "Chamath Kumarasinghe",
        title: "Chief Financial Officer",
        flipBg: "/leadership/flip-2.png",
        description:
            "Chamath works every day to ensure that logistics and finance do not exist in separate silos. With sharp analytical precision and strategic foresight honed across APAC and Oceania, he ensures that we make prudent fiscal decisions that deliver ultimate value to our customers.\n\n",
        image: "/Chamath Kumarasinghe.png",
    },
    {
        id: 9,
        name: "Nikhil Haridas",
        title: "Operations Coordinator",
        flipBg: "/leadership/flip-6.png",
        description:
            "With a sharp eye for detail and a customer-first mindset, Nikil ensures every shipment from Purchase Order to final delivery is executed smoothly. He drives proactive communication and service consistency, keeping clients informed at every step.\n\n",
        image: "/Nikhil-Haridas.png",
    },
];

const LeadershipPage = () => {

    // const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#F6F6F6] poppins">
            <div className="relative mx-auto block">

                <Nav/>

                <div id="hero-section"
                     className="relative mx-auto -top-10 lg:-top-30 max-w-screen-4xl z-30">
                    <div className="relative w-full h-[200px] sm:h-[250px] md:h-[400px] lg:h-[450px] xl:h-[500px]">
                        <Image
                            src="/leadership.svg"
                            alt="Nexus X Logo"
                            width={1000}
                            height={400}
                            className="w-full h-full object-cover absolute inset-0"
                        />
                        <div className="absolute inset-0 flex items-center left-10 lg:left-60 justify-start">
                            <div className="text-left px-4">
                                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-normal text-[#0F2043] uppercase">
                                    TEAM NEXUS
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div id="member-section"
                 className="relative container max-w-7xl mx-auto -top-22 lg:-top-50">
                <div className="">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mb-4">
                            <div className="flex items-center space-x-4">
                                <div className="w-3 bg-[#E7E6DD] rounded-[9px] h-25 mt-1"></div>
                                <p className="text-[#0F2043] font-medium text-sm z-50 md:text-base lg:text-[24px] leading-relaxed">
                                    Like a finely tuned F1 pit crew, our team is always on standby – ready to keep your
                                    supply chain racing ahead at peak performance.
                                </p>
                            </div>
                        </div>

                        {/*<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">*/}
                        {/*    {teamMembers.map((member) => (*/}
                        {/*        <div*/}
                        {/*            key={member.id}*/}
                        {/*            className="relative w-full h-80 sm:h-96 lg:h-[416px] flip-card-container"*/}
                        {/*        >*/}
                        {/*            <div className="flip-card-inner rounded-md shadow-lg">*/}
                        {/*                <div*/}
                        {/*                    className="flip-card-front bg-[#D5D4CC] border border-[#ABABA5] overflow-hidden">*/}
                        {/*                    <Image*/}
                        {/*                        src={member.image}*/}
                        {/*                        alt={member.name}*/}
                        {/*                        layout="fill"*/}
                        {/*                        objectFit="cover"*/}
                        {/*                        quality={80}*/}
                        {/*                        className="absolute inset-0 z-0"*/}
                        {/*                    />*/}
                        {/*                    <div*/}
                        {/*                        className="absolute inset-0 text-start z-10 flex flex-col justify-end p-4 sm:p-6 lg:p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent">*/}
                        {/*                        <h3 className="text-white text-lg sm:text-xl font-bold mb-0.5"> /!* Adjusted from text-xl sm:text-2xl *!/*/}
                        {/*                            {member.name}*/}
                        {/*                        </h3>*/}
                        {/*                        <p className="text-gray-300 text-xs sm:text-sm font-medium"> /!* Adjusted from text-sm sm:text-base *!/*/}
                        {/*                            {member.title}*/}
                        {/*                        </p>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}

                        {/*                <div*/}
                        {/*                    className="flip-card-back relative bg-[#D5D4CC] border border-[#ABABA5] overflow-hidden flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-[url('/img.png')] bg-no-repeat bg-cover bg-center">*/}
                        {/*                    <p className="text-[#464646] text-xs relative sm:text-xs lg:text-sm leading-tight whitespace-pre-line text-left"> /!* Adjusted from text-xs sm:text-sm lg:text-base and leading-relaxed to leading-tight *!/*/}
                        {/*                        {member.description}*/}
                        {/*                    </p>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    ))}*/}
                        {/*</div>*/}

                        <div
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 max-w-7xl mx-auto">
                            {teamMembers.map((member) => {

                                const paragraphs = member.description.split('\n\n');
                                const lastParagraph = paragraphs[paragraphs.length - 1];
                                const otherParagraphs = paragraphs.slice(0, paragraphs.length - 1);

                                return (
                                    <div
                                        key={member.id}
                                        className="relative w-full max-w-86 mx-auto sm:max-w-full h-80 sm:h-96 lg:h-[416px] flip-card-container"
                                        style={{boxSizing: 'border-box'}}
                                    >
                                        <div className="flip-card-inner rounded-md shadow-lg w-full h-full">
                                            <div
                                                className="flip-card-front bg-[#D5D4CC] border border-[#ABABA5] overflow-hidden w-full h-full">
                                                <Image
                                                    src={member.image}
                                                    alt={member.name}
                                                    layout="fill"
                                                    objectFit="cover"
                                                    quality={80}
                                                    className="absolute inset-0 z-0"
                                                />
                                                <div
                                                    className="absolute inset-0 text-start z-10 flex flex-col justify-end p-4 sm:p-6 lg:p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                                                    <h3 className="text-white text-lg sm:text-xl font-bold mb-0.5">
                                                        {member.name}
                                                    </h3>
                                                    <p className="text-gray-300 text-xs sm:text-sm font-medium">
                                                        {member.title}
                                                    </p>
                                                </div>
                                            </div>

                                            <div
                                                className={`flip-card-back relative bg-[#D5D4CC] border border-[#ABABA5] overflow-hidden flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 bg-no-repeat bg-cover bg-center w-full h-full`}
                                                style={{backgroundImage: `url(${member.flipBg})`}}>
                                                {/*<p className="text-[#464646] text-xs sm:text-xs lg:text-sm leading-tight whitespace-pre-line text-left">*/}
                                                {/*    {member.description}*/}
                                                {/*</p>*/}
                                                {otherParagraphs.map((para, index) => (
                                                    <p key={index}
                                                       className="text-[#464646] text-xs sm:text-xs lg:text-sm leading-tight text-left mb-3">
                                                        {para}
                                                    </p>
                                                ))}
                                                {lastParagraph && (
                                                    <Link href="/contactUs" passHref>
                                                        <p className="text-[#464646] text-xs sm:text-xs lg:text-sm leading-tight text-left underline mb-2 cursor-pointer">
                                                            {lastParagraph}
                                                        </p>
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                    </div>
                    <Quote/>
                </div>
            </div>

            <div className="relative h-64 sm:h-80 lg:h-96 lg:-mt-20 overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/leader-banner.png"
                        // src="/leadership.svg"
                        alt="Airport"
                        width={1000}
                        height={400}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/90"></div>
                </div>

                <div
                    className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col items-center justify-center text-center">
                    <h2 className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-medium text-white mb-4 sm:mb-6 lg:mb-8 leading-tight">
                        Commitment to
                        <br/>
                        Personalised Service
                    </h2>
                    <Link href="/services">
                        <button
                            className="bg-[#E8AF30] text-[#282828] px-6 hover:text-white cursor-pointer duration-300 transition sm:px-8 py-1 sm:py-2 text-sm sm:text-base lg:text-base rounded-lg font-normal">
                            View Services
                        </button>
                    </Link>
                </div>

                {/*<div*/}
                {/*    className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-8 text-white text-sm sm:text-base lg:text-lg font-light">*/}
                {/*    Sydney Airport*/}
                {/*</div>*/}
            </div>

            <div className="py-6 lg:py-12">
                <LinkedinSection/>
            </div>
        </div>
    );
}

export default LeadershipPage;
