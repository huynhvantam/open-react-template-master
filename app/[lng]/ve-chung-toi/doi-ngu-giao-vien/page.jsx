import Link from "next/link";
import { useTranslation } from "../../../i18n";
import { Header } from "../../components/Header/client";
import bannerabout from "@/public/images/banner/banner-about.jpg";
import BannerImage1 from "../../components/banner";
import Pagedautien from "../../components/pagedautien";
import Listthongtin from "../../components/listthongtin";
import Image1 from "@/public/images/testimonial-01.jpg";
export async function generateMetadata({ params: { lng } }) {
  const { t } = await useTranslation(lng, "header");
  const title1 = t("tam-nhin");
  const title2 = t("giao-duc-ph");
  return { title: `${title1} - ${title2}` };
}
const buttonData = {
  mamnon: {
    title: "Giáo Viên Mần Non",
    listItems: [
      {
        imageSrc: Image1,
        title: "Cô Lê Anh Đào",
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
  vietnam: {
    title: "Giáo Viên Việt Nam",
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
  quocte: {
    title: "Giáo Viên Quốc tế",
    listItems: [
      {
        imageSrc: Image1,
        title: "Mr. John Smith",
        description: "English Teacher",
        text2: "Certified",
        text3: "Experience",
        chuyenmon: "Specialization:",
        thanhtich: "With 15 years of experience",
        lienhe: "Contact Dr. Jane Doe",
        buttonText: "Read more",
      },
      {
        imageSrc: Image1,
        title: "Mrs. Maria Gonzalez",
        description: "Spanish Teacher",
        text2: "Certified",
        text3: "Experience",
        chuyenmon: "Specialization:",
        thanhtich: "With 20 years of experience",
        lienhe: "Contact Prof. Juan Martinez",
        buttonText: "Read more",
      },
      {
        imageSrc: Image1,
        title: "Ms. Sakura Tanaka",
        description: "Japanese Teacher",
        text2: "Certified",
        text3: "Experience",
        chuyenmon: "Specialization:",
        thanhtich: "With 10 years of experience",
        lienhe: "Contact Dr. Takeshi Yamamoto",
        buttonText: "Read more",
      },
      {
        imageSrc: Image1,
        title: "Mr. Ali Khan",
        description: "Arabic Teacher",
        text2: "Certified",
        text3: "Experience",
        chuyenmon: "Specialization:",
        thanhtich: "With 25 years of experience",
        lienhe: "Contact Prof. Fatima Ahmed",
        buttonText: "Read more",
      },
    ],
  },
  anhngu: {
    title: "Giáo Viên Anh Ngữ",
    listItems: [
      {
        imageSrc: Image1,
        title: "Ms. Emily Johnson",
        description: "English Language Instructor",
        text2: "Certified",
        text3: "Experience",
        chuyenmon: "Specialization:",
        thanhtich: "With 10 years of experience",
        lienhe: "Contact Dr. David Brown",
        buttonText: "Read more",
      },
      {
        imageSrc: Image1,
        title: "Mr. Michael Clark",
        description: "ESL Teacher",
        text2: "Certified",
        text3: "Experience",
        chuyenmon: "Specialization:",
        thanhtich: "With 15 years of experience",
        lienhe: "Contact Prof. Sarah White",
        buttonText: "Read more",
      },
      {
        imageSrc: Image1,
        title: "Ms. Sophie Martin",
        description: "English Language Tutor",
        text2: "Certified",
        text3: "Experience",
        chuyenmon: "Specialization:",
        thanhtich: "With 5 years of experience",
        lienhe: "Contact Dr. James Wilson",
        buttonText: "Read more",
      },
      {
        imageSrc: Image1,
        title: "Mr. Daniel Brown",
        description: "IELTS Instructor",
        text2: "Certified",
        text3: "Experience",
        chuyenmon: "Specialization:",
        thanhtich: "With 8 years of experience",
        lienhe: "Contact Prof. Emma Taylor",
        buttonText: "Read more",
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
    {
      href: "/ve-chung-toi/doi-ngu-giao-vien",
      content: t("giao-vien"),
      hightlight: true,
    },
    { href: "/ve-chung-toi/doi-ngu-lanh-dao", content: t("lanh-dao") },
    // {
    //   href: "/ve-chung-toi/thanh-tich-cua-chung-toi",
    //   content: t("thanh-tich"),
    // },
  ];

  return (
    <>
      <Header lng={lng} path="/ve-chung-toi/doi-ngu-giao-vien" />
      <BannerImage1
        src={bannerabout}
        text1="Trang chủ / Về chúng tôi"
        text2="Đội ngũ giáo viên"
      />
      <Pagedautien links={links} highlight={highlight} />
      <Listthongtin buttonData={buttonData} />
    </>
  );
}
