import Head from "next/head";
import React from "react";
import Navtop from "../components/navbar";
import Footer from "../components/footer";
import Lottie from "lottie-react";
import Infinite from "../infinite1.json";

export default function Contact() {
  return (
    <>
      <Head>
        <title>CONTACT</title>
        <meta name="description" content="FAA TEAM" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navtop />

      <div className="bg-gray-50">
        <div className="container mx-auto xl:px-40 px-8 py-20">
          <h5 className="text-center text-4xl font-bold tracking-tight text-gray-900 dark:text-white my-8">
            Contact Us
          </h5>

          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Information
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Information and Contact
              </p>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    company name
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    FAA TEAM
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Tel</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    087-260-7999, 085-108-4246
                  </dd>
                </div>
                <div className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Email address
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    phopautomation@gmail.com
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Contact</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Phop Automation Company Address: 41/14 Moo 12, Lam Luk Ka{" "}
                    <br></br>
                    Subdistrict, Lam Luk Ka District, Pathum Thani Province
                    12150
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>

      <Lottie
        className="justify-center  lg:w-1/2 m-8 sm:m-10 lg:m-5"
        loop={true}
        animationData={Infinite}
        style={{
          top: "35%",
          right: "20%",
          margin: "auto",
          overflow: "hidden",
        }}
      />
      <Footer />
    </>
  );
}
