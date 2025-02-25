import Link from "next/link";
import { useTranslation } from "../../../i18n";
import { Header } from "../../components/Header/client";
import bannerabout from "@/public/images/banner/banner-about.jpg";
import BannerImage from "../../components/banner";
import Content1 from "../../components/content1";
import Pagedautien from "../../components/pagedautien";
import Listthongtin from "../../components/listthongtin";
import Image1 from "@/public/images/vechungtoi/thongdieptubaolanhdao/01.jpg";
import Image2 from "@/public/images/vechungtoi/thongdieptubaolanhdao/02.jpg";
import Image3 from "@/public/images/vechungtoi/thongdieptubaolanhdao/03.jpg";
import FeatImage02 from "@/public/images/banner/banner-mobile.png";
import Image from "next/image";

export async function generateMetadata({ params: { lng } }) {
  const { t } = await useTranslation(lng, "header");
  const title1 = t("lanh-dao");
  const title2 = t("giao-duc-ph");
  return { title: `${title1} - ${title2}` };
}
const buttonData = {
  mamnon: {
    title: "Đội Ngũ Lãnh Đạo",
    listItems: [
      {
        imageSrc: Image1,
        title: "Cô Lê Anh Đàos",
        description: "Giáo Viên Lớp Mẫu Giáo",
        text2: "Bằng cấp",
        text3: "Kinh nghiệm",
        chuyenmon: "Chuyên môn:",
        thanhtich: "Với khoảng thời gian 40 năm ",
        lienhe: "PGS-TS Ngô Minh Oanh còn ",
        buttonText: "Xem thêm",
      },
      {
        imageSrc: Image1,
        title: "Cô Nguyễn Thị Hương",
        description: "Giáo Viên Lớp Mẫu Giáo",
        text2: "Bằng cấp",
        text3: "Kinh nghiệm",
        chuyenmon: "Chuyên môn:",
        thanhtich: "Với khoảng thời gian 35 năm ",
        lienhe: "PGS-TS Nguyễn Minh Hạnh còn ",
        buttonText: "Xem thêm",
      },
      {
        imageSrc: Image1,
        title: "Cô Trần Thị Thu Hà",
        description: "Giáo Viên Lớp Mẫu Giáo",
        text2: "Bằng cấp",
        text3: "Kinh nghiệm",
        chuyenmon: "Chuyên môn:",
        thanhtich: "Với khoảng thời gian 30 năm ",
        lienhe: "PGS-TS Lê Thị Hương còn ",
        buttonText: "Xem thêm",
      },
      {
        imageSrc: Image1,
        title: "Cô Phạm Thị Thu Hường",
        description: "Giáo Viên Lớp Mẫu Giáo",
        text2: "Bằng cấp",
        text3: "Kinh nghiệm",
        chuyenmon: "Chuyên môn:",
        thanhtich: "Với khoảng thời gian 25 năm ",
        lienhe: "PGS-TS Phạm Thị Kim Anh còn ",
        buttonText: "Xem thêm",
      },
    ],
  },
  hoidong: {
    title: "Hội Đồng Chuyên Môn",
    listItems: [
      {
        imageSrc: Image1,
        title: "Cô Nguyễn Thị Lan",
        description: "Giáo Viên Tiểu Học",
        text2: "Bằng cấp",
        text3: "Kinh nghiệm",
        chuyenmon: "Chuyên môn:",
        thanhtich: "Với khoảng thời gian 20 năm ",
        lienhe: "PGS-TS Trần Thị Thanh còn ",
        buttonText: "Xem thêm",
      },
      {
        imageSrc: Image1,
        title: "Cô Trần Thị Hương",
        description: "Giáo Viên Mầm Non",
        text2: "Bằng cấp",
        text3: "Kinh nghiệm",
        chuyenmon: "Chuyên môn:",
        thanhtich: "Với khoảng thời gian 13 năm ",
        lienhe: "PGS-TS Lê Thị Thu còn ",
        buttonText: "Xem thêm",
      },
      {
        imageSrc: Image1,
        title: "Thầy Nguyễn Văn Tâm",
        description: "Giáo Viên Trung Học",
        text2: "Bằng cấp",
        text3: "Kinh nghiệm",
        chuyenmon: "Chuyên môn:",
        thanhtich: "Với khoảng thời gian 25 năm ",
        lienhe: "PGS-TS Nguyễn Minh Tuấn còn ",
        buttonText: "Xem thêm",
      },
      {
        imageSrc: Image1,
        title: "Cô Phạm Thị Thu Huyền",
        description: "Giáo Viên Tiểu Học",
        text2: "Bằng cấp",
        text3: "Kinh nghiệm",
        chuyenmon: "Chuyên môn:",
        thanhtich: "Với khoảng thời gian 30 năm ",
        lienhe: "PGS-TS Phạm Thị Hằng còn ",
        buttonText: "Xem thêm",
      },
    ],
  },
};
export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng, "header");
  const highlight = true; // Đặt giá trị highlight ở đây
  const links = [
    { href: "/ve-chung-toi/", content: t("gioi-thieu") },
    { href: "/ve-chung-toi/tam-nhin-su-menh", content: t("tam-nhin") },
    { href: "/ve-chung-toi/doi-ngu-giao-vien", content: t("giao-vien") },
    {
      href: "/ve-chung-toi/thong-diep-tu-ban-lanh-dao",
      content: t("lanh-dao"),
      hightlight: true,
    },
    // {
    //   href: "/ve-chung-toi/thanh-tich-cua-chung-toi",
    //   content: t("thanh-tich"),
    // },
  ];

  return (
    <>
      <Header lng={lng} path="/ve-chung-toi/thong-diep-tu-ban-lanh-dao" />
      <BannerImage
        src={bannerabout}
        srcmobile={FeatImage02}
        text1={t("home") + " / " + t("about")}
        text2={t("lanh-dao")}
      />
      <Pagedautien links={links} highlight={highlight} />

      <div className="max-w-6xl mx-auto">
        {/* 1 */}
        <div>
          <h3 className="h3  text-center pb-3 mb-10 pt-10 border-b-[3px] border-rose-500 w-fit mx-auto">
            Thông điệp từ Ban Lãnh Đạo
          </h3>
          <div className="lg:grid lg:grid-cols-10 gap-4  px-4 lg:px-0">
            <div className="col-span-6 space-y-4 p">
              <p className="">
                Giáo dục Phượng Hoàng được bắt đầu từ “Nhóm các phụ huynh tâm
                huyết” đang phải đối mặt với tình hình vô cùng khó khăn đó là
                không có cơ sở giáo dục nào tại Huế giảng dạy chương trình quốc
                tế hoặc có yếu tố quốc tế. Và đó chính là sự ra đời của Giáo Dục
                Phượng Hoàng!!! Chúng tôi đã đối mặt với nhiều thử thách, trở
                ngại nhưng với những nỗ lực đầy trong sáng và phi thường ” chúng
                tôi, “Các phụ huynh tâm huyết” đều cùng nhau vượt qua. Nhân đây,
                chúng tôi cũng muốn gửi lời tri ân tới sự ủng hộ, kiên trì của
                tất cả mọi người đã tin tưởng vào mục tiêu chung nhằm cùng nhau
                thực hiện giấc mơ này và biến giấc mơ thành sự thật.
              </p>
              <p className="">
                Chúng tôi hy vọng rằng những nỗ lực của chúng ta đã và đang tạo
                ra một môi trường học tập mới lạ nhưng đầy bổ ích cho các em học
                sinh. Một môi trường giáo dục kết hợp hài hòa các môn học: các
                môn khoa học, xã hội, nghệ thuật, âm nhạc, giáo dục thể chất và
                các kỹ năng xã hội, chúng ta sẽ mang lại một môi trường học tập
                toàn diện cho các em. Những kiến thức, kỹ năng các em thu nhận
                được tại trường sẽ mãi theo các em trong suốt chặng đường sau
                này.
              </p>
              <p className="">
                Xin gửi lời cảm ơn chân thành tới các phụ huynh, giáo viên, các
                em học sinh và những người bạn đã cùng chúng tôi xây dựng nên
                “Gia đình Giáo dục Phượng Hoàng”.
              </p>

              <p>Ms. Nguyễn Thị Linh Phượng & Mr. John Troha (JT)</p>
            </div>
            <div className="col-span-4">
              <Image
                loading="lazy"
                src={Image2}
                alt="giao vien"
                className="w-full "
              />
            </div>
          </div>
          {/* <div className="lg:grid lg:grid-cols-10 gap-4 px-4 lg:px-0 lg:pt-20 ">
            <div className="col-span-6 space-y-4 p order-last"></div>
            <div className="col-span-4 order-first">
              <Image
                loading="lazy"
                src={Image3}
                alt="giao vien"
                className="w-full "
              />
            </div>
          </div> */}
          {/* <div className="grid lg:grid-cols-10 gap-4 lg:pt-20">
            <div className="col-span-4 order-last">
              <Image
                loading="lazy"
                src={Image1}
                alt="giao vien"
                className="w-full hidden lg:block"
              />
            </div>
            <div className="col-span-6  order-1 px-4 lg:px-0 mt-8">
              <div className="col-span-6 space-y-4 p">
              
              </div>
            </div>
          </div> */}
        </div>
        {/* 2 */}
        {/* <h3 className="h3   text-center pb-3 mb-10 pt-36 border-b-[3px] border-rose-500 w-fit mx-auto">
          Đội ngũ lãnh đạo
        </h3> */}
      </div>
    </>
  );
}
