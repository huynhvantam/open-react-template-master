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
                Câu chuyện của Giáo dục Phượng Hoàng bắt đầu từ năm 2011, khi
                Trường Quốc tế Singapore – một ngôi trường quốc tế duy nhất ở
                Huế, bất ngờ đóng cửa vì không có lợi nhuận. Khi đó, chúng tôi
                quyết định nếu chúng tôi có thể giáo dục ba người con của mình
                thì chúng tôi cũng có thể giáo dục các con của các ông bố bà mẹ
                khác. Thay vì giáo dục tại nhà cho các con trai mình, chúng tôi
                quyết định chia sẻ ước mơ của mình với những phụ huynh có cùng
                suy nghĩ và quan tâm. Mặc dù chúng tôi biết đây sẽ là một hành
                trình đầy cam go, nhưng việc giáo dục con cái là một trong những
                điều quan trọng nhất trong cuộc sống của chúng tôi, và vì thế
                Giáo dục Phượng Hoàng đã được thành lập.
              </p>
              <p className="">
                Câu chuyện của Giáo dục Phượng Hoàng bắt đầu từ năm 2011, khi
                Trường Quốc tế Singapore – một ngôi trường quốc tế duy nhất ở
                Huế, bất ngờ đóng cửa vì không có lợi nhuận. Khi đó, chúng tôi
                quyết định nếu chúng tôi có thể giáo dục ba người con của mình
                thì chúng tôi cũng có thể giáo dục các con của các ông bố bà mẹ
                khác. Thay vì giáo dục tại nhà cho các con trai mình, chúng tôi
                quyết định chia sẻ ước mơ của mình với những phụ huynh có cùng
                suy nghĩ và quan tâm. Mặc dù chúng tôi biết đây sẽ là một hành
                trình đầy cam go, nhưng việc giáo dục con cái là một trong những
                điều quan trọng nhất trong cuộc sống của chúng tôi, và vì thế
                Giáo dục Phượng Hoàng đã được thành lập.
              </p>
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
          <div className="lg:grid lg:grid-cols-10 gap-4 px-4 lg:px-0 lg:pt-20 ">
            <div className="col-span-6 space-y-4 p order-last">
              <p className="">
                Chúng tôi chọn tên Phượng Hoàng vì theo định nghĩa, Phượng Hoàng
                là một linh vật huyền thoại có hình dáng của một con chim hùng
                vĩ, đa sắc màu, tượng trưng cho sự trẻ trung, mới mẻ để sống qua
                một chu kỳ khác. Tinh thần Phượng Hoàng - biểu tượng của sự hy
                vọng, tái sinh, trường thọ, sự thuần khiết, đổi mới và may mắn
                với sự khích lệ để giữ vững tinh thần. Đó là những điều mà chúng
                tôi luôn ghi nhớ khi phát triển Trường Phượng Hoàng. Trên thực
                tế, trong lời bài hát Phượng Hoàng ca, có câu:
              </p>
              <p className="italic">
                “Chúng ta là những con Chim Phượng Hoàng, với những bộ lông màu
                sắc khác nhau, nhưng học và làm việc cùng nhau, dang rộng đôi
                cánh, vươn lên cao, học hỏi mỗi ngày, chúng ta hướng tới bầu
                trời!”{" "}
              </p>
              <p>
                Cách đây 13 năm, bắt đầu chỉ có 12 học sinh, 4 giáo viên và một
                tòa nhà nhỏ gồm 3 phòng học, Trường Phượng Hoàng đã phát triển
                và trưởng thành với số lượng hiện tại hơn 450 học sinh đang theo
                học các chương trình giáo dục khác nhau trong một khuôn viên có
                kiến trúc đặc biệt phản ảnh nét đặc trưng văn hoá trong một môi
                trường xanh tự nhiên. Những năm qua, nhiều học sinh từ Huế và
                nước ngoài đã được giáo dục và phát triển kỹ năng sống tại Giáo
                dục Phượng Hoàng, các em đã tiếp tục học lên cao hơn và đã tham
                gia vào môi trường làm việc chuyên nghiệp ở Việt Nam và trên
                phạm vi toàn cầu.
              </p>
            </div>
            <div className="col-span-4 order-first">
              <Image
                loading="lazy"
                src={Image3}
                alt="giao vien"
                className="w-full "
              />
            </div>
          </div>
          <div className="grid lg:grid-cols-10 gap-4 lg:pt-20">
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
                <p className="">
                  Nhìn lại hành trình đã qua, chúng tôi không khỏi tự hào về
                  những bước tiến lớn mà Phượng Hoàng đã đạt được. Mỗi học sinh
                  tại trường Phượng Hoàng không chỉ được trang bị kiến thức vững
                  chắc mà còn được rèn luyện kỹ năng sống và phát triển nhân
                  cách toàn diện, giúp các em tự tin bước vào những chặng đường
                  mới trong cuộc sống.
                </p>
                <p className="">
                  Điều này có được là nhờ vào sự nỗ lực và cống hiến của nhiều
                  người trong suốt những năm qua. Chính toàn thể Đội ngũ Quản
                  lý, Giáo viên và Nhân viên Phượng Hoàng - những người đã làm
                  việc trước đây và hiện tại, đã tận tâm truyền đạt những bài
                  học quý giá và những trải nghiệm học tập phong phú cho học
                  sinh. Chúng tôi muốn ghi nhận và chia sẻ lòng biết ơn của mình
                  đến đội ngũ này cũng như tất cả Phụ huynh Trường Phượng Hoàng.
                  Các sự kiện của năm học vừa qua được ghi lại trong những trang
                  đầy màu sắc, khó quên trong cuốn Kỷ yếu Trường Phượng Hoàng và
                  chúng tôi hy vọng rằng khi mở từng trang kỷ yếu này, bạn sẽ
                  cảm nhận được niềm tự hào và tình yêu mà chúng tôi dành cho
                  từng học sinh.
                </p>
                <p>Ms. Nguyễn Thị Linh Phượng & Mr. John Troha (JT)</p>
              </div>
            </div>
          </div>
        </div>
        {/* 2 */}
        {/* <h3 className="h3   text-center pb-3 mb-10 pt-36 border-b-[3px] border-rose-500 w-fit mx-auto">
          Đội ngũ lãnh đạo
        </h3> */}
      </div>
    </>
  );
}
