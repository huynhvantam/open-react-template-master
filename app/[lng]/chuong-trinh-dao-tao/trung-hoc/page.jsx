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
          <p>
            Chương trình đào tạo bậc Trung học tại Phoenix Education không chỉ
            trang bị cho học sinh nền tảng tri thức và ngôn ngữ vững chắc mà còn
            tạo điều kiện để các em phát triển năng lực tự học, tự do sáng tạo,
            hình thành phẩm chất của công dân toàn cầu, đồng thời phát hiện, bồi
            dưỡng năng khiếu và định hướng nghề nghiệp giúp học sinh luôn sẵn
            sàng tâm thế thích ứng với những thay đổi nhanh chóng và nhiều mặt
            của xã hội tương lai.
          </p>
          <p>
            Với mục tiêu đào tạo kiến thức học thuật theo hướng tiếp cận thực
            tiễn, giảng dạy phân hoá theo năng lực và nhu cầu của từng đối tượng
            học sinh, Phoenix Education triển khai lộ trình học tập cấp Trung
            học với 02 hệ chương trình đào tạo song song: Chương trình Trung học
            Song ngữ Quốc tế và Chương trình Trung học Hội nhập Quốc tế, giúp
            người học dễ dàng lựa chọn hướng tiếp cận kiến thức phù hợp và chinh
            phục thành công trong môi trường học tập quốc tế năng động.
          </p>
        </div>
        {/* 2nd */}
        <div className="grid grid-cols-2 gap-x-10 pb-10  mt-5 p">
          <div>
            <h3 className="h4 text-center py-6 bg-rose-500 rounded-t-2xl text-white">
              Chương trình Việt Nam
            </h3>
            <div className="bg-gray-100 px-5 pb-5 pt-2 h-[500px] rounded-b-2xl space-y-4 ">
              <p>
                Chương trình Việt Nam Tiểu học được xây dựng từ Chương trình
                Giáo dục Quốc gia, do Bộ Giáo dục và Đào tạo Việt Nam quy định.
                Chương trình phát triển theo phương pháp tích hợp nội môn và
                liên môn, tối ưu hóa nội dung học tập và kết quả đầu ra, đồng
                thời vẫn bảo tồn và phát huy giá trị bản sắc dân tộc trong nội
                dung và hình thức truyền tải giáo dục.
              </p>
              <p>
                Nội dung giáo dục của các môn học chương trình Việt Nam được
                thiết kế theo học phần, với khối lượng và thời lượng phù hợp với
                từng lứa tuổi và đặc điểm của từng lớp học. Các chủ đề học tập
                đảm bảo học sinh Tiểu học có thể trải nghiệm và thực hiện các
                nhiệm vụ học tập vừa sức và nâng cao.
              </p>
              <p>
                Thực hiện định hướng cá thể hóa, giáo viên thường xuyên quan
                sát, đánh giá quá trình học tập và rèn luyện phẩm chất đạo đức
                của từng học sinh, tập trung phát triển các năng lực cốt lõi và
                khuyến khích sự tiến bộ vươn lên trong học tập. Kết quả học tập,
                rèn luyện của học sinh không chỉ thể hiện qua điểm số mà còn
                được các giáo viên nhận xét trên tất cả các phương diện.
              </p>
            </div>
          </div>
          <div>
            <h3 className="h4 text-center py-6 bg-rose-500 rounded-t-2xl text-white">
              Chương trình Quốc tế
            </h3>
            <div className="bg-gray-100 px-5 pb-5 pt-2  rounded-b-2xl h-[500px] space-y-4">
              <p>
                Chương trình Quốc tế Tiểu học mang đến cho học sinh cơ hội học
                tập môn Ngữ văn Anh, Toán và Khoa học bằng tiếng Anh với 100%
                giáo viên quốc tế. Ngoài việc kế thừa những chuẩn kiến thức và
                kỹ năng của Khung chương trình Bang Massachusetts, bao gồm chuẩn
                Common Core và NGSS, chương trình Quốc tế còn được phát triển
                một cách chọn lọc để có thể tích hợp với chương trình Việt Nam
                về nội dung, tăng cường vận dụng kiến thức, hoạt động thực hành,
                cơ hội rèn luyện ngôn ngữ tiếng Anh trong những tình huống học
                tập gần gũi với lứa tuổi Tiểu học.
              </p>
              <p>
                Cũng như chương trình Việt Nam, hoạt động học tập của học sinh
                trong các môn học của chương trình Quốc tế được đánh giá trong
                quá trình và theo định kỳ, bằng điểm số và thông qua nhận xét
                của giáo viên. Ngoài ra, chương trình Quốc tế sử dụng bài thi Đo
                lường mức độ tăng trưởng học thuật (MAP Test) do Hiệp hội Khảo
                thí NWEA Hoa Kỳ thiết kế. Sử dụng hệ thống kiểm tra ngoài không
                chỉ cung cấp thông tin chi tiết về mức độ tiến bộ về năng lực
                học tập của học sinh mà còn đảm bảo tính khách quan trong kiểm
                tra và đánh giá của chương trình Quốc tế.
              </p>
            </div>
          </div>
        </div>
        {/* 4nd */}
        <div className="">
          <h3 className="h3  text-center pb-3 mb-10 pt-10 border-b-[3px] border-rose-500 w-fit mx-auto">
            Chăm sóc học sinh
          </h3>

          <div className="grid grid-cols-2 gap-6 pb-10 ">
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
        <div>
          <h3 className="h3  text-center pb-3 mb-10 pt-10 border-b-[3px] border-rose-500 w-fit mx-auto">
            Một ngày của học sinh Trung học
          </h3>
          <p>
            Trẻ Mầm non tại Phoenix Education vui học theo Chương trình Văn hóa
            Quốc Gia kết hợp với Chương trình tiếng Anh được giảng dạy theo Mô
            hình Học tập Đa hoạt động (Multi-Faceted Approach to Learning for
            Kindergarten). Phoenix Education tự hào mang đến cho học sinh Mầm
            non chương trình ngữ âm tiếng Anh “Letters and Sounds”, được phát
            triển có hệ thống và phê duyệt bởi Bộ Giáo dục và Kĩ năng, Vương
            quốc Anh. Trẻ còn được tiếp xúc với môn ICT để bước đầu hình thành
            nên tư duy công nghệ.
          </p>
          <Image loading="lazy" className="" alt="picture" src={Image4} />
          <Image loading="lazy" className="" alt="picture" src={Image2} />
          <Image loading="lazy" className="" alt="picture" src={Image3} />
          <Image loading="lazy" className="" alt="picture" src={Image1} />
          <Image loading="lazy" className="" alt="picture" src={Image5} />
        </div>
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
