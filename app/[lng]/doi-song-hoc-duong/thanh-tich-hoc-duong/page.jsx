import Link from "next/link";
import { useTranslation } from "../../../i18n";
import { Header } from "../../components/Header/client";
import bannerabout from "@/public/images/banner/banner-about.jpg";
import BannerImage1 from "../../components/banner";
import Pagedautien from "../../components/pagedautien";
import Image1 from "@/public/images/oneuse/thanhtichhocsinh/a1.png";
import Image2 from "@/public/images/oneuse/thanhtichhocsinh/a2.png";
import Image3 from "@/public/images/oneuse/thanhtichhocsinh/a3.png";
import Image4 from "@/public/images/oneuse/thanhtichhocsinh/a4.png";
import Image from "next/image";
import Tieubieu from "./tieubieu";
import Cuuhocsinh from "./cuuhocsinh";
export async function generateMetadata({ params: { lng } }) {
  const { t } = await useTranslation(lng, "header");
  const title1 = t("thanh-tich-hs");
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
      hightlight: true,
    },
    {
      href: "/doi-song-hoc-duong/chuong-trinh-ngoai-khoa",
      content: t("chuong-trinh-nk"),
    },
  ];

  return (
    <>
      <Header lng={lng} path="/doi-song-hoc-duong/thanh-tich-hoc-duong" />
      <BannerImage1
        src={bannerabout}
        text1={t("home") + " / " + t("doi-song")}
        text2={t("thanh-tich-hs")}
      />
      <Pagedautien links={links} highlight={highlight} />
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* 1st */}
        <div>
          <h3 className="h3  text-center pb-3 mb-10 pt-10 border-b-[3px] border-rose-500 w-fit mx-auto">
            Câu chuyện học sinh
          </h3>
          <p className="p pb-20">
            Tại Phoenix Education, mỗi học sinh đều có quyền được viết lên câu
            chuyện riêng của chính mình. Đó không chỉ là chuyện về những con số,
            thành tích, học thuật mà còn là những câu chuyện thú vị về bạn bè,
            thầy cô, thể thao, âm nhạc, mỹ thuật, hoạt động ngoại khóa….Tất cả
            đều nhằm mục đích nâng cao khả năng, kiến thức, phát huy giá trị bản
            thân, đôi khi còn giúp các em tìm lại được chính bản thân mình…..Đó
            là nền tảng giúp các em trở thành công dân toàn cầu với ý chí, nghị
            lực và quyết tâm to lớn. Quãng thời gian ở Phoenix Education sẽ giúp
            các em vẽ thêm một nét rõ ràng, đỏ thắm trong bức tranh cuộc đời để
            sau này khi nhớ đến lại muốn quay về.
          </p>
        </div>
      </section>
      {/* 2 */}
      <Tieubieu />
      <Cuuhocsinh />
    </>
  );
}
