import Link from "next/link";
import { useTranslation } from "../../../i18n";
import { Header } from "../../components/Header/client";
import bannerabout from "@/public/images/banner/banner-about.jpg";
import BannerImage from "../../components/banner";
import Content1 from "../../components/content1";
import Pagedautien from "../../components/pagedautien";
import Image from "next/image";
import Image1 from "@/public/images/phuonghoang/truonghoc.jpg";
import Image2 from "@/public/images/vechungtoi/tamnhin/tamnhin1.jpg";
import Image3 from "@/public/images/vechungtoi/tamnhin/tamnhin2.jpg";
import Image4 from "@/public/images/vechungtoi/tamnhin/tamnhin3.png";
import Image5 from "@/public/images/vechungtoi/tamnhin/tamnhin4.jpg";
import ZiczagImage from "../../components/ziczagimage";
import FeatImage02 from "@/public/images/banner/banner-mobile.png";

export async function generateMetadata({ params: { lng } }) {
  const { t } = await useTranslation(lng, "header");
  const title1 = t("tam-nhin");
  const title2 = t("giao-duc-ph");
  return { title: `${title1} - ${title2}` };
}
const contentData = [
  {
    heading: "TẦM NHÌN",
    paragraph:
      "Mục tiêu của Giáo dục Phượng Hoàng nhằm cung cấp nền giáo dục có chất lượng thông qua ngôn ngữ tiếng Anh, hướng tới chuẩn được quốc tế công nhận nhằm phát triển những cá nhân tư duy tự tin, sáng tạo và giúp cho sự trưởng thành của những công dân tốt, sống hòa thuận. ",
    imageSrc: Image2,
  },
  {
    heading: "SỨ MỆNH",
    paragraph:
      "Thông qua sử dụng giáo trình của Bộ Giáo dục và Đào tạo Việt Nam, tham khảo giáo trình của nước Anh kết hợp với khung giáo trình của Singapore và mời các giáo viên nói tiếng Anh bản ngữ giảng dạy",
    paragraph2:
      "Giáo dục Phượng Hoàng sẽ trở thành điểm đến số 1 tại Huế cho các học sinh quốc tế và Việt Nam và mở ra triển vọng về trao đổi giáo dục tới tất cả các thành phần của thế giới nói tiếng Anh.",
    imageSrc: Image5,
  },

  {
    heading: "GIÁ TRỊ",
    paragraph:
      "Điều quan trọng, sự hiểu biết sâu sắc và chắc chắn văn hóa và ngôn ngữ Việt Nam sẽ được duy trì, cùng với các chương trình hoạt động ngoại khóa đa dạng. Những điều này, cùng với việc thiết lập các môn học cốt lõi hiện đại, sẽ phát triển các cá nhân toàn diện trở thành các nhà lãnh đạo tương lai. ",
    paragraph2:
      "Giáo dục Phượng Hoàng cũng thiết lập Quỹ Giáo Dục Phượng Hoàng nhằm mục tiêu cung cấp học bổng cho học sinh địa phương và hỗ trợ phát triển nguồn vốn tương lai. ",

    imageSrc: Image4,
  },
];
export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng, "header");
  const highlight = true;
  const links = [
    { href: "/ve-chung-toi/", content: t("gioi-thieu") },
    {
      href: "/ve-chung-toi/tam-nhin-su-menh",
      content: t("tam-nhin"),
      hightlight: true,
    },
    { href: "/ve-chung-toi/doi-ngu-giao-vien", content: t("giao-vien") },
    {
      href: "/ve-chung-toi/thong-diep-tu-ban-lanh-dao",
      content: t("lanh-dao"),
    },
    // {
    //   href: "/ve-chung-toi/thanh-tich-cua-chung-toi",
    //   content: t("thanh-tich"),
    // },
  ];
  return (
    <>
      <Header lng={lng} path="/ve-chung-toi/tam-nhin-su-menh" />
      <BannerImage
        src={bannerabout}
        srcmobile={FeatImage02}
        text1={t("home") + " / " + t("about")}
        text2={t("tam-nhin")}
      />
      <Pagedautien links={links} highlight={highlight} />
      <section className="max-w-6xl mx-auto px-4 sm:px-6 ">
        <ZiczagImage contentData={contentData} />
      </section>
    </>
  );
}
