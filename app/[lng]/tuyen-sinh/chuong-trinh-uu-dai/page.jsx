import Link from "next/link";
import { useTranslation } from "../../../i18n";
import { Header } from "../../components/Header/client";
import bannerabout from "@/public/images/banner/banner-about.jpg";
import BannerImage from "../../components/banner";
import Content1 from "../../components/content1";
import Pagedautien from "../../components/pagedautien";
import Image1 from "@/public/images/oneuse/anh1.jpg";
export async function generateMetadata({ params: { lng } }) {
  const { t } = await useTranslation(lng, "header");
  const title1 = t("chuong-trinh-ud");
  const title2 = t("giao-duc-ph");
  return { title: `${title1} - ${title2}` };
}

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng, "header");
  const highlight = true; // Đặt giá trị highlight ở đây
  const links = [
    {
      href: "/tuyen-sinh",
      content: t("thong-tin-ts"),
    },
    {
      href: "/tuyen-sinh/quy-dinh-chinh-sach",
      content: t("quy-dinh-chinh-sach"),
    },
    {
      href: "/tuyen-sinh/hoc-phi",
      content: t("hoc-phi"),
    },
    {
      href: "/tuyen-sinh/chuong-trinh-uu-dai",
      content: t("chuong-trinh-ud"),
      hightlight: true,
    },
  ];

  return (
    <>
      <Header lng={lng} path="/tuyen-sinh/chuong-trinh-uu-dai" />
      <BannerImage
        src={bannerabout}
        text1={t("home") + " / " + t("tuyen-sinh")}
        text2={t("chuong-trinh-ud")}
      />
      <Pagedautien links={links} highlight={highlight} />{" "}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 ">
        <div>
          <h3 className="h3 pt-10 pb-10 text-center">ĐANG PHÁT TRIỂN</h3>
        </div>
      </section>
    </>
  );
}
