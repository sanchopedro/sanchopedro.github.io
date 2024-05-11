"use client";

import ScrollToTopButton from "@/components/ScrollToTopButton";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { EyeIcon } from "@heroicons/react/24/outline";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "PROJETO IMDB REVIEWS",
    desc: "O projeto busca criar um sistema para filtrar e categorizar resenhas de filmes clássicos, priorizando a identificação automática de resenhas negativas. A empresa está lançando uma nova comunidade para entusiastas de filmes clássicos, com o intuito de fornecer uma plataforma onde os membros possam encontrar resenhas confiáveis e relevantes facilmente. O objetivo é treinar um modelo capaz de classificar as resenhas como positivas ou negativas, com a meta de alcançar um valor F1 de pelo menos 0,85.",
    img: "/film.png",
    link: "https://github.com/sanchopedro/imdb-reviews",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "PROJETO OILY GIANT",
    desc: "O principal objetivo deste projeto é identificar a região mais lucrativa para a perfuração de novos poços de petróleo, mantendo o risco de prejuízo abaixo de 2,5%. Com dados de exploração geológica para três regiões distintas será preciso usar modelos de regressão linear para prever o volume de reservas em cada poço. Com essas previsões, será possível selecionar as melhores oportunidades para maximizar o lucro total.",
    img: "/oil.png",
    link: "https://github.com/sanchopedro/oily-giant",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "PROJETO RUSTY BARGAIN",
    desc: "O objetivo do projeto Rusty Bargain é desenvolver um modelo de aprendizado de máquina para determinar o valor de mercado de carros usados, como parte do desenvolvimento de um aplicativo para oferecer aos usuários uma maneira rápida e precisa de avaliar o preço de seus veículos.",
    img: "/bargain.png",
    link: "https://github.com/sanchopedro/rusty-bargain",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "PROJETO TAXI CORRIDA MALUCA",
    desc: "O objetivo do projeto da empresa Taxi Corrida Maluca é aumentar a eficiência de seus serviços durante os horários de pico nos aeroportos, prevendo com precisão a quantidade de pedidos de táxi para a próxima hora. Isso ajudará a atrair mais motoristas durante os horários de maior demanda, melhorando o atendimento aos clientes.",
    img: "/taxi.png",
    link: "https://github.com/sanchopedro/taxi",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["15%", "-100%"]);

  return (
    <div className="">
      <motion.div
        className="h-full"
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
      >
        <div className="h-[600vh] relative " ref={ref}>
          <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center ">
            My Works
          </div>
          <div className="sticky top-0 flex h-screen gap-4 items-center overflow-x-hidden">
            <motion.div style={{ x }} className="flex ">
              <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
              {items.map((item) => (
                <div
                  className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                  key={item.id}
                >
                  <div className="flex flex-col gap-8  justify-center items-center">
                    <h1 className="text-xl font-bold md:text-xl lg:text-2xl xl:text-6xl text-white">
                      {item.title}
                    </h1>
                    <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[400px] lg:h-[280px] xl:w-[550px] xl:h-[385px]">
                      <Image src={item.img} alt="" fill />
                    </div>
                    <p className="w-80 md:w96 lg:w-[600px] lg:text-lg xl:w-[700px] text-black text-justify">
                      {item.desc}
                    </p>
                    <Link
                      href={item.link}
                      className="flex justify-center  text-white hover:text-gray-600"
                      target="_blank"
                    >
                      <button className="md:text-md lg:p-4 lg:text-lg bg-black hover:bg-purple-200 rounded-full font-semibold p-2 flex items-center justify-center -mt-2">
                        <EyeIcon class="h-6 w-6" />
                        SEE PROJECT
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
        <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
          <h1 className="text-8xl">Do you have a project?</h1>
          <div className="relative">
            <motion.svg
              animate={{ rotate: 360 }}
              transition={{ duration: 8, ease: "linear", repeat: Infinity }}
              viewBox="0 0 300 300"
              className="w-64 h-64 md:w-[500px] md:h-[500px] "
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
      <ScrollToTopButton />
    </div>
  );
};

export default PortfolioPage;
