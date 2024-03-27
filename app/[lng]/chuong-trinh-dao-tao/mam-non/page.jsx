import Link from "next/link";
import { useTranslation } from "../../../i18n";
import { Header } from "../../components/Header/client";
import bannerabout from "@/public/images/banner/banner-about.jpg";
import BannerImage1 from "../../components/banner";
import Pagedautien from "../../components/pagedautien";
import Image1 from "@/public/images/testimonial-01.jpg";
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
        </div>
      </section>
    </>
  );
}
