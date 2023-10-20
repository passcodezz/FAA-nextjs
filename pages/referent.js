import Head from "next/head";
import React from "react";
import Image from "next/image";
import NavTop from "../components/navbar";
import Footer from "../components/footer";
import img1 from "../public/asset/ref1.png";
import img2 from "../public/asset/ref2.png";
import img3 from "../public/asset/ref3.png";
import img4 from "../public/asset/ref4.png";
import img5 from "../public/asset/ref5.png";
import img6 from "../public/asset/ref6.png";
import img7 from "../public/asset/ref7.png";
import img8 from "../public/asset/ref8.png";
import img9 from "../public/asset/ref9.png";
import img10 from "../public/asset/ref10.png";
import img11 from "../public/asset/ref11.png";
import img12 from "../public/asset/ref12.png";
import img13 from "../public/asset/ref13.png";
import img14 from "../public/asset/ref14.png";
import img15 from "../public/asset/ref15.png";
import img16 from "../public/asset/ref16.png";
import img17 from "../public/asset/ref17.png";
import img18 from "../public/asset/ref18.png";
import img19 from "../public/asset/ref19.png";
import img20 from "../public/asset/ref20.png";

import { Card } from "flowbite-react";

const Referent = () => {
  return (
    <>
      <Head>
        <title>REFERENT</title>
        <meta
          name="description"
          content="Fraud and Risk Management,Campaign Management,E-Notification,Digital Signature,Self Register,Electronic Donation,API Gateway,Vaccine Report,Contact Center,Maintenance and Support"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavTop />

      <div className="bg-gray-50">
        <div className="container mx-auto xl:px-40 px-8 pb-24 pt-10">
          <h5 className="mb-16 text-center text-4xl font-bold tracking-tight text-gray-900 dark:text-white my-8">
            Product & Service
          </h5>

          <div className="flex flex-col gap-10">
            <Card>
              <h5 className="text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white my-8">
                420AZ FUNCTION CHARACTERISTICS
              </h5>
              <Image src={img1} alt="img01" />
            </Card>

            <Card>
              <h5 className=" text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white my-8">
                MACHINE DETAILS
              </h5>
              <Image src={img2} alt="img02" />
            </Card>

            <Card>
              <h5 className="text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white my-8">
                Core Parts with the Technical Specifications
              </h5>
              <Image src={img3} alt="img03" />
            </Card>

            <Card>
              <h5 className=" text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white my-8">
                10 HEAD PACKING MACHINE DESIGN DRAWINGS
              </h5>
              <Image src={img4} alt="img04" />
            </Card>

            <Card>
              <h5 className=" text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white my-8">
                MACHINE PICTURES
              </h5>
              <Image src={img5} alt="img05" />
            </Card>

            <Card>
              <h5 className=" text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white my-8">
                PARAMETER
              </h5>
              <Image src={img6} alt="img06" />
            </Card>

            <Card>
              <h5 className=" text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white my-8">
                ELECTRICAL CONFIGURATION
              </h5>
              <Image src={img7} alt="img07" />
            </Card>

            <Card>
              <h5 className=" text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white my-8">
                PACKING CONSUMABLES
              </h5>
              <Image src={img8} alt="img08" />
            </Card>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card>
                <h5 className="text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white my-8">
                  เครื่องบรรจุแนวตั้งขนาดเล็ก รุ่นประหยัด
                </h5>
                <Image src={img9} alt="img09" />
              </Card>

              <Card>
                <Image src={img10} alt="img10" />
              </Card>

              <Card>
                <h5 className="text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white my-8">
                  เครื่องบรรจุแนวตั้งขนาดเล็ก รุ่นประหยัด
                </h5>
                <Image src={img11} alt="img11" />
              </Card>

              <Card>
                <Image src={img12} alt="img12" />
              </Card>

              <Card>
                <h5 className="text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white my-8">
                  เครื่องบรรจุแนวตั้งขนาดเล็ก
                </h5>
                <Image src={img13} alt="img13" />
              </Card>

              <Card>
                <Image src={img14} alt="img14" />
              </Card>

              <Card>
                <h5 className="text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white my-8">
                  เครื่องบรรจุแนวตั้งขนาดเล็ก
                </h5>
                <Image src={img15} alt="img15" />
              </Card>

              <Card>
                <Image src={img16} alt="img16" />
              </Card>

              <Card>
                <h5 className="text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white my-8">
                  เครื่องบรรจุแนวตั้งขนาดเล็ก
                </h5>
                <Image src={img17} alt="img17" />
              </Card>

              <Card>
                <Image src={img18} alt="img18" />
              </Card>

              <Card>
                <h5 className="text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white my-8">
                  เครื่องบรรจุอัตโนมัติแนวตั้ง แบบซอง 3 เหลี่ยม
                </h5>
                <Image src={img19} alt="img19" />
              </Card>

              <Card>
                <h5 className="text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white my-8"></h5>
                <Image src={img20} alt="img20" />
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Referent;
