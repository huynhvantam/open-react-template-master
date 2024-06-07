import Link from "next/link";
import { useTranslation } from "../../../i18n";
import { Header } from "../../components/Header/client";
import bannerabout from "@/public/images/banner/banner-about.jpg";
import BannerImage from "../../components/banner";
import Content1 from "../../components/content1";
import Pagedautien from "../../components/pagedautien";
import Image1 from "@/public/images/testimonial-01.jpg";
import Listthongtin from "../../components/listthongtin";
import Image from "next/image";
import ImageGrid from "./ImageGrid";
export async function generateMetadata({ params: { lng } }) {
  const { t } = await useTranslation(lng, "header");
  const title1 = t("thu-vien-ha");
  const title2 = t("giao-duc-ph");
  return { title: `${title1} - ${title2}` };
}

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng, "header");
  const highlight = true; // Đặt giá trị highlight ở đây
  const links = [
    {
      href: "/doi-song-hoc-duong",
      content: t("moi-truong-ht"),
    },
    {
      href: "/doi-song-hoc-duong/goc-hoc-sinh",
      content: t("goc-hoc-sinh"),
    },
    {
      href: "/doi-song-hoc-duong/thu-vien-hinh-anh",
      content: t("thu-vien-ha"),
      hightlight: true,
    },
    {
      href: "/doi-song-hoc-duong/dich-vu-truong-hoc",
      content: t("dich-vu-th"),
    },
    {
      href: "/doi-song-hoc-duong/thanh-tich-hoc-duong",
      content: t("thanh-tich-hs"),
    },
    {
      href: "/doi-song-hoc-duong/chuong-trinh-ngoai-khoa",
      content: t("chuong-trinh-nk"),
    },
  ];
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
  return (
    <>
      <Header lng={lng} path="/chuong-trinh-dao-tao/trung-hoc" />
      <BannerImage
        src={bannerabout}
        text1={t("home") + " / " + t("doi-song")}
        text2={t("thu-vien-ha")}
      />
      <Pagedautien links={links} highlight={highlight} />{" "}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 ">
        <div>
          <h3 className="h3 pt-10 pb-10 text-center">ĐANG PHÁT TRIỂN</h3>
        </div>
        <Listthongtin buttonData={buttonData} />
        <ImageGrid />
      </section>
    </>
  );
}
