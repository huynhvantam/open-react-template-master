import Link from "next/link";
import { useTranslation } from "../../../i18n";
import { Header } from "../../components/Header/client";
import bannerabout from "@/public/images/banner/banner-about.jpg";
import BannerImage from "../../components/banner";
import Content1 from "../../components/content1";
import Pagedautien from "../../components/pagedautien";
import Image1 from "@/public/images/testimonial-01.jpg";
export async function generateMetadata({ params: { lng } }) {
  const { t } = await useTranslation(lng, "header");
  const title1 = t("tam-nhin");
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
    { href: "/chuong-trinh-dao-tao/mam-non", content: t("mam-non") },
    {
      href: "/chuong-trinh-dao-tao/tieu-hoc",
      content: t("tieu-hoc"),
    },
    {
      href: "/chuong-trinh-dao-tao/trung-hoc",
      content: t("thcs"),
      hightlight: true,
    },
  ];

  return (
    <>
      <Header lng={lng} path="/chuong-trinh-dao-tao/trung-hoc" />
      <BannerImage
        src={bannerabout}
        text1="Trang chủ / Chương trình đào tạo"
        text2="Chương trình học Trung học"
      />
      <Pagedautien links={links} highlight={highlight} />
    </>
  );
}
