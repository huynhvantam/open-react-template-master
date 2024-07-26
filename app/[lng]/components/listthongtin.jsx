"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Image1 from "@/public/images/oneuse/anh1.jpg";

const ListItem = ({
  imageSrc,
  title,
  description,
  text2,
  text3,
  buttonText,
  onClick,
}) => {
  return (
    <li
      style={{
        backgroundImage: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
      }}
      className="flex relative items-center rounded-xl p-4 w-full basis-1/2"
    >
      <Image
        loading="lazy"
        src={imageSrc}
        height={100}
        width={100}
        alt="avatar"
        className="rounded-full w-[100px] h-[100px]"
      />
      <div className="ml-4">
        <h5 className="h44 text-rose-500">{title}</h5>
        <p className="p">{description}</p>
      </div>
      <button
        className="absolute bottom-4 right-4 hover:text-rose-500"
        onClick={onClick}
      >
        {buttonText}
      </button>
    </li>
  );
};

const Modal = ({ isOpen, onClose, listItem }) => {
  const handleCloseModal = () => {
    onClose();
  };

  if (!isOpen) return null;

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("bg-black")) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
      onClick={handleOutsideClick}
    >
      <div
        className="lg:min-w-[700px] mx-2 relative bg-white rounded-lg p-4 shadow-md max-h-screen overflow-y-auto"
        style={{
          backgroundImage: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        }}
      >
        <div className="lg:flex text-center lg:text-left">
          <Image
            height={100}
            width={100}
            loading="lazy"
            src={listItem.imageSrc}
            alt="avatar"
            className="rounded-full mx-auto lg:mx-0 h-[100px] w-[100px]"
          />
          <div className="pl-4 h44">
            <h2 className="h4 lg:h3 text-gray-700">{listItem.HoTen}</h2>
            <p className="">{listItem.LopKhoi}</p>
            {listItem.BangCap && (
              <p className="">Bằng cấp: {listItem.BangCap}</p>
            )}
          </div>
        </div>
        <div className="p pt-4">
          {listItem.KinhNghiem && <p>Kinh nghiệm: {listItem.KinhNghiem}</p>}
          {listItem.ThanhTich && <p>Thành tích: {listItem.ThanhTich}</p>}
          {listItem.LienHe && <p>Liên hệ: {listItem.LienHe}</p>}
        </div>
        <button
          className="absolute text-red-500 top-4 right-4 hover:text-rose-600"
          onClick={handleCloseModal}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default function Listthongtin({ buttonData }) {
  const [selectedButton, setSelectedButton] = useState("mamnon");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedListItem, setSelectedListItem] = useState(null);

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  const handleListItemClick = (listItem) => {
    setSelectedListItem(listItem);
    setIsOpenModal(true);
  };

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
      <div className="grid grid-cols-2 lg:flex gap-2">
        {Object.keys(buttonData).map((buttonName) => (
          <button
            key={buttonName}
            className={`h-[100px] text-center p-4 flex items-center justify-center w-full font-semibold lg:text-lg ${
              selectedButton === buttonName
                ? "bg-[#070758] text-white"
                : "hover:bg-[#070758] hover:text-white bg-gray-100 text-gray-400"
            }`}
            onClick={() => handleButtonClick(buttonName)}
          >
            {buttonData[buttonName].title}
          </button>
        ))}
      </div>
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-2 pt-10">
        {buttonData[selectedButton]?.listItems?.map((listItem, index) => (
          <ListItem
            key={listItem.id || listItem.title || index} // Use a unique property or index as fallback
            imageSrc={listItem.imageSrc}
            title={listItem.HoTen}
            text2={listItem.BangCap}
            text3={listItem.KinhNghiem}
            description={listItem.LopKhoi}
            buttonText={listItem.buttonText}
            onClick={() => handleListItemClick(listItem)}
          />
        ))}
      </ul>

      {isOpenModal && selectedListItem && (
        <Modal
          isOpen={isOpenModal}
          onClose={() => setIsOpenModal(false)}
          listItem={selectedListItem}
        />
      )}
    </section>
  );
}
