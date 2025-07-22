"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
    phone: "",
    shipmentsPerMonth: "",
    mode: "",
    originPort: "",
    destinationPort: "",
    enquiry: "",
  });

  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  // const [selectedService, setSelectedService] = useState<string | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const services = [
    {
      id: "air-sea",
      title: "AIR & SEA",
      subtitle: "FREIGHT",
      image: "/icons/plane-black.svg",
      link: "/air-and-sea-freight",
    },
    {
      id: "road-rail",
      title: "ROAD & RAIL",
      subtitle: "TRANSPORT",
      image: "/icons/truck.svg",
      link: "/road-and-rail",
    },
    {
      id: "logistics",
      title: "INTEGRATED",
      subtitle: "LOGISTICS",
      image: "/icons/box.svg",
      link: "/integrated-logistics",
    },
    {
      id: "customs",
      title: "CUSTOMS CLEARANCE",
      subtitle: "& COMPLIANCE",
      image: "/icons/cart.svg",
      link: "/customs",
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

    // Clear error on input change
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim())
    ) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[0-9\s\-()]{7,}$/i.test(formData.phone.trim())) {
      newErrors.phone = "Phone number is invalid";
    }

    if (!privacyAccepted) {
      newErrors.privacy = "You must accept the privacy policy";
    }

    // Optional: Check that originPort and destinationPort are not empty if needed
    if (!formData.originPort.trim()) {
      newErrors.originPort = "Origin port or country is required";
    }

    if (!formData.destinationPort.trim()) {
      newErrors.destinationPort = "Destination port or country is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      // All validations passed
      console.log("Form submitted:", formData);
      // You can reset form or call API here
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 backdrop-blur-[4px] bg-black/10 z-40 transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Widget */}
      <div
        className={`fixed right-0 top-0 h-full w-full md:w-3/5 bg-[#1B1B1B] z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
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
              <h2 className="font-poppins font-bold text-[32px] sm:text-[42px] lg:text-[51px] text-white leading-[69px] mb-4">
                Request a<br />
                freight rate today
              </h2>

              <p className="font-poppins font-medium text-[14px] sm:text-[16px] lg:text-[19px] leading-[29px] tracking-[0.003em] text-gray-300 mb-2">
                Tell us as much as you can... Nothing is too complex for us...
              </p>

              <p className="font-poppins font-medium italic text-[14px] sm:text-[16px] lg:text-[19px] leading-[29px] tracking-[0.003em] text-gray-300">
                Commercial shipments only - no personal effects.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block font-poppins font-normal text-[14px] sm:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-white mb-2"
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
                    className={`w-full bg-transparent border-b-[1px] py-2 focus:outline-none focus:border-white transition-colors placeholder-gray-400 ${
                      errors.firstName
                        ? "border-red-500 text-red-500"
                        : "border-[#A5A5A5] text-white"
                    }`}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.firstName}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block font-poppins font-normal text-[14px] sm:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-white mb-2"
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
                    className={`w-full bg-transparent border-b-[1px] py-2 focus:outline-none focus:border-white transition-colors placeholder-gray-400 ${
                      errors.lastName
                        ? "border-red-500 text-red-500"
                        : "border-[#A5A5A5] text-white"
                    }`}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              {/* Company Name */}
              <div>
                <label
                  htmlFor="companyName"
                  className="block font-poppins font-normal text-[14px] sm:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-white mb-2"
                >
                  Company Name*
                </label>

                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  required
                  className={`w-full bg-transparent border-b-[1px] py-2 focus:outline-none focus:border-white transition-colors placeholder-gray-400 ${
                    errors.companyName
                      ? "border-red-500 text-red-500"
                      : "border-[#A5A5A5] text-white"
                  }`}
                />
                {errors.companyName && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.companyName}
                  </p>
                )}
              </div>

              {/* Email and Phone */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block font-poppins font-normal text-[14px] sm:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-white mb-2"
                  >
                    Company Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`w-full bg-transparent border-b-[1px] py-2 focus:outline-none focus:border-white transition-colors placeholder-gray-400 ${
                      errors.email
                        ? "border-red-500 text-red-500"
                        : "border-[#A5A5A5] text-white"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                  <p className="text-xs text-gray-400 mb-2 mt-2">
                    Kindly use your company email address to <br /> your enquiry
                    isn&#39;t marked as spam.
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block font-poppins font-normal text-[14px] sm:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-white mb-2"
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
                    placeholder="+61212234-5678"
                    className={`w-full bg-transparent border-b-[1px] py-2 focus:outline-none focus:border-white transition-colors text-[#647FBB] placeholder-[#647FBB] ${
                      errors.phone
                        ? "border-red-500 text-red-500"
                        : "border-[#A5A5A5] text-white"
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Shipments and Mode */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="relative">
                  <label
                    htmlFor="shipmentsPerMonth"
                    className="block font-poppins font-normal text-[14px] sm:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-white mb-2"
                  >
                    Number of shipments per month
                  </label>
                  <select
                    id="shipmentsPerMonth"
                    name="shipmentsPerMonth"
                    value={formData.shipmentsPerMonth}
                    onChange={handleInputChange}
                    className="w-full font-poppins font-normal text-[14px] sm:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] bg-transparent border-b-[1px] border-[#A5A5A5] text-[#647FBB] py-2 pr-8 focus:outline-none focus:border-white transition-colors appearance-none"
                  >
                    <option value="10-25" className="bg-[#2A2A2A] text-white">
                      10 to 25
                    </option>
                    <option value="25-50" className="bg-[#2A2A2A] text-white">
                      25 to 50
                    </option>
                    <option value="50" className="bg-[#2A2A2A] text-white">
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
                    className="block font-poppins font-normal text-[14px] sm:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-white mb-2"
                  >
                    Mode
                  </label>
                  <select
                    id="mode"
                    name="mode"
                    value={formData.mode}
                    onChange={handleInputChange}
                    className="w-full font-poppins font-normal text-[14px] sm:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] bg-transparent border-b-[1px] border-[#A5A5A5] text-[#647FBB] py-2 pr-8 focus:outline-none focus:border-white transition-colors appearance-none"
                  >
                    <option
                      value="Air Freight Services"
                      className="bg-[#2A2A2A] text-white"
                    >
                      Air Freight Services
                    </option>
                    <option
                      value="Sea Freight Services"
                      className="bg-[#2A2A2A] text-white"
                    >
                      Sea Freight Services
                    </option>
                    <option
                      value="Sea-Air Combination"
                      className="bg-[#2A2A2A] text-white"
                    >
                      Sea-Air Combination
                    </option>
                    <option
                      value="Book Road Transport"
                      className="bg-[#2A2A2A] text-white"
                    >
                      Book Road Transport
                    </option>
                    <option
                      value="Explore Rail Options"
                      className="bg-[#2A2A2A] text-white"
                    >
                      Explore Rail Options
                    </option>
                    <option value="Other" className="bg-[#2A2A2A] text-white">
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
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="originPort"
                    className="block font-poppins font-normal text-[14px] sm:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-white mb-2"
                  >
                    Origin Port or Country
                  </label>
                  <input
                    type="text"
                    id="originPort"
                    name="originPort"
                    value={formData.originPort}
                    onChange={handleInputChange}
                    className={`w-full bg-transparent border-b-[1px] py-2 focus:outline-none focus:border-white transition-colors placeholder-gray-400 ${
                      errors.originPort
                        ? "border-red-500 text-red-500"
                        : "border-[#A5A5A5] text-white"
                    }`}
                  />
                  {errors.originPort && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.originPort}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="originPort"
                    className="block font-poppins font-normal text-[14px] sm:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-white mb-2"
                  >
                    Destination port or Country
                  </label>
                  <input
                    type="text"
                    id="destinationPort"
                    name="destinationPort"
                    value={formData.destinationPort}
                    onChange={handleInputChange}
                    className={`w-full bg-transparent border-b-[1px] py-2 focus:outline-none focus:border-white transition-colors placeholder-gray-400 ${
                      errors.destinationPort
                        ? "border-red-500 text-red-500"
                        : "border-[#A5A5A5] text-white"
                    }`}
                  />
                  {errors.destinationPort && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.destinationPort}
                    </p>
                  )}
                </div>
              </div>

              {/* Enquiry */}
              <div>
                <label
                  htmlFor="enquiry"
                  className="block font-poppins font-normal text-[14px] sm:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-white mb-2"
                >
                  Enquiry
                </label>
                <textarea
                  id="enquiry"
                  name="enquiry"
                  value={formData.enquiry}
                  onChange={handleInputChange}
                  rows={2}
                  placeholder="Include a description of the cargo"
                  className="w-full font-poppins font-normal text-[14px] sm:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] bg-transparent border-b-[1px] border-[#A5A5A5] text-white placeholder-[#647FBB] py-2 px-0 focus:outline-none focus:border-white transition-colors resize-none"
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
                <label
                  htmlFor="privacy"
                  className="font-poppins font-normal text-[12px] md:text-[14px] lg:text-[15px] leading-[25px] tracking-[0em] text-white"
                >
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
                Submit
              </button>
            </form>

            {/* Footer Icons */}
            <div className="grid grid-cols-2 gap-6 mt-12 pt-8 xl:flex xl:flex-row xl:flex-wrap xl:justify-start">
              {services.map((service) => (
                <Link
                  key={service.id}
                  href={service.link}
                  className="w-36 h-36 flex flex-col items-center justify-center p-3 rounded-md transition-all duration-200 hover:bg-[#0F0F0F]"
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
                  <div className="font-poppins font-medium text-[12px] sm:text-[13px] lg:text-[14px] leading-[19px] tracking-[0.02em] text-center text-gray-300">
                    <div>{service.title}</div>
                    <div>{service.subtitle}</div>
                  </div>
                </Link>
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
              <div className="font-poppins font-medium text-gray-300 leading-[17px] text-[11px] sm:text-[12px] lg:text-[13px] leading-tight">
                A proudly Australian logistics pit crew with a global reach,
                <br />
                delivering agile, reliable freight solutions that keep your
                <br />
                supply chain moving.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FreightQuoteWidget;
