import Link from "next/link";
import { useTranslation } from "../../../i18n";
import { Header } from "../../components/Header/client";
import bannerabout from "@/public/images/home/background.png";
import BannerImage from "../../components/banner";
import VideoThumb from "@/public/images/oneuse/thumpvideo.jpg";
import FeatImage02 from "@/public/images/home/background-mobile.png";
import ModalVideo from "../../../components/modal-video";
import PageDautien from "../../components/pagedautien";
import Image from "next/image";
import FeatImage01 from "@/public/images/phuonghoang/hocsinh1.jpg";
export async function generateMetadata({ params: { lng } }) {
  const { t } = await useTranslation(lng, "header");
  const title1 = t("cuu-hoc-sinh");
  const title2 = t("giao-duc-ph");
  return { title: `${title1} - ${title2}` };
}
export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng, "header");
  const highlight = true;
  const links = [
    { href: "/goc-hoc-sinh/", content: t("cau-chuyen-hs") },
    { href: "/goc-hoc-sinh/thanh-tich-hoc-duong", content: t("thanh-tich-hs") },
    {
      href: "/goc-hoc-sinh/cuu-hoc-sinh",
      content: t("cuu-hoc-sinh"),
      hightlight: true,
    },
  ];
  return (
    <>
      <Header lng={lng} path="/goc-hoc-sinh" />
      <BannerImage
        src={bannerabout}
        srcmobile={FeatImage02}
        text1={t("home") + " / " + t("goc-hoc-sinh")}
        text2={t("cau-chuyen-hs")}
      />

      <PageDautien className="" links={links} highlight={highlight} />
      <section className="max-w-6xl mx-auto px-4 sm:px-6 "></section>
      {/* <Footer /> */}
    </>
  );
}
