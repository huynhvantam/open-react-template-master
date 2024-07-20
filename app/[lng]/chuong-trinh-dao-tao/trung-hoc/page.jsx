import Link from "next/link";
import { useTranslation } from "../../../i18n";
import { Header } from "../../components/Header/client";
import bannerabout from "@/public/images/banner/banner-about.jpg";
import BannerImage from "../../components/banner";
import Content1 from "../../components/content1";
import Pagedautien from "../../components/pagedautien";
import Image1 from "@/public/images/oneuse/thoikhoabieu/KINDER-A-4-5T.jpg";
import Image2 from "@/public/images/oneuse/thoikhoabieu/NUR-24-36th.jpg";
import Image3 from "@/public/images/oneuse/thoikhoabieu/PREKINDER-3-4.jpg";
import Image4 from "@/public/images/oneuse/thoikhoabieu/PRENUR18-24th.jpg";
import Image5 from "@/public/images/oneuse/thoikhoabieu/PREP-B.jpg";
import Icon1 from "@/public/images/oneuse/icon-mamnon/Communication.svg";
import Icon2 from "@/public/images/oneuse/icon-mamnon/Health.svg";
import Icon3 from "@/public/images/oneuse/icon-mamnon/Health2.svg";
import Icon4 from "@/public/images/oneuse/icon-mamnon/Sport.svg";
import Icon5 from "@/public/images/oneuse/icon-mamnon/Text.svg";
import Icon6 from "@/public/images/oneuse/icon-mamnon/Vehicles.svg";
import Image from "next/image";
import FeatImage02 from "@/public/images/banner/banner-mobile.png";

export async function generateMetadata({ params: { lng } }) {
  const { t } = await useTranslation(lng, "header");
  const title1 = t("thcs");
  const title2 = t("giao-duc-ph");
  return { title: `${title1} - ${title2}` };
}

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng, "header");
  const highlight = true; // Đặt giá trị highlight ở đây
  const links = [
    {
      href: "/chuong-trinh-dao-tao/",
      content: t("chuong-trinh"),
    },
    { href: "/chuong-trinh-dao-tao/mam-non", content: t("mam-non") },
    {
      href: "/chuong-trinh-dao-tao/tieu-hoc",
      content: t("tieu-hoc"),
    },
    {
      href: "/chuong-trinh-dao-tao/trung-hoc",
      content: t("thcs"),
      hightlight: true,
    },
  ];

  return (
    <>
      <Header lng={lng} path="/chuong-trinh-dao-tao/trung-hoc" />
      <BannerImage
        src={bannerabout}
        srcmobile={FeatImage02}
        text1={t("home") + " / " + t("chuong-trinh")}
        text2={t("thcs")}
      />
      <Pagedautien links={links} highlight={highlight} />
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* 1st */}
        <div className="p space-y-4">
          <h3 className="h3  text-center pb-3 mb-10 pt-10 border-b-[3px] border-rose-500 w-fit mx-auto">
            Chương Trình Đào Tạo Trung học
          </h3>
          <p className="">
            Tại Phoenix Education, chương trình đào tạo được ứng dụng các phương
            pháp giáo dục tiên tiến trên thế giới đảm bảo cho mọi học sinh theo
            học có thể dễ dàng tiếp thu và mở rộng kiến thức, đồng thời mang đến
            không gian học tập thực sự thoải mái, lành mạnh và an toàn cho người
            học. Phoenix Education là nơi học sinh được học tập, trải nghiệm,
            đón nhận sự khích lệ, thể hiện tình yêu thương và phát huy hết tiềm
            năng của mình.
          </p>
          <p>
            Với mục tiêu đào tạo kiến thức học thuật theo hướng tiếp cận thực
            tiễn, giảng dạy phân hoá theo năng lực và nhu cầu của từng đối tượng
            học sinh, Phoenix Education triển khai lộ trình học tập cấp Trung
            học với 02 hệ chương trình đào tạo: Chương trình Trung học Song ngữ
            và Chương trình Trung học Quốc tế, giúp học sinh dễ dàng lựa chọn
            hướng tiếp cận kiến thức phù hợp và chinh phục thành công trong môi
            trường học tập quốc tế năng động.
          </p>
        </div>
        {/* 2nd */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 pb-10  mt-5 p">
          <div>
            <h3 className="h4 text-center py-6 bg-rose-500 rounded-t-2xl text-white">
              Chương trình Trung học Song ngữ
            </h3>
            <div className="bg-gray-100 px-5 pb-5 pt-2 lg:h-[520px] rounded-b-2xl space-y-4 ">
              <p>
                Trường Phượng Hoàng đã nghiên cứu, cấu trúc và phân phối chương
                trình một cách khoa học, đảm bảo cho các em học sinh có thể tiếp
                thu hiệu quả nhất kiến thức chuẩn của Bộ Giáo dục và Đào tạo
                Việt Nam và chuẩn quốc tế. Mục đích của chúng tôi là mang lại
                kiến thức và hiểu biết lâu dài cùng các kỹ năng cần thiết cho
                các học sinh để các em theo đuổi con đường học tập dài lâu và
                trở thành những người công dân toàn cầu thành công.
              </p>
              <p>
                Chương trình Trung học Việt Nam tại Phượng Hoàng được xây dựng
                trên tiêu chí tối ưu hóa chương trình của Bộ GD & ĐT nhằm đảm
                bảo được chuẩn kiến thức và giúp học sinh tiếp thu kiến thức một
                cách nhẹ nhàng, hiệu quả.
              </p>
              <p>
                Tại Trường Trung học Phượng Hoàng, học sinh học tiếng Anh như là
                ngôn ngữ thứ hai theo chuẩn tiếng Anh Cambridge dành cho những
                người nói các ngôn ngữ khác (ESOL) và chuẩn Khung chương trình
                chung của châu Âu (CEFR)
              </p>
            </div>
          </div>
          <div>
            <h3 className="h4 text-center py-6 bg-rose-500 rounded-t-2xl text-white">
              Chương trình Trung học Quốc tế
            </h3>
            <div className="bg-gray-100 px-5 pb-5 pt-2  rounded-b-2xl lg:h-[520px] space-y-4">
              <p>
                Tại Giáo Dục Phượng Hoàng, học sinh chương trình quốc tế học
                theo giáo trình của Singapore và Cambridge. Các môn học chính
                như Tiếng Anh, Toán, Khoa học và Sức khỏe được dựa trên Bộ giáo
                trình “My Pals are Here” của nhà xuất bản uy tín Marshall
                Cavendish, Singapore. Các môn học khác như Địa lý, Lịch sử, Công
                nghệ thông tin, Mỹ thuật, Âm nhạc và Giáo dục thể chất được biên
                soạn dựa theo giáo trình của Cambridge.
              </p>
              <p>
                Chương trình Quốc tế còn được phát triển một cách chọn lọc để có
                thể tích hợp với chương trình Việt Nam về nội dung, tăng cường
                vận dụng kiến thức, hoạt động thực hành, cơ hội rèn luyện ngôn
                ngữ tiếng Anh trong những tình huống học tập gần gũi với lứa
                tuổi Trung học.
              </p>
              <p>
                Cũng như chương trình Việt Nam, hoạt động học tập của học sinh
                trong các môn học của chương trình Quốc tế được đánh giá trong
                quá trình và theo định kỳ, bằng điểm số và thông qua nhận xét
                của giáo viên.
              </p>
            </div>
          </div>
        </div>
        {/* 4nd */}
        <div className="">
          <h3 className="h3  text-center pb-3 mb-10 pt-10 border-b-[3px] border-rose-500 w-fit mx-auto">
            Chăm sóc học sinh
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-10 ">
            {classInfo.map((info, index) => (
              <div
                key={index}
                style={{
                  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                }}
                className=" p-4 rounded-md"
              >
                <div className="flex justify-center items-center">
                  <Image
                    loading="lazy"
                    alt="icon"
                    className="scale-75"
                    src={info.icon}
                  />
                  <h5 className="font-semibold text-2xl leading-7">
                    {info.title}
                  </h5>
                </div>
                <p className="p">{info.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 3rd */}
        {/* <div>
          <h3 className="h3  text-center pb-3 mb-10 pt-10 border-b-[3px] border-rose-500 w-fit mx-auto">
            Một ngày của học sinh Trung học
          </h3>
        </div> */}
      </section>
    </>
  );
}
const classInfo = [
  {
    title: "Sĩ số lớp thấp",
    description:
      "Trung bình mỗi lớp 20-25 học sinh, giúp giáo viên có thể quan tâm tới từng em, hướng dẫn các em ôn bài và làm bài tập ngay tại lớp. Nhờ đó các em tiếp thu bài học tốt hơn và không bị căng thẳng với việc học thêm. Mỗi lớp có 2 giáo viên và bảo mẫu.",
    icon: Icon5,
  },
  {
    title: "Đảm bảo vệ sinh",
    description:
      "Nhằm tạo điều kiện cho các em học sinh được sinh hoạt trong một môi trường sạch sẽ, hợp vệ sinh, đảm bảo an toàn cho sức khoẻ, các phòng học, nhà ăn, sân chơi, hồ bơi, nhà vệ sinh tại Phoenix Education luôn được giữ sạch và tẩy trùng theo quy trình chuẩn quốc tế.",
    icon: Icon2,
  },
  {
    title: "Dịch vụ đưa đón",
    description:
      "Nhà trường có dịch vụ đưa rước học sinh ở tất cả các cấp học trên địa bàn thành phố với tiêu chí an toàn và thân thiện. Học sinh được quan tâm, chăm sóc trong suốt quá trình di chuyển với đội ngũ tài xế và bảo mẫu hòa nhã, chuyên nghiệp của Phoenix Education.",
    icon: Icon6,
  },
  {
    title: "Chăm sóc thể chất",
    description:
      "Phoenix Education đáp ứng đầy đủ các tiện nghi, an toàn cho các hoạt động nghỉ ngủ, vệ sinh, vui chơi học tập để các em đảm bảo sức khỏe và phát triển hể chất lành mạnh nhất. Các bữa ăn có hàm lượng dinh dưỡng cao, đảm bảo tiêu chuẩn vệ sinh an toàn thực phẩm.",
    icon: Icon4,
  },
  {
    title: "Chăm sóc y tế",
    description:
      "Ngoài các chương trình khám sức khỏe định kỳ gồm khám tổng quát, khám nha, khám mắt, tầm soát béo phì… tất cả các cơ sở của Phoenix Education đều có đội ngũ nhân viên y tế thường trực để chăm sóc sức khỏe hằng ngày cho học sinh. Đội ngũ chuyên gia tư vấn tâm lý để cung cấp những tư vấn cơ bản nhất cho học sinh khi cần thiết.",
    icon: Icon3,
  },
  {
    title: "Liên lạc phụ huynh",
    description:
      "Mối liên lạc chặt chẽ với phụ huynh trong việc chăm sóc và giáo dục các em được đặc biệt coi trọng. Ngoài sổ báo bài hàng tuần, các cuộc gặp gỡ với phụ huynh ở mỗi học kỳ, giáo viên Phoenix Education sẽ liên tục cập nhật những thông tin mới nhất về tình trạng sức khỏe, học lực và tâm sinh lý của học sinh, đặc biệt là khi học sinh có những biểu hiện khác lạ.",
    icon: Icon1,
  },
];
