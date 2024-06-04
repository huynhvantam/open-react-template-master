import Link from "next/link";
import { useTranslation } from "../../../i18n";
import { Header } from "../../components/Header/client";
import bannerabout from "@/public/images/banner/banner-about.jpg";
import BannerImage from "../../components/banner";
import Pagedautien from "../../components/pagedautien";
import Image from "next/image";
import Image1 from "@/public/images/phuonghoang/truonghoc.jpg";

export async function generateMetadata({ params: { lng } }) {
  const { t } = await useTranslation(lng, "header");
  const title1 = t("goc-hoc-sinh");
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
      student: "Emily - Lớp 5",
      date: "16/06/2024",
      videoUrl:
        "https://www.facebook.com/plugins/video.php?height=410&href=https%3A%2F%2Fwww.facebook.com%2Fgiaoducphuonghoang%2Fvideos%2F1934572723626913%2F&show_text=false&width=728&t=0",
      imageUrl: "https://phuonghoang.asia/",
      paragraphs: [
        { content: "Đây là nội dung đoạn văn 1." },
        { content: "Đây là nội dung đoạn văn 2." },
        { content: "Đây là nội dung đoạn văn 3." },
      ],
    },
    {
      title: "Học giỏi để giúp bạn",
      content: "Giao tiếp hiệu quả - Tự tin trước đám đông",
      student: "Emily - Lớp 5",
      date: "16/06/2024",
      videoUrl:
        "https://www.facebook.com/plugins/video.php?height=410&href=https%3A%2F%2Fwww.facebook.com%2Fgiaoducphuonghoang%2Fvideos%2F1934572723626913%2F&show_text=false&width=728&t=0",
      imageUrl: "https://phuonghoang.asia/",
      paragraphs: [
        { content: "Đây là nội dung đoạn văn 1." },
        { content: "Đây là nội dung đoạn văn 2." },
        { content: "Đây là nội dung đoạn văn 3." },
      ],
    },
    {
      title: "Học giỏi để giúp bạn",
      content: "Giao tiếp hiệu quả - Tự tin trước đám đông",
      student: "Emily - Lớp 5",
      date: "16/06/2024",
      videoUrl:
        "https://www.facebook.com/plugins/video.php?height=410&href=https%3A%2F%2Fwww.facebook.com%2Fgiaoducphuonghoang%2Fvideos%2F1934572723626913%2F&show_text=false&width=728&t=0",
      imageUrl: "https://phuonghoang.asia/",
      paragraphs: [
        { content: "Đây là nội dung đoạn văn 1." },
        { content: "Đây là nội dung đoạn văn 2." },
        { content: "Đây là nội dung đoạn văn 3." },
      ],
    },
    // ... thêm các phần nội dung khác
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
            <h3 className="h3 text-center pb-1 mb-3 border-b-[3px] border-rose-500 w-fit mx-auto">
              {item.content}
            </h3>
            <h4 className="h4 text-center mb-2">Học sinh: {item.student}</h4>
            <h5 className="p text-center">Ngày đăng: {item.date}</h5>
            <div className="flex gap-4">
              <div className="grow-0">
                <iframe
                  src={item.videoUrl}
                  width="728"
                  height="410"
                  scrolling="no"
                  frameborder="0"
                  allowfullscreen="true"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen="true"
                ></iframe>
              </div>
              <div className="space-y-2">
                <h4 className="h44">
                  {item.title} - {item.content}
                </h4>
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
