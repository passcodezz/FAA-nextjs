import React from "react";
import machine1 from "/public/asset/mc-1.jpg";
import machine2 from "/public/asset/mc-2.jpg";
import machine3 from "/public/asset/mc-3.png";
import machine4 from "/public/asset/mc-4.png";
import machine5 from "/public/asset/mc-5.png";
import machine6 from "/public/asset/mc-6.jpg";
import machine7 from "/public/asset/mc-7.jpg";
import machine8 from "/public/asset/mc-8.jpg";
import machine9 from "/public/asset/mc-9.png";
import ProjectItem from "./ProjectItem";
import { Card } from "flowbite-react";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 mb-20 mt-16">
        <h2 className="text-4xl mb-16 md:text-5xl lg:text-6xl tracking-widest font-semibold text-black">
          FAA TEAM PRODUCT
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-14">
          <ProjectItem title="" backgroundImg={machine1} />
          <ProjectItem title="" backgroundImg={machine2} />
          <ProjectItem title="" backgroundImg={machine3} />
          <ProjectItem title="" backgroundImg={machine4} />
          <ProjectItem title="" backgroundImg={machine5} />
          <ProjectItem title="" backgroundImg={machine6} />
          <ProjectItem title="" backgroundImg={machine7} />
          <ProjectItem title="" backgroundImg={machine8} />
          <ProjectItem title="" backgroundImg={machine9} />
        </div>

        <div className="grid md:grid-cols-1 gap-8">
          <Card>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              About FAA TEAM
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              นำเข้าเครื่องจักรจากต่างประเทศโดยผ่านบริษัท FAA. Product
              เครื่องจักรประเภท packing , และ บรรจุภัณฑ์
            </p>
          </Card>
        </div>
      </div>

      <div className="flex flex-col bg-slate-100 h-52 text-center justify-center items-center gap-4">
        <h2 className="text-gray-700 text-2xl font-semibold">
          SERVICE IS OUR MAIN PRO{" "}
        </h2>
        <p className="text-xl font-normal text-gray-500">
          FAA Company Limited is very pleased and proud to have the opportunity{" "}
          <br></br> to serve customers.
        </p>
      </div>
    </div>
  );
};

export default Projects;
