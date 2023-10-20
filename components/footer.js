import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-white pt-16 pb-6">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 md:gap-8 gap-4">
          <div className="flex flex-col flex-shrink-0 mb-10">
            <div>
              <h2 className="text-xl font-bold leading-4 text-gray-900">
                FAA TEAM
              </h2>
            </div>

            <div className="flex items-center gap-x-4 mt-6">
              <div className="w-12 h-12 flex-shrink-0 bg-blue-800 cursor-pointer  rounded-full flex items-center justify-center"></div>
              <div className="opacity-80 w-12 h-12 flex-shrink-0 bg-blue-800 cursor-pointer  rounded-full flex items-center justify-center"></div>
              <div className="opacity-50 w-12 h-12 flex-shrink-0 bg-blue-800 cursor-pointer  rounded-full flex items-center justify-center"></div>
              <div className="opacity-30 w-12 h-12 flex-shrink-0 bg-blue-800 cursor-pointer  rounded-full flex items-center justify-center"></div>
            </div>
          </div>
          <div className="ml-20 mb-10">
            <h2 className="text-xl font-bold leading-4 text-gray-900">
              Company
            </h2>
            <Link href="/about">
              <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">
                About Us
              </p>
            </Link>
            <Link href="/contact">
              <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">
                Contact us
              </p>
            </Link>
          </div>
          <div className="ml-20 mb-4 lg:ml-10  ">
            <h2 className="text-xl font-bold leading-4 text-gray-900">
              Contact
            </h2>
            <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">
              087-260-7999, 085-108-4246
            </p>
            <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">
              phopautomation@gmail.com
            </p>
            <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">
              41/14 Lam Luk Ka PathumThani Province 12150
            </p>
          </div>
        </div>
        <hr className="my-6 border-gray-400 sm:mx-auto dark:border-gray-700 lg:my-8" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-800 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              FAA TEAM
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
