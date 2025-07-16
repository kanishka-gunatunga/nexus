'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function ServiceCardRow() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <div className="bg-[#F6F6F6] py-6 px-4">
      <h3 className="text-[#162F65] text-lg font-semibold mb-4 font-poppins">
        These services may also be of interest to you.
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {/* Card 1 */}
        <Link href="/air-and-sea-freight">
          <div
            className={`flex flex-col items-center justify-center text-center p-4 rounded-md w-full h-full transition shadow-md ${
              isActive('/air-and-sea-freight')
                ? 'bg-[#162F65] text-white'
                : 'bg-white text-black hover:bg-[#e6f0ff]'
            }`}
          >
            <Image
              src="/icons/air&sea.svg"
              alt="Air & Sea Freight"
              width={30}
              height={30}
              className="mb-3"
            />
            <p className="font-poppins text-[17px] font-semibold leading-tight">
              AIR & SEA<br />FREIGHT
            </p>
          </div>
        </Link>

        {/* Card 2 */}
        <Link href="/road-rail-transport">
          <div
            className={`flex flex-col items-center justify-center text-center p-4  rounded-md w-full h-full transition shadow-md ${
              isActive('/road-rail-transport')
                ? 'bg-[#162F65] text-white'
                : 'bg-white text-black hover:bg-[#e6f0ff]'
            }`}
          >
            <Image
              src="/icons/road&rail.svg"
              alt="Road & Rail"
              width={30}
              height={30}
              className="mb-3"
            />
            <p className="font-poppins text-[17px] font-semibold leading-tight">
              ROAD & RAIL<br />TRANSPORT
            </p>
          </div>
        </Link>

        {/* Card 3 */}
        <Link href="/Integrated-logistics">
          <div
            className={`flex flex-col items-center justify-center text-center p-4  rounded-md w-full h-full transition shadow-md ${
              isActive('/Integrated-logistics')
                ? 'bg-[#162F65] text-white'
                : 'bg-white text-black hover:bg-[#e6f0ff]'
            }`}
          >
            <Image
              src="/icons/intergrated.svg"
              alt="Integrated Logistics"
              width={30}
              height={30}
              className="mb-3"
            />
            <p className="font-poppins text-[17px] font-semibold leading-tight">
              INTEGRATED<br />LOGISTICS
            </p>
          </div>
        </Link>

        {/* Card 4 */}
        <Link href="/customs-clearance">
          <div
            className={`flex flex-col items-center justify-center text-center p-4  rounded-md w-full h-full transition shadow-md ${
              isActive('/customs-clearance')
                ? 'bg-[#162F65] text-white'
                : 'bg-white text-black hover:bg-[#e6f0ff]'
            }`}
          >
            <Image
              src="/icons/customlogic.svg"
              alt="Customs Clearance"
              width={30}
              height={30}
              className="mb-3"
            />
            <p className="font-poppins text-[17px] font-semibold leading-tight">
              CUSTOMS CLEARANCE<br />& COMPLIANCE
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
