import Link from "next/link";
import { useTranslation } from "../../../i18n";
import { Header } from "../../components/Header/client";
import bannerabout from "@/public/images/banner/banner-about.jpg";
import BannerImage from "../../components/banner";
import Pagedautien from "../../components/pagedautien";
import FeatImage02 from "@/public/images/banner/banner-mobile.png";
import AutoResizeText from "../../../components/tools/AutoResizeText";
export async function generateMetadata({ params: { lng } }) {
  const { t } = await useTranslation(lng, "header");
  const title1 = t("chuong-trinh-nk");
  const title2 = t("giao-duc-ph");
  return { title: `${title1} - ${title2}` };
}

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng, "header");
  const highlight = true; // Đặt giá trị highlight ở đây
  const links = [
    {
      href: "/doi-song-hoc-duong",
      content: t("moi-truong-ht"),
    },
    {
      href: "/doi-song-hoc-duong/goc-hoc-sinh",
      content: t("goc-hoc-sinh"),
    },
    {
      href: "/doi-song-hoc-duong/thu-vien-hinh-anh",
      content: t("thu-vien-ha"),
    },
    {
      href: "/doi-song-hoc-duong/dich-vu-truong-hoc",
      content: t("dich-vu-th"),
    },
    {
      href: "/doi-song-hoc-duong/thanh-tich-hoc-duong",
      content: t("thanh-tich-hs"),
    },
    {
      href: "/doi-song-hoc-duong/chuong-trinh-ngoai-khoa",
      content: t("chuong-trinh-nk"),
      hightlight: true,
    },
  ];
  const contentData = [
    {
      title: "Trải nghiệm thực tế",
      content: "Citadel field trip - Chuyến đi thực tế tại đại nội",
      student: "Anh ngữ Phượng Hoàng",
      date: "17/04/2024",
      videoUrl:
        "https://www.facebook.com/plugins/video.php?height=410&href=https%3A%2F%2Fwww.facebook.com%2Fanhnguphuonghoang%2Fvideos%2F415469901115733%2F&show_text=false&width=728&t=0",
      imageUrl: "https://phuonghoang.asia/",
      paragraphs: [
        {
          content:
            "🤩 Vừa qua, lớp IELTS đã có một buổi học ngoại khóa vô cùng đặc biệt tại Đại Nội - di tích lịch sử nổi tiếng của Cố đô Huế. ️",
        },
        {
          content:
            "📙Thay vì chỉ ngồi trong lớp học lý thuyết, các bạn học sinh đã được tự mình khám phá và tìm hiểu về những di tích lịch sử xung quanh Đại Nội. Mỗi bạn chọn cho mình một chủ đề nghiên cứu, sau đó tự tin thuyết trình và giải thích cho cô giáo Geneva về những kiến thức đã học được.",
        },
        {
          content:
            "❤️ Buổi học thực tế này không chỉ mang đến cho các bạn học sinh lớp IELTS những kiến thức lịch sử quý giá mà còn là cơ hội tuyệt vời để rèn luyện các kỹ năng tiếng Anh quan trọng.",
        },
      ],
    },
    {
      title: "Trải nghiệm thực tế",
      content: "Supermarket field trip - Chuyến đi thực tế tại siêu thị",
      student: "Anh ngữ Phượng Hoàng",
      date: "20/04/2024",
      videoUrl:
        "https://www.facebook.com/plugins/video.php?height=410&href=https%3A%2F%2Fwww.facebook.com%2Fanhnguphuonghoang%2Fvideos%2F848219820414169%2F&show_text=false&width=728&t=0",
      imageUrl: "https://phuonghoang.asia/",
      paragraphs: [
        {
          content:
            '🛒"Con thích đi học ngoại khóa quá cô ơi!" - Đó là câu nói của các bạn nhỏ lớp Movers 3B sau buổi học ngoại khóa tại siêu thị đầy ắp tiếng cười với những bài học bổ ích.',
        },
        {
          content:
            "💰Hơn cả một buổi mua sắm, đây là hành trình khám phá thế giới đầy màu sắc, nơi các bạn rèn luyện kỹ năng lên kế hoạch, làm việc nhóm và thực hành thanh toán. Trải nghiệm thực tế này, giúp các bạn hiểu rõ hơn về quy trình mua sắm và giá trị của đồng tiền.",
        },
        {
          content:
            "🎤 Và bây giờ, hãy cùng xem các bạn học viên thuyết trình, chia sẻ về chiến lợi phẩm sau buổi học ngoại khóa này nhé!",
        },
      ],
    },
  ];
  return (
    <>
      <Header lng={lng} path="/chuong-trinh-dao-tao/trung-hoc" />
      <BannerImage
        src={bannerabout}
        srcmobile={FeatImage02}
        text1={t("home") + " / " + t("doi-song")}
        text2={t("chuong-trinh-nk")}
      />
      <Pagedautien links={links} highlight={highlight} />{" "}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        {contentData.map((item, index) => (
          <div key={index}>
            <h4 className="h44 text-rose-500 text-center uppercase pt-14">
              {item.title}
            </h4>
            <AutoResizeText
              text={item.content}
              defaultFontSize="34px"
              className="font-playfair font-semibold  capitalize py-1 mb-2 border-[2.5px] bg-rose-100 border-rose-200 text-center"
            />
            <h4 className="h4 text-center ">{item.student}</h4>
            <h5 className="p text-center">Ngày đăng: {item.date}</h5>
            <div className="flex gap-4">
              <div className="grow-0">
                <iframe
                  src={item.videoUrl}
                  width="728"
                  height="410"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="space-y-2">
                <h4 className="h44">{item.content}</h4>
                {item.paragraphs.map((paragraph) => (
                  <p key={paragraph.content}>{paragraph.content}</p>
                ))}
              </div>
            </div>
            <hr className="border-2 mt-10" />
          </div>
        ))}
      </section>
    </>
  );
}
