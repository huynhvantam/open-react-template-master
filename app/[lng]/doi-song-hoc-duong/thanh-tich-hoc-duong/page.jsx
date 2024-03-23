import Link from "next/link";
import { useTranslation } from "../../../i18n";
import { Header } from "../../components/Header/client";
import bannerabout from "@/public/images/banner/banner-about.jpg";
import BannerImage1 from "../../components/banner";
import Pagedautien from "../../components/pagedautien";
import Image1 from "@/public/images/testimonial-01.jpg";
export async function generateMetadata({ params: { lng } }) {
  const { t } = await useTranslation(lng, "header");
  const title1 = t("thanh-tich-hs");
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
      href: "/doi-song-hoc-duong/thanh-tich-hoc-duong",
      content: t("thanh-tich-hs"),
      hightlight: true,
    },
    {
      href: "/doi-song-hoc-duong/dich-vu-dua-don",
      content: t("dich-vu-dd"),
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
      <Header lng={lng} path="/doi-song-hoc-duong/thanh-tich-hoc-duong" />
      <BannerImage1
        src={bannerabout}
        text1={t("home") + " / " + t("doi-song")}
        text2={t("thanh-tich-hs")}
      />
      <Pagedautien links={links} highlight={highlight} />
    </>
  );
}
