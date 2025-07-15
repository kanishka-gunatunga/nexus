"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { Phone, Mail, MapPin, ChevronDown } from "lucide-react";
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
    topic: "Air & Sea Freight Services",
    message: "",
  });

  const [isTopicOpen, setIsTopicOpen] = useState<boolean>(false);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const topics = [
    "Air & Sea Freight Services",
    "Logistics Solutions",
    "Supply Chain Management",
    "Customs Clearance",
    "Warehousing Services",
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
            src="/lead-banner.png"
            alt="Nexus X Logo"
            width={1000}
            height={400}
            className="w-full h-full object-cover absolute inset-0"
          />
          <div className="absolute inset-0 flex items-center left-10 lg:left-60 justify-start">
            <div className="text-left px-4">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-normal text-[#0F2043] uppercase">
                DON'T HESITATE
                <br />
                TO CONTACT US
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 lg:-mt-28">
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
                We're here to help.
              </h1>
              <p className="text-gray-700 mb-2">
                Tell us as much as you can... Nothing is too complex for us...
              </p>
              <p className="text-gray-700 mb-2">
                Commercial shipments only - no personal effects.
              </p>

              {/* Contact Methods */}
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-3">
                  <Phone
                    className="w-5 h-5 mt-1"
                    style={{ color: "#162F65" }}
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
                  <Mail className="w-5 h-5 mt-1" style={{ color: "#162F65" }} />
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
                  <MapPin
                    className="w-5 h-5 mt-1"
                    style={{ color: "#162F65" }}
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
            <div className="absolute bottom-8 left-8 flex space-x-3">
              <div className="w-8 h-8 rounded-full bg-transparent border-2 border-gray-500 flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-gray-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </div>
              <div className="w-8 h-8 rounded-full bg-transparent border-2 border-gray-500 flex items-center justify-center">
                <span className="text-gray-600 text-xs font-bold">G+</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-transparent border-2 border-gray-500 flex items-center justify-center">
                <span className="text-gray-600 text-sm font-bold">f</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-transparent border-2 border-gray-500 flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-gray-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 0a10 10 0 100 20 10 10 0 000-20zM7.003 5.404H9.67V6.59c.406-.719 1.295-1.186 2.652-1.186 2.837 0 3.334 1.498 3.334 3.442v3.96h-2.777V9.696c0-1.187-.253-1.855-1.278-1.855-1.301 0-1.598.967-1.598 1.855v3.111H7.003V5.404z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
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
                    <label className="block text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none pb-2"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none pb-2"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">
                      Company Email Address
                    </label>
                    <input
                      type="email"
                      name="companyEmail"
                      value={formData.companyEmail}
                      onChange={handleInputChange}
                      className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none pb-2"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+61(2)234-5678"
                      className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none pb-2 placeholder-gray-500"
                    />
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
                    <label className="block text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none pb-2"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">
                      Website URL
                    </label>
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none pb-2"
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <label className="block text-gray-700 mb-2">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none pb-2"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label className="block text-gray-700 mb-2">City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none pb-2"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Province</label>
                    <input
                      type="text"
                      name="province"
                      value={formData.province}
                      onChange={handleInputChange}
                      placeholder="+61(2)234-5678"
                      className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none pb-2 placeholder-gray-500"
                    />
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
                    className="w-full flex items-center justify-between border-b-2 border-gray-300 focus:border-blue-500 outline-none pb-2 text-left"
                  >
                    <span className="text-gray-700">{formData.topic}</span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${
                        isTopicOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isTopicOpen && (
                    <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-md shadow-lg z-10 mt-1">
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
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Write your message"
                  rows={6}
                  className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none pb-2 resize-none placeholder-gray-500"
                />
              </div>

              {/* Privacy Policy */}
              <div className="mb-8">
                <div className="flex items-start space-x-2">
                  <input type="checkbox" id="privacy" className="mt-1" />
                  <label htmlFor="privacy" className="text-sm text-gray-600">
                    Our privacy policy contains detailed information about our
                    handling of personal information.
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-right">
                <button
                  onClick={handleSubmit}
                  className="px-8 py-3 text-white font-semibold rounded-md hover:opacity-90 transition-opacity"
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
