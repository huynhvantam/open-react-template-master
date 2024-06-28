import Link from "next/link";
import { useTranslation } from "../../../i18n";
import { Header } from "../../components/Header/client";
import bannerabout from "@/public/images/banner/banner-about.jpg";
import BannerImage from "../../components/banner";
import Content1 from "../../components/content1";
import Pagedautien from "../../components/pagedautien";
import Listthongtin from "../../components/listthongtin";
import Image1 from "@/public/images/testimonial-01.jpg";
import FeatImage02 from "@/public/images/banner/banner-mobile.png";

export async function generateMetadata({ params: { lng } }) {
  const { t } = await useTranslation(lng, "header");
  const title1 = t("lanh-dao");
  const title2 = t("giao-duc-ph");
  return { title: `${title1} - ${title2}` };
}
const buttonData = {
  mamnon: {
    title: "Đội Ngũ Lãnh Đạo",
    listItems: [
      {
        imageSrc: Image1,
        title: "Cô Lê Anh Đàos",
        description: "Giáo Viên Lớp Mẫu Giáo",
        text2: "Bằng cấp",
        text3: "Kinh nghiệm",
        chuyenmon: "Chuyên môn:",
        thanhtich: "Với khoảng thời gian 40 năm ",
        lienhe: "PGS-TS Ngô Minh Oanh còn ",
        buttonText: "Xem thêm",
      },
      {
        imageSrc: Image1,
        title: "Cô Nguyễn Thị Hương",
        description: "Giáo Viên Lớp Mẫu Giáo",
        text2: "Bằng cấp",
        text3: "Kinh nghiệm",
        chuyenmon: "Chuyên môn:",
        thanhtich: "Với khoảng thời gian 35 năm ",
        lienhe: "PGS-TS Nguyễn Minh Hạnh còn ",
        buttonText: "Xem thêm",
      },
      {
        imageSrc: Image1,
        title: "Cô Trần Thị Thu Hà",
        description: "Giáo Viên Lớp Mẫu Giáo",
        text2: "Bằng cấp",
        text3: "Kinh nghiệm",
        chuyenmon: "Chuyên môn:",
        thanhtich: "Với khoảng thời gian 30 năm ",
        lienhe: "PGS-TS Lê Thị Hương còn ",
        buttonText: "Xem thêm",
      },
      {
        imageSrc: Image1,
        title: "Cô Phạm Thị Thu Hường",
        description: "Giáo Viên Lớp Mẫu Giáo",
        text2: "Bằng cấp",
        text3: "Kinh nghiệm",
        chuyenmon: "Chuyên môn:",
        thanhtich: "Với khoảng thời gian 25 năm ",
        lienhe: "PGS-TS Phạm Thị Kim Anh còn ",
        buttonText: "Xem thêm",
      },
    ],
  },
  hoidong: {
    title: "Hội Đồng Chuyên Môn",
    listItems: [
      {
        imageSrc: Image1,
        title: "Cô Nguyễn Thị Lan",
        description: "Giáo Viên Tiểu Học",
        text2: "Bằng cấp",
        text3: "Kinh nghiệm",
        chuyenmon: "Chuyên môn:",
        thanhtich: "Với khoảng thời gian 20 năm ",
        lienhe: "PGS-TS Trần Thị Thanh còn ",
        buttonText: "Xem thêm",
      },
      {
        imageSrc: Image1,
        title: "Cô Trần Thị Hương",
        description: "Giáo Viên Mầm Non",
        text2: "Bằng cấp",
        text3: "Kinh nghiệm",
        chuyenmon: "Chuyên môn:",
        thanhtich: "Với khoảng thời gian 15 năm ",
        lienhe: "PGS-TS Lê Thị Thu còn ",
        buttonText: "Xem thêm",
      },
      {
        imageSrc: Image1,
        title: "Thầy Nguyễn Văn Tâm",
        description: "Giáo Viên Trung Học",
        text2: "Bằng cấp",
        text3: "Kinh nghiệm",
        chuyenmon: "Chuyên môn:",
        thanhtich: "Với khoảng thời gian 25 năm ",
        lienhe: "PGS-TS Nguyễn Minh Tuấn còn ",
        buttonText: "Xem thêm",
      },
      {
        imageSrc: Image1,
        title: "Cô Phạm Thị Thu Huyền",
        description: "Giáo Viên Tiểu Học",
        text2: "Bằng cấp",
        text3: "Kinh nghiệm",
        chuyenmon: "Chuyên môn:",
        thanhtich: "Với khoảng thời gian 30 năm ",
        lienhe: "PGS-TS Phạm Thị Hằng còn ",
        buttonText: "Xem thêm",
      },
    ],
  },
};
export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng, "header");
  const highlight = true; // Đặt giá trị highlight ở đây
  const links = [
    { href: "/ve-chung-toi/", content: t("gioi-thieu") },
    { href: "/ve-chung-toi/tam-nhin-su-menh", content: t("tam-nhin") },
    { href: "/ve-chung-toi/doi-ngu-giao-vien", content: t("giao-vien") },
    {
      href: "/ve-chung-toi/doi-ngu-lanh-dao",
      content: t("lanh-dao"),
      hightlight: true,
    },
    // {
    //   href: "/ve-chung-toi/thanh-tich-cua-chung-toi",
    //   content: t("thanh-tich"),
    // },
  ];

  return (
    <>
      <Header lng={lng} path="/ve-chung-toi/doi-ngu-lanh-dao" />
      <BannerImage
        src={bannerabout}
        srcmobile={FeatImage02}
        text1={t("home") + " / " + t("about")}
        text2={t("lanh-dao")}
      />
      <Pagedautien links={links} highlight={highlight} />
      <Listthongtin buttonData={buttonData} />
    </>
  );
}
