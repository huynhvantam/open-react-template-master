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
    {
      key: "1",
      href: "/ve-chung-toi",
      label: t("gioi-thieu"),
    },
    {
      key: "2",
      href: "/ve-chung-toi/tam-nhin-su-menh",
      label: t("tam-nhin"),
    },
    {
      key: "3",
      href: "/ve-chung-toi/doi-ngu-giao-vien",
      label: t("giao-vien"),
    },
    {
      key: "4",
      href: "/ve-chung-toi/doi-ngu-lanh-dao",
      label: t("lanh-dao"),
    },
  ];

  const items2 = [
    {
      key: "1",
      href: "/chuong-trinh-dao-tao",
      label: t("tong-quan-chuong-trinh"),
    },
    {
      key: "2",
      href: "/chuong-trinh-dao-tao/mam-non",
      label: t("mam-non"),
    },
    {
      key: "3",
      href: "/chuong-trinh-dao-tao/tieu-hoc",
      label: t("tieu-hoc"),
    },
    {
      key: "4",
      href: "/chuong-trinh-dao-tao/trung-hoc",
      label: t("thcs"),
    },
  ];

  const items3 = [
    {
      key: "1",
      href: "/doi-song-hoc-duong",
      label: t("moi-truong-ht"),
    },
    {
      key: "2",
      href: "/doi-song-hoc-duong/goc-hoc-sinh",
      label: t("goc-hoc-sinh"),
    },
    {
      key: "3",
      href: "/doi-song-hoc-duong/thu-vien-hinh-anh",
      label: t("thu-vien-ha"),
    },
    {
      key: "4",
      href: "/doi-song-hoc-duong/dich-vu-truong-hoc",
      label: t("dich-vu-th"),
    },
    {
      key: "5",
      href: "/doi-song-hoc-duong/thanh-tich-hoc-duong",
      label: t("thanh-tich-hs"),
    },
    {
      key: "6",
      href: "/doi-song-hoc-duong/chuong-trinh-ngoai-khoa",
      label: t("chuong-trinh-nk"),
    },
  ];

  const items4 = [
    {
      key: "1",
      href: "/tuyen-sinh",
      label: t("thong-tin-ts"),
    },
    {
      key: "2",
      href: "/tuyen-sinh/quy-dinh-chinh-sach",
      label: t("quy-dinh-chinh-sach"),
    },
    {
      key: "3",
      href: "/tuyen-sinh/hoc-phi",
      label: t("hoc-phi"),
    },
    {
      key: "4",
      href: "/tuyen-sinh/chuong-trinh-uu-dai",
      label: t("chuong-trinh-ud"),
    },
  ];
  const items5 = [
    {
      key: "1",
      href: "/trung-tam-anh-ngu",
      label: t("chuong-trinh-hoc"),
    },
    {
      key: "2",
      href: "/trung-tam-anh-ngu",
      label: t("giao-vien"),
    },
    {
      key: "3",
      href: "/trung-tam-anh-ngu",
      label: t("hoc-phi"),
    },
    {
      key: "4",
      href: "/trung-tam-anh-ngu",
      label: t("chuong-trinh-ud"),
    },
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
          <div className="">
            {/* Desktop navigation */}
            <div className="flex gap-x-6 justify-end items-center">
              <Link
                className="px-1.5 py-2 rounded-sm text-xs leading-4 text-white bg-rose-500 "
                href="#tuyen-sinh"
              >
                {t("dang-ky-tv")}
              </Link>
              <Link className="pp" href="/tin-tuc">
                {t("tin-tuc")}
              </Link>
              <Link className="pp" href="/tuyen-dung">
                {t("tuyen-dung")}
              </Link>
              <Link className="pp" href="#thong-tin-lien-he">
                {t("lien-he")}
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
              </div>
            </div>
            <nav className="hidden md:flex md:grow mt-3 ">
              {/* Desktop sign in links */}
              <ul className="flex flex-1 justify-end items-center">
                <Navv
                  items={items}
                  buttonText={t("about")}
                  href={"/ve-chung-toi"}
                />
                <Navv
                  items={items2}
                  buttonText={t("chuong-trinh")}
                  href={"/chuong-trinh-dao-tao"}
                />
                <Navv
                  items={items3}
                  buttonText={t("doi-song")}
                  href={"/doi-song-hoc-duong"}
                />
                <Navv
                  items={items5}
                  buttonText={t("trung-tam-anh-ngu")}
                  href={"/trung-tam-anh-ngu"}
                />
                <Navv
                  items={items4}
                  buttonText={t("tuyen-sinh")}
                  href={"/tuyen-sinh"}
                />
              </ul>
            </nav>
          </div>

          {/* <MobileMenu /> */}
        </div>
      </div>
    </header>
  );
};
