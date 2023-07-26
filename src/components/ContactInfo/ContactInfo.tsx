import React from "react";
import Mail from "/images/Mail.svg";

function ContactInfo() {
  return (
    <div className="container max-w-lg mx-auto px-4 mt-5">
      <ul className="space-y-10">
        <li>
          <h6 className="text-gray-400 font-semibold">Phone</h6>
          <div className="flex space-x-2 mt-2 text-gray-50">
            <img src="/images/whatsapp.svg" alt="whatsapp logo" />
            <span className="text-sm">+351 911 060 590</span>
          </div>
        </li>
        <li>
          <h6 className="text-gray-400 font-semibold">Email</h6>
          <div className="flex space-x-2 mt-2 text-gray-50">
            <svg
              className="w-5 "
              fill="none"
              stroke="#3B82F6"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            <span className="text-sm">pedro.sancho17@gmail.com</span>
          </div>
        </li>
        <li>
          <h6 className="text-gray-400 font-semibold">Social Profiles</h6>
          <div className="flex space-x-4 mt-2 text-gray-50">
            <a href="https://github.com/sanchopedro" target="_blank">
              <img src="/images/icon-github.svg" alt="whatsapp logo" />
            </a>
            <a href="https://www.instagram.com/sanchopedro/" target="_blank">
              <img src="/images/icon-instagram.svg" alt="Instagram logo" />
            </a>
            <a
              href="https://www.linkedin.com/in/pedrosanchorodrigues/"
              target="_blank"
            >
              <img src="/images/icon-linkedin.svg" alt="Linkedin logo" />
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default ContactInfo;
