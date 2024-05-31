import Link from "next/link";
import { useTranslation } from "../../i18n";
import { Header } from "../components/Header/client";
import bannerabout from "@/public/images/banner/banner-home.jpg";
import BannerImage from "../components/banner";
import Footer from "@/app/components/ui/footer";

export async function generateMetadata({ params: { lng } }) {
  const { t } = await useTranslation(lng, "header");
  const title1 = t("trung-tam-anh-ngu");

  return { title: `${title1} ` };
}

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng, "header");

  return (
    <>
      <Header lng={lng} path="/trung-tam-anh-ngu" />
      <BannerImage
        src={bannerabout}
        text1={t("home") + " / " + t("trung-tam-anh-ngu")}
        text2={t("trung-tam-anh-ngu")}
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
