import Link from "next/link";
import { useTranslation } from "../../i18n";
import { Header } from "../components/Header/client";
import bannerabout from "@/public/images/banner/banner-home.jpg";
import BannerImage from "../components/banner";
import VideoThumb from "@/public/images/oneuse/thumpvideo.jpg";
import ModalVideo from "../../components/modal-video";
import PageDautien from "../components/pagedautien";
import Image from "next/image";
import FeatImage01 from "@/public/images/phuonghoang/hocsinh1.jpg";
import Footer from "@/app/components/ui/footer";
export async function generateMetadata({ params: { lng } }) {
  const { t } = await useTranslation(lng, "header");
  const title1 = t("chuong-trinh");
  const title2 = t("giao-duc-ph");
  return { title: `${title1} - ${title2}` };
}
export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng, "header");
  const highlight = true;
  const links = [
    {
      href: "/chuong-trinh-dao-tao/",
      content: t("chuong-trinh"),
      hightlight: true,
    },
    { href: "/chuong-trinh-dao-tao/mam-non", content: t("mam-non") },
    { href: "/chuong-trinh-dao-tao/tieu-hoc", content: t("tieu-hoc") },
    { href: "/chuong-trinh-dao-tao/trung-hoc", content: t("thcs") },
  ];
  const images = [FeatImage01, FeatImage01, FeatImage01, FeatImage01];
  return (
    <>
      <Header lng={lng} path="/chuong-trinh-dao-tao" />
      <BannerImage
        src={bannerabout}
        text1={t("home") + " / " + t("chuong-trinh")}
        text2={t("tong-quan-chuong-trinh")}
      />
      <PageDautien className="" links={links} highlight={highlight} />
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* 3rd */}
        <div>
          <h3 className="h3 text-center pb-10 pt-10">LỘ TRÌNH HỌC TẬP</h3>
          <p>
            Giáo Dục Phượng Hoàng triển khai 2 lộ trình đào tạo dành cho học
            sinh từ Mầm non đến Lớp 9, bao gồm: Chương trình Việt Nam và Chương
            trình Song Ngữ
          </p>
        </div>
        {/* 1nd */}
        <div className="grid grid-cols-2 gap-x-10 bg-gray-100 pb-10 px-5 mt-5">
          <div>
            <h3 className="h3 text-center py-10">Chương trình Việt Nam</h3>
            <p className="p pb-4">
              Chương trình Việt Nam được xây dựng từ Chương trình Giáo dục Quốc
              gia, do Bộ Giáo dục và Đào tạo Việt Nam quy định. Chương trình
              phát triển theo phương pháp tích hợp nội môn và liên môn, tối ưu
              hóa nội dung học tập và kết quả đầu ra, đồng thời vẫn bảo tồn và
              phát huy giá trị bản sắc dân tộc trong nội dung và hình thức
              truyền tải giáo dục.
            </p>
            <p className="p">
              Chương trình Quốc tế mang đến cho học sinh cơ hội học tập môn Ngữ
              văn Anh, Toán và Khoa học bằng tiếng Anh với 100% giáo viên quốc
              tế. Chương trình Quốc tế còn được phát triển một cách chọn lọc để
              có thể tích hợp với chương trình Việt Nam về nội dung, tăng cường
              vận dụng kiến thức, hoạt động thực hành, cơ hội rèn luyện ngôn ngữ
              tiếng Anh trong những tình huống học tập gần gũi với lứa tuổi Tiểu
              học.
            </p>
          </div>
          <div>
            <h3 className="h3 text-center py-10">Chương trình Song ngữ</h3>
            <p className="p pb-4">
              Chương trình Quốc tế mang đến cho học sinh cơ hội học tập môn Ngữ
              văn Anh, Toán và Khoa học bằng tiếng Anh với 100% giáo viên quốc
              tế. Chương trình Quốc tế còn được phát triển một cách chọn lọc để
              có thể tích hợp với chương trình Việt Nam về nội dung, tăng cường
              vận dụng kiến thức, hoạt động thực hành, cơ hội rèn luyện ngôn ngữ
              tiếng Anh trong những tình huống học tập gần gũi với lứa tuổi Tiểu
              học.
            </p>
            <p className="p">
              Cũng như chương trình Việt Nam, hoạt động học tập của học sinh
              trong các môn học của chương trình Quốc tế được đánh giá trong quá
              trình và theo định kỳ, bằng điểm số và thông qua nhận xét của giáo
              viên. Sử dụng hệ thống kiểm tra ngoài không chỉ cung cấp thông tin
              chi tiết về mức độ tiến bộ về năng lực học tập của học sinh mà còn
              đảm bảo tính khách quan trong kiểm tra và đánh giá của chương
              trình Quốc tế.
            </p>
          </div>
        </div>
        {/* 2nd  */}
        <div>
          <h3 className="h3 text-center pb-10 pt-28">CHƯƠNG TRÌNH HỌC</h3>
          <div className="grid grid-cols-3 text-white gap-x-4">
            {programs.map((program, index) => (
              <div className="" key={index}>
                <Image className="" src={FeatImage01} alt="image" priority />
                <div className={`px-3 pb-3 ${program.color}`}>
                  <h4 className="text-center h4 py-3">{program.name}</h4>
                  <p className="font-sans pb-4">{program.description}</p>
                  <Link href={program.href} className="hover:underline">
                    Xem thêm {">>"}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
const programs = [
  {
    name: "MẦM NON",
    color: "bg-rose-400",
    description:
      "Tại Giáo Dục Phượng Hoàng, trẻ được tiếp thu kiến thức mới trong môi trường học tập vui chơi lành mạnh, giúp trẻ phát triển nhận thức cá nhân, nâng cao tinh thần cộng đồng và mang đến cho trẻ sự phát triển toàn diện",
    href: "/chuong-trinh-dao-tao/mam-non",
  },
  {
    name: "TIỂU HỌC",
    color: "bg-blue-500",
    description:
      "Giáo Dục Phượng Hoàng mang đến cho học sinh môi trường học tập, trải nghiệm lý tưởng, là nơi học sinh được phát huy năng lực bản thân, đón nhận sự khích lệ, thể hiện tình yêu thương và khai phá tiềm năng của mình",
    href: "/chuong-trinh-dao-tao/tieu-hoc",
  },
  {
    name: "TRUNG HỌC",
    color: "bg-green-500",
    description:
      "Giáo Dục Phượng Hoàng không chỉ trang bị cho học sinh nền tảng tri thức và ngôn ngữ vững chắc mà còn tạo điều kiện để các em phát triển năng lực tự học, tự do sáng tạo, hình thành phẩm chất của công dân toàn cầu.",
    href: "/chuong-trinh-dao-tao/trung-hoc",
  },
];
