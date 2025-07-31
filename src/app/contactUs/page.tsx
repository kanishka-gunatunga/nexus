"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Nav from "@/Components/Nav";
import Quote from "@/Components/Quote";
import HeroSection from "@/Components/HeroSection";
import AnimatedSection from "@/Components/AnimatedSection";

// Define the shape of your form data
interface FormData {
  firstName: string;
  lastName: string;
  companyEmail: string;
  phone: string;
  companyName: string;
  website: string;
  address: string;
  city: string;
  province: string;
  topic: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    companyEmail: "",
    phone: "",
    companyName: "",
    website: "",
    address: "",
    city: "",
    province: "",
    topic: "HS Classifications & Duty Optimisation",
    message: "",
  });

  const [isTopicOpen, setIsTopicOpen] = useState<boolean>(false);
  // const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormData | "privacy", string>>
  >({});
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error on input change
    // setErrors((prev) => ({
    //     ...prev,
    //     [name]: "",
    // }));

    validateField(name as keyof FormData, value);

    setSuccessMessage("");
    setErrorMessage("");
  };

  // const validateForm = () => {
  //     const newErrors: { [key: string]: string } = {};
  //
  //     if (!formData.firstName.trim()) {
  //         newErrors.firstName = "First name is required.";
  //     }
  //
  //     if (!formData.lastName.trim()) {
  //         newErrors.lastName = "Last name is required.";
  //     }
  //
  //     if (!formData.companyEmail.trim()) {
  //         newErrors.companyEmail = "Company email is required.";
  //     } else if (
  //         !/^[a-z][a-z0-9._%+-]*@[a-z0-9.-]+\.[a-z]{2,}$/.test(
  //             formData.companyEmail.trim()
  //         )
  //     ) {
  //         newErrors.companyEmail =
  //             "Company email is invalid or must be all lowercase and start with a lowercase letter.";
  //     } else if (
  //         formData.companyEmail.trim().length < 6 ||
  //         formData.companyEmail.trim().length > 254
  //     ) {
  //         newErrors.companyEmail =
  //             "Company email must be between 6 and 254 characters.";
  //     }
  //
  //     if (!formData.phone.trim()) {
  //         newErrors.phone = "Phone number is required.";
  //     } else if (!/^\+\d{1,4}(?:\s\d{1,4}){1,4}$/.test(formData.phone)) {
  //         newErrors.phone =
  //             "Phone number must start with + and be in a valid format (e.g., +61 X XXXX XXXX).";
  //     }
  //
  //     if (!formData.companyName.trim()) {
  //         newErrors.companyName = "Company name is required.";
  //     }
  //
  //     if (
  //         formData.website.trim() &&
  //         !/^https?:\/\/\S+\.\S+$/.test(formData.website)
  //     ) {
  //         newErrors.website = "Invalid website URL.";
  //     }
  //
  //     // Optional: address and message — no required validation
  //     // Only validate city and province if filled
  //     if (formData.city.trim() && !/^[a-zA-Z\s'-]+$/.test(formData.city)) {
  //         newErrors.city = "City must contain only letters.";
  //     }
  //
  //     if (
  //         formData.province.trim() &&
  //         !/^[a-zA-Z\s'-]+$/.test(formData.province)
  //     ) {
  //         newErrors.province = "State must contain only letters.";
  //     }
  //
  //     if (!privacyAccepted) newErrors.privacy = "You must accept the privacy policy";
  //
  //     setErrors(newErrors);
  //     return Object.keys(newErrors).length === 0;
  // };

  const validateField = (name: keyof FormData, value: string) => {
    const newErrors = { ...errors };

    // switch (name) {
    //     case "firstName":
    //         newErrors.firstName = value.trim() ? "" : "First name is required.";
    //         break;
    //     case "lastName":
    //         newErrors.lastName = value.trim() ? "" : "Last name is required.";
    //         break;
    //     case "companyEmail":
    //         if (!value.trim()) {
    //             newErrors.companyEmail = "Company email is required.";
    //         } else if (!/^[a-z][a-z0-9._%+-]*@[a-z0-9.-]+\.[a-z]{2,}$/.test(value.trim())) {
    //             newErrors.companyEmail = "Please enter a valid lowercase email (e.g., user@company.com).";
    //         } else if (value.trim().length < 6 || value.trim().length > 254) {
    //             newErrors.companyEmail = "Email must be between 6 and 254 characters.";
    //         } else {
    //             newErrors.companyEmail = "";
    //         }
    //         break;
    //     case "phone":
    //         if (!value.trim()) {
    //             newErrors.phone = "Phone number is required.";
    //         } else if (!/^\+\d{1,4}\s?\d{6,}$/.test(value.trim())) {
    //             newErrors.phone = "Please enter a valid phone number (e.g., +61712345678).";
    //         } else {
    //             newErrors.phone = "";
    //         }
    //         break;
    //     case "companyName":
    //         newErrors.companyName = value.trim() ? "" : "Company name is required.";
    //         break;
    //     case "website":
    //         if (value.trim() && !/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/.test(value.trim())) {
    //             newErrors.website = "Please enter a valid URL (e.g., https://example.com).";
    //         } else {
    //             newErrors.website = "";
    //         }
    //         break;
    //     case "city":
    //         if (value.trim() && !/^[a-zA-Z\s'-]+$/.test(value.trim())) {
    //             newErrors.city = "City must contain only letters, spaces, or hyphens.";
    //         } else {
    //             newErrors.city = "";
    //         }
    //         break;
    //     case "province":
    //         if (value.trim() && !/^[a-zA-Z\s'-]+$/.test(value.trim())) {
    //             newErrors.province = "State must contain only letters, spaces, or hyphens.";
    //         } else {
    //             newErrors.province = "";
    //         }
    //         break;
    //     case "message":
    //         newErrors.message = "";
    //         break;
    // }

    switch (name) {
      case "firstName":
        if (!value.trim()) {
          newErrors.firstName = "First name is required.";
        } else if (value.trim().length < 2 || value.trim().length > 50) {
          newErrors.firstName =
            "First name must be between 2 and 50 characters.";
        } else if (!/^[a-zA-Z\s'-]+$/.test(value.trim())) {
          newErrors.firstName =
            "First name can only contain letters, spaces, hyphens, or apostrophes.";
        } else {
          newErrors.firstName = "";
        }
        break;
      case "lastName":
        if (!value.trim()) {
          newErrors.lastName = "Last name is required.";
        } else if (value.trim().length < 2 || value.trim().length > 50) {
          newErrors.lastName = "Last name must be between 2 and 50 characters.";
        } else if (!/^[a-zA-Z\s'-]+$/.test(value.trim())) {
          newErrors.lastName =
            "Last name can only contain letters, spaces, hyphens, or apostrophes.";
        } else {
          newErrors.lastName = "";
        }
        break;
      case "companyEmail":
        if (!value.trim()) {
          newErrors.companyEmail = "Company email is required.";
        } else if (
          !/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(value.trim())
        ) {
          newErrors.companyEmail =
            "Please enter a valid lowercase email (e.g., user@company.com).";
        } else if (value.trim().length < 6 || value.trim().length > 254) {
          newErrors.companyEmail =
            "Email must be between 6 and 254 characters.";
        } else {
          newErrors.companyEmail = "";
        }
        break;
      case "phone":
        if (!value.trim()) {
          newErrors.phone = "Phone number is required.";
        } else if (!/^\+\d{1,3}\s?\d{6,14}$/.test(value.trim())) {
          // Allows for +CountryCode and 6-14 digits, with optional space
          newErrors.phone =
            "Please enter a valid phone number (e.g.,+1234567890).";
        } else if (value.trim().length < 7 || value.trim().length > 20) {
          // Example length limits for phone numbers
          newErrors.phone = "Phone number must be between 7 and 20 characters.";
        } else {
          newErrors.phone = "";
        }
        break;
      case "companyName":
        if (!value.trim()) {
          newErrors.companyName = "Company name is required.";
        } else if (value.trim().length < 2 || value.trim().length > 100) {
          newErrors.companyName =
            "Company name must be between 2 and 100 characters.";
        } else {
          newErrors.companyName = "";
        }
        break;
      case "website":
        if (
          value.trim() &&
          !/^https?:\/\/(?:www\.)?[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+(?:\/[^/#?]+)*(?:[?][^#]*)?(?:#.*)?$/.test(
            value.trim()
          )
        ) {
          newErrors.website =
            "Please enter a valid URL (e.g., https://example.com).";
        } else if (value.trim().length > 200) {
          // Example length limit for URLs
          newErrors.website = "Website URL cannot exceed 200 characters.";
        } else {
          newErrors.website = "";
        }
        break;
      case "address":
        if (value.trim().length > 200) {
          newErrors.address = "Address cannot exceed 200 characters.";
        } else {
          newErrors.address = "";
        }
        break;
      case "city":
        if (value.trim() && !/^[a-zA-Z\s'-]+$/.test(value.trim())) {
          newErrors.city =
            "City must contain only letters, spaces, hyphens, or apostrophes.";
        } else if (value.trim().length > 100) {
          newErrors.city = "City name cannot exceed 100 characters.";
        } else {
          newErrors.city = "";
        }
        break;
      case "province":
        if (value.trim() && !/^[a-zA-Z\s'-]+$/.test(value.trim())) {
          newErrors.province =
            "State must contain only letters, spaces, hyphens, or apostrophes.";
        } else if (value.trim().length > 100) {
          newErrors.province = "State name cannot exceed 100 characters.";
        } else {
          newErrors.province = "";
        }
        break;
      case "message":
        if (value.trim().length > 1000) {
          newErrors.message = "Message cannot exceed 1000 characters.";
        } else {
          newErrors.message = "";
        }
        break;
    }

    setErrors(newErrors);
  };

  const validateForm = () => {
    const newErrors: Partial<Record<keyof FormData | "privacy", string>> = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required.";
    if (!formData.lastName.trim())
      newErrors.lastName = "Last name is required.";
    if (!formData.companyEmail.trim()) {
      newErrors.companyEmail = "Company email is required.";
    } else if (
      !/^[a-z][a-z0-9._%+-]*@[a-z0-9.-]+\.[a-z]{2,}$/.test(
        formData.companyEmail.trim()
      )
    ) {
      newErrors.companyEmail =
        "Please enter a valid lowercase email (e.g., user@company.com).";
    } else if (
      formData.companyEmail.trim().length < 6 ||
      formData.companyEmail.trim().length > 254
    ) {
      newErrors.companyEmail = "Email must be between 6 and 254 characters.";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\+\d+$/.test(formData.phone.trim())) {
      newErrors.phone =
        "Please enter a valid phone number (e.g., +61712345678).";
    }
    if (!formData.companyName.trim())
      newErrors.companyName = "Company name is required.";
    if (
      formData.website.trim() &&
      !/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/.test(formData.website.trim())
    ) {
      newErrors.website =
        "Please enter a valid URL (e.g., https://example.com).";
    }
    if (formData.city.trim() && !/^[a-zA-Z\s'-]+$/.test(formData.city.trim())) {
      newErrors.city = "City must contain only letters, spaces, or hyphens.";
    }
    if (
      formData.province.trim() &&
      !/^[a-zA-Z\s'-]+$/.test(formData.province.trim())
    ) {
      newErrors.province =
        "State must contain only letters, spaces, or hyphens.";
    }
    if (!privacyAccepted)
      newErrors.privacy = "You must accept the privacy policy.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // const handleSubmit = (e: FormEvent) => {
  //   e.preventDefault();
  //   if (validateForm()) {
  //     console.log("Form submitted:", formData);
  //     // You can submit your form here
  //   } else {
  //     console.log("Validation failed!");
  //   }
  // };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formType: "contactUs", ...formData }),
      });

      if (response.ok) {
        setSuccessMessage("Your contact request has been sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          companyEmail: "",
          phone: "",
          companyName: "",
          website: "",
          address: "",
          city: "",
          province: "",
          topic: "HS Classifications & Duty Optimisation",
          message: "",
        });
        setPrivacyAccepted(false);
        setErrors({});
        setTimeout(() => {
          setSuccessMessage("");
        }, 5000);
      } else {
        const errorData = await response.json();
        setErrorMessage(`Failed to send request: ${errorData.message}`);
        setTimeout(() => {
          setErrorMessage("");
        }, 5000);
      }
    } catch (error) {
      setErrorMessage(
        "An unexpected error occurred. Please try again or contact support."
      );
      console.log(error);
      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
    } finally {
      setIsLoading(false);
    }
  };

  const topics = [
    "HS Classifications & Duty Optimisation",
    "Manage refund claims",
    "Duty Drawbacks and Rebates",
    "Australian Trusted Trader Application",
    "Track and Trace",
    "Customs and Border Processing ",
    "Supply Chain Consultancy & Audits",
    "3PL & Warehousing",
    "Fullment & E-Commerce Services",
    "Inventory Management & Optimisation",
    "Special Project Transport",
    "Other",
  ];

  return (
    <div className="min-h-screen bg-[#F6F6F6] poppins">
      <div className="relative mx-auto block">
        <Nav />

        {/* <div id="hero-section"
                     className="relative mx-auto -top-10 lg:-top-30 max-w-screen-4xl z-30">
                    <div className="relative w-full h-[200px] sm:h-[250px] md:h-[400px] lg:h-[450px] xl:h-[500px]">
                        <Image
                            src="/why-nexus/banner.svg"
                            alt="Nexus X Logo"
                            width={1000}
                            height={400}
                            className="w-full h-full object-cover absolute inset-0"
                        />
                        <div className="absolute inset-0 flex items-center left-10 lg:left-60 justify-start">
                            <div className="text-left px-4">
                                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-normal text-[#0F2043] uppercase">
                                    Why Nexus
                                </h1>

                            </div>
                        </div>
                    </div>
                </div> */}

        <HeroSection
          title="DON'T HESITATE TO CONTACT US"
          desktopImage="/contactUs_hero_banner.svg"
          mobileImage="/hero_arrow.svg"
          altText="Contact us hero section"
        />
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 lg:-mt-28 md:-mt-28 poppins">
        {/* Top Section - Contact Form */}
        <div className="flex flex-col lg:flex-row  overflow-hidden">
          {/* Left Panel - Contact Info */}
          <div
            className="lg:w-2/5 xl:w-[555px] p-8 lg:p-12 relative rounded-lg"
            style={{ backgroundColor: "#E7E6DD" }}
          >
            <AnimatedSection direction="left" delay={0.2}>
              <div className="max-w-md md:max-w-xl">
                <h1
                  className="mb-4 font-poppins font-semibold text-[28px] leading-[40px] tracking-[0.03em] md:text-[32px] md:leading-[48px] lg:text-[39px] lg:leading-[38px]"
                  style={{ color: "#162F65" }}
                >
                  We&apos;re here to help.
                </h1>

                <p className="mb-2 font-poppins font-normal text-[16px] md:text-[18px] lg:text-[20px] leading-[25px] text-left text-[#0F2043]">
                  Tell us as much as you can... Nothing is too complex for us...
                </p>

                <p className="mb-2 font-poppins font-normal text-[16px] md:text-[18px] lg:text-[20px] leading-[25px] text-left text-[#0F2043]">
                  Commercial shipments only - no personal effects.
                </p>

                {/* Contact Methods */}
                <div className="space-y-6 mb-8 lg:mt-26 sm:mt-4 mt-4">
                  <div className="flex items-start space-x-3">
                    <Image
                      src="/call_icon.png"
                      alt="Phone Icon"
                      width={20}
                      height={20}
                      className="mt-1"
                    />

                    <div>
                      <h3
                        className="font-medium text-[16px] md:text-[18px] lg:text-[20px] leading-[25px] tracking-[0.013em] mb-1 font-poppins"
                        style={{ color: "#162F65" }}
                      >
                        Call Us
                      </h3>
                      <p className="font-poppins font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-justify text-[#162F65]">
                        +61 7 3737 4310
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Image
                      src="/mail_icon.png"
                      alt="mail Icon"
                      width={20}
                      height={20}
                      className="mt-1"
                    />

                    <div>
                      <h3
                        className="font-medium text-[16px] md:text-[18px] lg:text-[20px] leading-[25px] tracking-[0.013em] mb-1 font-poppins"
                        style={{ color: "#162F65" }}
                      >
                        Send Us Mail
                      </h3>
                      <p className="font-poppins font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-justify text-[#162F65]">
                        enquiries@nexuslogix.com.au
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Image
                      src="/location_icon.png"
                      alt="location Icon"
                      width={20}
                      height={20}
                      className="mt-1"
                    />

                    <div>
                      <h3
                        className="font-medium text-[16px] md:text-[18px] lg:text-[20px] leading-[25px] tracking-[0.013em] mb-1 font-poppins"
                        style={{ color: "#162F65" }}
                      >
                        We Are Located
                      </h3>
                      <p className="font-poppins font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-justify text-[#162F65]">
                        Level 38, 71 Eagle Street, Brisbane
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Social Media Icons - Bottom Left */}
            <div className="absolute bottom-4 sm:bottom-4 md:bottom-4 lg:bottom-8 left-8 flex space-x-3">
              {/* Twitter */}
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/x_icon.png"
                  alt="Facebook"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </a>

              {/* Google+ */}
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/linkedin_icon.png"
                  alt="Instagram"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </a>

              {/* Facebook */}
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/facebook_icon.png"
                  alt="LinkedIn"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </a>

              {/* Instagram */}
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/instagram_icon.png"
                  alt="YouTube"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </a>
            </div>
          </div>

          {/* Right Panel - Contact Form */}
          <div className="lg:w-3/5 xl:w-2/3 p-8 lg:p-12 bg-[#F6F6F6]">
            <AnimatedSection direction="right" delay={0.2}>
              <div className="max-w-2xl">
                {/* Contact Information */}
                {successMessage && (
                  <div className="mb-6 p-4 bg-green-600 text-white rounded-md">
                    {successMessage}
                  </div>
                )}
                {errorMessage && (
                  <div className="mb-6 p-4 bg-red-600 text-white rounded-md">
                    {errorMessage}
                  </div>
                )}
                <form onSubmit={handleSubmit} noValidate>
                  <div className="mb-8">
                    <h2
                      className="mb-6 font-poppins font-normal text-[18px] md:text-[22px] lg:text-[25px] leading-[25px] tracking-[0.013em]"
                      style={{ color: "#162F65" }}
                    >
                      Contact Information
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative">
                        <label className="block mb-2 font-poppins font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-black">
                          First Name
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                            className="w-full border-b-2 border-black focus:border-blue-500 outline-none pb-2"
                          />
                          <span className="absolute right-0 bottom-2 text-black">
                            *
                          </span>
                        </div>
                        {errors.firstName && (
                          <p className="text-red-600 text-sm mt-1">
                            {errors.firstName}
                          </p>
                        )}
                      </div>
                      <div className="relative">
                        <label className="block mb-2 font-poppins font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-black">
                          Last Name
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                            className="w-full border-b-2 border-black focus:border-blue-500 outline-none pb-2"
                          />
                          <span className="absolute right-0 bottom-2 text-black">
                            *
                          </span>
                        </div>
                        {errors.lastName && (
                          <p className="text-red-600 text-sm mt-1">
                            {errors.lastName}
                          </p>
                        )}
                      </div>
                      <div className="relative">
                        <label className="block mb-2 font-poppins font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-black">
                          Company Email Address
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            name="companyEmail"
                            value={formData.companyEmail}
                            onChange={handleInputChange}
                            required
                            className="w-full border-b-2 border-black focus:border-blue-500 outline-none pb-2"
                          />
                          <span className="absolute right-0 bottom-2 text-black">
                            *
                          </span>
                        </div>
                        {errors.companyEmail && (
                          <p className="text-red-600 text-sm mt-1">
                            {errors.companyEmail}
                          </p>
                        )}
                      </div>
                      <div className="relative">
                        <label className="block mb-2 font-poppins font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-black">
                          Phone
                        </label>
                        <div className="relative">
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder=""
                            required
                            className="w-full font-poppins font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] border-b-2 border-black focus:border-blue-500 outline-none pb-2 placeholder-[#676767]"
                          />
                          <span className="absolute right-0 bottom-2 text-black">
                            *
                          </span>
                        </div>
                        {errors.phone && (
                          <p className="text-red-600 text-sm mt-1">
                            {errors.phone}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Company Information */}
                  <div className="mb-8">
                    <h2
                      className="mb-6 font-poppins font-normal text-[18px] md:text-[22px] lg:text-[25px] leading-[25px] tracking-[0.013em]"
                      style={{ color: "#162F65" }}
                    >
                      Company Information
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative">
                        <label className="block mb-2 font-poppins font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-black">
                          Company Name
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleInputChange}
                            required
                            className="w-full border-b-2 border-black focus:border-blue-500 outline-none pb-2"
                          />
                          <span className="absolute right-0 bottom-2 text-black">
                            *
                          </span>
                        </div>
                        {errors.companyName && (
                          <p
                            id="companyName-error"
                            className="text-red-600 text-sm mt-1"
                            role="alert"
                          >
                            {errors.companyName}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block mb-2 font-poppins font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-black">
                          Website URL
                        </label>
                        <input
                          type="url"
                          name="website"
                          value={formData.website}
                          onChange={handleInputChange}
                          className="w-full border-b-2 border-black focus:border-blue-500 outline-none pb-2"
                        />
                        {errors.website && (
                          <p
                            id="website-error"
                            className="text-red-600 text-sm mt-1"
                            role="alert"
                          >
                            {errors.website}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="mt-6">
                      <label className="block mb-2 font-poppins font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-black">
                        Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full border-b-2 border-black focus:border-blue-500 outline-none pb-2"
                      />
                      {errors.address && (
                        <p className="text-red-600 text-sm mt-1">
                          {errors.address}
                        </p>
                      )}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <div>
                        <label className="block mb-2 font-poppins font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-black">
                          City
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          className="w-full border-b-2 border-black focus:border-blue-500 outline-none pb-2"
                        />
                        {errors.city && (
                          <p className="text-red-600 text-sm mt-1">
                            {errors.city}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block mb-2 font-poppins font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-black">
                          State
                        </label>
                        <input
                          type="text"
                          name="province"
                          value={formData.province}
                          onChange={handleInputChange}
                          className="w-full border-b-2 border-black focus:border-blue-500 outline-none pb-2 placeholder-[#676767]"
                        />
                        {errors.province && (
                          <p className="text-red-600 text-sm mt-1">
                            {errors.province}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Topic */}
                  <div className="mb-8">
                    <h2
                      className="mb-6 font-poppins font-normal text-[18px] md:text-[22px] lg:text-[25px] leading-[25px] tracking-[0.013em]"
                      style={{ color: "#162F65" }}
                    >
                      Topic
                    </h2>
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setIsTopicOpen(!isTopicOpen)}
                        className="w-full flex items-center justify-between border-b-2 border-black focus:border-blue-500 outline-none pb-2 text-left"
                      >
                        <span className="block mb-2 font-poppins font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-black">
                          {formData.topic}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 transition-transform ${
                            isTopicOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {isTopicOpen && (
                        <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-md shadow-lg z-10 mt-1 max-h-48 overflow-y-auto">
                          {topics.map((topic, index) => (
                            <button
                              key={index}
                              type="button"
                              onClick={() => {
                                setFormData((prev) => ({ ...prev, topic }));
                                setIsTopicOpen(false);
                              }}
                              className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700"
                            >
                              {topic}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="mb-8">
                    <label className="block mb-2 font-poppins font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-black">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Include a description of your requirements"
                      rows={2}
                      className="w-full font-poppins font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] border-b-2 border-black focus:border-blue-500 outline-none pb-2 placeholder-[#676767]"
                    />
                    {errors.message && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Privacy Policy */}
                  <div className="mb-8">
                    <div className="flex items-start space-x-2">
                      <input
                        type="checkbox"
                        id="privacy"
                        checked={privacyAccepted}
                        onChange={(e) => setPrivacyAccepted(e.target.checked)}
                        className="mt-1"
                      />
                      <label
                        htmlFor="privacy"
                        className="font-poppins font-normal text-[12px] md:text-[14px] lg:text-[15px] leading-[25px] tracking-[0em] text-[#676767]"
                      >
                        Our{" "}
                        <a href="/privacy-policy" className="underline">
                          privacy policy
                        </a>{" "}
                        contains detailed information about our handling of
                        personal information.
                      </label>
                    </div>
                    {errors.privacy && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.privacy}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="text-right">
                    <button
                      onClick={handleSubmit}
                      className={`px-8 py-3 font-poppins cursor-pointer font-medium text-sm md:text-base lg:text-lg leading-[100%] tracking-[0em] text-white rounded-md hover:bg-blue-950 hover:scale-105 transition-all duration-300 ${
                        isLoading ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                      style={{ backgroundColor: "#162F65" }}
                    >
                      {isLoading ? "Submitting..." : "Submit My Request"}
                    </button>
                  </div>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
        <Quote />
      </div>

      <AnimatedSection direction="up" delay={0.2}>
        {/* Map Section - Full Width */}
        <div className="py-12 w-full h-96 lg:h-[500px] overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.060111295403!2d153.0303199!3d-27.4673879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b915b171910d4d5%3A0x85ac0d5597492f4!2sLevel%2038%2F71%20Eagle%20St%2C%20Brisbane%20City%20QLD%204000%2C%20Australia!5e0!3m2!1sen!2slk!4v1752561333604!5m2!1sen!2slk"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full border-0"
          ></iframe>
        </div>
      </AnimatedSection>
    </div>
  );
}
