import Link from "next/link";
import { useTranslation } from "../../i18n";
import { Header } from "../components/Header/client";
import bannerabout from '@/public/images/banner/banner-about.png';
import BannerImage from '../components/banner'
import Content1 from '../components/content1'
export async function generateMetadata({ params: { lng } }) {
  const { t } = await useTranslation(lng, "second-page");
  return { title: t("h1") };
}

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng, "second-page");
  return (
    <>
      <Header lng={lng} path="/about" />
      <BannerImage src={bannerabout}
        text1="Trang chủ / Về chúng tôi"
        text2="Giới thiệu chung" />
      <Content1 />
      <main>
        <Link href={`/${lng}`}>
          <button type="button">{t("back-to-home")}</button>
        </Link>
      </main>
    </>
  );
}
