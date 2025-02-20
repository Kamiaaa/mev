'use client'


// components/Navbar.tsx
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleProductDropdown = () => {
    setIsProductOpen(!isProductOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <nav className="w-full bg-white shadow-md fixed z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-800">
              <Image className='h-12 w-12' src={"/img/logo.jpg"} height={500} width={500} alt='logo'/>
            </Link>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-800 hover:text-gray-600 font-poppins">
              Home
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setIsProductOpen(true)}
              onMouseLeave={() => setIsProductOpen(false)}
            >
              <button className="text-gray-800 hover:text-gray-600 font-poppins focus:outline-none">
                Product
              </button>
              {isProductOpen && (
                <div className="absolute w-72 bg-white rounded-lg shadow-lg">
                  <Link href="/product/1" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 font-poppins">
                    Electric Cars
                  </Link>
                  <Link href="/product/2" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 font-poppins rounded-lg">
                    Two Wheeler Electric Bike
                  </Link>
                  <Link href="/product/2" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 font-poppins rounded-lg">
                    Three Wheeler Electric Bike
                  </Link>
                  <Link href="/product/2" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 font-poppins rounded-lg">
                    Accessories
                  </Link>
                </div>
              )}
            </div>
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="text-gray-800 hover:text-gray-600 font-poppins focus:outline-none">
                Services
              </button>
              {isServicesOpen && (
                <div className="absolute w-60 bg-white rounded-lg shadow-lg">
                  <Link href="/service/1" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 font-poppins">
                    Service Centers
                  </Link>
                  <Link href="/service/2" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 font-poppins rounded-lg">
                    Find a Dealer
                  </Link>
                  <Link href="/service/2" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 font-poppins rounded-lg">
                    Accessories
                  </Link>
                  <Link href="/service/2" className="block px-4 py-2 text-gray-800 font-poppins hover:bg-gray-100 rounded-lg">
                    Financial Services
                  </Link>
                </div>
              )}
            </div>
            <Link href="/career" className="text-gray-800 hover:text-gray-600 font-poppins">
              Career
            </Link>
            <Link href="/about" className="text-gray-800 hover:text-gray-600 font-poppins">
              About
            </Link>
            <Link href="/contact" className="text-gray-800 hover:text-gray-600 font-poppins">
              Contact
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-gray-800 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              )}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}
        >
          <div className="pt-2 pb-4">
            <Link href="/" className="block py-2 px-4 text-gray-800 hover:bg-gray-100 font-poppins">
              Home
            </Link>
            <div className="relative">
              <button
                className="flex justify-between items-center w-full py-2 px-4 text-gray-800 hover:bg-gray-100 focus:outline-none"
                onClick={toggleProductDropdown}
              >
                Product
                <svg
                  className={`w-4 h-4 transition-transform ${isProductOpen ? 'transform rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              {isProductOpen && (
                <div className="pl-6">
                  <Link href="/product/1" className="block py-2 px-4 text-gray-800 hover:bg-gray-100 font-poppins">
                    Product 1
                  </Link>
                  <Link href="/product/2" className="block py-2 px-4 text-gray-800 hover:bg-gray-100 font-poppins">
                    Product 2
                  </Link>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                className="flex justify-between items-center w-full py-2 px-4 text-gray-800 hover:bg-gray-100 focus:outline-none"
                onClick={toggleServicesDropdown}
              >
                Services
                <svg
                  className={`w-4 h-4 transition-transform ${isServicesOpen ? 'transform rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              {isServicesOpen && (
                <div className="pl-6">
                  <Link href="/service/1" className="block py-2 px-4 text-gray-800 hover:bg-gray-100 font-poppins">
                    Service 1
                  </Link>
                  <Link href="/service/2" className="block py-2 px-4 text-gray-800 hover:bg-gray-100 font-poppins">
                    Service 2
                  </Link>
                </div>
              )}
            </div>
            <Link href="/career" className="block py-2 px-4 text-gray-800 hover:bg-gray-100 font-poppins">
              Career
            </Link>
            <Link href="/about" className="block py-2 px-4 text-gray-800 hover:bg-gray-100 font-poppins">
              About
            </Link>
            <Link href="/contact" className="block py-2 px-4 text-gray-800 hover:bg-gray-100 font-poppins">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;