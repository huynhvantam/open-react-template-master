import Link from "next/link";
import { useTranslation } from "../../../i18n";
import { Header } from "../../components/Header/client";
import bannerabout from "@/public/images/banner/banner-about.jpg";
import BannerImage from "../../components/banner";
import Content1 from "../../components/content1";
import Pagedautien from "../../components/pagedautien";
import Image1 from "@/public/images/phuonghoang/truonghoc.jpg";
export async function generateMetadata({ params: { lng } }) {
  const { t } = await useTranslation(lng, "header");
  const title1 = t("tam-nhin");
  const title2 = t("giao-duc-ph");
  return { title: `${title1} - ${title2}` };
}

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng, "header");
  const highlight = true; // Đặt giá trị highlight ở đây
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
    {
      href: "/ve-chung-toi/thanh-tich-cua-chung-toi",
      content: t("thanh-tich"),
    },
  ];

  return (
    <>
      <Header lng={lng} path="/ve-chung-toi/tam-nhin-su-menh" />
      <BannerImage
        src={bannerabout}
        text1="Về chúng tôi / Tầm nhìn - Sứ mệnh"
        text2="Tầm nhìn - Sứ mệnh"
      />
      <Pagedautien links={links} highlight={highlight} />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 ">
        <h2 className="pt-20 h3  text-center border-b-[3px] border-b-rose-500 pb-3 mb-6 w-fit mx-auto">
          THÔNG ĐIỆP
        </h2>
        <div className="grid grid-col-2">
          <p className="p">
            ROYAL SCHOOL chú trọng xây dựng môi trường giáo dục thực sự thoải
            mái, lành mạnh và an toàn cho người học. Mỗi không gian học tại
            ROYAL SCHOOL đều là nơi để các em học sinh có những trải nghiệm thú
            vị, cảm nhận về thế giới xung quanh đa chiều, phát triển tối đa kỹ
            năng xã hội, tình cảm, trí tuệ và năng khiếu của mình. Đồng thời,
            đây cũng là “vườn ươm lý tưởng” để các em thể hiện tài năng, vun bồi
            tình yêu thương trong niềm khích lệ và sự tôn trọng một cách trọn
            vẹn nhất. Để đạt được những điều trên, ROYAL SCHOOL đã và đang xây
            dựng đội ngũ giáo viên trong nước và quốc tế có trình độ chuyên môn
            cao, giàu kinh nghiệm và nhiệt huyết để cùng Nhà trường mang đến cho
            các em học sinh môi trường học tập quốc tế ưu việt. Ngoài ra, việc
            kết nối thường xuyên và chặt chẽ giữa Phụ huynh với Nhà trường cũng
            là yếu tố quan trọng, tạo nên cầu nối và điểm tựa vững chắc để các
            em phát huy tối đa năng lực, phát triển toàn diện kỹ năng xã hội,
            tình cảm và trí tuệ. CHÚNG TÔI MUỐN lan toả nền giáo dục tiên tiến,
            nhân văn đến thế hệ hôm nay. CHÚNG TÔI TIN mỗi em học sinh đều là
            những tài năng trong tương lai.
          </p>
        </div>
        <h2 className="pt-20 h3  text-center border-b-[3px] border-b-rose-500 pb-3 mb-6 w-fit mx-auto">
          TẦM NHÌN
        </h2>
        <p className="p">
          ROYAL SCHOOL mang lại một nền giáo dục đẳng cấp Quốc tế với mô hình áp
          dụng song song hai ngôn ngữ tiếng Anh và tiếng Việt. Học sinh của
          ROYAL SCHOOL là những người có suy nghĩ độc lập, sẵn sàng đương đầu
          với thách thức, luôn nuôi dưỡng mục tiêu vươn đến thành công bằng cách
          không ngừng tìm tòi, sáng tạo và phát huy tính kiên trì để trở thành
          những tài năng trẻ góp sức vào sự nghiệp chung của cộng đồng xã hội và
          thế giới trong tương lai.
        </p>

        <h2 className="pt-20 h3  text-center border-b-[3px] border-b-rose-500 pb-3 mb-6 w-fit mx-auto">
          SỨ MỆNH
        </h2>
        <div className="">
          <ul className="list-inside list-disc marker:text-red-500 p">
            <li>
              Kết hợp giảng dạy hài hòa giữa Chương trình Giáo dục Quốc gia của
              Bộ Giáo dục và Đào tạo Việt Nam với Chương trình Giáo dục Quốc tế
              Cambridge, giúp học sinh thông thạo cả tiếng Việt và tiếng Anh.
            </li>
            <li>
              Gìn giữ và nâng cao ý thức về giá trị văn hóa, truyền thống Việt
              Nam, đảm bảo học sinh hiểu được cội nguồn, lịch sử dân tộc.
            </li>
            <li>
              Phát huy các giá trị cốt lõi như tính chính trực, tinh thần tôn
              trọng, thái độ quan tâm đến cộng đồng và các vấn đề toàn cầu.
            </li>
            <li>
              Xây dựng một tập thể xuất sắc các nhà quản lý, giáo viên và nhân
              viên trong nước và quốc tế - những người thực hiện một cách nhiệt
              huyết và hiệu quả chương trình giáo dục tiên tiến tại ROYAL
              SCHOOL, cùng gánh vác sứ mệnh chung của giáo dục Việt Nam trong
              thời hội nhập.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
