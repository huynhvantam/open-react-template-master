import Link from "next/link";
import { useTranslation } from "../../../i18n";
import { Header } from "../../components/Header/client";
import bannerabout from "@/public/images/banner/banner-about.jpg";
import BannerImage from "../../components/banner";
import Pagedautien from "../../components/pagedautien";
import FeatImage02 from "@/public/images/banner/banner-mobile.png";
import AutoResizeText from "../../../components/tools/AutoResizeText";
import Image from "next/image";

export async function generateMetadata({ params: { lng } }) {
  const { t } = await useTranslation(lng, "header");
  const title1 = t("hoat-dong-clb");
  const title2 = t("giao-duc-ph");
  return { title: `${title1} - ${title2}` };
}

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng, "header");
  const text = "SUPERMARKET FIELD TRIP - CHUYẾN ĐI THỰC TẾ TẠI SIÊU THỊ";
  const highlight = true;
  const links = [
    {
      href: "/doi-song-hoc-duong",
      content: t("moi-truong-ht"),
    },
    {
      href: "/doi-song-hoc-duong/hoat-dong-clb",
      content: t("hoat-dong-clb"),
      hightlight: true,
    },
    {
      href: "/doi-song-hoc-duong/chuong-trinh-ngoai-khoa",
      content: t("chuong-trinh-nk"),
    },
    {
      href: "/doi-song-hoc-duong/dich-vu-truong-hoc",
      content: t("dich-vu-th"),
    },
    {
      href: "/doi-song-hoc-duong/thu-vien-hinh-anh",
      content: t("thu-vien-ha"),
    },
  ];

  return (
    <>
      <Header lng={lng} path="/chuong-trinh-dao-tao/tieu-hoc" />
      <BannerImage
        src={bannerabout}
        srcmobile={FeatImage02}
        text1={t("home") + " / " + t("doi-song")}
        text2={t("hoat-dong-clb")}
      />
      <Pagedautien links={links} highlight={highlight} />
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <h3 className="h3  text-center pb-3 mb-10 pt-10 border-b-[3px] border-rose-500 w-fit mx-auto">
          HOẠT ĐỘNG CÂU LẠC BỘ
        </h3>
        <p className="p pb-4">
          Hệ thống câu lạc bộ được thiết kế dựa trên Thuyết đa trí tuệ (các loại
          hình thông minh), cơ chế hoạt động của Não bộ và Tâm lý học lứa tuổi
          nhằm giúp học sinh phát huy năng khiếu và theo đuổi những sở thích của
          riêng mình. CLB là nơi sinh hoạt của tất cả học sinh có cùng chung
          niềm đam mê dưới sự điều phối của các chuyên gia và giáo viên giỏi.
        </p>
        <h3 className="h2 font-playfair text-left text-rose-500 pt-5 pb-4">
          CLB Nhảy múa
        </h3>
        <Image
          loading="lazy"
          className="h-full w-full object-cover  duration-300 transform "
          src={bannerabout}
          alt="image"
        />

        <h3 className="h2 font-playfair text-left text-rose-500 pt-5 pb-4">
          CLB Võ thuật
        </h3>
        <Image
          loading="lazy"
          className="h-full w-full object-cover  duration-300 transform "
          src={bannerabout}
          alt="image"
        />
        <h3 className="h2 font-playfair text-left text-rose-500 pt-5 pb-4">
          CLB Cầu lông
        </h3>
        <Image
          loading="lazy"
          className="h-full w-full object-cover  duration-300 transform "
          src={bannerabout}
          alt="image"
        />
      </section>
    </>
  );
}
