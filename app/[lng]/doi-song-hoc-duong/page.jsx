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
  const title1 = t("doi-song");
  const title2 = t("giao-duc-ph");
  return { title: `${title1} - ${title2}` };
}
export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng, "header");
  const highlight = true;
  const links = [
    {
      href: "/doi-song-hoc-duong",
      content: t("moi-truong-ht"),
      hightlight: true,
    },
    {
      href: "/doi-song-hoc-duong/thanh-tich-hoc-duong",
      content: t("thanh-tich-hs"),
    },
    { href: "/doi-song-hoc-duong/dich-vu-dua-don", content: t("dich-vu-dd") },
    { href: "/doi-song-hoc-duong/cham-soc-y-te", content: t("cham-soc-yt") },
    {
      href: "/doi-song-hoc-duong/dinh-duong-hoc-duong",
      content: t("dinh-duong-hd"),
    },
    {
      href: "/doi-song-hoc-duong/chuong-trinh-ngoai-khoa",
      content: t("chuong-trinh-nk"),
    },
  ];
  const images = [FeatImage01, FeatImage01, FeatImage01, FeatImage01];
  return (
    <>
      <Header lng={lng} path="/doi-song-hoc-duong" />
      <BannerImage
        src={bannerabout}
        text1={t("home") + " / " + t("doi-song")}
        text2={t("moi-truong-ht")}
      />
      <PageDautien className="" links={links} highlight={highlight} />
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* 1st */}
        <div>
          <h3 className="h3 text-center py-10">GIỚI THIỆU</h3>
          <p className="p pb-4">
            Hệ thống Trường Song ngữ Quốc tế Hoàng Gia - Giáo Dục Phượng Hoàng
            là thành viên của Hệ thống giáo dục HUTECH (HUTECH Education), đào
            tạo liên cấp từ Mầm non, Tiểu học, Trung học cơ sở đến Trung học phổ
            thông. Chương trình học có sự kết hợp hài hòa giữa Chương trình Giáo
            dục Quốc gia của Bộ Giáo dục và Đào tạo Việt Nam với Chương trình
            Giáo dục Quốc tế Cambridge, giúp người học dễ dàng tiếp cận kiến
            thức phù hợp và chinh phục thành công trong môi trường học tập quốc
            tế năng động.
          </p>
          <p className="p">
            Với mô hình giáo dục hiện đại, ứng dụng các phương pháp giáo dục
            tiên tiến trên thế giới như: Học tập thông qua trải nghiệm; Giáo dục
            cảm xúc xã hội; Tư duy độc lập; Tôn trọng ý kiến cá nhân; Tạo mọi
            điều kiện để người học cập nhật và đổi mới tri thức, kĩ năng, phát
            triển năng lực… Qua đó, giúp học sinh phát triển các kỹ năng mềm,
            khai mở nguồn năng lượng tích cực và sự hứng thú trong suốt quá
            trình học tập.
          </p>
          <div className="grid grid-cols-4 gap-x-3 pt-10">
            {images.map((image, index) => (
              <div key={index} className="relative overflow-hidden">
                <Image
                  className="h-full w-full object-cover transition-transform duration-300 transform hover:scale-125"
                  src={image}
                  alt="image"
                  priority
                />
              </div>
            ))}
          </div>
        </div>
        {/* 2nd  */}
        <div>
          <h3 className="h3 text-center pb-10 pt-28">CHƯƠNG TRÌNH HỌC</h3>
          <div className="grid grid-cols-3 text-white gap-x-4">
            {programs.map((program, index) => (
              <div className="" key={index}>
                <Image className="" src={FeatImage01} alt="image" priority />
                <div className={`px-3 pb-3 bg-[${program.color}]`}>
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
        {/* 3rd */}
        <div>
          <h3 className="h3 text-center pb-10 pt-28">LỘ TRÌNH HỌC TẬP</h3>
          <p>
            WASS hiện đang triển khai 2 lộ trình đào tạo dành cho học sinh từ
            Mầm non đến Lớp 9, bao gồm: Chương trình Việt Nam và Chương trình
            Quốc tế
          </p>
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
    href: "/doi-song-hoc-duong/mam-non",
  },
  {
    name: "TIỂU HỌC",
    color: "#ff9210",
    description:
      "Giáo Dục Phượng Hoàng mang đến cho học sinh môi trường học tập, trải nghiệm lý tưởng, là nơi học sinh được phát huy năng lực bản thân, đón nhận sự khích lệ, thể hiện tình yêu thương và khai phá tiềm năng của mình",
    href: "/doi-song-hoc-duong/tieu-hoc",
  },
  {
    name: "TRUNG HỌC",
    color: "#0071bb",
    description:
      "Giáo Dục Phượng Hoàng không chỉ trang bị cho học sinh nền tảng tri thức và ngôn ngữ vững chắc mà còn tạo điều kiện để các em phát triển năng lực tự học, tự do sáng tạo, hình thành phẩm chất của công dân toàn cầu.",
    href: "/doi-song-hoc-duong/trung-hoc",
  },
];
