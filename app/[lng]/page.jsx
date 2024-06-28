import Link from "next/link";
import { languages, fallbackLng } from "../i18n/settings";
import { useTranslation } from "../i18n";
import FeatImage01 from "@/public/images/banner/banner-home.jpg";
import FeatImage02 from "@/public/images/banner/banner-mobile.png";
import Image from "next/image";
import Content0 from "./components/content0";
import Content1 from "./components/content1";
import Content2 from "./components/content2";
import Content3 from "./components/content3";
import Taisaonenchon from "./components/taisaonenchon";
import Chiasecongdong from "./components/chiasecongdong";
import { Header } from "./components/Header/client";
import Hero from "../components/hero";
import Googlemap from "./components/googlemap";
export async function generateMetadata({ params: { lng } }) {
  const { t } = await useTranslation(lng);

  return { title: t("h1") };
}

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng, "header");
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  return (
    <>
      <Header lng={lng} path="/" />
      {/* mobile */}
      <div className="lg:hidden">
        {/* <Image
          loading="lazy"
          src={FeatImage02}
          alt="banner"
          layout="fill"
          objectFit="cover"
        /> */}
        <div style={{ position: "relative", width: "100%", height: "100vh" }}>
          {/* Điều chỉnh chiều cao theo yêu cầu */}
          <Image
            src={FeatImage02}
            alt="banner"
            fill
            style={{ objectFit: "cover" }}
          />
          <Content0 />
        </div>
        {/* <Image
          loading="lazy"
          src={FeatImage02}
          alt="banner"
            layout="responsive"
          objectFit="cover"
          className="opacity-0 -mt-[100px] sm:-mt-[200px] md:-mt-[500px]  "
        /> */}
      </div>

      {/* PC */}
      <section className="relative overflow-hidden pt-10 lg:pt-[84px] hidden lg:block">
        <div className="relative h-[600px] ">
          <Image loading="lazy" src={FeatImage01} alt="banner" />
          <div className="absolute top-0 -left-1/4 w-full h-full bg-gradient-to-l from-transparent to-white transition-opacity" />
        </div>

        <div className="max-w-6xl mx-auto px-4 lg:px-6">
          <div className="absolute top-1/2 transform -translate-y-1/2">
            <h4 className="h44 pb-2" data-aos="fade-up" data-aos-delay="200">
              {t("giao-duc-ph")}
            </h4>
            <h1 className="h1" data-aos="fade-up" data-aos-delay="400">
              {t("tuyen-sinh-nh")}
            </h1>
            <h1 className="h1 " data-aos="fade-up" data-aos-delay="400">
              2024 - 2025
            </h1>
            <Link
              href="#tuyen-sinh"
              className="btn mt-4 text-lg"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-anchor-placement="top-bottom"
            >
              {t("dang-ky-ngay")}
            </Link>
          </div>
        </div>
      </section>

      <Content1 />
      <Hero lng={lng} />
      <Content2 />
      <Content3 />
      <Taisaonenchon />
      <Chiasecongdong />
      {/* <Googlemap /> */}
    </>
  );
}
