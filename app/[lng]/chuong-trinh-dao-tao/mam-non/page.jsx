import Link from "next/link";
import { useTranslation } from "../../../i18n";
import { Header } from "../../components/Header/client";
import bannerabout from "@/public/images/banner/banner-about.jpg";
import BannerImage1 from "../../components/banner";
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
  const title1 = t("mam-non");
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
    {
      href: "/chuong-trinh-dao-tao/mam-non",
      content: t("mam-non"),
      hightlight: true,
    },
    { href: "/chuong-trinh-dao-tao/tieu-hoc", content: t("tieu-hoc") },
    { href: "/chuong-trinh-dao-tao/trung-hoc", content: t("thcs") },
  ];

  return (
    <>
      <Header lng={lng} path="/chuong-trinh-dao-tao/mam-non" />
      <BannerImage1
        src={bannerabout}
        text1={t("home") + " / " + t("chuong-trinh")}
        text2={t("mam-non")}
      />
      <Pagedautien links={links} highlight={highlight} />
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* 1st */}
        <div>
          <h3 className="h3  text-center pb-3 mb-10 pt-10 border-b-[3px] border-rose-500 w-fit mx-auto">
            Chương trình giáo dục Mầm non
          </h3>
          <p>
            Trẻ Mầm non tại VAS vui học theo Chương trình Văn hóa Quốc Gia kết
            hợp với Chương trình tiếng Anh được giảng dạy theo Mô hình Học tập
            Đa hoạt động (Multi-Faceted Approach to Learning for Kindergarten).
            VAS tự hào mang đến cho học sinh Mầm non chương trình ngữ âm tiếng
            Anh “Letters and Sounds”, được phát triển có hệ thống và phê duyệt
            bởi Bộ Giáo dục và Kĩ năng, Vương quốc Anh. Trẻ còn được tiếp xúc
            với môn ICT để bước đầu hình thành nên tư duy công nghệ.
          </p>
        </div>
        {/* 2nd */}
        <div className="grid grid-cols-2 gap-x-10 pb-10  mt-5 p">
          <div>
            <h3 className="h4 text-center py-6 bg-rose-500 rounded-t-2xl text-white">
              Chương trình Văn hóa Quốc gia Mầm non
            </h3>
            <div className="bg-gray-100 px-5 pb-5 pt-2 h-[410px] rounded-b-2xl">
              <p className=" pb-4">
                Mô hình học tập Đa hoạt động là sự kết hợp giữa Chương trình
                Giáo dục Mầm non của Bộ GD&ĐT với những cách tiếp cận giáo dục
                hiện đại, tập trung vào:
              </p>
              <ul className="list-disc list-inside marker:text-rose-500 space-y-2">
                <li>
                  <span className="font-semibold">Nhận thức cá nhân:</span> trẻ
                  hiểu được bản thân trong mối quan hệ với gia đình, nhà trường
                  và cộng đồng rộng lớn hơn.
                </li>
                <li>
                  <span className="font-semibold">Tinh thần cộng đồng:</span>{" "}
                  giúp trẻ biết chủ động, biết hợp tác và học tập lẫn nhau.
                </li>
                <li>
                  <span className="font-semibold">
                    Phát triển toàn diện và hài hòa:
                  </span>{" "}
                  từ thể chất, tri thức đến tình cảm, xã hội và óc thẩm mỹ, hình
                  thành nền tảng để trẻ tự tin bước vào bậc Tiểu học.
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="h4 text-center py-6 bg-rose-500 rounded-t-2xl text-white">
              Chương trình tiếng Anh Mầm non
            </h3>
            <div className="bg-gray-100 px-5 pb-5 pt-2  rounded-b-2xl h-[410px]">
              <p className="pb-4">
                <span className="font-semibold">
                  Chương trình tiếng Anh Mầm non dựa trên khung Chương trình
                  Phát triển Nền tảng tiền Tiểu học
                </span>{" "}
                (Early Years Foundation Stage) của Vương Quốc Anh giúp trẻ
                chuyển tiếp hiệu quả khi gia nhập Chương trình Giáo dục
                Cambridge ở bậc Tiểu học.
              </p>
              <p className="pb-4">
                Các hoạt động vui chơi được thiết kế và giảng dạy bằng tiếng Anh
                bởi giáo viên bản xứ, thuộc các lĩnh vực:
              </p>
              <ul className="list-disc list-inside marker:text-rose-500 space-y-2">
                <li>Phát triển nhận thức tình cảm và xã hội</li>
                <li>Phát triển thể chất</li>
                <li>Kỹ năng giao tiếp</li>
                <li>Kỹ năng học thuật sơ đẳng</li>
                <li>Hiểu biết về thế giới</li>
                <li>Tìm hiểu về Nghệ thuật và Thiết kế</li>
              </ul>
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
                  <Image alt="icon" className="scale-75" src={info.icon} />
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
            Một ngày của học sinh Mầm non
          </h3>
          <p>
            Trẻ Mầm non tại VAS vui học theo Chương trình Văn hóa Quốc Gia kết
            hợp với Chương trình tiếng Anh được giảng dạy theo Mô hình Học tập
            Đa hoạt động (Multi-Faceted Approach to Learning for Kindergarten).
            VAS tự hào mang đến cho học sinh Mầm non chương trình ngữ âm tiếng
            Anh “Letters and Sounds”, được phát triển có hệ thống và phê duyệt
            bởi Bộ Giáo dục và Kĩ năng, Vương quốc Anh. Trẻ còn được tiếp xúc
            với môn ICT để bước đầu hình thành nên tư duy công nghệ.
          </p>
          <Image className="" alt="picture" src={Image4} />
          <Image className="" alt="picture" src={Image2} />
          <Image className="" alt="picture" src={Image3} />
          <Image className="" alt="picture" src={Image1} />
          <Image className="" alt="picture" src={Image5} />
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
      "Nhằm tạo điều kiện cho các em học sinh được sinh hoạt trong một môi trường sạch sẽ, hợp vệ sinh, đảm bảo an toàn cho sức khoẻ, các phòng học, nhà ăn, sân chơi, hồ bơi, nhà vệ sinh tại VAS luôn được giữ sạch và tẩy trùng theo quy trình chuẩn quốc tế.",
    icon: Icon2,
  },
  {
    title: "Dịch vụ đưa đón",
    description:
      "Nhà trường có dịch vụ đưa rước học sinh ở tất cả các cấp học trên địa bàn thành phố với tiêu chí an toàn và thân thiện. Học sinh được quan tâm, chăm sóc trong suốt quá trình di chuyển với đội ngũ tài xế và bảo mẫu hòa nhã, chuyên nghiệp của VAS.",
    icon: Icon6,
  },
  {
    title: "Chăm sóc thể chất",
    description:
      "VAS đáp ứng đầy đủ các tiện nghi, an toàn cho các hoạt động nghỉ ngủ, vệ sinh, vui chơi học tập để các em đảm bảo sức khỏe và phát triển hể chất lành mạnh nhất. Các bữa ăn có hàm lượng dinh dưỡng cao, đảm bảo tiêu chuẩn vệ sinh an toàn thực phẩm.",
    icon: Icon4,
  },
  {
    title: "Chăm sóc y tế",
    description:
      "Ngoài các chương trình khám sức khỏe định kỳ gồm khám tổng quát, khám nha, khám mắt, tầm soát béo phì… tất cả các cơ sở của VAS đều có đội ngũ nhân viên y tế thường trực để chăm sóc sức khỏe hằng ngày cho học sinh. Đội ngũ chuyên gia tư vấn tâm lý để cung cấp những tư vấn cơ bản nhất cho học sinh khi cần thiết.",
    icon: Icon3,
  },
  {
    title: "Liên lạc phụ huynh",
    description:
      "Mối liên lạc chặt chẽ với phụ huynh trong việc chăm sóc và giáo dục các em được đặc biệt coi trọng. Ngoài sổ báo bài hàng tuần, các cuộc gặp gỡ với phụ huynh ở mỗi học kỳ, giáo viên VAS sẽ liên tục cập nhật những thông tin mới nhất về tình trạng sức khỏe, học lực và tâm sinh lý của học sinh, đặc biệt là khi học sinh có những biểu hiện khác lạ.",
    icon: Icon1,
  },
];
