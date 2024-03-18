import Link from "next/link";
import { useTranslation } from "../../i18n";
import { Header } from "../components/Header/client";
import bannerabout from '@/public/images/banner/banner-about.jpg';
import BannerImage from '../components/banner'
import Content1 from '../components/content1'
export async function generateMetadata({ params: { lng } }) {
  const { t } = await useTranslation(lng, "header");
  const title1 = t("about");
  const title2 = t("giao-duc-ph");
  return { title: `${title1} - ${title2}` };
}
export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng, "second-page");
  return (
    <>
      <Header lng={lng} path="/ve-chung-toi" />
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
