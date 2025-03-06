"use client";

import React from "react";
import { useRef } from "react";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { InboxArrowDownIcon } from "@heroicons/react/24/outline";
import Brain from "@/components/Brain";
import jobExperience from "../../data/jobExperience.json";
import skills from "../../data/skills.json";
import educationExperience from "../../data/educationExperience.json";

const half = Math.ceil(skills.length / 2);
const skillsColumn1 = skills.slice(0, half);
const skillsColumn2 = skills.slice(half);

function AboutPage() {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  const educationRef = useRef();
  const isEducationRefInView = useInView(educationRef, { margin: "-100px" });

  const skillRef = useRef();
  //   const isSkillRefInView = useInView(skillRef, { once: true });
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-x-hidden lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-32 flex flex-col gap-16 md:gap-24 lg:gap-32 xl:gap-48 lg:w-2/3 lg:pr-0 xl:1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY IMAGE */}
            <div className="flex justify-center itens-center">
              <Image
                src="images/perfil/perfil2.png"
                alt=""
                width={248}
                height={248}
                className=" rounded-full object-cover "
              />
            </div>
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESCRIPTION */}
            <p className="text-lg text-justify">
              Sou Pedro Sancho Rodrigues, profissional de Finanças com uma
              trajetória sólida em análise financeira, controle orçamentário e
              gestão de investimentos. Minha formação inclui um Mestrado
              Internacional em Finanças pela Nova School of Business and
              Economics e um Bacharelado em Economia pelo IBMEC-RJ. Atualmente,
              estou expandindo minha expertise ao cursar um MBA em Data Science
              and Business Analytics pela USP Esalq, além de possuir
              certificações em Scrum, Data Science e Desenvolvimento Web.
            </p>
            <p className="text-lg text-justify">
              Ao longo da minha carreira, atuei em diversas funções estratégicas
              no setor financeiro, desde análise de investimentos e precificação
              até a gestão de ativos e passivos. Além do meu background
              financeiro, minha curiosidade por tecnologia e dados me levou a
              explorar o campo da ciência de dados e desenvolvimento web,
              agregando novas habilidades ao meu perfil analítico.
            </p>
            <p className="text-lg text-justify">
              Possuo experiência com ferramentas como Python, SQL, Excel
              Avançado, Power BI e Tableau, além de bibliotecas de visualização
              como Seaborn e Matplotlib. Também aprofundei meus conhecimentos em
              machine learning e desenvolvimento web, utilizando tecnologias
              como HTML, CSS, JavaScript e React para criar soluções inovadoras.
            </p>
            <p className="text-lg text-justify">
              Sou apaixonado por resolver problemas complexos e transformar
              dados em insights estratégicos. Meu objetivo é atuar na interseção
              entre finanças, tecnologia e análise de dados, desenvolvendo
              soluções inteligentes e orientadas a resultados.
            </p>
            <p className="text-lg text-justify">
              Se você tem interesse em projetos de análise de dados, programação
              ou finanças, sinta-se à vontade para me acompanhar e trocar
              ideias!
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic self-end">
              &quot;Sem dados, você é apenas mais uma pessoa com uma
              opinião.&quot; - W. Edwards Deming
            </span>
            {/* BIOGRAPHY SIGN SVG*/}
            <div className="self-end -mt-12">
              <Image
                src="/images/signature/signature.svg"
                alt="Signature"
                width={416}
                height={110}
              />
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <div className="flex justify-center ">
              <motion.svg
                initial={{ opacity: 0.2, y: 0 }}
                animate={{ opacity: 1, y: "10px" }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width={50}
                height={50}
              >
                <path
                  d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                  stroke="#000000"
                  strokeWidth="1"
                ></path>
                <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                <path
                  d="M15 11L12 14L9 11"
                  stroke="#000000"
                  strokeWidth="1"
                ></path>
              </motion.svg>
            </div>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-32"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className=""
            >
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex flex-col gap-6 p-4 relative">
                <div className="absolute w-1 bg-gray-600 h-full left-6 top-0"></div>{" "}
                {/* LINE */}
                {jobExperience.map((experience, index) => (
                  <div key={index} className="flex items-start gap-6">
                    <div className="relative flex-shrink-0">
                      <div className="w-5 h-5 rounded-full bg-white ring-4 ring-red-400 -left-2"></div>{" "}
                      {/* LINE CIRCLE */}
                    </div>
                    <div className="flex flex-col gap-2 pl-4">
                      <div className="text-sm text-gray-500">
                        {experience.date}
                      </div>
                      <div className="font-bold text-lg">
                        {experience.companyPosition} - {experience.companyName}{" "}
                        ({experience.country})
                      </div>
                      <div className="text-gray-700 text-justify">
                        {experience.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* EDUCATION SCROLL SVG */}
          <div className="flex justify-center ">
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
              }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EDUCATION CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-32"
            ref={educationRef}
          >
            {/* EDUCATION TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isEducationRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EDUCATION
            </motion.h1>
            {/* EDUCATION LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isEducationRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className=""
            >
              {/* EDUCATION LIST ITEM */}
              <div className="flex flex-col gap-6 p-4 relative">
                <div className="absolute w-1 bg-gray-600 h-full left-6 top-0"></div>{" "}
                {/* LINE */}
                {educationExperience.map((experience, index) => (
                  <div key={index} className="flex items-start gap-6">
                    <div className="relative flex-shrink-0">
                      <div className="w-5 h-5 rounded-full bg-white ring-4 ring-red-400 -left-2"></div>{" "}
                      {/* LINE CIRCLE */}
                    </div>
                    <div className="flex flex-col gap-2 pl-4">
                      <div className="text-sm text-gray-500">
                        {experience.date}
                      </div>
                      <div className="font-bold text-lg">
                        {experience.name} - {experience.schoolName}
                      </div>
                      <div className="text-gray-700 text-justify">
                        {experience.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          {/* SKILL SCROLL SVG */}
          <div className="flex justify-center ">
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
              }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-6"
            ref={skillRef}
          >
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <div className="w-full flex flex-wrap md:flex-nowrap justify-center items-center text-lg">
                {/* Primeiro grupo de habilidades */}
                <div className="w-full sm:w-full md:w-1/2 px-4 pb-8">
                  {skillsColumn1.map((skill) => (
                    <div key={skill.name} className="mb-4">
                      <div className="cursor-pointer hover:text-white">
                        {skill.name}
                      </div>
                      <div
                        className="relative w-full bg-gray-200 mt-2"
                        style={{ height: "2px" }}
                      >
                        <div
                          className="absolute top-0 left-0 bg-black"
                          style={{
                            height: "2px",
                            width: `${skill.percentage}%`,
                          }}
                        ></div>
                        <div className="absolute top-0 right-0 text-gray-600 text-lg -mt-6">
                          {`${skill.percentage}%`}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Segundo grupo de habilidades */}
                <div className="w-full sm:w-full md:w-1/2 px-4 pb-8">
                  {skillsColumn2.map((skill) => (
                    <div key={skill.name} className="mb-4">
                      <div className="cursor-pointer hover:text-white">
                        {skill.name}
                      </div>
                      <div
                        className="relative w-full bg-gray-200 mt-2"
                        style={{ height: "2px" }}
                      >
                        <div
                          className="absolute top-0 left-0 bg-black"
                          style={{
                            height: "2px",
                            width: `${skill.percentage}%`,
                          }}
                        ></div>
                        <div className="absolute top-0 right-0 text-gray-600 text-lg -mt-6">
                          {`${skill.percentage}%`}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* SECTION DOWNLOAD CV */}
          <div className="flex justify-center pb-32 text-white">
            <a
              href="/Pedro-Sancho-Rodrigues-CV.pdf"
              download
              className=" bg-black hover:bg-purple-200 rounded-full  font-semibold  p-4 flex items-center justify-center gap-2 px-6 py-2 transition duration-300 ease-in-out hover:text-gray-600"
            >
              <InboxArrowDownIcon class="h-6 w-6 hover:text-white" />
              DOWNLOAD MY CV
            </a>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
}

export default AboutPage;
