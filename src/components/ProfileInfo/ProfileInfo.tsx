import React from "react";
import { profile } from "../../assets/docs/curriculum";
import Image from "next/image";

const ProfileInfo: React.FC = () => {
  const uniqueProfile = Array.from(
    new Set(profile.map((item) => item.key))
  ).map((key) => {
    return profile.find((item) => item.key === key);
  });

  return (
    <div className="container max-w-5xl mx-auto px-4 mt-5">
      <div className="flex justify-center content-center">
        <Image
          src="/images/perfil.png"
          alt="Perfil photo"
          width={440}
          height={440}
        />
      </div>
      <div className="text-center mt-5 md:mt-8">
        <ul className="grid grid-cols-1 md:grid-cols-2">
          {uniqueProfile.map((item) => (
            <li key={item.key} className="mt-5">
              <span className="text-md uppercase font-bold text-gray-400">
                {item.key}:
              </span>{" "}
              <span className="block text-md font-bold text-gray-200 mt-1">
                {item.value}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfileInfo;
