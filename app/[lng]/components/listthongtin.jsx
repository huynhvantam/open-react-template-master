"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Image1 from "@/public/images/testimonial-01.jpg";

const ListItem = ({
  imageSrc,
  title,
  description,
  text2,
  text3,
  buttonText,
  onClick, // Added onClick prop for button handling
}) => {
  return (
    <li
      style={{
        backgroundImage: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
      }}
      className="flex relative items-center rounded-xl p-4  w-full basis-1/2"
    >
      <Image
        src={imageSrc}
        height={100}
        width={100}
        alt="avatar"
        className="rounded-full"
      />
      <div className="ml-4">
        <h5 className="h44 text-rose-500">{title}</h5>
        <p className="p">{description}</p>
        {/* {text2 && <p>Bằng cấp: {text2}</p>} */}
        {/* {text3 && <p>Kinh nghiệm: {text3}</p>} */}
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
  // Handle modal close logic (assuming onClose prop receives a function)
  const handleCloseModal = () => {
    onClose();
  };

  if (!isOpen) return null; // Early return if modal is not open
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
        className="max-w-6xl min-w-[700px] relative bg-white rounded-lg p-4 shadow-md max-h-screen overflow-y-auto "
        style={{
          backgroundImage: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        }}
      >
        <div className="flex">
          <Image
            src={listItem.imageSrc}
            // height={100}
            width={120}
            alt="avatar"
            className="rounded-full"
          />
          <div className="pl-4 h44">
            <h2 className="h3 text-gray-700">{listItem.title}</h2>
            <p className="">{listItem.description}</p>
            {listItem.text2 && <p className="">Bằng cấp: {listItem.text2}</p>}
            {listItem.text3 && <p>Kinh nghiệm: {listItem.text3}</p>}
          </div>
        </div>
        <div className="p pt-4">
          {listItem.chuyenmon && <p>Chuyên môn: {listItem.chuyenmon}</p>}
          {listItem.kinhnghiem && (
            <p>Kinh nghiệm giảng dạy: {listItem.kinhnghiem}</p>
          )}
          {listItem.thanhtich && <p>Thành tích: {listItem.thanhtich}</p>}
          {listItem.lienhe && <p>Liên hệ: {listItem.lienhe}</p>}
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
  const [isOpenModal, setIsOpenModal] = useState(false); // State to manage modal visibility
  const [selectedListItem, setSelectedListItem] = useState(null); // State to store selected list item

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  const handleListItemClick = (listItem) => {
    setSelectedListItem(listItem);
    setIsOpenModal(true); // Open modal when a list item is clicked
  };

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
      <div className="flex gap-x-2 ">
        {Object.keys(buttonData).map((buttonName) => (
          <button
            key={buttonName}
            className={`h-[100px] text-center p-4 flex items-center justify-center w-full  font-semibold text-lg ${
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
      <ul className="grid grid-cols-2 gap-2 pt-10">
        {buttonData[selectedButton]?.listItems?.map((listItem) => (
          <ListItem
            key={listItem.title} // Use a unique key for each list item
            imageSrc={listItem.imageSrc}
            title={listItem.title}
            text2={listItem.text2}
            text3={listItem.text3}
            description={listItem.description}
            buttonText={listItem.buttonText}
            onClick={() => handleListItemClick(listItem)} // Pass listItem to handleListItemClick
          />
        ))}
      </ul>
      {isOpenModal && selectedListItem && (
        <Modal
          isOpen={isOpenModal}
          onClose={() => setIsOpenModal(false)} // Close modal when onClose is called
          listItem={selectedListItem} // Pass selected list item to Modal
        />
      )}
    </section>
  );
}
