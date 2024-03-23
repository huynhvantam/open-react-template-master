import Link from "next/link";
import { useTranslation } from "../../../i18n";
import { Header } from "../../components/Header/client";
import bannerabout from "@/public/images/banner/banner-about.jpg";
import BannerImage1 from "../../components/banner";
import Pagedautien from "../../components/pagedautien";
import Image1 from "@/public/images/testimonial-01.jpg";
export async function generateMetadata({ params: { lng } }) {
  const { t } = await useTranslation(lng, "header");
  const title1 = t("mam-non");
  const title2 = t("giao-duc-ph");
  return { title: `${title1} - ${title2}` };
}

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng, "header");
  const highlight = true; // Đặt giá trị highlight ở đây
  const links = [
    {
      href: "/chuong-trinh-dao-tao/",
      content: t("chuong-trinh"),
    },
    {
      href: "/chuong-trinh-dao-tao/mam-non",
      content: t("mam-non"),
      hightlight: true,
    },
    { href: "/chuong-trinh-dao-tao/tieu-hoc", content: t("tieu-hoc") },
    { href: "/chuong-trinh-dao-tao/trung-hoc", content: t("thcs") },
  ];

  return (
    <>
      <Header lng={lng} path="/chuong-trinh-dao-tao/mam-non" />
      <BannerImage1
        src={bannerabout}
        text1={t("home") + " / " + t("chuong-trinh")}
        text2={t("mam-non")}
      />
      <Pagedautien links={links} highlight={highlight} />
    </>
  );
}
