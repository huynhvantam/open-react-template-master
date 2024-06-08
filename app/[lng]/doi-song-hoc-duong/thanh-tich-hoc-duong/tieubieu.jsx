"use client";

import React, { useState } from "react";
import Image1 from "@/public/images/oneuse/thanhtichhocsinh/a1.png";
import Image2 from "@/public/images/oneuse/thanhtichhocsinh/a2.png";
import Image3 from "@/public/images/oneuse/thanhtichhocsinh/a3.png";
import Image4 from "@/public/images/oneuse/thanhtichhocsinh/a4.png";
import Image from "next/image";

export default function Tieubieu() {
  const [currentStudentIndex, setCurrentStudentIndex] = useState(0);
  const students = [
    {
      name: "Nguyễn Văn A",
      schoolYear: "Niên khóa: 2023-2024",
      achievements: [
        "Giải Nhất Olympic Toán Quốc Tế",
        "Huy chương Vàng Khoa Học Tổ Quốc",
        "Giải Nhì Cuộc thi Văn học Quốc gia",
        "Huy chương Bạc Olympic Hóa học",
      ],
      image: Image1,
    },
    {
      name: "Trần Thị B",
      schoolYear: "Niên khóa: 2022-2023",
      achievements: [
        "Giải Nhất Cuộc thi Văn hóa Việt Nam",
        "Huy chương Vàng Olympic Lý",
        "Giải Ba Cuộc thi Toán học Quốc tế",
      ],
      image: Image2,
    },
    {
      name: "Phạm Văn C",
      schoolYear: "Niên khóa: 2024-2025",
      achievements: [
        "Huy chương Vàng Cuộc thi Tin học Quốc tế",
        "Giải Nhì Cuộc thi Văn nghệ Quốc tế",
        "Giải Ba Cuộc thi Hóa học Quốc tế",
      ],
      image: Image3,
    },
    {
      name: "Lê Thị D",
      schoolYear: "Niên khóa: 2021-2022",
      achievements: [
        "Huy chương Bạc Cuộc thi Văn chương Quốc tế",
        "Giải Nhất Cuộc thi Toán học Đông Nam Á",
      ],
      image: Image4,
    },
    {
      name: "Hoàng Văn E",
      schoolYear: "Niên khóa: 2025-2026",
      achievements: [
        "Huy chương Vàng Cuộc thi Lý luận Chính trị Quốc tế",
        "Giải Nhất Cuộc thi Hóa học Châu Á",
        "Giải Nhất Cuộc thi Hóa học Châu Á",
        "Giải Nhất Cuộc thi Hóa học Châu Á",
        "Giải Nhất Cuộc thi Hóa học Châu Á",
        "Giải Nhất Cuộc thi Hóa học Châu Á",
        "Giải Nhất Cuộc thi Hóa học Châu Á",
        "Giải Nhất Cuộc thi Hóa học Châu Á",
        "Giải Nhất Cuộc thi Hóa học Châu Á",
        "Giải Nhất Cuộc thi Hóa học Châu Á",
        "Giải Nhất Cuộc thi Hóa học Châu Á",
        "Giải Nhất Cuộc thi Hóa học Châu Á",
        "Giải Nhất Cuộc thi Hóa học Châu Á",
        "Giải Nhất Cuộc thi Hóa học Châu Á",
        "Giải Nhất Cuộc thi Hóa học Châu Á",
        "Giải Nhất Cuộc thi Hóa học Châu Á",
        "Giải Nhất Cuộc thi Hóa học Châu Á",
        "Giải Nhất Cuộc thi Hóa học Châu Á",
        "Giải Nhất Cuộc thi Hóa học Châu Á",
        "Giải Nhất Cuộc thi Hóa học Châu Á",
        "Giải Nhất Cuộc thi Hóa học Châu Á",
      ],
      image: Image1,
    },
  ];

  const nextStudent = () => {
    setCurrentStudentIndex((prevIndex) =>
      prevIndex === students.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevStudent = () => {
    setCurrentStudentIndex((prevIndex) =>
      prevIndex === 0 ? students.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <section className="max-w-6xl mx-auto px-4 sm:px-6"></section>
      <div
        className=" pt-20 pb-20"
        style={{
          backgroundImage:
            "linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h3 className="font-playfair text-[40px] pb-7 text-center font-semibold leading-[60px] ">
            Học sinh tiêu biểu
          </h3>
          <hr className="border-t-2 border-rose-500" />
          <div className="grid grid-cols-2 gap-x-4">
            <div>
              <h2 className="text-[48px] leading-[64px] font-playfair text-rose-500 pt-7 pb-2">
                {students[currentStudentIndex].name}
              </h2>
              <h4 className="text-xl  pb-7">
                {students[currentStudentIndex].schoolYear}
              </h4>
              <hr className="border-t-2 border-rose-500" />
              <ul className="marker:text-rose-500 h-[320px] overflow-y-auto  list-inside list-disc ml-6 pt-4 pb-7">
                {students[currentStudentIndex].achievements.map(
                  (achievement, index) => (
                    <li key={index}>{achievement}</li>
                  )
                )}
              </ul>
            </div>
            <div className="relative">
              <Image
                onClick={nextStudent}
                className="mx-auto cursor-pointer"
                height={500}
                loading="lazy"
                src={students[currentStudentIndex].image}
                alt="hoc sinh"
              />{" "}
              <button
                onClick={prevStudent}
                className="border border-white p-2 rounded-full bg-white hover:text-black absolute top-1/2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={nextStudent}
                className="border border-white p-2 rounded-full bg-white hover:text-black absolute top-1/2 right-0 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
