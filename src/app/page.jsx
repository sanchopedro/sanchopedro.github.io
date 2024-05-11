"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/perfil.png" alt="" fill className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center text-center">
          {/* TITLE */}
          <h1 className="text-4xl lg:text-6xl font-bold">
            Olá, eu sou o Pedro Sancho!
          </h1>

          {/* DESCRIPTION */}
          <p className="md:text-xl text-justify">
            Sinta-se à vontade para explorar e descobrir como a programação e a
            ciência de dados podem transformar nossa visão do mundo. Estou
            animado para conectar-me com outros entusiastas e colaborar em
            projetos futuros. Bem-vindo ao meu universo de dados!
          </p>
          {/* BUTTONS */}
          <div className="w-full flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Link href="/portfolio">
              <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
                View My Work
              </button>
            </Link>
            <Link href="/contact">
              <button className="p-4 rounded-lg ring-1 ring-black ">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
