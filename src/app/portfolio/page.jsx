"use client";


import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { EyeIcon } from "@heroicons/react/24/outline";

const items = [
  {
    id: 1,
    title: "PROJETO IMDB REVIEWS",
    desc: "O projeto busca criar um sistema para filtrar e categorizar resenhas de filmes clássicos, priorizando a identificação automática de resenhas negativas. A empresa está lançando uma nova comunidade para entusiastas de filmes clássicos, com o intuito de fornecer uma plataforma onde os membros possam encontrar resenhas confiáveis e relevantes facilmente. O objetivo é treinar um modelo capaz de classificar as resenhas como positivas ou negativas, com a meta de alcançar um valor F1 de pelo menos 0,85.",
    img: "/projects/film.png",
    link: "https://github.com/sanchopedro/imdb-reviews",
    tech: ["Python", "NLP", "Scikit-learn", "Pandas"]
  },
  {
    id: 2,
    title: "PROJETO OILY GIANT",
    desc: "O principal objetivo deste projeto é identificar a região mais lucrativa para a perfuração de novos poços de petróleo, mantendo o risco de prejuízo abaixo de 2,5%. Com dados de exploração geológica para três regiões distintas será preciso usar modelos de regressão linear para prever o volume de reservas em cada poço. Com essas previsões, será possível selecionar as melhores oportunidades para maximizar o lucro total.",
    img: "/projects/oil.png",
    link: "https://github.com/sanchopedro/oily-giant",
    tech: ["Python", "Machine Learning", "Scikit-learn", "Pandas"]
  },
  {
    id: 3,
    title: "PROJETO RUSTY BARGAIN",
    desc: "O objetivo do projeto Rusty Bargain é desenvolver um modelo de aprendizado de máquina para determinar o valor de mercado de carros usados, como parte do desenvolvimento de um aplicativo para oferecer aos usuários uma maneira rápida e precisa de avaliar o preço de seus veículos.",
    img: "/projects/bargain.png",
    link: "https://github.com/sanchopedro/rusty-bargain",
    tech: ["Python", "Machine Learning", "Scikit-learn", "Pandas"]
  },
  {
    id: 4,
    title: "PROJETO TAXI CORRIDA MALUCA",
    desc: "O objetivo do projeto da empresa Taxi Corrida Maluca é aumentar a eficiência de seus serviços durante os horários de pico nos aeroportos, prevendo com precisão a quantidade de pedidos de táxi para a próxima hora. Isso ajudará a atrair mais motoristas durante os horários de maior demanda, melhorando o atendimento aos clientes.",
    img: "/projects/taxi.png",
    link: "https://github.com/sanchopedro/taxi",
    tech: ["Python", "Time Series", "Scikit-learn", "Pandas"]
  },
];

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
                  layout="fill"
                  objectFit="cover"
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