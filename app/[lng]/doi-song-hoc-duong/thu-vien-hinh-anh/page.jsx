import Link from "next/link";
import { useTranslation } from "../../../i18n";
import { Header } from "../../components/Header/client";
import bannerabout from "@/public/images/banner/banner-about.jpg";
import BannerImage from "../../components/banner";
import Pagedautien from "../../components/pagedautien";
import { trungthu2023, trungthu2024, trungthu2025 } from "./imageImports";
import Listhinhanh from "../../components/listhinhanh";
export async function generateMetadata({ params: { lng } }) {
  const { t } = await useTranslation(lng, "header");
  const title1 = t("thu-vien-ha");
  const title2 = t("giao-duc-ph");
  return { title: `${title1} - ${title2}` };
}

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng, "header");
  const highlight = true; // Đặt giá trị highlight ở đây
  const links = [
    {
      href: "/doi-song-hoc-duong",
      content: t("moi-truong-ht"),
    },
    {
      href: "/doi-song-hoc-duong/goc-hoc-sinh",
      content: t("goc-hoc-sinh"),
    },
    {
      href: "/doi-song-hoc-duong/thu-vien-hinh-anh",
      content: t("thu-vien-ha"),
      hightlight: true,
    },
    {
      href: "/doi-song-hoc-duong/dich-vu-truong-hoc",
      content: t("dich-vu-th"),
    },
    {
      href: "/doi-song-hoc-duong/thanh-tich-hoc-duong",
      content: t("thanh-tich-hs"),
    },
    {
      href: "/doi-song-hoc-duong/chuong-trinh-ngoai-khoa",
      content: t("chuong-trinh-nk"),
    },
  ];
  const buttonData = {
    mamnon: {
      title: "Trung thu",
      listimage: trungthu2023,
    },
    a: {
      title: "Tết 2024",
      listimage: trungthu2024,
    },
    b: {
      title: "Giáng sinh 2024",
      listimage: trungthu2025,
    },
  };
  return (
    <>
      <Header lng={lng} path="/chuong-trinh-dao-tao/trung-hoc" />
      <BannerImage
        src={bannerabout}
        text1={t("home") + " / " + t("doi-song")}
        text2={t("thu-vien-ha")}
      />
      <Pagedautien links={links} highlight={highlight} />{" "}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 ">
        <Listhinhanh buttonData={buttonData} />
      </section>
    </>
  );
}
