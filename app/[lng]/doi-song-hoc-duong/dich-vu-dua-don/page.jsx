import Link from "next/link";
import { useTranslation } from "../../../i18n";
import { Header } from "../../components/Header/client";
import bannerabout from "@/public/images/banner/banner-about.jpg";
import BannerImage from "../../components/banner";
import Content1 from "../../components/content1";
import Pagedautien from "../../components/pagedautien";
import Image from "next/image";
import Image1 from "@/public/images/phuonghoang/truonghoc.jpg";
// import ZiczagImage from "../../components/ziczagimage";
export async function generateMetadata({ params: { lng } }) {
  const { t } = await useTranslation(lng, "header");
  const title1 = t("dich-vu-dd");
  const title2 = t("giao-duc-ph");
  return { title: `${title1} - ${title2}` };
}

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng, "header");
  const highlight = true;
  const links = [
    {
      href: "/doi-song-hoc-duong",
      content: t("moi-truong-ht"),
    },
    {
      href: "/doi-song-hoc-duong/thanh-tich-hoc-duong",
      content: t("thanh-tich-hs"),
    },
    {
      href: "/doi-song-hoc-duong/dich-vu-dua-don",
      content: t("dich-vu-dd"),
      hightlight: true,
    },
    {
      href: "/doi-song-hoc-duong/cham-soc-y-te",
      content: t("cham-soc-yt"),
    },
    {
      href: "/doi-song-hoc-duong/dinh-duong-hoc-duong",
      content: t("dinh-duong-hd"),
    },
    {
      href: "/doi-song-hoc-duong/chuong-trinh-ngoai-khoa",
      content: t("chuong-trinh-nk"),
    },
  ];
  return (
    <>
      <Header lng={lng} path="/chuong-trinh-dao-tao/tieu-hoc" />
      <BannerImage
        src={bannerabout}
        text1={t("home") + " / " + t("doi-song")}
        text2={t("dich-vu-dd")}
      />
      <Pagedautien links={links} highlight={highlight} />
      {/* <section className="max-w-6xl mx-auto px-4 sm:px-6 ">
        <ZiczagImage contentData={contentData} />
      </section> */}
    </>
  );
}
