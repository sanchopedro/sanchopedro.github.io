"use client";

import React, { useEffect, useState } from "react";
import { BsFillRocketFill } from "react-icons/bs";

function ScrollToTopButton() {
  const [isAtBottom, setIsAtBottom] = useState(false);

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    // Verifica se o scroll está no final da página
    const isBottom = scrollTop + clientHeight >= scrollHeight - 200; // ajusta o valor para maior tolerância
    setIsAtBottom(isBottom);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isAtBottom && (
      <div className="fixed bottom-10 right-10 z-[300]">
        <button
          onClick={scrollToTop}
          className="font-bold cursor-pointer text-3xl hover:border-2 hover:border-black hover:rounded-full p-3"
        >
          <BsFillRocketFill />
        </button>
      </div>
    )
  );
}

export default ScrollToTopButton;
