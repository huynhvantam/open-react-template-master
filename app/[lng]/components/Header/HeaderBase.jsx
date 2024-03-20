import Link from "next/link";
import { Trans } from "react-i18next/TransWithoutContext";
import { languages } from "../../../i18n/settings";
import MobileMenu from "./mobile-menu";
import { Button, Dropdown, Space } from "antd";
import Navv from "./navbar";
import Image from "next/image";
import logo from "@/public/images/phuonghoang/logo.png";

export const HeaderBase = ({ t, lng, path = "" }) => {
  const items = [
    { key: "1", href: "/ve-chung-toi", label: "Giới thiệu chung" },
    {
      key: "2",
      href: "/ve-chung-toi/tam-nhin-su-menh",
      label: "Tầm nhìn - Sứ mệnh",
    },
    { key: "3", href: "/", label: "Đội ngũ giáo viên" },
    { key: "4", href: "/", label: "Đội ngũ lãnh đạo" },
    { key: "5", href: "/", label: "Thành tích của chúng tôi" },
  ];
  const items2 = [
    { key: "1", href: "/", label: "Tổng quan chương trình" },
    { key: "2", href: "/", label: "Mầm non" },
    { key: "3", href: "/", label: "Tiểu học" },
    { key: "4", href: "/", label: "Trung học" },
    { key: "5", href: "/", label: "Anh ngữ Phượng Hoàng" },
  ];
  const items3 = [
    { key: "1", href: "/", label: "Thành tích học sinh" },
    { key: "2", href: "/", label: "Dịch vụ đưa đón" },
    { key: "3", href: "/", label: "Thư viện" },
    { key: "4", href: "/", label: "Chăm sóc y tế" },
    { key: "5", href: "/", label: "Nhà ăn" },
  ];
  const items4 = [
    { key: "1", href: "/", label: "Đăng ký tuyển sinh" },
    { key: "2", href: "/", label: "Quy định va chính sách" },
    { key: "3", href: "/", label: "Học phí" },
    { key: "4", href: "/", label: "Chương trình ưu đãi" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full pt-0.5 pb-0.5 bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 ">
        <div className="flex items-start justify-between h-20 ">
          {/* Site branding */}

          <div className="shrink-0 mr-4">
            {/* Logo */}
            {/* <div className='h-20 w-20 bg-red-100'></div> */}
            <Link className="flex items-center " href="/">
              <Image
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
          <div className="">
            {/* Desktop navigation */}
            <div className="flex gap-x-6 justify-end items-center">
              <div className="px-1.5 py-2 rounded-sm text-xs leading-4 text-white bg-rose-500 ">
                Đăng ký tư vấn
              </div>
              <Link className="pp" href="/tin-tuc">
                {t("tin-tuc")}
              </Link>
              <Link className="pp" href="/tuyen-dung">
                {t("tuyen-dung")}
              </Link>

              {/* đổi ngôn ngữ */}
              <div className="uppercase  text-rose-500  hover:font-normal">
                <span className="font-semibold">{lng}</span> |{" "}
                <span className="hover:font-bold">
                  {languages
                    .filter((l) => lng !== l)
                    .map((l, index) => {
                      return (
                        <span key={l}>
                          {index > 0 && " or "}
                          <Link href={`/${l}${path}`}>{l}</Link>
                        </span>
                      );
                    })}
                </span>
              </div>
            </div>
            <nav className="hidden md:flex md:grow mt-2">
              {/* Desktop sign in links */}
              <ul className="flex flex-1 justify-end items-center text-lg">
                <Navv items={items} buttonText={t("about")} />
                <Navv items={items2} buttonText={t("chuong-trinh")} />
                <Navv items={items3} buttonText={t("doi-song")} />
                <Navv items={items4} buttonText={t("tuyen-sinh")} />
                <Link
                  className="px-3 py-1 rounded-sm text-white round bg-rose-500"
                  href="#footer"
                >
                  {t("lien-he")}
                </Link>
              </ul>
            </nav>
          </div>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
};
