"use client";
import LinkedinSection from "@/Components/LinkedinSection";
import React, { useEffect, useState } from "react";
import Nav from "@/Components/Nav";
import HeroSection from "@/Components/HeroSection";
import { privacyPolicy } from "@/sanity/lib/privacy-policy";
import { PortableText } from "@portabletext/react";

interface PrivacyPolicyData {
  hero_title?: string;
  privacy_policy?: Array<any>;
}

const PrivacyPolicy = () => {

  const [pageData, setPageData] = useState<PrivacyPolicyData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await privacyPolicy();


        if (data && data.length > 0) {
          setPageData(data[0]);
        } else {
          setPageData(null);
        }
      } catch (err) {
        console.error("Failed to fetch Air & Sea Freight data:", err);
        setError("Failed to load page content.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return;
  }

  if (error) {
    return <div className="min-h-screen flex items-center justify-center text-red-600">{error}</div>;
  }

  if (!pageData) {
    return <div className="min-h-screen flex items-center justify-center">No content available.</div>;
  }
  return (
    <div className="min-h-screen bg-[#F6F6F6] poppins">
      <div className="relative mx-auto block">
        <Nav />

        <HeroSection
          title="Privacy Policy"
          desktopImage="/privacy-policy-header.svg"
          mobileImage="/hero_arrow.svg"
          altText="Track and trace hero section"
        />
      </div>
      <div id="member-section" className="relative">
        <div className="">
          <div className="max-w-7xl mx-auto px-8 sm:px-8 lg:px-8">
            <section className="font-poppins whitespace-normal font-medium text-xs sm:text-sm lg:text-base text-[#676767] mb-4 leading-relaxed text-justify md:text-left space-y-4">
              <h1 className="text-[#162F65] text-3xl md:text-4xl lg:text-[50px] py-4 font-bold">
                {pageData.hero_title || "Privacy Policy"}
              </h1>
              
                <PortableText value={pageData.privacy_policy} />
              

              
            </section>
          </div>
        </div>
      </div>

      <div className="py-6 lg:py-12">
        <LinkedinSection />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
