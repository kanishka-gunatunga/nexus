"use client";
import React, { useState } from "react";

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
              <h2 className="textfont-poppins font-bold text-[35px] lg:text-[55px] text-white mb-4 leading-tight">
                Request a<br />
                freight rate today
              </h2>
              <p className="font-poppins font-medium sm:text-[18px] md:text-[18px] lg:text-[20px] text-white italic mb-2">
                Tell us as much as you can... Nothing is too complex for us...
              </p>
              <p className="font-poppins font-medium sm:text-[18px] md:text-[18px] lg:text-[20px] text-white italic">
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
                    className="font-poppins sm:text-[18px] md:text-[18px] lg:text-[20px] text-white mb-2"
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
                    className="w-full bg-transparent border-b border-gray-500 text-white placeholder-gray-400 py-2 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="font-poppins sm:text-[18px] md:text-[18px] lg:text-[20px] text-white mb-2"
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
                    className="w-full bg-transparent border-b border-gray-500 text-white placeholder-gray-400 py-2 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
              </div>

              {/* Company Name */}
              <div>
                <label
                  htmlFor="companyName"
                  className="font-poppins sm:text-[18px] md:text-[18px] lg:text-[20px] text-white mb-2"
                >
                  Company Name*
                </label>
                <p className="text-xs text-white mb-2">
                  Kindly use your company email address so your enquiry isn't
                  marked as spam.
                </p>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-transparent border-b border-gray-500 text-white placeholder-gray-400 py-2 focus:outline-none focus:border-white transition-colors"
                />
              </div>

              {/* Email and Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="email"
                    className="font-poppins sm:text-[18px] md:text-[18px] lg:text-[20px] text-white mb-2"
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
                    className="w-full bg-transparent border-b border-gray-500 text-white placeholder-gray-400 py-2 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="nt-poppins sm:text-[18px] md:text-[18px] lg:text-[20px] text-white mb-2"
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
                    className="w-full bg-transparent border-b border-gray-500 text-white placeholder-gray-400 py-2 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
              </div>

              {/* Shipments and Mode */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="shipmentsPerMonth"
                    className="nt-poppins sm:text-[18px] md:text-[18px] lg:text-[20px] text-white mb-2"
                  >
                    Number of shipments per month
                  </label>
                  <select
                    id="shipmentsPerMonth"
                    name="shipmentsPerMonth"
                    value={formData.shipmentsPerMonth}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-gray-500 text-white py-2 focus:outline-none focus:border-white transition-colors appearance-none"
                  >
                    <option value="25044" className="bg-[#2A2A2A] text-white">
                      25044
                    </option>
                    <option value="1-5" className="bg-[#2A2A2A] text-white">
                      1-5
                    </option>
                    <option value="6-10" className="bg-[#2A2A2A] text-white">
                      6-10
                    </option>
                    <option value="11-25" className="bg-[#2A2A2A] text-white">
                      11-25
                    </option>
                    <option value="25+" className="bg-[#2A2A2A] text-white">
                      25+
                    </option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="mode"
                    className="nt-poppins sm:text-[18px] md:text-[18px] lg:text-[20px] text-white mb-2"
                  >
                    Mode
                  </label>
                  <select
                    id="mode"
                    name="mode"
                    value={formData.mode}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-gray-500 text-white py-2 focus:outline-none focus:border-white transition-colors appearance-none"
                  >
                    <option
                      value="Air & Sea Freight Services"
                      className="bg-[#2A2A2A] text-white"
                    >
                      Air & Sea Freight Services
                    </option>
                    <option
                      value="Road & Rail Transport"
                      className="bg-[#2A2A2A] text-white"
                    >
                      Road & Rail Transport
                    </option>
                    <option
                      value="Customs Clearance"
                      className="bg-[#2A2A2A] text-white"
                    >
                      Customs Clearance
                    </option>
                    <option
                      value="3PL Warehousing"
                      className="bg-[#2A2A2A] text-white"
                    >
                      3PL Warehousing
                    </option>
                  </select>
                </div>
              </div>

              {/* Origin and Destination */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="originPort"
                    className="nt-poppins sm:text-[18px] md:text-[18px] lg:text-[20px] text-white mb-2"
                  >
                    Origin Port or Country
                  </label>
                  <input
                    type="text"
                    id="originPort"
                    name="originPort"
                    value={formData.originPort}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-gray-500 text-white placeholder-gray-400 py-2 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="destinationPort"
                    className="nt-poppins sm:text-[18px] md:text-[18px] lg:text-[20px] text-white mb-2"
                  >
                    Destination port or Country
                  </label>
                  <select
                    id="destinationPort"
                    name="destinationPort"
                    value={formData.destinationPort}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-gray-500 text-white py-2 focus:outline-none focus:border-white transition-colors appearance-none"
                  >
                    <option value="Import" className="bg-[#2A2A2A] text-white">
                      Import
                    </option>
                    <option value="Export" className="bg-[#2A2A2A] text-white">
                      Export
                    </option>
                    <option
                      value="Domestic"
                      className="bg-[#2A2A2A] text-white"
                    >
                      Domestic
                    </option>
                  </select>
                </div>
              </div>

              {/* Enquiry */}
              <div>
                <label
                  htmlFor="enquiry"
                  className="nt-poppins sm:text-[18px] md:text-[18px] lg:text-[20px] text-white mb-2"
                >
                  Enquiry
                </label>
                <textarea
                  id="enquiry"
                  name="enquiry"
                  value={formData.enquiry}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full bg-transparent border border-gray-500 text-white placeholder-gray-400 p-3 rounded focus:outline-none focus:border-white transition-colors resize-none"
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
                  <span className="underline cursor-pointer">
                    privacy policy
                  </span>{" "}
                  contains detailed information about our handling of personal
                  information.
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#4A5FBF] text-white py-3 px-6 rounded hover:bg-[#3A4FAF] transition-colors duration-200 font-medium"
              >
                Get My Quote
              </button>
            </form>

            {/* Footer Icons */}
            <div className="flex justify-center gap-8 mt-12 pt-8 border-t border-gray-600">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 mb-2 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L4.5 20.29L8.5 17.5L12 22L15.5 17.5L19.5 20.29L12 2Z" />
                  </svg>
                </div>
                <div className="text-xs text-center text-gray-300 leading-tight">
                  <div className="font-medium">AIR & SEA</div>
                  <div>FREIGHT</div>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-12 h-12 mb-2 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 16.08C17.24 16.08 16.56 16.38 16.04 16.85L8.91 12.7C8.96 12.47 9 12.24 9 12S8.96 11.53 8.91 11.3L15.96 7.19C16.5 7.69 17.21 8 18 8C19.66 8 21 6.66 21 5S19.66 2 18 2 15 3.34 15 5C15 5.24 15.04 5.47 15.09 5.7L8.04 9.81C7.5 9.31 6.79 9 6 9C4.34 9 3 10.34 3 12S4.34 15 6 15C6.79 15 7.5 14.69 8.04 14.19L15.16 18.34C15.11 18.55 15.08 18.77 15.08 19C15.08 20.61 16.39 21.92 18 21.92S20.92 20.61 20.92 19C20.92 17.39 19.61 16.08 18 16.08Z" />
                  </svg>
                </div>
                <div className="text-xs text-center text-gray-300 leading-tight">
                  <div className="font-medium">ROAD & RAIL</div>
                  <div>TRANSPORT</div>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-12 h-12 mb-2 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L2 7L12 12L22 7L12 2M2 17L12 22L22 17M2 12L12 17L22 12" />
                  </svg>
                </div>
                <div className="text-xs text-center text-gray-300 leading-tight">
                  <div className="font-medium">INTEGRATED</div>
                  <div>LOGISTICS</div>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-12 h-12 mb-2 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 11H7V9H9V11M13 7H11V13H13V7M15 15H9C8.45 15 8 14.55 8 14V6C8 5.45 8.45 5 9 5H15C15.55 5 16 5.45 16 6V14C16 14.55 15.55 15 15 15M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z" />
                  </svg>
                </div>
                <div className="text-xs text-center text-gray-300 leading-tight">
                  <div className="font-medium">CUSTOMS CLEARANCE</div>
                  <div>& COMPLIANCE</div>
                </div>
              </div>
            </div>

            {/* Company Logo/Info */}
            <div className="mt-12 pt-8 border-t border-gray-600 flex items-center gap-4">
              <div className="text-2xl font-bold text-white">neXus</div>
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
