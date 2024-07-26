import Link from "next/link";
import { useTranslation } from "../../i18n";
import { Header } from "../components/Header/client";
import bannerabout from "@/public/images/banner/banner-tuyendung.jpg";
import BannerImage from "../components/banner";
import FeatImage02 from "@/public/images/banner/banner-mobile.png";

export async function generateMetadata({ params: { lng } }) {
  const { t } = await useTranslation(lng, "header");
  const title1 = t("tin-tuc");
  const title2 = t("giao-duc-ph");
  return { title: `${title1} - ${title2}` };
}

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng, "header");

  return (
    <>
      <Header lng={lng} path="/tin-tuc" />
      <BannerImage
        src={bannerabout}
        srcmobile={FeatImage02}
        text1={t("home") + " / " + t("tin-tuc")}
        text2={t("tin-tuc")}
      />
      <section className="max-w-6xl mx-auto px-4 sm:px-6 ">
        <div>
          <h3 className="h3 pt-10 pb-10 text-center">ĐANG PHÁT TRIỂN</h3>
        </div>
      </section>
      {/* <Footer /> */}
    </>
  );
}
