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
import FeatImage02 from "@/public/images/banner/banner-mobile.png";

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
        srcmobile={FeatImage02}
        text1={t("home") + " / " + t("chuong-trinh")}
        text2={t("tong-quan-chuong-trinh")}
      />
      <PageDautien className="" links={links} highlight={highlight} />
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* 1rd */}
        <div>
          <h3 className="h3 uppercase text-center pb-3 mb-10 pt-10 border-b-[3px] border-rose-500 w-fit mx-auto">
            Lộ trình học tập
          </h3>
          <p className="p">
            Giáo Dục Phượng Hoàng đào tạo liên cấp từ Mầm non, Tiểu học, Trung
            học cơ sở đến Trung học phổ thông. Chương trình học có sự kết hợp
            hài hòa giữa Chương trình Giáo dục Quốc gia của Bộ Giáo dục và Đào
            tạo Việt Nam với Chương trình Giáo dục Quốc tế Cambridge, giúp người
            học dễ dàng tiếp cận kiến thức phù hợp và chinh phục thành công
            trong môi trường học tập quốc tế năng động. Giáo Dục Phượng Hoàng
            triển khai 2 lộ trình đào tạo dành cho học sinh từ Mầm non đến Lớp
            9, bao gồm: Chương trình Song ngữ và Chương trình Quốc tế
          </p>
        </div>
        {/* 2nd */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10  pb-10 lg:px-5 mt-5">
          <div className="">
            <h3 className="h4 text-center py-6 bg-rose-500 rounded-t-2xl text-white">
              Chương trình Song ngữ
            </h3>
            <div className="bg-gray-100 px-5 pb-5 pt-2 lg:h-[300px] rounded-b-2xl space-y-4 ">
              <p className="p pb-4">
                Chương trình Song ngữ tại Phượng Hoàng được xây dựng trên tiêu
                chí tối ưu hóa chương trình của Bộ GD & ĐT nhằm đảm bảo được
                chuẩn kiến thức và giúp học sinh tiếp thu kiến thức một cách nhẹ
                nhàng, hiệu quả.
              </p>
              <p className="p">
                Kết quả học tập và bằng cấp được Bộ GD & ĐT công nhận và cấp
                phát, có giá trị ngang bằng với các trường công lập trong hệ
                thống giáo dục quốc gia.
              </p>
            </div>
          </div>
          <div>
            <h3 className="h4 text-center py-6 bg-rose-500 rounded-t-2xl text-white">
              Chương trình Quốc tế
            </h3>
            <div className="bg-gray-100 px-5 pb-5 pt-2 lg:h-[300px] rounded-b-2xl space-y-4 ">
              <p className="p pb-4">
                Chương trình quốc tế học theo giáo trình của Singapore và
                Cambridge. Các môn học chính như Tiếng Anh, Toán, Khoa học và
                Sức khỏe được dựa trên Bộ giáo trình “My Pals are Here” của nhà
                xuất bản uy tín Marshall Cavendish, Singapore. Các môn học khác
                như Địa lý, Lịch sử, Công nghệ thông tin, Mỹ thuật, Âm nhạc và
                Giáo dục thể chất được biên soạn dựa theo giáo trình của
                Cambridge.
              </p>
              <p className="p">
                Vào cuối bậc tiểu học, học sinh sẽ được tham gia kì thi lấy
                chứng chỉ tiểu học Quốc tế Cambridge Primary Checkpoint.
              </p>
            </div>
          </div>
        </div>
        {/* 3nd  */}
        <div>
          <h3 className="h3  text-center pb-3 mb-10 pt-28 border-b-[3px]  border-rose-500 w-fit mx-auto">
            CHƯƠNG TRÌNH HỌC
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 text-white gap-y-10 lg:gap-4 rounded-lg">
            {programs.map((program, index) => (
              <div className=" " key={index}>
                <Image
                  // loading="lazy"
                  // priority
                  className="rounded-t-3xl"
                  src={FeatImage01}
                  alt="image"
                />
                <div className={`rounded-b-3xl px-3 pb-3 ${program.color}`}>
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
        <div className="">
          <h3 className="h3  text-center pb-3 mb-10 pt-28 border-b-[3px] border-rose-500 w-fit mx-auto">
            HOẠT ĐỘNG NGOẠI KHÓA
          </h3>
          <div className="grid grid-cols-2 gap-10 p">
            <div className="">
              <p>
                Phoenix Education tổ chức đa dạng các chương trình hoạt động
                ngoại khóa giúp học sinh có nhiều trải nghiệm về tư duy và thể
                chất, phát triển các kỹ năng toàn diện. Chương trình được thiết
                kế vô cùng sinh động theo định hướng “Học từ trải nghiệm – Học
                từ khám phá, sáng tạo” nhằm trang bị thêm nhiều kỹ năng mới và
                mở ra nhiều cơ hội học tập thực tế cho học sinh.
              </p>

              <ul>
                <li className="pt-4 list-disc marker:text-red-500 ml-5">
                  Đa dạng các cuộc thi học thuật và năng khiếu như: Hùng biện
                  tiếng Anh, English Singing Contest, Book Report,...
                </li>

                <li className="pt-2 list-disc marker:text-red-500 ml-5">
                  Năng động hơn với các Câu lạc bộ ngoại khóa:
                </li>
              </ul>

              <ul className="pl-6">
                <li className=" ml-5 ">
                  <span className="text-rose-300">▪ </span>Các hoạt động ngoại
                  khóa, rèn luyện thể chất, đam mê như: Võ thuật, Bóng rổ,
                  Yoga,...
                </li>
                <li className=" ml-5 ">
                  <span className="text-rose-300">▪ </span>Các CLB năng khiếu và
                  kết nối cộng đồng như: Vẽ, Âm nhạc, Nhảy múa, CLB Thiện nguyện
                  xã hội,...
                </li>
                <li className=" ml-5 ">
                  <span className="text-rose-300">▪ </span>Các CLB học thuật,
                  nâng cao kiến thức như: CLB tiếng Anh, CLB Sáng tạo khoa học,
                  CLB Toán học, CLB Robotics,...
                </li>
              </ul>
              <ul>
                <li className="pt-4 list-disc marker:text-red-500 ml-5">
                  Trải nghiệm sâu sắc từ các hoạt động dã ngoại, trải nghiệm
                  thực tế như: Tham quan những Di tích lịch sử, bảo tàng, các
                  nông trại xanh, khu trải nghiệm nghê nghiệp tương lai,..
                </li>
                <li className="pt-2 list-disc marker:text-red-500 ml-5">
                  Nâng tầm hiểu biết các Lễ hội Văn hóa quốc tế như: Halloween,
                  Giáng sinh, Lễ hội Mùa xuân, Summer Camp,...
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <Image
                loading="lazy"
                className=""
                src={FeatImage01}
                alt="image"
              />
              <Image
                loading="lazy"
                className=""
                src={FeatImage01}
                alt="image"
              />
              <Image
                loading="lazy"
                className=""
                src={FeatImage01}
                alt="image"
              />
              <Image
                loading="lazy"
                className=""
                src={FeatImage01}
                alt="image"
              />
              <Image
                loading="lazy"
                className=""
                src={FeatImage01}
                alt="image"
              />
              <Image
                loading="lazy"
                className=""
                src={FeatImage01}
                alt="image"
              />
            </div>
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
