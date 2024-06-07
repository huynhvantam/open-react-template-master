"use client";

import React, { useState } from "react";
import { Image } from "antd"; // Importing Image from Ant Design

export default function Listthongtin({ buttonData }) {
  const [selectedButton, setSelectedButton] = useState("mamnon");

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <>
      <section className="grid grid-cols-6 gap-2">
        {Object.keys(buttonData).map((buttonName) => (
          <div key={buttonName}>
            <button
              className={` h-full py-1 text-center flex items-center justify-center w-full  ${
                selectedButton === buttonName
                  ? "bg-rose-500 text-white"
                  : "hover:bg-rose-500 hover:text-white bg-gray-100 text-gray-400"
              }`}
              onClick={() => handleButtonClick(buttonName)}
            >
              {buttonData[buttonName].title}
            </button>
          </div>
        ))}
      </section>
      {/* hinhanh */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        <Image.PreviewGroup>
          {buttonData[selectedButton].listimage.map((image, index) => (
            <Image key={index} src={image.src} />
          ))}
        </Image.PreviewGroup>
      </div>
    </>
  );
}
