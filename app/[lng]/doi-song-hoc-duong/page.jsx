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
import Csvc1 from "@/public/images/phuonghoang/csvc/csvc1.png";
import Csvc2 from "@/public/images/phuonghoang/csvc/csvc2.png";
import Csvc3 from "@/public/images/phuonghoang/csvc/csvc3.png";
import Csvc4 from "@/public/images/phuonghoang/csvc/csvc4.png";
import Csvc5 from "@/public/images/phuonghoang/csvc/csvc5.png";
import Csvc6 from "@/public/images/phuonghoang/csvc/csvc6.png";
import Csvc7 from "@/public/images/phuonghoang/csvc/csvc7.png";
import Csvc8 from "@/public/images/phuonghoang/csvc/csvc8.png";
import Csvc9 from "@/public/images/phuonghoang/csvc/csvc9.png";
import Csvc10 from "@/public/images/phuonghoang/csvc/csvc10.png";
import Csvc11 from "@/public/images/phuonghoang/csvc/csvc11.png";
import Csvc12 from "@/public/images/phuonghoang/csvc/csvc12.png";
import Csvc13 from "@/public/images/phuonghoang/csvc/csvc13.png";
import Csvc14 from "@/public/images/phuonghoang/csvc/csvc14.png";
import Csvc15 from "@/public/images/phuonghoang/csvc/csvc15.png";
import Csvc16 from "@/public/images/phuonghoang/csvc/csvc16.png";
import Csvc17 from "@/public/images/phuonghoang/csvc/csvc17.png";
import Csvc18 from "@/public/images/phuonghoang/csvc/csvc18.png";
import Csvc19 from "@/public/images/phuonghoang/csvc/csvc19.png";
import Csvc20 from "@/public/images/phuonghoang/csvc/csvc20.png";
import Csvc21 from "@/public/images/phuonghoang/csvc/csvc21.png";
import Csvc22 from "@/public/images/phuonghoang/csvc/csvc22.png";
import Csvc23 from "@/public/images/phuonghoang/csvc/csvc23.png";
import Csvc24 from "@/public/images/phuonghoang/csvc/csvc24.png";
import Csvc25 from "@/public/images/phuonghoang/csvc/csvc25.png";
import Csvc26 from "@/public/images/phuonghoang/csvc/csvc26.png";
import Csvc27 from "@/public/images/phuonghoang/csvc/csvc27.png";
import Csvc28 from "@/public/images/phuonghoang/csvc/csvc28.png";
import Csvc29 from "@/public/images/phuonghoang/csvc/csvc29.png";
import Csvc30 from "@/public/images/phuonghoang/csvc/csvc30.png";
import Csvc31 from "@/public/images/phuonghoang/csvc/csvc31.png";
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
    },
  ];
  const images = [Csvc1, Csvc2];
  const images2 = [Csvc6, Csvc7, Csvc8, Csvc9];
  const images3 = [Csvc10, Csvc11];
  const images4 = [Csvc11, Csvc12, Csvc13, Csvc14, Csvc15];
  const images5 = [Csvc16, Csvc17, Csvc18, Csvc19, Csvc20];
  const images6 = [Csvc21, Csvc22, Csvc23, Csvc24, Csvc25, Csvc26];
  const images7 = [Csvc27, Csvc28, Csvc29];
  const images8 = [Csvc30, Csvc31];

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
          <h3 className="h3  text-center pb-3 mb-10 pt-10 border-b-[3px] border-rose-500 w-fit mx-auto">
            Cơ sở vật chất
          </h3>
          <p className="p pb-4">
            Là thành viên các trường quốc tế Cambridge, ROYAL SCHOOL nổi bật với
            hệ thống cơ sở vật chất đạt chuẩn quốc tế, mang đến cho học sinh
            những điều kiện tốt nhất để phát triển. ROYAL SCHOOL luôn chú trọng
            việc mang đến một môi trường học tập an toàn, thoải mái và truyền
            cảm hứng để học sinh được thỏa sức sáng tạo, trải nghiệm và phát huy
            tối đa tiềm năng bản thân, sẵn sàng vươn đến thành công.
          </p>
          {/* 1 */}
          <div>
            <h3 className="h2 font-playfair text-rose-500 pt-5 pb-4">
              HỆ THỐNG PHÒNG HỌC CHUẨN QUỐC TẾ
            </h3>
            <p className="p pb-4">
              Lớp học của các bạn học sinh được thiết kế theo hướng năng động và
              tiện dụng. Tùy theo độ tuổi của các bé mà lớp học sẽ được bố trí
              bàn ghế phù hợp. Bên cạnh đó, mỗi lớp học còn được trang bị máy
              chiếu công nghệ, bảng từ, tủ cá nhân,... hỗ trợ hữu ích cho việc
              học tập của các bé. Ngoài ra, tại các lớp còn được trang bị góc
              học tập của lớp với báo tường, không gian xanh, giúp những ngày
              đến Trường của các bé trở nên vui tươi và tràn đầy năng lượng.
            </p>
            <div className="grid grid-cols-2 gap-x-3 pt-10">
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
          {/* 2 */}
          <div>
            <h3 className="h2 font-playfair text-rose-500 pt-20 pb-4">
              HỆ THỐNG PHÒNG THỰC HÀNH STEM, VẬT LÝ, HÓA HỌC, SINH HỌC
            </h3>
            <p className="p pb-4">
              Các phòng thực hành STEM, thí nghiệm Vật lý, Hóa học, Sinh học với
              trang thiết bị hiện đại và an toàn, giúp học sinh thỏa sức khám
              phá tri thức khi được vận dụng những kiến thức đã học vào thực tế,
              đồng thời tạo điều kiện để học sinh tiếp cận và thích ứng nhanh
              với những thay đổi trong thời đại công nghệ 4.0.
            </p>
            <div className="grid grid-cols-2 gap-x-3 pt-6">
              <div className="">
                <div className="relative overflow-hidden">
                  <Image
                    className="h-full w-full object-cover transition-transform duration-300 transform hover:scale-125"
                    src={Csvc3}
                    alt="image"
                    priority
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="relative overflow-hidden">
                  <Image
                    className="h-full w-full object-cover transition-transform duration-300 transform hover:scale-125"
                    src={Csvc4}
                    alt="image"
                    priority
                  />
                </div>
                <div className="relative overflow-hidden">
                  <Image
                    className="h-full w-full object-cover transition-transform duration-300 transform hover:scale-125"
                    src={Csvc5}
                    alt="image"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
          {/* 3 */}
          <div>
            <h3 className="h2 font-playfair text-rose-500 pt-20 pb-4">
              PHÒNG ÂM NHẠC VÀ MỸ THUẬT
            </h3>
            <p className="p pb-4">
              Đầu tư bài bản từ sân khấu đến nhạc cụ, phòng Âm nhạc ROYAL SCHOOL
              mang đến cho học sinh điều kiện tối ưu để phát triển chỉ số cảm
              xúc EQ, sự tự tin để thể hiện tài năng, đam mê và tỏa sáng trên
              ánh đèn sân khấu. Với đầy đủ các nhạc cụ từ truyền thống đến hiện
              đại như: đàn, trống, kèn, piano, organ,... Trạm Âm nhạc chính là
              nơi mang đến sự trẻ trung, năng động và phát triển những tài năng
              âm nhạc.
            </p>
            <p className="p pb-4">
              Được thiết kế với không gian năng động, phòng Mỹ thuật là nơi khơi
              gợi tiềm năng nghệ thuật, là không gian được sự yêu thích và mong
              đợi hằng tuần của các em học sinh. Được trang bị đầy đủ bảng vẽ,
              họa cụ, bút vẽ chuyên dụng, sáp màu,... học sinh tại ROYAL SCHOOL
              sẽ được thỏa sức học tập và phát triển các năng khiếu nghệ thuật,
              hội họa ngay từ bé cho các em.
            </p>
            <div className="grid grid-cols-2 gap-3 pt-10">
              {images2.map((image, index) => (
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
          {/* 4 */}
          <div>
            <h3 className="h2 font-playfair text-rose-500 pt-20 pb-4">
              PHÒNG CÔNG NGHỆ THÔNG TIN (ICT)
            </h3>
            <p className="p pb-4">
              Phòng ICT với hệ thống máy tính hiện đại và những phần mềm thiết
              yếu dành cho văn phòng, nghệ thuật, thiết kế; đường truyền
              Internet tốc độ cao giúp học sinh tiếp cận kiến thức và kỹ năng
              công nghệ thông tin từ cơ bản đến nâng cao – yếu tố vô cùng quan
              trọng trong thời đại kỹ thuật số.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-10">
              {images3.map((image, index) => (
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

          {/* 5 */}
          <div>
            <h3 className="h2 font-playfair text-rose-500 pt-20 pb-4">
              THƯ VIỆN
            </h3>
            <p className="p pb-4">
              Không gian thư viện đa sắc màu với phong phú các đầu sách bằng cả
              tiếng Việt và tiếng Anh được thiết kế theo môn học, theo chủ đề và
              theo lứa tuổi từ mầm non đến phổ thông. Không chỉ là không gian
              học tập, làm việc nhóm, thư viện là nơi mở ra cánh cửa để học sinh
              khám phá thế giới qua từng trang sách.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-10">
              {images4.map((image, index) => (
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
          {/* 6 */}
          <div>
            <h3 className="h2 font-playfair text-rose-500 pt-20 pb-4">
              KHÔNG GIAN HOẠT ĐỘNG THỂ THAO
            </h3>
            <p className="p pb-4">
              Hệ thống Sân thể thao đa năng, Hồ bơi và Phòng Sport với thiết kế
              đạt chuẩn về độ an toàn và linh hoạt, mang đến cho học sinh đa
              dạng các không gian để rèn luyện sức khỏe và bung hết sức mình
              trong các giải thi đấu thể thao quy mô trong và ngoài Nhà trường.
            </p>
            <div className="grid grid-cols-2 gap-3 pt-10">
              {images5.map((image, index) => (
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
          {/* 7 */}
          <div>
            <h3 className="h2 font-playfair text-rose-500 pt-20 pb-4">
              KHÔNG GIAN HOẠT ĐỘNG NGOÀI TRỜI
            </h3>
            <p className="p pb-4">
              ROYAL SCHOOL kết hợp hài hòa giữa khối công trình hiện đại và
              không gian thiên nhiên xanh mát là môi trường để các em học sinh
              thư giãn, dễ dàng gần gũi và khám phá thiên nhiên tươi đẹp, khơi
              gợi nguồn cảm hứng sáng tạo và kích thích sự phát triển của các
              giác quan.
            </p>
            <div className="grid grid-cols-2 gap-3 pt-10">
              {images6.map((image, index) => (
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
          {/* 8*/}
          <div>
            <h3 className="h2 font-playfair text-rose-500 pt-20 pb-4">
              NHÀ ĂN
            </h3>
            <p className="p pb-4">
              ROYAL SCHOOL mang đến nguồn cảm hứng tích cực cho học sinh trong
              từng bữa ăn với không gian nhà ăn rộng rãi, thoáng mát, đảm bảo an
              toàn vệ sinh; thực đơn đa dạng, các món ăn được thay đổi liên tục
              do chính các đầu bếp chuyên nghiệp chế biến ngay tại trường không
              chỉ đáp ứng nhu cầu sức khoẻ mà còn tăng cường phát triển thể chất
              cho học sinh.
            </p>
            <p className="p pb-4">
              Tại ROYAL SCHOOL, bếp được bố trí theo nguyên tắc một chiều, không
              khí thông thoáng và luôn luôn hợp vệ sinh. Hơn nữa, Nhà trường chú
              trọng việc chọn lọc nghiêm ngặt nguồn thực phẩm an toàn, kiểm định
              nguồn gốc rõ ràng để cung cấp cho mỗi bữa ăn của các em học sinh.
            </p>
            <div className="grid grid-cols-2 gap-3 pt-10">
              {images7.map((image, index) => (
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
          {/* 9 */}
          <div>
            <h3 className="h2 font-playfair text-rose-500 pt-20 pb-4">
              PHÒNG Y TẾ
            </h3>
            <p className="p pb-4">
              Phòng Y tế được trang bị các thiết bị, dụng cụ chăm sóc sức khỏe
              thiết yếu với sự vận hành của bác sĩ chuyên khoa cùng đội ngũ nhân
              viên y tế tận tâm luôn túc trực tại trường nhằm đảm bảo tình hình
              sức khỏe của học sinh trong điều kiện tốt nhất. Hơn thế nữa, ROYAL
              SCHOOL còn có đội ngũ chuyên gia tư vấn tâm lý cho các em học sinh
              để có thể cung cấp những thông tin cơ bản nhất cho học sinh khi
              cần thiết.
            </p>
            <div className="grid grid-cols-2 gap-3 pt-10">
              {images8.map((image, index) => (
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
        </div>
      </section>
    </>
  );
}
