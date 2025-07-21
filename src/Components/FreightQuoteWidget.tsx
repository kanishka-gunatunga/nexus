"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

interface FreightQuoteWidgetProps {
  isOpen: boolean;
  onClose: () => void;
}

const FreightQuoteWidget: React.FC<FreightQuoteWidgetProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    phone: "+61212234-5678",
    shipmentsPerMonth: "25044",
    mode: "Air & Sea Freight Services",
    originPort: "",
    destinationPort: "Import",
    enquiry: "Include a description of the cargo",
  });

  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    {
      id: "air-sea",
      title: "AIR & SEA",
      subtitle: "FREIGHT",
      image: "/icons/plane-black.svg",
    },
    {
      id: "road-rail",
      title: "ROAD & RAIL",
      subtitle: "TRANSPORT",
      image: "/icons/truck.svg",
    },
    {
      id: "logistics",
      title: "INTEGRATED",
      subtitle: "LOGISTICS",
      image: "/icons/box.svg",
    },
    {
      id: "customs",
      title: "CUSTOMS CLEARANCE",
      subtitle: "& COMPLIANCE",
      image: "/icons/cart.svg",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!privacyAccepted) {
      alert("Please accept the privacy policy to continue.");
      return;
    }
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Widget */}
      <div
        className={`fixed right-0 top-0 h-full w-full md:w-1/2 bg-[#1B1B1B] z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 w-8 h-8 rounded-full border-2 border-white text-white hover:bg-white hover:text-black transition-colors duration-200 flex items-center justify-center z-10"
          aria-label="Close"
        >
          ×
        </button>

        {/* Content */}
        <div className="flex justify-center items-center min-h-screen px-4 sm:px-8 py-10">
          <div className="w-full max-w-3xl p-6 sm:p-8 bg-[#1B1B1B]">
            {/* Header */}
            <div className="mb-8">
              <h2 className="text-3xl sm:text-4xl font-normal text-white mb-4 leading-tight">
                Request a<br />
                freight rate today
              </h2>
              <p className="text-gray-300 text-sm mb-2">
                Tell us as much as you can... Nothing is too complex for us...
              </p>
              <p className="text-gray-300 text-sm italic">
                Commercial shipments only - no personal effects.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-white text-sm mb-2"
                  >
                    First Name*
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-transparent border-b-[1px] border-[#A5A5A5] text-white placeholder-gray-400 py-2 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-white text-sm mb-2"
                  >
                    Last Name*
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-transparent border-b-[1px] border-[#A5A5A5] text-white placeholder-gray-400 py-2 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
              </div>

              {/* Company Name */}
              <div>
                <label
                  htmlFor="companyName"
                  className="block text-white text-sm mb-2"
                >
                  Company Name*
                </label>
                <p className="text-xs text-gray-400 mb-2">
                  Kindly use your company email address to <br /> your enquiry
                  isn&#39;t marked as spam.
                </p>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-transparent border-b-[1px] border-[#A5A5A5] text-white placeholder-gray-400 py-2 focus:outline-none focus:border-white transition-colors"
                />
              </div>

              {/* Email and Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-white text-sm mb-2"
                  >
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-transparent border-b-[1px] border-[#A5A5A5] text-white placeholder-gray-400 py-2 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-white text-sm mb-2"
                  >
                    Phone Number*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-transparent border-b-[1px] border-[#A5A5A5] text-[#647FBB] placeholder-gray-400 py-2 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
              </div>

              {/* Shipments and Mode */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <label
                    htmlFor="shipmentsPerMonth"
                    className="block text-white text-sm mb-2"
                  >
                    Number of shipments per month
                  </label>
                  <select
                    id="shipmentsPerMonth"
                    name="shipmentsPerMonth"
                    value={formData.shipmentsPerMonth}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b-[1px] border-[#A5A5A5] text-[#647FBB] py-2 pr-8 focus:outline-none focus:border-white transition-colors appearance-none"
                  >
                    <option value="25044" className="bg-[#2A2A2A] text-white">
                      10 to 25
                    </option>
                    <option value="1-5" className="bg-[#2A2A2A] text-white">
                      25 to 50
                    </option>
                    <option value="6-10" className="bg-[#2A2A2A] text-white">
                      More than 50
                    </option>
                  </select>

                  {/* Chevron icon positioned absolutely */}
                  <ChevronDown
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none"
                    stroke="#A5A5A5"
                    size={17}
                  />
                </div>
                <div className="relative">
                  <label
                    htmlFor="mode"
                    className="block text-white text-sm mb-2"
                  >
                    Mode
                  </label>
                  <select
                    id="mode"
                    name="mode"
                    value={formData.mode}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b-[1px] border-[#A5A5A5] text-[#647FBB] py-2 pr-8 focus:outline-none focus:border-white transition-colors appearance-none"
                  >
                    <option
                      value="Air & Sea Freight Services"
                      className="bg-[#2A2A2A] text-white"
                    >
                      Air Freight Services
                    </option>
                    <option
                      value="Road & Rail Transport"
                      className="bg-[#2A2A2A] text-white"
                    >
                      Sea Freight Services
                    </option>
                    <option
                      value="Customs Clearance"
                      className="bg-[#2A2A2A] text-white"
                    >
                      Sea-Air Combination
                    </option>
                    <option
                      value="3PL Warehousing"
                      className="bg-[#2A2A2A] text-white"
                    >
                      Book Road Transport
                    </option>
                    <option
                      value="3PL Warehousing"
                      className="bg-[#2A2A2A] text-white"
                    >
                      Explore Rail Options
                    </option>
                    <option
                      value="3PL Warehousing"
                      className="bg-[#2A2A2A] text-white"
                    >
                      Other
                    </option>
                  </select>

                  {/* White chevron icon */}
                  <ChevronDown
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none"
                    stroke="#A5A5A5"
                    size={17}
                  />
                </div>
              </div>

              {/* Origin and Destination */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="originPort"
                    className="block text-white text-sm mb-2"
                  >
                    Origin Port or Country
                  </label>
                  <input
                    type="text"
                    id="originPort"
                    name="originPort"
                    value={formData.originPort}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b-[1px] border-[#A5A5A5] text-white placeholder-gray-400 py-2 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="originPort"
                    className="block text-white text-sm mb-2"
                  >
                    Destination port or Country
                  </label>
                  <input
                    type="text"
                    id="originPort"
                    name="originPort"
                    value={formData.originPort}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b-[1px] border-[#A5A5A5] text-white placeholder-gray-400 py-2 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
              </div>

              {/* Enquiry */}
              <div>
                <label
                  htmlFor="enquiry"
                  className="block text-white text-sm mb-2"
                >
                  Enquiry
                </label>
                <textarea
                  id="enquiry"
                  name="enquiry"
                  value={formData.enquiry}
                  onChange={handleInputChange}
                  rows={2}
                  placeholder="Type your message here..."
                  className="w-full bg-transparent border-b-[1px] border-[#A5A5A5] text-[#647FBB] placeholder-gray-400 py-2 px-0 focus:outline-none focus:border-white transition-colors resize-none"
                />
              </div>

              {/* Privacy Policy */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="privacy"
                  checked={privacyAccepted}
                  onChange={(e) => setPrivacyAccepted(e.target.checked)}
                  className="mt-1 w-4 h-4 text-blue-600 bg-transparent border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="privacy" className="text-xs text-gray-300">
                  Our{" "}
                  <a href="/privacy-policy" className="underline">
                    privacy policy
                  </a>{" "}
                  contains detailed information about our handling of personal
                  information.
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                onClick={handleSubmit}
                className="ml-auto block px-8 py-3 font-poppins font-medium text-[16px] md:text-[20px] lg:text-[25px] leading-[100%] tracking-[0em] text-white rounded-md hover:bg-blue-950 hover:scale-105 transition-all duration-300"
                style={{ backgroundColor: "#162F65" }}
              >
                Get My Quote
              </button>
            </form>

            {/* Footer Icons */}
            <div className="flex justify-left gap-8 mt-12 pt-8">
              {services.map((service) => (
                <button
                  key={service.id}
                  type="button"
                  onClick={() =>
                    setSelectedService((prev) =>
                      prev === service.id ? null : service.id
                    )
                  }
                  className={`flex flex-col items-center p-3 rounded-sm transition-all duration-200 ${
                    selectedService === service.id
                      ? "bg-[#0F0F0F] "
                      : "hover:bg-[#0F0F0F]"
                  }`}
                >
                  <div className="w-16 h-16 mb-2 flex items-center justify-center">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={64}
                      height={64}
                      className="object-contain filter invert"
                    />
                  </div>
                  <div className="text-xs text-center text-gray-300 leading-tight">
                    <div className="font-medium">{service.title}</div>
                    <div>{service.subtitle}</div>
                  </div>
                </button>
              ))}
            </div>

            {/* Company Logo/Info */}
            <div className="mt-12 pt-8 flex items-center gap-10">
              <div className="w-24 h-auto">
                <Image
                  src="/footer_logo.png"
                  alt="neXus Logo"
                  width={96}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="text-sm text-gray-300 leading-tight">
                A proudly Australian logistics pit crew with a global reach,
                <br />
                delivering agile, reliable freight solutions that keep your
                supply
                <br />
                chain moving.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FreightQuoteWidget;
