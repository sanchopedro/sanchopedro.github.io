import React from "react";
import Image from "next/image";

function ContactInfo() {
  return (
    <div className="container max-w-lg mx-auto px-4 py-4 mt-10">
      <div className="flex flex-col items-center text-center lg:text-start">
        <ul className="lg:space-y-10 space-y-4">
          <li>
            <h6 className="text-gray-400 font-semibold">Phone</h6>
            <div className="flex justify-center lg:justify-start  space-x-2 mt-2 text-gray-50">
              <Image
                src="/images/whatsapp.svg"
                alt="whatsapp logo"
                width={24}
                height={24}
              />
              <span className="text-sm">+351 911 060 590</span>
            </div>
          </li>
          <li>
            <h6 className="text-gray-400 font-semibold">Email</h6>
            <div className="flex justify-center lg:justify-start  space-x-2 mt-2 text-gray-50">
              <Image
                src="/images/icon-mail.svg"
                alt="Mail logo"
                width={24}
                height={24}
              />
              <span className="text-sm">pedro.sancho17@gmail.com</span>
            </div>
          </li>
          <li>
            <h6 className="text-gray-400 font-semibold">Social Profiles</h6>
            <div className="flex justify-center lg:justify-start  space-x-4 mt-2 text-gray-50 ">
              <a href="https://github.com/sanchopedro" target="_blank">
                <Image
                  src="/images/icon-github.svg"
                  alt="github logo"
                  width={24}
                  height={24}
                />
              </a>
              <a href="https://www.instagram.com/sanchopedro/" target="_blank">
                <Image
                  src="/images/icon-instagram.svg"
                  alt="instagram logo"
                  width={24}
                  height={24}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/pedrosanchorodrigues/"
                target="_blank"
              >
                <Image
                  src="/images/icon-linkedin.svg"
                  alt="icon-linkedin logo"
                  width={24}
                  height={24}
                />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ContactInfo;
