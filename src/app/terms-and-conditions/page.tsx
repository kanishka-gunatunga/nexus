"use client"
import Image from "next/image";
import LinkedinSection from "@/Components/LinkedinSection";
import React from "react";
// import Link from "next/link";
import Nav from "@/Components/Nav";



const TermsAndConditions = () => {


    return (
        <div className="min-h-screen bg-[#F6F6F6] poppins">
            <div className="relative max-w-7xl mx-auto block">

                <Nav />

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
                        <div className="absolute inset-0 flex items-center left-10 lg:left-60">
                            <div className="text-left px-4">
                                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-normal text-[#0F2043] uppercase">
                                    Terms and
                                </h1>
                                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-normal text-[#0F2043] uppercase">
                                    Conditions
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>

            </div>



            {/* <div className="cros-x-hero flex relative">
                <div className="relative w-[70%] h-[200px] flex x-content-div">
                    <div className="clip-path "></div>
                    <Image src="/X-hero-new.png" alt="X" className="x1" height={500} width={500} />
                </div>
                <div className="absolute top-0 right-0 w-[100%] h-[200px] flex justify-end items-center clip-path-2-div">
                    <div className="w-[35%] h-[200px] right-image-div relative">
                        
                        <div className="clip-path-2"></div>
                    </div>
                </div>




                
                <div className="absolute top-0 left-0 w-full">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[8rem] sm:h-[10rem] md:h-[12.5rem] lg:h-[14rem] xl:h-[16rem] flex flex-col justify-center">
                        <h2 className="hero-title-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-normal text-[#0F2043] uppercase">
                            INTEGRATED LOGISTICS
                        </h2>
                        <h2 className="hero-title-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-normal text-[#0F2043] uppercase">
                            & SPECIAL PROJECTS
                        </h2>
                    </div>
                </div>


            </div> */}

            <div
                className="relative ">
                <div className="">
                    <div className="max-w-7xl mx-auto px-8 sm:px-8 lg:px-8">
                        <p className="font-poppins font-medium text-xs sm:text-sm lg:text-base text-[#676767] mb-4 leading-relaxed text-justify md:text-left">
                            At FastMove Freight & Logistics, we are committed to protecting your privacy. This privacy policy explains how we collect, use, store, and share your personal information when you use our services, including shipping, tracking, and freight handling.
                        </p>
                        <p className="font-poppins font-medium text-xs sm:text-sm lg:text-base text-[#676767] mb-4 leading-relaxed text-justify md:text-left">
                            We collect information that helps us provide better and safer logistics services. This may include your name, contact number, email, address, and company details. When you book a shipment, we also collect package information such as pickup and delivery locations, dimensions, weight, and any special instructions.
                        </p>
                        <p className="font-poppins font-medium text-xs sm:text-sm lg:text-base text-[#676767] mb-4 leading-relaxed text-justify md:text-left">
                            We use your information to process shipments, provide real-time tracking, send notifications, and respond to your inquiries. Your data also helps us improve our logistics operations, customer service, and technology systems.
                        </p>
                        <p className="font-poppins font-medium text-xs sm:text-sm lg:text-base text-[#676767] mb-4 leading-relaxed text-justify md:text-left">
                            We do not sell or rent your personal data to third parties. However, we may share your details with trusted partners such as delivery agents, customs officers, transport contractors, or insurance providers when required to complete the shipment or to follow legal rules.
                        </p>
                        <p className="font-poppins font-medium text-xs sm:text-sm lg:text-base text-[#676767] mb-4 leading-relaxed text-justify md:text-left">
                            We store your information securely using encryption, firewalls, and regular security checks. Only authorized staff have access to your personal data, and they are trained to handle it with care and responsibility.
                        </p>
                        <p className="font-poppins font-medium text-xs sm:text-sm lg:text-base text-[#676767] mb-4 leading-relaxed text-justify md:text-left">
                            When you visit our website, we may use cookies to understand how you interact with our pages. This helps us improve the user experience. You can control cookie settings through your browser.
                        </p>
                        <p className="font-poppins font-medium text-xs sm:text-sm lg:text-base text-[#676767] mb-4 leading-relaxed text-justify md:text-left">
                            You have the right to ask what data we hold about you, to correct incorrect data, or to request deletion. If you have questions or want to make a request, please contact our Data Protection Officer at privacy@fastmovefreight.com.
                        </p>
                        <p className="font-poppins font-medium text-xs sm:text-sm lg:text-base text-[#676767] mb-4 leading-relaxed text-justify md:text-left">
                            We may update this privacy policy from time to time. Any changes will be posted on our website with a new effective date. By continuing to use our services, you agree to the latest version of this policy.
                        </p>
                        <p className="font-poppins font-medium text-xs sm:text-sm lg:text-base text-[#676767] mb-4 leading-relaxed text-justify md:text-left">
                            If you need help understanding this policy or want to know more about how we protect your privacy, feel free to contact us at: privacy@fastmovefreight.com
                        </p>
                    </div>
                </div>
            </div>

            <div className="py-6 lg:py-12">
                <LinkedinSection />
            </div>
        </div >
    );
}

export default TermsAndConditions;
