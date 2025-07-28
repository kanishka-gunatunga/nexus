"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ServiceCardRow() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <div className="bg-[#F6F6F6] py-6 px-4">
      <h3 className="font-poppins font-medium text-[22px] text-[#162F65] mb-8">
        These services may also be of interest to you.
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {/* Card 1 */}
        <Link href="/air-and-sea-freight">
          <div
            className={`service-single-card group flex flex-col items-center justify-center text-center p-4 rounded-md w-full h-full transition shadow-md ${
              isActive("/air-and-sea-freight")
                ? "bg-[#162F65] text-white"
                : "bg-white text-black hover:bg-[#162F65] hover:text-white"
            }`}
          >
            <Image
              src="/icons/plane-black.svg"
              alt="Air & Sea Freight"
              width={60}
              height={60}
              className={`mb-3 transition duration-300 ${
                isActive("/air-and-sea-freight")
                  ? "invert"
                  : "group-hover:invert"
              }`}
            />
            <p className="font-poppins text-[17px] font-semibold leading-tight">
              AIR & SEA
              <br />
              FREIGHT
            </p>
          </div>
        </Link>

        {/* Card 2 */}
        <Link href="/customs">
          <div
            className={`group flex flex-col items-center justify-center text-center p-4 rounded-md w-full h-full transition shadow-md ${
              isActive("/customs")
                ? "bg-[#162F65] text-white"
                : "bg-white text-black hover:bg-[#162F65] hover:text-white"
            }`}
          >
            <Image
              src="/icons/cart.svg"
              alt="Customs Clearance"
              width={60}
              height={60}
              className={`mb-3 transition duration-300 ${
                isActive("/customs") ? "invert" : "group-hover:invert"
              }`}
            />
            <p className="font-poppins text-[17px] font-semibold leading-tight">
              CUSTOMS CLEARANCE
              <br />& COMPLIANCE
            </p>
          </div>
        </Link>

        {/* Card 3 */}
        <Link href="/Integrated-logistics">
          <div
            className={`group flex flex-col items-center justify-center text-center p-4 rounded-md w-full h-full transition shadow-md ${
              isActive("/Integrated-logistics")
                ? "bg-[#162F65] text-white"
                : "bg-white text-black hover:bg-[#162F65] hover:text-white"
            }`}
          >
            <Image
              src="/icons/box.svg"
              alt="Integrated Logistics"
              width={60}
              height={60}
              className={`mb-3 transition duration-300 ${
                isActive("/Integrated-logistics")
                  ? "invert"
                  : "group-hover:invert"
              }`}
            />
            <p className="font-poppins text-[17px] font-semibold leading-tight">
              3PL, Warehousing & <br /> Special Projects
            </p>
          </div>
        </Link>

        {/* Card 4 */}
        <Link href="/road-and-rail">
          <div
            className={`group flex flex-col items-center justify-center text-center p-4 rounded-md w-full h-full transition shadow-md ${
              isActive("/road-and-rail")
                ? "bg-[#162F65] text-white"
                : "bg-white text-black hover:bg-[#162F65] hover:text-white"
            }`}
          >
            <Image
              src="/icons/truck.svg"
              alt="Road & Rail"
              width={60}
              height={60}
              className={`mb-3 transition duration-300 ${
                isActive("/road-and-rail") ? "invert" : "group-hover:invert"
              }`}
            />
            <p className="font-poppins text-[17px] font-semibold leading-tight">
              ROAD & RAIL
              <br />
              TRANSPORT
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
