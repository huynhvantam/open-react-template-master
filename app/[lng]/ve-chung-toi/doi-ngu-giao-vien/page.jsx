import Link from "next/link";
import { useTranslation } from "../../../i18n";
import { Header } from "../../components/Header/client";
import bannerabout from "@/public/images/banner/banner-about.jpg";
import BannerImage from "../../components/banner";
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
        thanhtich:
          "Với khoảng thời gian 40 năm gắn bó với sự nghiệp giáo dục - đào tạo và hiện là Viện trưởng Viện Nghiên cứu Giáo dục – Trường Đại học Sư phạm TPHCM, PGS-TS Ngô Minh Oanh đã tham gia đào tạo hàng ngàn sinh viên Đại học, Cao đẳng Sư phạm; hướng dẫn thành công 15 tiến sĩ, 55 thạc sỹ; bồi dưỡng chuyên môn nghiệp vụ, nâng cao tay nghề cho hàng trăm giáo viên phổ thông.",
        lienhe:
          "PGS-TS Ngô Minh Oanh còn là một nhà giáo, nhà khoa học nhiệt thành, hăng say cống hiến vì các thế hệ học sinh, vì bộ môn Lịch sử và sự nghiệp đổi mới giáo dục – đào tạo với nhiều đóng góp hữu ích không ngừng trong suốt thời gian qua. Đó là quá trình nhiều năm thầy tham gia tập huấn, trao đổi kinh nghiệm quốc tế tại Úc, Đức, Colombia, Nga và Hàn Quốc để góp phần cải cách sách giáo khoa, cải tiến phương pháp giảng dạy và đổi mới mô hình trường học. Đó là số lượng hơn 100 bài báo nghiên cứu về lĩnh vực giáo dục và chuyên môn đăng tải trên các tạp chí, kỷ yếu hội nghị khoa học trong và ngoài nước cùng 15 đầu sách về Lịch sử và Giáo dục – Đào tạo được xuất bản.",
        buttonText: "Xem thêm",
      },
      // Add more list items for "mamnon" category
    ],
  },
  vietnam: {
    title: "Giáo Viên Việt Nam",
    listItems: [
      // Add list items for "vietnam" category
    ],
  },
  vietnam2: {
    title: "Giáo Viên Việt Nam",
    listItems: [
      // Add list items for "vietnam" category
    ],
  },
  vietnam3: {
    title: "Giáo Viên Việt Nam",
    listItems: [
      // Add list items for "vietnam" category
    ],
  },
  // ... other categories
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
    {
      href: "/ve-chung-toi/thanh-tich-cua-chung-toi",
      content: t("thanh-tich"),
    },
  ];

  return (
    <>
      <Header lng={lng} path="/ve-chung-toi/doi-ngu-giao-vien" />
      <BannerImage
        src={bannerabout}
        text1="Về chúng tôi / Đội ngũ giáo viên"
        text2="Đội ngũ giáo viên"
      />
      <Pagedautien links={links} highlight={highlight} />
      <Listthongtin buttonData={buttonData} />
    </>
  );
}
