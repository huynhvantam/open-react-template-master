import Link from "next/link";
import { useTranslation } from "../../../i18n";
import { Header } from "../../components/Header/client";
import bannerabout from '@/public/images/banner/banner-about.png';
import BannerImage from '../../components/banner'
import Content1 from '../../components/content1'
import Pagedautien from '../../components/pagedautien'

export async function generateMetadata({ params: { lng } }) {
  const { t } = await useTranslation(lng, "header");
  return { title: t("h1") };
}

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng, "header");
  const highlight = true; // Đặt giá trị highlight ở đây
  const links = [
    { href: '/content1', content: t("gioi-thieu"), hightlight: true },
    { href: '/content2', content: t("tam-nhin") },
    { href: '/content3', content: t("giao-vien") },
    { href: '/content4', content: t("lanh-dao") },
    { href: '/content4', content: t("thanh-tich") },
    { href: '/content4', content: t("mam-non") },
  ];

  return (
    <>
      <Header lng={lng} path="/ve-chung-toi/tam-nhin-su-menh" />
      <BannerImage src={bannerabout}
        text1="Về chúng tôi / Tầm nhìn - Sứ mệnh"
        text2="Tầm nhìn - Sứ mệnh" />
      <Pagedautien links={links} highlight={highlight} />
      {/* <main>
        <Link href={`/${lng}`}>
          <button type="button">{t("back-to-home")}</button>
        </Link>
      </main> */}
    </>
  );
}
