"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Nav from "@/Components/Nav";

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
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error on input change
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required.";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required.";
    }

    if (!formData.companyEmail.trim()) {
      newErrors.companyEmail = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.companyEmail)) {
      newErrors.companyEmail = "Invalid email address.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[\d\s()+-]+$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number.";
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company name is required.";
    }

    if (
      formData.website.trim() &&
      !/^https?:\/\/\S+\.\S+$/.test(formData.website)
    ) {
      newErrors.website = "Invalid website URL.";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required.";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required.";
    }

    if (!formData.province.trim()) {
      newErrors.province = "Province is required.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }

    setErrors(newErrors);

    // Return true if no errors
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      // You can submit your form here
    } else {
      console.log("Validation failed!");
    }
  };

  const topics = [
    "HS Classifications & Duty Optimisation",
    "Manage refund claims",
    "Duty Drawbacks and Rebates",
    "Australian Trusted Trader Application",
    "Get Started with a supply chain Audit",
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
      {/* Header Section */}
      <Nav />

      {/* Hero Section */}
      <div
        id="hero-section"
        className="relative mx-auto -top-10 lg:-top-30 max-w-screen-4xl z-30"
      >
        <div className="relative w-full h-[200px] sm:h-[250px] md:h-[400px] lg:h-[450px] xl:h-[500px]">
          <Image
            src="/contactUs_hero_banner.svg"
            alt="Nexus X Logo"
            width={1000}
            height={400}
            className="w-full h-full object-cover absolute inset-0"
          />
          <div className="absolute inset-0 flex items-center left-10 lg:left-60 justify-start">
            <div className="text-left px-4">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-normal text-[#0F2043] uppercase">
                DON&apos;T HESITATE
                <br />
                TO CONTACT US
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 lg:-mt-28 poppins">
        {/* Top Section - Contact Form */}
        <div className="flex flex-col lg:flex-row  overflow-hidden">
          {/* Left Panel - Contact Info */}
          <div
            className="lg:w-2/5 xl:w-1/3 p-8 lg:p-12 relative rounded-lg"
            style={{ backgroundColor: "#E7E6DD" }}
          >
            <div className="max-w-sm">
              <h1
                className="text-2xl lg:text-3xl font-bold mb-4"
                style={{ color: "#162F65" }}
              >
                We&apos;re here to help.
              </h1>
              <p className="text-gray-700 mb-2 text-[#0F2043]">
                Tell us as much as you can... Nothing is too complex for us...
              </p>
              <p className="text-gray-700 mb-2">
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
                      className="font-semibold mb-1"
                      style={{ color: "#162F65" }}
                    >
                      Call Us
                    </h3>
                    <p className="text-gray-700">+61 7 3737 4310</p>
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
                      className="font-semibold mb-1"
                      style={{ color: "#162F65" }}
                    >
                      Send Us Mail
                    </h3>
                    <p className="text-gray-700">enquiries@nexuslogix.com.au</p>
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
                      className="font-semibold mb-1"
                      style={{ color: "#162F65" }}
                    >
                      We Are Located
                    </h3>
                    <p className="text-gray-700">
                      Level 38, 71 Eagle Street, Brisbane
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Icons - Bottom Left */}
            <div className="absolute bottom-4 sm:bottom-4 md:bottom-4 lg:bottom-8 left-8 flex space-x-3">
              {/* Twitter */}
              <a
                href="https://www.facebook.com/YourPage"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/x_icon.png"
                  alt="Facebook"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </a>

              {/* Google+ */}
              <a
                href="https://www.instagram.com/YourProfile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/linkedin_icon.png"
                  alt="Instagram"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </a>

              {/* Facebook */}
              <a
                href="https://www.linkedin.com/company/YourCompany"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/facebook_icon.png"
                  alt="LinkedIn"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </a>

              {/* Instagram */}
              <a
                href="https://www.youtube.com/YourChannel"
                target="_blank"
                rel="noopener noreferrer"
              >
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
            <div className="max-w-2xl">
              {/* Contact Information */}
              <div className="mb-8">
                <h2
                  className="text-lg font-semibold mb-6"
                  style={{ color: "#162F65" }}
                >
                  Contact Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-black mb-2">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full border-b-2 border-black focus:border-blue-500 outline-none pb-2"
                    />
                    {errors.firstName && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.firstName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-black mb-2">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full border-b-2 border-black focus:border-blue-500 outline-none pb-2"
                    />
                    {errors.firstName && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-black mb-2">
                      Company Email Address
                    </label>
                    <input
                      type="email"
                      name="companyEmail"
                      value={formData.companyEmail}
                      onChange={handleInputChange}
                      className="w-full border-b-2 border-black focus:border-blue-500 outline-none pb-2"
                    />
                    {errors.firstName && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.companyEmail}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-black mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+61(2)234-5678"
                      className="w-full border-b-2 border-black focus:border-blue-500 outline-none pb-2 placeholder-[#676767]"
                    />
                    {errors.firstName && (
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
                  className="text-lg font-semibold mb-6"
                  style={{ color: "#162F65" }}
                >
                  Company Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-black mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="w-full border-b-2 border-black focus:border-blue-500 outline-none pb-2"
                    />
                    {errors.firstName && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.companyName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-black mb-2">Website URL</label>
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      className="w-full border-b-2 border-black focus:border-blue-500 outline-none pb-2"
                    />
                    {errors.firstName && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.website}
                      </p>
                    )}
                  </div>
                </div>
                <div className="mt-6">
                  <label className="block text-black mb-2">Address</label>
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
                    <label className="block text-black mb-2">City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full border-b-2 border-black focus:border-blue-500 outline-none pb-2"
                    />
                    {errors.city && (
                      <p className="text-red-600 text-sm mt-1">{errors.city}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-black mb-2">Province</label>
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
                  className="text-lg font-semibold mb-6"
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
                    <span className="text-black">{formData.topic}</span>
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
                <label className="block text-black mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Write your message"
                  rows={2}
                  className="w-full border-b-2 border-black focus:border-blue-500 outline-none pb-2 resize-none placeholder-[#676767]"
                />
                {errors.message && (
                  <p className="text-red-600 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              {/* Privacy Policy */}
              <div className="mb-8">
                <div className="flex items-start space-x-2">
                  <input type="checkbox" id="privacy" className="mt-1" />
                  <label htmlFor="privacy" className="text-sm text-[#676767]">
                    Our <a href="/privacy-policy" className="underline">privacy policy</a> contains detailed information about our
                    handling of personal information.
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-right">
                <button
                  onClick={handleSubmit}
                  className="px-8 py-3 text-white font-semibold rounded-md hover:bg-blue-950 hover:scale-105 transition-all duration-300"
                  style={{ backgroundColor: "#162F65" }}
                >
                  Submit My Request
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

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
    </div>
  );
}
