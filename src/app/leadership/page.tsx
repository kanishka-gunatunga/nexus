"use client";
import Image from "next/image";
import LinkedinSection from "@/Components/LinkedinSection";
import Quote from "@/Components/Quote";
import React, { useEffect, useState } from "react"; // Import useEffect and useState
import Nav from "@/Components/Nav";
import Link from "next/link";
import HeroSection from "@/Components/HeroSection";

import { leadership } from "@/sanity/lib/leadership"; 

// --- Type Definitions for Sanity Data ---
interface TeamMemberSanity {
  person_name?: string;
  person_designation?: string;
  person_photo?: string; 
  person_background_image?: string; 
  imageAlt?: string;
  link_text?: string; 
  link?: string; 
  description?: string; 
}

interface LeadershipPageData {
  hero_title?: string;
  Page_subtitle?: string;
  terms_member_1?: TeamMemberSanity;
  terms_member_2?: TeamMemberSanity;
  terms_member_3?: TeamMemberSanity;
  terms_member_4?: TeamMemberSanity;
  terms_member_5?: TeamMemberSanity;
  terms_member_6?: TeamMemberSanity;
  terms_member_7?: TeamMemberSanity;
  terms_member_8?: TeamMemberSanity;
  terms_member_9?: TeamMemberSanity;
}

// Unified Team Member type for easy mapping
interface TeamMember {
  id: number;
  name: string;
  title: string;
  flipBg: string;
  descriptionMain: string;
  linkText: string;
  linkUrl: string;
  image: string;
  imageAlt?: string;
}
// --- End Type Definitions ---


const LeadershipPage = () => {
  const [pageData, setPageData] = useState<LeadershipPageData | null>(null);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]); // State to hold transformed team members
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await leadership(); 

        if (data && data.length > 0) {
          const fetchedPageData = data[0];
          setPageData(fetchedPageData);

          // Transform the Sanity data into a unified array for easier mapping
          const membersArray: TeamMember[] = [];
          for (let i = 1; i <= 9; i++) { 
            const memberKey = `terms_member_${i}` as keyof LeadershipPageData;
            const san_member = fetchedPageData[memberKey] as TeamMemberSanity | undefined;

            if (san_member && san_member.person_name) { 
                membersArray.push({
                    id: i, // Assign an ID for React keys
                    name: san_member.person_name,
                    title: san_member.person_designation || '',
                    flipBg: san_member.person_background_image || '',
                    descriptionMain: san_member.description || '', 
                    linkText: san_member.link_text || '',
                    linkUrl: san_member.link || '/contactUs', 
                    image: san_member.person_photo || '',
                    imageAlt: san_member.imageAlt || san_member.person_name,
                });
            }
          }
          setTeamMembers(membersArray);

        } else {
          setPageData(null);
          setTeamMembers([]); // Clear team members if no page data
        }
      } catch (err) {
        console.error("Failed to fetch Leadership data:", err);
        setError("Failed to load page content.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); 

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading leadership team...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600">
        {error}
      </div>
    );
  }

  if (!pageData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        No leadership content available.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F6F6F6] poppins">
      <div className="relative mx-auto block">
        <Nav />
        <HeroSection
          title={pageData.hero_title || "TEAM NEXUS"} // Use Sanity hero_title
          desktopImage="/leadership.svg" // Consider adding a field for this in Sanity if dynamic
          mobileImage="/hero_arrow.svg" // Consider adding a field for this in Sanity if dynamic
          altText="Leadership hero section" // Consider adding a field for this in Sanity if dynamic
        />
      </div>
      <div
        id="member-section"
        className="relative container max-w-7xl mx-auto -top-22 lg:-top-50"
      >
        <div className="">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mb-4">
              <div className="flex items-center space-x-4">
                <div className="w-3 bg-[#E7E6DD] rounded-[9px] h-25 mt-1"></div>
                <p className="text-[#0F2043] font-medium text-sm z-50 md:text-base lg:text-[24px] leading-relaxed">
                  {pageData.Page_subtitle || "Like a finely tuned F1 pit crew, our team is always on standby – ready to keep your supply chain racing ahead at peak performance."}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 max-w-7xl mx-auto">
              {teamMembers.map((member) => {
               
                return (
                  <div
                    key={member.id}
                    className="relative w-full max-w-86 mx-auto sm:max-w-full h-80 sm:h-96 lg:h-[416px] flip-card-container"
                    style={{ boxSizing: "border-box" }}
                  >
                    <div className="flip-card-inner rounded-md shadow-lg w-full h-full">
                      <div className="flip-card-front bg-[#D5D4CC] border border-[#ABABA5] overflow-hidden w-full h-full">
                        {member.image && (
                          <Image
                            src={member.image}
                            alt={member.imageAlt || member.name}
                            layout="fill"
                            objectFit="cover"
                            quality={80}
                            className="absolute inset-0 z-0"
                          />
                        )}
                        <div className="absolute inset-0 text-start z-10 flex flex-col justify-end p-4 sm:p-6 lg:p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
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
                        style={{ backgroundImage: member.flipBg ? `url(${member.flipBg})` : 'none' }}
                      >
                        {/* Display the main description part */}
                        {member.descriptionMain && (
                          <p className="text-[#464646] text-xs sm:text-xs lg:text-sm leading-tight text-left mb-3 whitespace-pre-line">
                            {member.descriptionMain}
                          </p>
                        )}
                        {/* Display the link text if available */}
                        {member.linkText && (
                          <Link href={member.linkUrl} passHref>
                            <p className="text-[#464646] text-xs sm:text-xs lg:text-sm leading-tight text-left underline mb-2 cursor-pointer">
                              {member.linkText}
                            </p>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <Quote />
        </div>
      </div>

      <div className="relative h-64 sm:h-80 lg:h-96 lg:-mt-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/leader-banner.png" // You might want to get this from Sanity too
            alt="Commitment to Personalised Service banner"
            width={1000}
            height={400}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/[0.8]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col items-center justify-center text-center">
          <h2 className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-medium text-white mb-4 sm:mb-6 lg:mb-8 leading-tight">
            Commitment to
            <br />
            Personalised Service
          </h2>
          <Link href="/services">
            <button className="bg-[#E8AF30] text-[#282828] px-6 hover:text-white cursor-pointer duration-300 transition sm:px-8 py-1 sm:py-2 text-sm sm:text-base lg:text-base rounded-lg font-normal">
              View Services
            </button>
          </Link>
        </div>
      </div>

      <div className="py-6 lg:py-2">
        <LinkedinSection />
      </div>
    </div>
  );
};

export default LeadershipPage;