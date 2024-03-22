import Link from "next/link";
import { useTranslation } from "../../../i18n";
import { Header } from "../../components/Header/client";
import bannerabout from "@/public/images/banner/banner-about.jpg";
import BannerImage from "../../components/banner";
import Content1 from "../../components/content1";
import Pagedautien from "../../components/pagedautien";
import Image from "next/image";
import Image1 from "@/public/images/phuonghoang/truonghoc.jpg";
import ZiczagImage from "../../components/ziczagimage";
export async function generateMetadata({ params: { lng } }) {
  const { t } = await useTranslation(lng, "header");
  const title1 = t("tam-nhin");
  const title2 = t("giao-duc-ph");
  return { title: `${title1} - ${title2}` };
}
const contentData = [
  {
    heading: "THÔNG ĐIỆP",
    paragraph:
      "Giáo Dục Phượng Hoàng chú trọng xây dựng môi trường giáo dục thực sự thoải mái, lành mạnh và an toàn cho người học. Mỗi không gian học tại Giáo Dục Phượng Hoàng đều là nơi để các em học sinh có những trải nghiệm thú vị, cảm nhận về thế giới xung quanh đa chiều, phát triển tối đa kỹ năng xã hội, tình cảm, trí tuệ và năng khiếu của mình. Đồng thời, đây cũng là “vườn ươm lý tưởng” để các em thể hiện tài năng, vun bồi tình yêu thương trong niềm khích lệ và sự tôn trọng một cách trọn vẹn nhất.",
    paragraph2:
      "Để đạt được những điều trên, Giáo Dục Phượng Hoàng đã và đang xây dựng đội ngũ giáo viên trong nước và quốc tế có trình độ chuyên môn cao, giàu kinh nghiệm và nhiệt huyết để cùng Nhà trường mang đến cho các em học sinh môi trường học tập quốc tế ưu việt. Ngoài ra, việc kết nối thường xuyên và chặt chẽ giữa Phụ huynh với Nhà trường cũng là yếu tố quan trọng, tạo nên cầu nối và điểm tựa vững chắc để các em phát huy tối đa năng lực, phát triển toàn diện kỹ năng xã hội, tình cảm và trí tuệ.",
    paragraph3:
      "CHÚNG TÔI MUỐN lan toả nền giáo dục tiên tiến, nhân văn đến thế hệ hôm nay.",
    paragraph4:
      "CHÚNG TÔI TIN mỗi em học sinh đều là những tài năng trong tương lai..",
    imageSrc: Image1,
  },
  {
    heading: "TẦM NHÌN",
    paragraph:
      "Giáo Dục Phượng Hoàng mang lại một nền giáo dục đẳng cấp Quốc tế với mô hình áp dụng song song hai ngôn ngữ tiếng Anh và tiếng Việt. Học sinh của Giáo Dục Phượng Hoàng là những người có suy nghĩ độc lập, sẵn sàng đương đầu với thách thức, luôn nuôi dưỡng mục tiêu vươn đến thành công bằng cách không ngừng tìm tòi, sáng tạo và phát huy tính kiên trì để trở thành những tài năng trẻ góp sức vào sự nghiệp chung của cộng đồng xã hội và thế giới trong tương lai.",
    imageSrc: Image1,
  },
  {
    heading: "SỨ MỆNH",
    nestedContent: [
      {
        nestedText:
          "Kết hợp giảng dạy hài hòa giữa Chương trình Giáo dục Quốc gia của Bộ Giáo dục và Đào tạo Việt Nam với Chương trình Giáo dục Quốc tế Cambridge, giúp học sinh thông thạo cả tiếng Việt và tiếng Anh.",
      },
      {
        nestedText:
          "Gìn giữ và nâng cao ý thức về giá trị văn hóa, truyền thống Việt Nam, đảm bảo học sinh hiểu được cội nguồn, lịch sử dân tộc.",
      },
      {
        nestedText:
          "Phát huy các giá trị cốt lõi như tính chính trực, tinh thần tôn trọng, thái độ quan tâm đến cộng đồng và các vấn đề toàn cầu.",
      },
      {
        nestedText:
          " Xây dựng một tập thể xuất sắc các nhà quản lý, giáo viên và nhân viên trong nước và quốc tế - những người thực hiện một cách nhiệt huyết và hiệu quả chương trình giáo dục tiên tiến tại Giáo Dục Phượng Hoàng, cùng gánh vác sứ mệnh chung của giáo dục Việt Nam trong thời hội nhập.",
      },
    ],
    imageSrc: Image1,
  },
  {
    heading: "TRIẾT LÝ",
    paragraph:
      "Giáo Dục Phượng Hoàng với mô hình tiên phong áp dụng những phương pháp giáo dục toàn diện “Truyền cảm hứng để phát triển - Inspired to grow”, đồng thời bồi dưỡng và phát huy tiềm năng riêng của từng cá nhân song song với việc hoàn thiện những nhân tố tích cực nhất để trở thành những “công dân toàn cầu”.",
    paragraph2:
      "Giáo Dục Phượng Hoàng mang đến cho học sinh môi trường học tập lý tưởng để hình thành và phát triển các năng lực, kỹ năng và cách tư duy mới. Mỗi ngày đến trường, học sinh sẽ bồi đắp cho mình kiến thức nền tảng, phát triển năng lực sáng tạo và tư duy phản biện, bồi dưỡng cảm xúc, đồng thời rèn luyện đa dạng kỹ năng sống và làm việc tích cực.",
    imageSrc: Image1,
  },
  {
    heading: "ĐỊNH HƯỚNG",
    paragraph:
      "Giáo Dục Phượng Hoàng tiên phong áp dụng những phương pháp giáo dục toàn diện, bồi dưỡng và phát huy tiềm năng riêng của từng cá nhân song song với việc hoàn thiện nhân cách và bồi dưỡng phẩm chất tốt đẹp để mỗi học sinh đều trở thành một “công dân toàn cầu” hội đủ những nhân tố tích cực nhất về: Nuôi dưỡng đam mê; Khả năng sáng tạo; Tự tin - Trách nhiệm; Tinh thần hợp tác.",
    imageSrc: Image1,
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
      href: "/ve-chung-toi/doi-ngu-lanh-dao",
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
        text1="Trang chủ / Về chúng tôi"
        text2="Tầm nhìn - Sứ mệnh"
      />
      <Pagedautien links={links} highlight={highlight} />
      <section className="max-w-6xl mx-auto px-4 sm:px-6 ">
        <ZiczagImage contentData={contentData} />
      </section>
    </>
  );
}
