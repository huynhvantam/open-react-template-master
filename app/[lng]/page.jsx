import Link from "next/link";
import { Trans } from "react-i18next/TransWithoutContext";
import { languages, fallbackLng } from "../i18n/settings";
import { useTranslation } from "../i18n";
import DefaultLayout from "./DefaultLayout";
import Footer from "../components/ui/footer";
import FeatImage01 from "@/public/images/banner/banner-home.jpg";
// import { Header } from "./components/Header/client";
import Image from "next/image";
export async function generateMetadata({ params: { lng } }) {
  const { t } = await useTranslation(lng);
  return { title: t("h1") };
}

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng, "header");
  if (languages.indexOf(lng) < 0) lng = fallbackLng;

  return (
    <>
      <DefaultLayout lng={lng} />
      {/* <Header lng={lng} path="/" /> */}
      <section className="relative overflow-hidden pt-[84px]">
        <div className="relative h-[600px]">
          <Image
            src={FeatImage01}
            alt="banner"
            layout="responsive"
            priority="true"
          />
          <div className="absolute top-0 -left-1/4 w-full h-full bg-gradient-to-l from-transparent to-white transition-opacity" />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="absolute top-1/2 transform -translate-y-1/2">
            <h4 className="h44 pb-2" data-aos="fade-up" data-aos-delay="200">
              {t("giao-duc-ph")}
            </h4>
            <h1 className="h1" data-aos="fade-up" data-aos-delay="400">
              {t("tuyen-sinh-nh")}
            </h1>
            <h1 className="h1" data-aos="fade-up" data-aos-delay="400">
              2024 - 2025
            </h1>
            <Link
              href="/"
              className="btn mt-4"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              {t("dang-ky-ngay")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
