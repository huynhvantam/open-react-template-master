"use client";

import React, { useState } from "react";
import { useTranslation } from "../../../i18n";
import { Header } from "../../components/Header/client";
import bannerabout from "@/public/images/banner/banner-about.jpg";
import BannerImage1 from "../../components/banner";
import Pagedautien from "../../components/pagedautien";
import Image1 from "@/public/images/oneuse/thanhtichhocsinh/a1.png";
import Image2 from "@/public/images/oneuse/thanhtichhocsinh/a2.png";
import Image3 from "@/public/images/oneuse/thanhtichhocsinh/a3.png";
import Image4 from "@/public/images/oneuse/thanhtichhocsinh/a4.png";
import Image from "next/image";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
export default function Cuuhocsinh() {
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
      major: "Design & Fashion",
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
      major: "Design & Fashion",
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
      major: "Design & Fashion",
    },
    {
      name: "Lê Thị D",
      schoolYear: "Niên khóa: 2021-2022",
      achievements: [
        "Huy chương Bạc Cuộc thi Văn chương Quốc tế",
        "Giải Nhất Cuộc thi Toán học Đông Nam Á",
      ],
      image: Image4,
      major: "Design & Fashion",
    },
    {
      name: "Hoàng Văn E",
      schoolYear: "Niên khóa: 2025-2026",
      achievements: [
        "3 điểm 9/9 cho 3 môn IGCSE (Maths, Business, Literature)",
        "IELTs 8.5",
        "Top 6 thí sinh lọt vào vòng chung kết đại diện cho Việt Nam tham dự vòng chung kết Fedex Express / JA International Trade Challenge (ITC) 2019 tại Châu Á Thái Bình Dương tại Malaysia",
        "Giải Nhì cuộc thi tranh biện Speak Out THCS (2018)",
      ],
      image: Image1,
      major: "Design & Fashion",
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
      <div
        className="pt-20 pb-20 "
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h3 className="font-playfair text-[40px] pb-7 font-semibold leading-[60px] text-center">
            Cựu học sinh toàn cầu
          </h3>

          <hr className="border-t-2 border-rose-500" />
          <div className="flex flex-row-reverse gap-x-4">
            <div className="basis-1/2">
              <h2 className="text-[48px] leading-[64px] font-playfair text-rose-500 pt-7 pb-2">
                {students[currentStudentIndex].name}
              </h2>
              <h4 className="text-xl  pb-7">
                {students[currentStudentIndex].schoolYear}
              </h4>
              <hr className="border-t-2 border-rose-500" />
              <div className="pt-4 font-medium text-gray-700 text-xl">
                <span className="text-rose-500 ">Chuyên ngành: </span>
                {"  "}
                {students[currentStudentIndex].major}
              </div>
              <ul className="marker:text-red-500 h-[320px] overflow-y-auto list-inside list-disc ml-6 pt-2 pb-7">
                {students[currentStudentIndex].achievements.map(
                  (achievement, index) => (
                    <li key={index}>{achievement}</li>
                  )
                )}
              </ul>
            </div>
            <div className="relative basis-1/2">
              <Image
                onClick={nextStudent}
                className="mx-auto cursor-pointer"
                height={500}
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
