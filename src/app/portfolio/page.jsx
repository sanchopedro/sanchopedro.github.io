"use client";


import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { EyeIcon } from "@heroicons/react/24/outline";
import items from "../../data/projects.json";


const PortfolioPage = () => {
  return (
    <div className="h-full overflow-x-hidden lg:flex">
      <motion.div
        className="p-8"
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
      >
        <div className="text-center mb-8 mt-0 lg:mt-12">
          <h1 className="text-4xl md:text-6xl font-bold">My Projects</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-4 p-4 sm:p-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="relative bg-white rounded-lg shadow-lg transition-transform duration-75 max-w-md mx-auto group hover:shadow-xl"
            >
              <div className="relative h-48">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill="fill"
                  style={{ objectFit: "cover" }}
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h1 className="text-xl font-bold md:text-xl lg:text-2xl text-gray-800 text-center">
                  {item.title}
                </h1>
                <p className="text-gray-800 font-semibold mt-2 text-center">
                  Tech: {item.tech.join(", ")}
                </p>
                <p className="text-gray-600 text-justify leading-normal tracking-normal mt-4">
                  {item.desc}
                </p>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 flex items-center justify-center rounded-lg transition-opacity duration-100">
                  <Link
                    href={item.link}
                    target="_blank"
                    className="text-white text-lg font-semibold p-4 bg-black bg-opacity-80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-100"
                  >
                    <EyeIcon className="h-6 w-6 mr-2" />
                    SEE PROJECT
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex flex-col items-center justify-center text-center mt-16">
          <h1 className="text-4xl md:text-6xl">Do you have a project?</h1>
          <div className="relative mt-8">
            <motion.svg
              animate={{ rotate: 360 }}
              transition={{ duration: 8, ease: "linear", repeat: Infinity }}
              viewBox="0 0 300 300"
              className="w-64 h-64 md:w-[500px] md:h-[500px]"
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                />
              </defs>
              <text fill="#000">
                <textPath xlinkHref="#circlePath" className="text-4xl">
                  Future Data Scientist
                </textPath>
              </text>
            </motion.svg>
            <Link
              href="/contact"
              className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
            >
              Hire Me
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PortfolioPage;