"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Trans } from "react-i18next/TransWithoutContext";
import { languages } from "../../../i18n/settings";
import MobileMenu from "./mobile-menu";
import { Button, Dropdown, Space } from "antd";
import Navv from "./navbar";
import Image from "next/image";
import logo from "@/public/images/phuonghoang/logo.png";
import Menubar from "./Menubar";
import { RiMenuFoldLine } from "react-icons/ri";
export const HeaderBase = ({ t, lng, path = "" }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  // moblie
  const item1 = [
    {
      key: "sub1",
      label: t("about"),
      children: [
        {
          key: "1",
          label: <Link href="/ve-chung-toi">{t("gioi-thieu")}</Link>,
        },
        {
          key: "2",
          label: (
            <Link href="/ve-chung-toi/tam-nhin-su-menh">{t("tam-nhin")}</Link>
          ),
        },
        {
          key: "3",
          label: (
            <Link href="/ve-chung-toi/doi-ngu-giao-vien">{t("giao-vien")}</Link>
          ),
        },
        {
          key: "4",
          label: (
            <Link href="/ve-chung-toi/thong-diep-tu-ban-lanh-dao">
              {t("lanh-dao")}
            </Link>
          ),
        },
      ],
    },
    {
      key: "sub2",
      label: t("chuong-trinh"),
      children: [
        {
          key: "5",
          label: (
            <Link href="/chuong-trinh-dao-tao">
              {t("tong-quan-chuong-trinh")}
            </Link>
          ),
        },
        {
          key: "6",
          label: (
            <Link href="/chuong-trinh-dao-tao/mam-non">{t("mam-non")}</Link>
          ),
        },
        {
          key: "7",
          label: (
            <Link href="/chuong-trinh-dao-tao/tieu-hoc">{t("tieu-hoc")}</Link>
          ),
        },
        {
          key: "8",
          label: (
            <Link href="/chuong-trinh-dao-tao/trung-hoc">{t("thcs")}</Link>
          ),
        },
        {
          key: "9",
          label: (
            <Link href="/trung-tam-anh-ngu">{t("trung-tam-anh-ngu")}</Link>
          ),
        },
      ],
    },
    // {
    //   key: "sub3",
    //   label: t("doi-song"),
    //   children: [
    //     {
    //       key: "10",
    //       label: <Link href="/doi-song-hoc-duong">{t("moi-truong-ht")}</Link>,
    //     },
    //     {
    //       key: "11",
    //       label: (
    //         <Link href="/doi-song-hoc-duong/hoat-dong-clb">
    //           {t("hoat-dong-clb")}
    //         </Link>
    //       ),
    //     },
    //     {
    //       key: "12",
    //       label: (
    //         <Link href="/doi-song-hoc-duong/chuong-trinh-ngoai-khoa">
    //           {t("chuong-trinh-nk")}
    //         </Link>
    //       ),
    //     },

    //     {
    //       key: "13",
    //       label: (
    //         <Link href="/doi-song-hoc-duong/dich-vu-truong-hoc">
    //           {t("dich-vu-th")}
    //         </Link>
    //       ),
    //     },
    //     {
    //       key: "14",
    //       label: (
    //         <Link href="/doi-song-hoc-duong/thu-vien-hinh-anh">
    //           {t("thu-vien-ha")}
    //         </Link>
    //       ),
    //     },
    //   ],
    // },
    // {
    //   key: "sub4",
    //   label: t("goc-hoc-sinh"),
    //   children: [
    //     {
    //       key: "15",
    //       label: <Link href="/goc-hoc-sinh">{t("cau-chuyen-hs")}</Link>,
    //     },
    //     {
    //       key: "16",
    //       label: (
    //         <Link href="/goc-hoc-sinh/thanh-tich-hoc-duong">
    //           {t("thanh-tich-hs")}
    //         </Link>
    //       ),
    //     },
    //     {
    //       key: "17",
    //       label: (
    //         <Link href="/goc-hoc-sinh/cuu-hoc-sinh">{t("cuu-hoc-sinh")}</Link>
    //       ),
    //     },
    //   ],
    // },
    {
      key: "sub9",
      label: <Link href="/tuyen-sinh">{t("tuyen-sinh")}</Link>,
    },

    // {
    //   key: "sub6",
    //   label: <Link href="/tin-tuc">{t("tin-tuc")}</Link>,
    // },
    {
      key: "sub7",
      label: <Link href="/tuyen-dung">{t("tuyen-dung")}</Link>,
    },
    {
      key: "sub8",
      label: <Link href="#thong-tin-lien-he">{t("lien-he")}</Link>,
    },
    {
      key: "sub5",
      label: <Link href="#tuyen-sinh">{t("dang-ky-tv")}</Link>,
    },
  ];
  // pc
  const item2 = [
    {
      key: "sub1",
      label: <Link href="/ve-chung-toi">{t("about")}</Link>,
      children: [
        {
          key: "1",
          label: <Link href="/ve-chung-toi">{t("gioi-thieu")}</Link>,
        },
        {
          key: "2",
          label: (
            <Link href="/ve-chung-toi/tam-nhin-su-menh">{t("tam-nhin")}</Link>
          ),
        },
        {
          key: "3",
          label: (
            <Link href="/ve-chung-toi/doi-ngu-giao-vien">{t("giao-vien")}</Link>
          ),
        },
        {
          key: "4",
          label: (
            <Link href="/ve-chung-toi/thong-diep-tu-ban-lanh-dao">
              {t("lanh-dao")}
            </Link>
          ),
        },
      ],
    },
    {
      key: "sub2",
      label: <Link href="/chuong-trinh-dao-tao">{t("chuong-trinh")}</Link>,
      children: [
        {
          key: "5",
          label: (
            <Link href="/chuong-trinh-dao-tao">
              {t("tong-quan-chuong-trinh")}
            </Link>
          ),
        },
        {
          key: "6",
          label: (
            <Link href="/chuong-trinh-dao-tao/mam-non">{t("mam-non")}</Link>
          ),
        },
        {
          key: "7",
          label: (
            <Link href="/chuong-trinh-dao-tao/tieu-hoc">{t("tieu-hoc")}</Link>
          ),
        },
        {
          key: "8",
          label: (
            <Link href="/chuong-trinh-dao-tao/trung-hoc">{t("thcs")}</Link>
          ),
        },
        {
          key: "9",
          label: (
            <Link href="/trung-tam-anh-ngu">{t("trung-tam-anh-ngu")}</Link>
          ),
        },
      ],
    },
    // {
    //   key: "sub3",
    //   label: <Link href="/doi-song-hoc-duong">{t("doi-song")}</Link>,
    //   children: [
    //     {
    //       key: "10",
    //       label: <Link href="/doi-song-hoc-duong">{t("moi-truong-ht")}</Link>,
    //     },
    //     {
    //       key: "11",
    //       label: (
    //         <Link href="/doi-song-hoc-duong/hoat-dong-clb">
    //           {t("hoat-dong-clb")}
    //         </Link>
    //       ),
    //     },
    //     {
    //       key: "12",
    //       label: (
    //         <Link href="/doi-song-hoc-duong/chuong-trinh-ngoai-khoa">
    //           {t("chuong-trinh-nk")}
    //         </Link>
    //       ),
    //     },

    //     {
    //       key: "13",
    //       label: (
    //         <Link href="/doi-song-hoc-duong/dich-vu-truong-hoc">
    //           {t("dich-vu-th")}
    //         </Link>
    //       ),
    //     },
    //     {
    //       key: "14",
    //       label: (
    //         <Link href="/doi-song-hoc-duong/thu-vien-hinh-anh">
    //           {t("thu-vien-ha")}
    //         </Link>
    //       ),
    //     },
    //   ],
    // },
    // {
    //   key: "sub4",
    //   label: <Link href="/goc-hoc-sinh/">{t("goc-hoc-sinh")}</Link>,
    //   children: [
    //     {
    //       key: "15",
    //       label: <Link href="/goc-hoc-sinh">{t("cau-chuyen-hs")}</Link>,
    //     },
    //     {
    //       key: "16",
    //       label: (
    //         <Link href="/goc-hoc-sinh/thanh-tich-hoc-duong">
    //           {t("thanh-tich-hs")}
    //         </Link>
    //       ),
    //     },
    //     {
    //       key: "17",
    //       label: (
    //         <Link href="/goc-hoc-sinh/cuu-hoc-sinh">{t("cuu-hoc-sinh")}</Link>
    //       ),
    //     },
    //   ],
    // },
    {
      key: "sub5",
      label: <Link href="/tuyen-sinh">{t("tuyen-sinh")}</Link>,
    },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Trạng thái để lưu trạng thái hiển thị của Menubar

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Đảo ngược trạng thái hiển thị của Menubar
  };
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      setIsVisible(false); // Vuốt xuống
    } else {
      setIsVisible(true); // Vuốt lên
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  return (
    <header
      className={`fixed z-50 top-0 left-0 right-0 py-0.5 bg-white shadow-md transition-all duration-300 `}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 ">
        <div className="flex items-center justify-between h-16 lg:h-20 ">
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link className="flex items-center " href="/">
              <Image
                loading="lazy"
                className="h-fit scale-75"
                src={logo}
                width={80}
                height={80}
                alt="logo"
              />
              <div className="font-semibold text-rose-500">
                <h4 className="text-[15.4px]">PHOENIX EDUCATION</h4>
                <h4 className="text-xs ">GIÁO DỤC PHƯỢNG HOÀNG</h4>
              </div>
            </Link>
          </div>
          {/* PC */}
          <div className=" hidden lg:block">
            {/* Desktop navigation */}
            <div className="flex gap-x-3 mr-4 justify-end items-center ">
              <Link
                className="px-1.5 py-2 rounded-sm text-xs leading-4 text-white bg-rose-500 "
                href="#tuyen-sinh"
              >
                {t("dang-ky-tv")}
              </Link>
              {/* <Link className="pp" href="/tin-tuc">
                {t("tin-tuc")}
              </Link> */}
              <Link className="pp" href="/tuyen-dung">
                {t("tuyen-dung")}
              </Link>
              <Link className="pp" href="#thong-tin-lien-he">
                {t("lien-he")}
              </Link>

              {/* đổi ngôn ngữ */}
              {/* <div className="uppercase  text-rose-500  hover:font-normal">
                <span className="font-semibold">{lng}</span> |{" "}
                <span className="hover:font-bold">
                  {languages
                    .filter((l) => lng !== l)
                    .map((l, index) => {
                      return (
                        <span key={l}>
                          {index > 0 && " or "}
                          <a
                            href={`/${l}${path}`}
                            onClick={() => window.location.reload()}
                          >
                            {l}
                          </a>
                        </span>
                      );
                    })}
                </span>
              </div> */}
            </div>
            <div className="text-end">
              <Menubar lng={lng} mode="horizontal" items={item2} />
            </div>
          </div>

          {/* Mobile */}
          <div className="lg:hidden flex items-center gap-3">
            {/* đổi ngôn ngữ */}
            {/* <div className="uppercase  text-rose-500  hover:font-normal">
              <span className="font-semibold">{lng}</span> |{" "}
              <span className="hover:font-bold">
                {languages
                  .filter((l) => lng !== l)
                  .map((l, index) => {
                    return (
                      <span key={l}>
                        {index > 0 && " or "}
                        <a
                          href={`/${l}${path}`}
                          onClick={() => window.location.reload()}
                        >
                          {l}
                        </a>
                      </span>
                    );
                  })}
              </span>
            </div> */}
            <button
              onClick={toggleMenu}
              className="p-2 rounded focus:outline-none"
            >
              <RiMenuFoldLine className="text-xl" />
            </button>
          </div>
        </div>
      </div>
      {/* Hiển thị Menubar nếu isMenuOpen là true */}
      {isMenuOpen && (
        <Menubar lng={lng} mode="inline" items={item1} data-aos="fade-up" />
      )}
    </header>
  );
};
