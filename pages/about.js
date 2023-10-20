import Head from "next/head";
import React from "react";
import Navtop from "../components/navbar";
import Footer from "../components/footer";
import { Card } from "flowbite-react";
import Image from "next/image";
import imgteam from "../public/asset/faa-team.png";

export default function Contact() {
  return (
    <>
      <Head>
        <title>ABOUT</title>
        <meta name="description" content="FAA TEAM" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navtop />

      <div>
        <div className="container mx-auto xl:px-40 px-8 pt-20">
          <h5 className="text-center text-4xl font-bold tracking-tight text-gray-900 dark:text-white my-8">
            COMPANY & DESSION TEAM
          </h5>

          <div className="bg-white shadow overflow-hidden rounded-lg p-10">
            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-md font-medium text-gray-800">About Us</dt>
              <dd className="mt-1 text-sm text-gray-800 sm:mt-0 sm:col-span-2">
                นำเข้าเครื่องจักรจากต่างประเทศโดยผ่านบริษัท FAA Product
                เครื่องจักรประเภท packing และ บรรจุภัณฑ์
              </dd>
            </div>
          </div>
        </div>

        <div className="container mx-auto xl:px-40 px-8">
          <h5 className="mb-16 text-center text-4xl font-bold tracking-tight text-gray-900 dark:text-white my-8"></h5>

          <div className="my-10">
            <Card>
              <Image src={imgteam} alt="FAATeam" />
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
