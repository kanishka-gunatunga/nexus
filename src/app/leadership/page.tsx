"use client"
import Image from "next/image";
import LinkedinSection from "@/Components/LinkedinSection";
import Quote from "@/Components/Quote";
import React from "react";
// import Link from "next/link";
import Nav from "@/Components/Nav";

const teamMembers = [
    {
        id: 1,
        name: "Samantha Smith",
        title: "Commercial Manager, Exports",
        description:
            "With over 25 years of experience,\n" +
            "Samantha turns the myth that exporting is overly complex into a routine, simple, and seamless reality for you. She is certified to handle dangerous goods and possesses extensive experience and knowledge in obtaining quarantine certification and handling food products. So, whether it's dangerous goods or oversized machinery, her deep technical knowledge and global connections ensure your shipments move smoothly and safely.\n\nTalk to Samantha about your export needs",
        image: "/Samantha Smith.png",
    },
    {
        id: 2,
        name: "Josie",
        title: "Commercial Manager, Exports",
        description:
            "Josie, our door-to-door specialist with 30+ years navigating global suppliers and customs, consistently disproves the notion that imports are uncontrollable. Her expert coordination means she not only reacts to problems - but actively prevents them before they arise.\n\nReach out to Josie and discover smarter ways to import",
        image: "/Samantha Smith.png",
    },
    {
        id: 3,
        name: "Tervin Pinto",
        title: "Operations Manager",
        description:
            "With 15+ years in logistics operations and qualified to handle dangerous goods, Tervin shatters the belief that shipments vanish into the void once dispatched. His proactive follow-up ensures each delivery is personally checked and confirmed for flawless execution.\n\nTervin can show you what proactive service really feels like",
        image: "/Tervin Pinto.png",
    },
    {
        id: 4,
        name: "Richard Mallon",
        title: "Director, Business Development",
        description:
            "For 30+ years, Richard has managed logistics for leading brands, listening, auditing, and crafting bespoke strategies that debunk the idea that freight companies don't truly understand your industry.\n\nBook a Supply Chain Review/Call with Richard - He always understands",
        image: "/Richard Mallon.png",
    },
    {
        id: 5,
        name: "Joaquim Nobre",
        title: "Portfolio Manager, Imports",
        description:
            "Joaquim has earned over three decades of client loyalty through consistent, honest service that overturns the notion that reliable logistics operators are hard to find. His expertise ensures your imports are always managed with trust, precision, and a smile, even under pressure.\n\nSpeak to Joaquim about long-term import strategies",
        image: "/Joaquim Nobre.png",
    },
    {
        id: 6,
        name: "Amber Weber",
        title: "Portfolio Manager, Exports",
        description:
            "Known for her speed, precision, and relentless follow-up, Amber flips the script on the belief that you must chase for updates. She keeps suppliers and carriers in constant communication so you can enjoy seamless service and regular updates with no prompting from your end.\n\nSay hi to Amber and she'll keep you updated with no headache",
        image: "/Amber Weber.png",
    },
    {
        id: 7,
        name: "Guha Shanka",
        title: "Director, Business Development",
        description:
            "Known for her speed, precision, and relentless follow-up, Amber flips the script on the belief that you must chase for updates. She keeps suppliers and carriers in constant communication so you can enjoy seamless service and regular updates with no prompting from your end.\n\nSay hi to Amber and she'll keep you updated with no headache",
        image: "/Guha Shanka.png",
    },
    {
        id: 8,
        name: "Chamath Kumarasinghe",
        title: "Portfolio Manager, Imports",
        description:
            "Known for her speed, precision, and relentless follow-up, Amber flips the script on the belief that you must chase for updates. She keeps suppliers and carriers in constant communication so you can enjoy seamless service and regular updates with no prompting from your end.\n\nSay hi to Amber and she'll keep you updated with no headache",
        image: "/Chamath Kumarasinghe.png",
    },
    {
        id: 9,
        name: "Amber Weber",
        title: "Portfolio Manager, Exports",
        description:
            "Known for her speed, precision, and relentless follow-up, Amber flips the script on the belief that you must chase for updates. She keeps suppliers and carriers in constant communication so you can enjoy seamless service and regular updates with no prompting from your end.\n\nSay hi to Amber and she'll keep you updated with no headache",
        image: "/No Name.png",
    },
];

export default function Index() {

    // const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#F6F6F6] poppins">
            <div className="relative block">

                <Nav/>

                <div id="hero-section"
                     className="relative mx-auto -top-10 lg:-top-20 max-w-screen-4xl z-30">
                    <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px]">
                        <Image
                            src="/img_2.png"
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
                 className="relative -top-20">
                <div className="">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl mb-4">
                            <div className="flex items-center space-x-4">
                                <div className="w-3 bg-[#E7E6DD] rounded-[9px] h-25 mt-1"></div>
                                <p className="text-[#0F2043] font-medium text-sm z-50 md:text-base lg:text-[24px] leading-relaxed">
                                    Like a finely tuned F1 pit crew, our team is always on standby –
                                    ready to keep your supply chain racing ahead at peak performance.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
                            {teamMembers.map((member) => (
                                <div
                                    key={member.id}
                                    className="relative w-full h-80 sm:h-96 lg:h-[416px] flip-card-container"
                                >
                                    <div className="flip-card-inner rounded-md shadow-lg">
                                        <div
                                            className="flip-card-front bg-[#D5D4CC] border border-[#ABABA5] overflow-hidden">
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
                                                <h3 className="text-white text-xl sm:text-2xl font-bold mb-1">
                                                    {member.name}
                                                </h3>
                                                <p className="text-gray-300 text-sm sm:text-base font-medium">
                                                    {member.title}
                                                </p>
                                            </div>
                                        </div>

                                        <div
                                            className="flip-card-back relative bg-[#D5D4CC] border border-[#ABABA5] overflow-hidden flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-[url('/img.png')] bg-no-repeat bg-cover bg-center">
                                            <p className="text-[#464646] text-xs relative sm:text-sm lg:text-base leading-relaxed whitespace-pre-line text-center">
                                                {member.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <Quote/>
                </div>
            </div>

            <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/airport.png"
                        alt="Airport"
                        width={1000}
                        height={400}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>

                <div
                    className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col items-center justify-center text-center">
                    <h2 className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-medium text-white mb-4 sm:mb-6 lg:mb-8 leading-tight">
                        Efficiency, Visibility, and
                        <br/>
                        Accuracy - Delivered
                    </h2>
                    <button
                        className="bg-[#E8AF30] text-[#282828] px-6 hover:text-white cursor-pointer duration-300 transition sm:px-8 py-1 sm:py-2 text-sm sm:text-base lg:text-base rounded-lg font-normal">
                        View Services
                    </button>
                </div>

                <div
                    className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-8 text-white text-sm sm:text-base lg:text-lg font-light">
                    Sydney Airport
                </div>
            </div>

            <div className="py-6 lg:py-12">
                <LinkedinSection/>
            </div>
        </div>
    );
}
