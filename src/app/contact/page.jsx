"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";


function ContactPage() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const text = "Say Hello";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-4xl md:text-6xl">
          <div className="flex flex-col gap-8">
            <div className="text-center">
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            😊

            </div>
            <div className=" text-sm md:text-xl text-center mb-4 lg:mb-0">
            <p>Se você tem alguma sugestão, projeto ou mesmo deseja dizer Olá... Preencha o formulário e responderei em breve.</p>
            </div>
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="h-full w-full lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-sm md:text-xl flex flex-col gap-8 justify-center p-8 md:p-24"
        >
          <span>Olá Sancho Dev, </span>
          <textarea
            rows={6}
            className="bg-transparent border-b-2 border-b-black outline-none resize-none"
            name="user_message"
            placeholder="Escreva sua mensagem..."
          />
          <span>O meu email é:</span>
          <input
            type="text"
            className="bg-transparent border-b-2 border-b-black outline-none "
            name="user_email"
            placeholder="exemplo@email.com"
          />
          <span>Melhores cumprimentos!</span>
          <button className="bg-purple-200 rounded font-semibold text-gray-600 p-4 flex items-center justify-center gap-2">
          <PaperAirplaneIcon className="h-6 w-6 text-gray-500" />

            Send
          </button>
          {success && (
            <span className="text-green-600 font-semibold text-center">
              Sua mensagem foi enviada com sucesso!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold text-center">
              Alguma coisa deu errado! Tente novamente!
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
}

export default ContactPage;
