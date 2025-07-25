"use client";
import LinkedinSection from "@/Components/LinkedinSection";
import React from "react";
import Nav from "@/Components/Nav";
import HeroSection from "@/Components/HeroSection";

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-[#F6F6F6] poppins">
            <div className="relative mx-auto block">
                <Nav />

                <HeroSection
                    title="Privacy Policy"
                    imageSrc="/privacy-policy-header.svg"
                    imageAlt="Nexus X Logo"
                />
            </div>
            <div id="member-section" className="relative">
                <div className="">
                    <div className="max-w-7xl mx-auto px-8 sm:px-8 lg:px-8">
                        <section className="font-poppins whitespace-normal font-medium text-xs sm:text-sm lg:text-base text-[#676767] mb-4 leading-relaxed text-justify md:text-left space-y-4">
                            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 mb-6 text-center">Privacy Policy</h1>

                            <p><span className="font-semibold">Effective Date:</span> [Insert Date]</p>
                            <p><span className="font-semibold">Entity:</span> Nexus Logix Pty Ltd (&quot;Nexus Logix&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;)</p>
                            <p><span className="font-semibold">Website:</span>
                                <a href="https://www.nexuslogix.com.au" className="text-blue-600 underline" target="_blank">https://www.nexuslogix.com.au</a>
                            </p>

                            <div>
                                <h3 className="text-base font-semibold mb-1">1. Purpose</h3>
                                <p>This Privacy Policy outlines how Nexus Logix collects, uses, discloses, and safeguards your personal information. We are committed to protecting your privacy in accordance with the Australian Privacy Principles (APPs) contained in the Privacy Act 1988 (Cth).</p>
                            </div>

                            <div>
                                <h3 className="text-base font-semibold mb-1">2. What Information We Collect</h3>
                                <p>We may collect and hold the following types of personal information:</p>
                                <ul className="list-disc pl-5">
                                    <li>Name and contact details (email address, phone number, postal address)</li>
                                    <li>Company and job title</li>
                                    <li>Payment or billing information</li>
                                    <li>Website usage information (IP address, browser type, access times)</li>
                                    <li>Any information you voluntarily submit through our website forms or other means</li>
                                </ul>
                                <p>In some cases, we may also collect sensitive information if you provide it voluntarily and consent to its use.</p>
                            </div>

                            <div>
                                <h3 className="text-base font-semibold mb-1">3. How We Collect Your Information</h3>
                                <p>We collect personal information in several ways, including:</p>
                                <ul className="list-disc pl-5">
                                    <li>When you visit or use our website</li>
                                    <li>When you contact us by phone, email, or online form</li>
                                    <li>When you engage our services</li>
                                    <li>From publicly available sources</li>
                                    <li>From third parties with your consent</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-base font-semibold mb-1">4. How We Use Your Information</h3>
                                <p>We collect and use your personal information to:</p>
                                <ul className="list-disc pl-5">
                                    <li>Provide services and communicate with you</li>
                                    <li>Respond to your inquiries and requests</li>
                                    <li>Process payments and manage accounts</li>
                                    <li>Improve our website and customer experience</li>
                                    <li>Send updates, newsletters, and marketing materials (with your consent)</li>
                                    <li>Meet our legal and contractual obligations</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-base font-semibold mb-1">5. Disclosure of Personal Information</h3>
                                <p>We may disclose your personal information to:</p>
                                <ul className="list-disc pl-5">
                                    <li>Our employees, contractors, and service providers (e.g. IT, marketing, billing)</li>
                                    <li>Regulatory authorities as required by law</li>
                                    <li>Third parties with your consent or as otherwise permitted under the Privacy Act</li>
                                </ul>
                                <p>We do not sell or rent personal information to third parties.</p>
                            </div>

                            <div>
                                <h3 className="text-base font-semibold mb-1">6. Storage and Security</h3>
                                <p>We take reasonable steps to protect your information from misuse, interference, loss, unauthorised access, modification, or disclosure. Information is stored in secure servers, and access is restricted to authorised personnel.</p>
                                <p>If we no longer need your personal information, we will take reasonable steps to destroy or de-identify it.</p>
                            </div>

                            <div>
                                <h3 className="text-base font-semibold mb-1">7. Cookies and Analytics</h3>
                                <p>Our website may use cookies to enhance your browsing experience and collect aggregated data about website traffic. You can control or disable cookies through your browser settings.</p>
                            </div>

                            <div>
                                <h3 className="text-base font-semibold mb-1">8. Access and Correction</h3>
                                <p>You may request access to the personal information we hold about you and request corrections if you believe it is inaccurate, out-of-date, incomplete, or misleading. Requests can be made via the contact details below.</p>
                            </div>

                            <div>
                                <h3 className="text-base font-semibold mb-1">9. Overseas Disclosure</h3>
                                <p>Some of your personal information may be stored or processed by third-party services hosted overseas (e.g. cloud services or email platforms). We take reasonable steps to ensure these providers adhere to privacy obligations comparable to those under Australian law.</p>
                            </div>

                            <div>
                                <h3 className="text-base font-semibold mb-1">10. Changes to This Policy</h3>
                                <p>We may update this Privacy Policy from time to time. The latest version will be published on our website with the effective date listed above.</p>
                            </div>

                            <div>
                                <h3 className="text-base font-semibold mb-1">11. Contact Us</h3>
                                <p>If you have questions about this Privacy Policy or wish to make a complaint, please contact:</p>
                                <p>
                                    <span className="block">Privacy Officer</span>
                                    <span className="block">Nexus Logix Pty Ltd</span>
                                    <span className="block">Email: <a href="mailto:privacy@nexuslogix.com.au" className="text-blue-600 underline">privacy@nexuslogix.com.au</a></span>
                                    <span className="block">Phone: [Insert phone number]</span>
                                    <span className="block">Postal Address: [Insert address]</span>
                                </p>
                            </div>
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
