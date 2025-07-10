import Link from "next/link";
import Image from "next/image";
import React, {useState} from "react";

const Nav = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header
            className="relative lg:bg-transparent z-50 poppins">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between py-3 sm:py-4 lg:py-6 relative">
                    <div className="lg:hidden flex-shrink-0 order-1">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-[#282828] hover:text-[#082049] focus:outline-none focus:ring-2 focus:ring-[#e6b333] rounded-md p-2 transition-all duration-200"
                            aria-expanded={isMenuOpen}
                            aria-controls="mobile-menu"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? (
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M4 6h16M4 12h16M4 18h16"/>
                                </svg>
                            )}
                        </button>
                    </div>

                    <div
                        className="flex-shrink-0 order-2 lg:order-none absolute left-1/2 -translate-x-1/2 lg:relative lg:left-0 lg:transform-none">
                        <Link href="/">
                            <Image
                                src="/Logo-Nexus.png"
                                alt="Nexus Logo"
                                width={60}
                                height={60}
                                className="h-12 sm:h-16 lg:h-25 w-auto"
                            />
                        </Link>
                    </div>

                    <div className="lg:hidden flex-shrink-0 order-3">
                        <Link href="#">
                            <button
                                className="bg-[#e6b333] text-[#282828] hover:bg-[#e6b333]/90 px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm rounded-lg font-normal transition-colors"
                            >
                                Track & Trace
                            </button>
                        </Link>
                    </div>

                    <nav
                        className="hidden lg:flex items-center space-x-6 lg:space-x-8 xl:space-x-12 order-2">
                        <Link
                            href="#"
                            className="text-base sm:text-lg lg:text-xl font-semibold text-[#282828] hover:text-[#082049] transition-colors duration-200"
                        >
                            Why Nexus
                        </Link>
                        <Link
                            href="/leadership"
                            className="text-base sm:text-lg lg:text-xl font-semibold text-[#282828] hover:text-[#082049] transition-colors duration-200"
                        >
                            Leadership Team
                        </Link>
                        <Link
                            href="#"
                            className="text-base sm:text-lg lg:text-xl font-semibold text-[#282828] hover:text-[#082049] transition-colors duration-200"
                        >
                            Services
                        </Link>
                        <Link
                            href="#"
                            className="text-base sm:text-lg lg:text-xl font-semibold text-[#282828] hover:text-[#082049] transition-colors duration-200"
                        >
                            Insights
                        </Link>
                        <Link href="#"
                              className="hidden xl:block">
                            <button
                                className="bg-[#e6b333] text-[#282828] hover:bg-[#162f65] hover:text-white px-4 sm:px-6 lg:px-8 py-1.5 sm:py-2 text-xs sm:text-sm lg:text-sm rounded-lg font-normal transition-colors"
                            >
                                Track and Trace
                            </button>
                        </Link>
                    </nav>

                    <div
                        className="hidden lg:flex items-center space-x-3 lg:space-x-4 order-3">
                        <button
                            className="bg-[#e6b333] text-[#282828] hover:bg-[#162f65] hover:text-white px-4 sm:px-6 lg:px-8 py-1.5 sm:py-2 text-xs sm:text-sm lg:text-sm rounded-lg font-normal transition-colors"
                        >
                            Contact Us
                        </button>
                    </div>
                </div>

                <div
                    id="mobile-menu"
                    className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0'}`}
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
                        <Link
                            href="#"
                            className="block px-3 py-2 text-base font-medium text-[#282828] hover:text-[#082049] hover:bg-gray-100 rounded-md transition-colors w-full text-center"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Why Nexus
                        </Link>
                        <Link
                            href="/leadership"
                            className="block px-3 py-2 text-base font-medium text-[#282828] hover:text-[#082049] hover:bg-gray-100 rounded-md transition-colors w-full text-center"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Leadership Team
                        </Link>
                        <Link
                            href="#"
                            className="block px-3 py-2 text-base font-medium text-[#282828] hover:text-[#082049] hover:bg-gray-100 rounded-md transition-colors w-full text-center"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Services
                        </Link>
                        <Link
                            href="#"
                            className="block px-3 py-2 text-base font-medium text-[#282828] hover:text-[#082049] hover:bg-gray-100 rounded-md transition-colors w-full text-center"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Insights
                        </Link>
                        <Link href="#" className="w-full text-center mt-4">
                            <button
                                className="bg-[#e6b333] text-[#282828] hover:bg-[#e6b333]/90 px-6 py-2 text-sm rounded-lg font-normal w-full transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Nav;