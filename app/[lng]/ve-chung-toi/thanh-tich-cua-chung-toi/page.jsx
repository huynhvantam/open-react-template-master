import Link from "next/link";
import { useTranslation } from "../../../i18n";
import { Header } from "../../components/Header/client";
import bannerabout from "@/public/images/banner/banner-about.jpg";
import BannerImage from "../../components/banner";
import Content1 from "../../components/content1";
import Pagedautien from "../../components/pagedautien";

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
    { href: "/ve-chung-toi/", content: t("gioi-thieu") },
    { href: "/ve-chung-toi/tam-nhin-su-menh", content: t("tam-nhin") },
    { href: "/ve-chung-toi/doi-ngu-giao-vien", content: t("giao-vien") },
    { href: "/ve-chung-toi/doi-ngu-lanh-dao", content: t("lanh-dao") },
    {
      href: "/ve-chung-toi/thanh-tich-cua-chung-toi",
      content: t("thanh-tich"),
      hightlight: true,
    },
  ];

  return (
    <>
      <Header lng={lng} path="/ve-chung-toi/thanh-tich-cua-chung-toi" />
      <BannerImage
        src={bannerabout}
        text1="Về chúng tôi / Thành tích của chúng tôi"
        text2="Thành tích của chúng tôi"
      />
      <Pagedautien links={links} highlight={highlight} />
      {/* <main>
        <Link href={`/${lng}`}>
          <button type="button">{t("back-to-home")}</button>
        </Link>
      </main> */}
    </>
  );
}
