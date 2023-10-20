import { Fragment, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import logo from "../public/images/FAA-Logo.jpg";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useEffect } from "react";
import classes from "/styles/navber.module.css";
import { motion, AnimatePresence } from "framer-motion";

const navigation = {
  pages: [
    { name: "Product & Service", href: "/referent" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navtop() {
  const [open, setOpen] = useState(false);

  const headerRef = useRef(null);

  const headerFunc = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add(`${classes.header__shrink}`);
    } else {
      headerRef.current.classList.remove(`${classes.header__shrink}`);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerFunc);

    return () => window.removeEventListener("scroll", headerFunc);
  }, []);

  return (
    <div ref={headerRef}>
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 flex z-40">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
                <div className="px-4 pt-5 pb-2 flex mt-40">
                  <button
                    type="button"
                    className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <Link href={page.href}>
                        <a className="-m-2 p-2 block font-medium text-gray-900">
                          {page.name}
                        </a>
                      </Link>
                    </div>
                  ))}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white z-50">
        <div className="bg-gradient-to-r bg-blue-800 h-14 flex items-center justify-center text-sm font-medium text-white px-4 sm:px-6 lg:px-8">
          {/* Get free delivery on orders over $100 */}
        </div>

        <nav
          aria-label="Top"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200">
            <div className="h-24 flex items-center">
              <button
                type="button"
                className="bg-white p-2 rounded-md text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <motion.div
                className="ml-4 flex lg:ml-0"
                whileHover={{
                  position: "relative",
                  zIndex: 1,
                  background: "white",
                  scale: 1.4,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <Link href="/">
                  <a>
                    <span className="sr-only">Workflow</span>
                    <Image
                      alt="logo"
                      src={logo}
                      width="70"
                      height="30"
                      objectFit="fill"
                      className="d-inline-block align-top w-10 h-15"
                    />
                  </a>
                </Link>
              </motion.div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="h-full flex space-x-8">
                  {navigation.pages.map((page) => (
                    <Link key={page.name} href={page.href}>
                      <a className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">
                        {page.name}
                      </a>
                    </Link>
                  ))}
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center"></div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
