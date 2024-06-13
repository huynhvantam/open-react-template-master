import Link from "next/link";
import { useTranslation } from "../../i18n";
import { Header } from "../components/Header/client";
import bannerabout from "@/public/images/banner/banner-home.jpg";
import BannerImage from "../components/banner";
import VideoThumb from "@/public/images/oneuse/thumpvideo.jpg";
import ModalVideo from "../../components/modal-video";
import PageDautien from "../components/pagedautien";
import Image from "next/image";
import FeatImage0 from "@/public/images/phuonghoang/hocsinh1.jpg";
import FeatImage01 from "@/public/images/oneuse/quytrinhtuyensinh/dutuyen.png";
import FeatImage02 from "@/public/images/oneuse/quytrinhtuyensinh/danhgiadauvao.png";
import FeatImage03 from "@/public/images/oneuse/quytrinhtuyensinh/hoanthienhoso.png";
import FeatImage04 from "@/public/images/oneuse/quytrinhtuyensinh/nhaphoc.png";
import Footer from "@/app/components/ui/footer";
export async function generateMetadata({ params: { lng } }) {
  const { t } = await useTranslation(lng, "header");
  const title1 = t("tuyen-sinh");
  const title2 = t("giao-duc-ph");
  return { title: `${title1} - ${title2}` };
}
export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng, "header");
  const highlight = true;
  const links = [
    {
      href: "/tuyen-sinh",
      content: t("thong-tin-ts"),
      hightlight: true,
    },
    {
      href: "/tuyen-sinh/quy-dinh-chinh-sach",
      content: t("quy-dinh-chinh-sach"),
    },
    {
      href: "/tuyen-sinh/hoc-phi",
      content: t("hoc-phi"),
    },
    {
      href: "/tuyen-sinh/chuong-trinh-uu-dai",
      content: t("chuong-trinh-ud"),
    },
  ];
  const array = [
    {
      image: FeatImage01,
      title: "➪ Dự tuyển  ",
      details: ["Đăng ký dự tuyển", "Nhận lịch hẹn đánh giá năng lực"],
    },
    {
      image: FeatImage02,
      title: "➪ Đánh giá đầu vào ",
      details: [
        "Tham gia đánh giá đầu vào theo lịch của Nhà trường",
        "Nhận kết quả đánh giá trong vòng 10 ngày làm việc",
      ],
    },
    {
      image: FeatImage03,
      title: "➪ Hoàn thiện hồ sơ ",
      details: ["Hoàn thiện hồ sơ nhập học", "Hoàn thành thủ tục tài chính"],
    },
    {
      image: FeatImage04,
      title: "➪ Nhập học chính thức",
      details: [
        "Học sinh đi học theo lịch của Nhà trường",
        "Phoenix Education hân hạnh đón chào học sinh gia nhập hành trình kiến tạo công dân toàn cầu đầy thú vị",
      ],
    },
  ];

  return (
    <>
      <Header lng={lng} path="/tuyen-sinh" />
      <BannerImage
        src={bannerabout}
        text1={t("home") + " / " + t("tuyen-sinh")}
        text2={t("thong-tin-ts")}
      />
      <PageDautien className="" links={links} highlight={highlight} />
      <section className="max-w-6xl mx-auto px-4 sm:px-6 p">
        {/* 1st */}
        <div>
          <h3 className="h3  text-center pb-3 mb-10 pt-10 border-b-[3px] border-rose-500 w-fit mx-auto">
            Thông tin tuyển sinh
          </h3>
          <div className="grid grid-cols-2 gap-10">
            <div>
              <h4 className="h3">
                Phoenix Education tuyển sinh năm học 2024 - 2025
              </h4>
              <h5 className="h4 font-playfair pt-3 pb-3 ">
                Độ tuổi tuyển sinh
              </h5>
              <p className="ml-6">
                Năm học 2024 – 2025, Phoenix Education tổ chức tuyển sinh học
                sinh có độ tuổi tương ứng với từng cấp học như sau:
              </p>
              <ul className="p ml-6">
                <li className="list-disc marker:text-red-500 ml-5">
                  Mầm non: Tuyển sinh lớp dành bé từ 18 tháng đến 5 tuổi
                </li>
                <li className="list-disc marker:text-red-500 ml-5">
                  Tiểu học: Tuyển sinh học sinh từ lớp 1 đến lớp 5{" "}
                </li>
                <li className="list-disc marker:text-red-500 ml-5">
                  Trung học: Tuyển sinh học sinh từ lớp 6 đến lớp 9
                </li>
              </ul>
              <h5 className="h4 font-playfair pt-3 pb-3 ">
                Chương trình tuyển sinh
              </h5>
              <p className="ml-6">
                Phoenix Education cung cấp 5 chương trình học:
              </p>
              <ul className="p ml-6">
                <li className="list-disc marker:text-red-500 ml-5">
                  Chương trình mầm non song ngữ
                </li>
                <li className="list-disc marker:text-red-500 ml-5">
                  Chương trình tiểu học song ngữ
                </li>
                <li className="list-disc marker:text-red-500 ml-5">
                  Chương trình tiểu học quốc tế
                </li>
                <li className="list-disc marker:text-red-500 ml-5">
                  Chương trình trung học song ngữ
                </li>
                <li className="list-disc marker:text-red-500 ml-5">
                  Chương trình trung học quốc tế
                </li>
              </ul>
              <Link
                href="#tuyen-sinh"
                className="btn mt-4 text-lg ml-6"
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-anchor-placement="top-bottom"
              >
                Đăng ký nhận tư vấn
              </Link>
            </div>
            <Image
              className="h-full w-full object-cover transition-transform duration-300 transform "
              src={FeatImage0}
              alt="image"
              loading="lazy"
            />
          </div>

          <h3 className="h3  text-center pb-3  pt-32 border-b-[3px] border-rose-500 w-fit mx-auto">
            Quy trình tuyển sinh
          </h3>
          <div className="grid grid-cols-4 gap-x-3 pt-10">
            {array.map((item, index) => (
              <div key={index} className="relative overflow-hidden">
                <div>
                  <Image
                    className="rounded-t-lg"
                    src={item.image}
                    alt="image"
                    loading="lazy"
                  />
                  <div
                    className="p-2 h-[228px] rounded-b-lg"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #f5f7fa 0%, #f6f7fa 100%)",
                    }}
                  >
                    <h4 className="text-2xl font-playfair pb-4 pt-2 font-semibold">
                      {item.title}
                    </h4>
                    <ul className="p">
                      {item.details.map((detail, idx) => (
                        <li
                          key={idx}
                          className="list-disc marker:text-red-500 ml-5"
                        >
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
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
    color: "#39b44a",
    description:
      "Tại Giáo Dục Phượng Hoàng, trẻ được tiếp thu kiến thức mới trong môi trường học tập vui chơi lành mạnh, giúp trẻ phát triển nhận thức cá nhân, nâng cao tinh thần cộng đồng và mang đến cho trẻ sự phát triển toàn diện",
    href: "/chuong-trinh-dao-tao/mam-non",
  },
  {
    name: "TIỂU HỌC",
    color: "#ff9210",
    description:
      "Giáo Dục Phượng Hoàng mang đến cho học sinh môi trường học tập, trải nghiệm lý tưởng, là nơi học sinh được phát huy năng lực bản thân, đón nhận sự khích lệ, thể hiện tình yêu thương và khai phá tiềm năng của mình",
    href: "/chuong-trinh-dao-tao/tieu-hoc",
  },
  {
    name: "TRUNG HỌC",
    color: "#0071bb",
    description:
      "Giáo Dục Phượng Hoàng không chỉ trang bị cho học sinh nền tảng tri thức và ngôn ngữ vững chắc mà còn tạo điều kiện để các em phát triển năng lực tự học, tự do sáng tạo, hình thành phẩm chất của công dân toàn cầu.",
    href: "/chuong-trinh-dao-tao/trung-hoc",
  },
];
