import Link from "next/link";
import { useTranslation } from "../../../i18n";
import { Header } from "../../components/Header/client";
import bannerabout from '@/public/images/banner/banner-about.png';
import BannerImage from '../../components/banner'
import Content1 from '../../components/content1'
import Pagedautien from './pagedautien'
export async function generateMetadata({ params: { lng } }) {
  const { t } = await useTranslation(lng, "second-page");
  return { title: t("h1") };
}

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng, "second-page");
  const links = [
    { href: '/content1', content: 'content1' },
    { href: '/content2', content: 'content2' },
    { href: '/content3', content: 'content3' },
    { href: '/content4', content: 'content4' },
  ];
  return (
    <>
      <Header lng={lng} path="/ve-chung-toi/tam-nhin-su-menh" />
      <BannerImage src={bannerabout}
        text1="Về chúng tôi / Tầm nhìn - Sứ mệnh"
        text2="Tầm nhìn - Sứ mệnh" />
      <Pagedautien links={links} />
      {/* <main>
        <Link href={`/${lng}`}>
          <button type="button">{t("back-to-home")}</button>
        </Link>
      </main> */}
    </>
  );
}
