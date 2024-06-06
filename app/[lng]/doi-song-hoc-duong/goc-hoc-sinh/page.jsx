import Link from "next/link";
import { useTranslation } from "../../../i18n";
import { Header } from "../../components/Header/client";
import bannerabout from "@/public/images/banner/banner-about.jpg";
import BannerImage from "../../components/banner";
import Pagedautien from "../../components/pagedautien";
import AutoResizeText from "../../../components/tools/AutoResizeText";
export async function generateMetadata({ params: { lng } }) {
  const { t } = await useTranslation(lng, "header");
  const title1 = t("goc-hoc-sinh");
  const title2 = t("giao-duc-ph");
  return { title: `${title1} - ${title2}` };
}

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng, "header");
  const text = "SUPERMARKET FIELD TRIP - CHUYẾN ĐI THỰC TẾ TẠI SIÊU THỊ";
  const highlight = true;
  const links = [
    {
      href: "/doi-song-hoc-duong",
      content: t("moi-truong-ht"),
    },
    {
      href: "/doi-song-hoc-duong/goc-hoc-sinh",
      content: t("goc-hoc-sinh"),
      hightlight: true,
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
    },
  ];
  const contentData = [
    {
      title: "Học giỏi để giúp bạn",
      content: "Giao tiếp hiệu quả - Tự tin trước đám đông",
      student: "Học sinh: Emily - Lớp 5",
      date: "16/06/2024",
      videoUrl:
        "https://www.facebook.com/plugins/video.php?height=410&href=https%3A%2F%2Fwww.facebook.com%2Fgiaoducphuonghoang%2Fvideos%2F1934572723626913%2F&show_text=false&width=728&t=0",
      imageUrl: "https://phuonghoang.asia/",
      paragraphs: [
        {
          content:
            "✔ Public Speaking - kỹ năng nói tiếng Anh trước đám đông là một trong những kỹ năng quan trọng, thách thức và được rất nhiều người quan tâm. Để trở nên tự tin trong giao tiếp bạn phải chiến thắng nỗi sợ và không ngại chia sẻ.",
        },
        {
          content:
            "Chúng ta hãy cùng lắng nghe bạn Emily, học sinh lớp 5, trường Phượng Hoàng chia sẻ về những trải nghiệm của mình cùng với 5 câu hỏi cần nhớ khi giới thiệu bản thân trước lớp nhé!",
        },
      ],
    },
    {
      title: "Hội thi viết chữ đẹp",
      content: "Hội thi ý nghĩa, nâng cao nhận thức quan trọng của chữ viết",
      student: "Khối Tiểu Học",
      date: "17/03/2024",
      videoUrl:
        "https://www.facebook.com/plugins/video.php?height=410&href=https%3A%2F%2Fwww.facebook.com%2Fgiaoducphuonghoang%2Fvideos%2F2693055910849064%2F&show_text=false&width=728&t=0",
      imageUrl: "https://phuonghoang.asia/",
      paragraphs: [
        {
          content:
            "✍️ Cuộc thi chữ đẹp đã được tổ chức thành công và thu hút các em học sinh hăng hái tham gia. ",
        },
        {
          content:
            "Nhiều bài thi có chất lượng và đoạt giải cao. Rèn chữ viết là một việc làm có ý nghĩa vô cùng quan trọng, nhất là đối với học sinh tiểu học.",
        },
      ],
    },
    {
      title: "Chúc mừng năm mới 2024",
      content: "Lời chúc tết ý nghĩa của các bạn tiểu học Phượng Hoàng",
      student: "Học sinh trường Phượng Hoàng",
      date: "10/02/2024",
      videoUrl:
        "https://www.facebook.com/plugins/video.php?height=410&href=https%3A%2F%2Fwww.facebook.com%2Fgiaoducphuonghoang%2Fvideos%2F408905868380789%2F&show_text=false&width=728&t=0",
      imageUrl: "https://phuonghoang.asia/",
      paragraphs: [
        {
          content:
            '"Con kính chúc quý thầy cô thật nhiều sức khoẻ, vạn sự như ý.."',
        },
        {
          content:
            "🧡 Không khí của mùa xuân, của Tết Nguyên Đán đã đến. Những góc nhỏ quen thuộc nơi sân trường cũng đã chan hoà ánh nắng ấm áp, không khí xuân, Tết đã đến gần và ở ngay cạnh bên chúng ta.",
        },
        {
          content:
            "🧧 Với những tình cảm sâu sắc đó, kính chúc tất cả quý thầy cô, quý vị phụ huynh thật nhiều sức khoẻ, vạn sự như ý. Chúc mừng năm mới!",
        },
      ],
    },
  ];
  return (
    <>
      <Header lng={lng} path="/chuong-trinh-dao-tao/tieu-hoc" />
      <BannerImage
        src={bannerabout}
        text1={t("home") + " / " + t("doi-song")}
        text2={t("goc-hoc-sinh")}
      />
      <Pagedautien links={links} highlight={highlight} />
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        {contentData.map((item) => (
          <div key={item.title}>
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
                  scrolling="no"
                  allowfullscreen="true"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen="true"
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
      {/* <section className="max-w-6xl mx-auto px-4 sm:px-6 ">
        <ZiczagImage contentData={contentData} />
      </section> */}
    </>
  );
}
