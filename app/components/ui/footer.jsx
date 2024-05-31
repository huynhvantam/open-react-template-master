import React from "react";
import Link from "next/link";
import { useTranslation } from "../../i18n";
import Image from "next/image";
import logo from "@/public/images/phuonghoang/logo.png";
import { FaSquareYoutube } from "react-icons/fa6";
export default function Footer({ lng }) {
  const { t } = useTranslation(lng, "header");
  return (
    <footer
      id="thong-tin-lien-he"
      className="bg-gradient-to-b from-rose-300 from-10% via-rose-200 via-30% to-rose-50 to-90% "
    >
      <div className="pt-12 md:pt-16 ">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">
            {/* 1st block */}
            <div className="md:col-span-4 lg:col-span-5">
              <div className="mb-2 text-center">
                {/* Logo */}
                <Link
                  href="/"
                  className="flex flex-col items-center gap-y-4"
                  aria-label="Cruip"
                >
                  <Image
                    className="h-fit pointer-events-none"
                    src={logo}
                    width={150}
                    height={150}
                    priority
                    alt="logo"
                  />
                </Link>
                <div className="font-semibold text-rose-500 pt-2">
                  <h4 className="text-lg">PHOENIX EDUCATION</h4>
                  <h4 className="">GIÁO DỤC PHƯỢNG HOÀNG</h4>
                </div>
              </div>
              <hr className="border-1 border-rose-200" />
              <div className="text-gray-500 text-center">
                Giáo Dục Phượng Hoàng là một dự án trường học nhằm mục đích cung
                cấp nền giáo dục có chất lượng cho sự phát triển đầy đủ của mỗi
                cá nhân.
              </div>
            </div>

            {/* 2nd, 3rd and 4th blocks */}
            <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-2 gap-8">
              {/* 2rd block */}
              <div className="text-sm">
                <h6 className="text-gray-700 font-bold mb-1 text-lg">
                  CHƯƠNG TRÌNH ĐÀO TẠO
                </h6>
                <ul>
                  <li className="mb-1">
                    <Link
                      href="/chuong-trinh-dao-tao"
                      className="text-gray-600 hover:text-rose-500 transition duration-150 ease-in-out"
                    >
                      Tổng quan chương trình
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="/chuong-trinh-dao-tao/mam-non"
                      className="text-gray-600 hover:text-rose-500 transition duration-150 ease-in-out"
                    >
                      Mầm non
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="/chuong-trinh-dao-tao/tieu-hoc"
                      className="text-gray-600 hover:text-rose-500 transition duration-150 ease-in-out"
                    >
                      Tiểu học
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="/chuong-trinh-dao-tao/trung-hoc"
                      className="text-gray-600 hover:text-rose-500 transition duration-150 ease-in-out"
                    >
                      Trung học
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      href="/trung-tam-anh-ngu"
                      className="text-gray-600 hover:text-rose-500 transition duration-150 ease-in-out"
                    >
                      Anh ngữ Phượng Hoàng
                    </Link>
                  </li>
                </ul>
              </div>
              {/*3nd block */}
              <div className="text-sm">
                <h6 className="text-gray-700 font-bold mb-1 uppercase text-lg">
                  Thông tin liên hệ
                </h6>
                <ul>
                  <li className="mb-1">
                    <p className="text-gray-600 hover:text-rose-500 transition duration-150 ease-in-out">
                      {" "}
                      33/9 Nguyễn Hoàng, Phường Kim Long, Thành phố Huế
                    </p>
                  </li>
                  <li className="mb-1">
                    <p className="text-gray-600 hover:text-rose-500 transition duration-150 ease-in-out">
                      0234 3515 678
                    </p>
                  </li>
                  <li className="mb-1">
                    <p className="text-gray-600 hover:text-rose-500 transition duration-150 ease-in-out">
                      phoenixschoolvn@gmail.com
                    </p>
                  </li>
                  <ul className="flex gap-4">
                    <li className="">
                      <Link
                        href="/"
                        className="flex justify-center items-center text-rose-500 bg-amber-200 hover:text-amber-200 hover:bg-rose-500  transition duration-150 ease-in-out"
                        aria-label="Facebook"
                      >
                        <svg
                          className="w-8 h-8 fill-current"
                          viewBox="0 0 32 32"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                        </svg>
                      </Link>
                    </li>
                    <li className="">
                      <Link
                        href="/"
                        className="flex justify-center items-center text-rose-500 bg-amber-200 hover:text-amber-200 hover:bg-rose-500  transition duration-150 ease-in-out"
                        aria-label="Facebook"
                      >
                        <FaSquareYoutube className=" w-8 h-8 text-rose-500 bg-amber-200 hover:text-amber-200 hover:bg-rose-500  " />
                      </Link>
                    </li>
                  </ul>
                </ul>
              </div>
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fgiaoducphuonghoang&tabs=timeline&width=300&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="300"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fanhnguphuonghoang&tabs=timeline&width=300&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=true&appId"
                width="300"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom area */}
        <div className="max-w-6xl mx-auto">
          <hr className="border-1 border-rose-200" />
          <div className="text-gray-600 text-sm mr-4">
            &copy; Phoenix Education
          </div>
        </div>
      </div>
    </footer>
  );
}
