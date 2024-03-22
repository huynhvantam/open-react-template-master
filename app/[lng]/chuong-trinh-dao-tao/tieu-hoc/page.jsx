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
  const title1 = t("tam-nhin");
  const title2 = t("giao-duc-ph");
  return { title: `${title1} - ${title2}` };
}

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng, "header");
  const highlight = true;
  const links = [
    {
      href: "/chuong-trinh-dao-tao/",
      content: t("chuong-trinh"),
    },
    { href: "/chuong-trinh-dao-tao/mam-non", content: t("mam-non") },
    {
      href: "/chuong-trinh-dao-tao/tieu-hoc",
      content: t("tieu-hoc"),
      hightlight: true,
    },
    { href: "/chuong-trinh-dao-tao/trung-hoc", content: t("thcs") },
  ];
  return (
    <>
      <Header lng={lng} path="/chuong-trinh-dao-tao/tieu-hoc" />
      <BannerImage
        src={bannerabout}
        text1="Trang chủ / Chương trình đào tạo"
        text2="Chương trình học Tiểu học"
      />
      <Pagedautien links={links} highlight={highlight} />
      {/* <section className="max-w-6xl mx-auto px-4 sm:px-6 ">
        <ZiczagImage contentData={contentData} />
      </section> */}
    </>
  );
}
