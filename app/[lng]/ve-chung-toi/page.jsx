import Link from "next/link";
import { useTranslation } from "../../i18n";
import { Header } from "../components/Header/client";
import bannerabout from "@/public/images/banner/banner-home.jpg";
import BannerImage from "../components/banner";
import VideoThumb from "@/public/images/oneuse/thumpvideo.jpg";
import FeatImage02 from "@/public/images/banner/banner-mobile.png";
import ModalVideo from "../../components/modal-video";
import PageDautien from "../components/pagedautien";
import Image from "next/image";
import FeatImage1 from "@/public/images/vechungtoi/hocsinh1.jpg";
import FeatImage2 from "@/public/images/vechungtoi/hocsinh2.jpg";
import FeatImage3 from "@/public/images/vechungtoi/hocsinh3.jpg";
import FeatImage4 from "@/public/images/vechungtoi/hocsinh4.jpg";
export async function generateMetadata({ params: { lng } }) {
  const { t } = await useTranslation(lng, "header");
  const title1 = t("about");
  const title2 = t("giao-duc-ph");
  return { title: `${title1} - ${title2}` };
}
export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng, "header");
  const highlight = true;
  const links = [
    { href: "/ve-chung-toi/", content: t("gioi-thieu"), hightlight: true },
    { href: "/ve-chung-toi/tam-nhin-su-menh", content: t("tam-nhin") },
    { href: "/ve-chung-toi/doi-ngu-giao-vien", content: t("giao-vien") },
    {
      href: "/ve-chung-toi/thong-diep-tu-ban-lanh-dao",
      content: t("lanh-dao"),
    },
    // {
    //   href: "/ve-chung-toi/thanh-tich-cua-chung-toi",
    //   content: t("thanh-tich"),
    // },
  ];
  return (
    <>
      <Header lng={lng} path="/ve-chung-toi" />
      <BannerImage
        src={bannerabout}
        srcmobile={FeatImage02}
        text1={t("home") + " / " + t("about")}
        text2={t("gioi-thieu")}
      />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 ">
        <PageDautien className="" links={links} highlight={highlight} />

        <h2 className=" pt-10 lg:pt-20 h3  text-center border-b-[3px] border-b-rose-500 pb-6 w-fit mx-auto">
          VỀ CHÚNG TÔI
        </h2>
        <p className="p py-8">
          Giáo dục Phượng Hoàng được thành lập vào mùa hè năm 2011 trong niềm
          tin về nhu cầu thực tế đối với một ngôi trường tại Huế có thể đem lại
          cho các học sinh nền giáo dục có chất lượng giúp các em tạo dựng nền
          tảng vững chắc mở cánh cửa tương lai tươi sáng.
        </p>
        <ModalVideo
          className="pb-20"
          thumb={VideoThumb}
          thumbWidth={1920}
          thumbHeight={1080}
          thumbAlt="Modal video thumbnail"
          video="/videos/video.mp4"
          videoWidth={1920}
          videoHeight={1080}
          priority="true"
        />
        <div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="py-12 md:py-20 border-t border-gray-800">
              {/* Section header */}

              {/* Items */}
              <div className="grid gap-20">
                {/* 1st item */}
                <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                  {/* Image */}
                  <div
                    className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                    data-aos="fade-up"
                  >
                    <Image
                      loading="lazy"
                      className="max-w-full mx-auto md:max-w-none h-auto"
                      src={FeatImage1}
                      width={540}
                      alt="Features 01"
                    />
                  </div>
                  {/* Content */}
                  <div
                    className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                    data-aos="fade-right"
                  >
                    <div className="md:pr-4 lg:pr-12 xl:pr-16">
                      <div className="font-playfair text-[40px] text-rose-500">
                        13 năm
                      </div>
                      <h3 className="text-2xl mb-3 font-playfair text-rose-500">
                        hình thành và phát triển…
                      </h3>
                      <p className="mb-4 pt-4 p ">
                        Giáo dục Phượng Hoàng cam kết mang lại một hệ thống giáo
                        dục bền vững tại Việt Nam và được thế giới công nhận.
                        Mục đích của chúng tôi đó là tất cả các học sinh theo
                        học tại Giáo Dục Phượng Hoàng đều có thể tham gia vào
                        các môi trường giáo dục trên thế giới mà không gặp bất
                        kỳ rào cản nào. Mỗi học sinh được thôi thúc để trở thành
                        những người công dân toàn cầu biết tìm kiếm tạo ra một
                        thế giới hòa bình, tốt đẹp hơn thông qua tương trợ và
                        chấp nhận lẫn nhau. Lòng tôn trọng và sự tha thứ luôn
                        luôn được chúng tôi khuyến khích ở các em, giúp các em
                        hình thành cái nhìn công bằng trong cộng đồng.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2nd item */}
                <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                  {/* Image */}
                  <div
                    className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl"
                    data-aos="fade-up"
                  >
                    <Image
                      loading="lazy"
                      className="max-w-full mx-auto md:max-w-none h-auto"
                      src={FeatImage2}
                      width={540}
                      alt="Features 02"
                    />
                  </div>
                  {/* Content */}
                  <div
                    className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                    data-aos="fade-left"
                  >
                    <div className="md:pl-4 lg:pl-12 xl:pl-16">
                      <h4 className="font-playfair text-[40px] text-rose-500 text-left ">
                        Chương trình giáo dục song ngữ chuẩn quốc tế
                      </h4>
                      <h4 className="font-playfair text-[40px] text-rose-500"></h4>

                      <h5 className="text-2xl mb-3 font-playfair text-rose-500">
                        “Cái nôi” tạo ra những công dân toàn cầu
                      </h5>
                      <p className="mb-4 pt-4 p">
                        Nếu như các trường học truyền thống chú trọng phần lớn
                        thời gian cho kiến thức và những môn học cơ bản thì Giáo
                        Dục Phượng Hoàng với mô hình giáo dục liên cấp từ bậc
                        Mầm non – Tiền tiểu học – Tiểu học – THCS cùng chương
                        trình học thuật toàn diện, kết hợp hài hoà giữa các bộ
                        môn theo tiêu chuẩn của Bộ Giáo dục & Đào tạo Việt Nam,
                        các bộ môn Quốc tế theo tiêu chuẩn của Vương Quốc Anh
                        giúp trau dồi, rèn luyện & phát triển toàn diện KIẾN
                        THỨC – KỸ NĂNG – PHẨM CHẤT, giúp các học sinh trở thành
                        những “Công dân toàn cầu”.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 3rd item */}
                <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                  {/* Image */}
                  <div
                    className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                    data-aos="fade-up"
                  >
                    <Image
                      loading="lazy"
                      className="max-w-full mx-auto md:max-w-none h-auto"
                      src={FeatImage3}
                      width={540}
                      alt="Features 03"
                    />
                  </div>
                  {/* Content */}
                  <div
                    className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                    data-aos="fade-right"
                  >
                    <div className="md:pr-4 lg:pr-12 xl:pr-16">
                      <h5 className="text-2xl mb-3 font-playfair text-rose-500 leading-7">
                        Nơi tu dưỡng, rèn luyện cả
                      </h5>
                      <h4 className="font-playfair text-[40px] text-rose-500 leading-7">
                        trí & lực{" "}
                        <span className="text-2xl mb-3 font-playfair text-rose-500">
                          để học sinh
                        </span>
                      </h4>

                      <h4 className="font-playfair text-[40px] text-rose-500 leading-10">
                        <span className="text-2xl mb-3 font-playfair text-rose-500">
                          trưởng thành trong
                        </span>{" "}
                        hạnh phúc
                      </h4>

                      <p className="mb-4 pt-4 p">
                        Để đạt được mục tiêu này, Giáo Dục Phượng Hoàng sẽ mời
                        các giáo viên có kinh nghiệm và có trình độ chuyên môn
                        của Việt Nam và các quốc gia khác tham gia cố vấn, giảng
                        dạy tại đây. Chúng tôi lựa chọn giáo trình nhấn mạnh vào
                        khuyến khích và nuôi dưỡng thành tựu trong mỗi học sinh.
                        Các em là tương lai và Giáo Dục Phượng Hoàng sẽ đem lại
                        cho các em cơ hội để xây dựng tương lai với những khả
                        năng mới.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 4nd item */}
                <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                  {/* Image */}
                  <div
                    className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl"
                    data-aos="fade-up"
                  >
                    <Image
                      loading="lazy"
                      className="max-w-full mx-auto md:max-w-none h-auto"
                      src={FeatImage4}
                      width={540}
                      alt="Features 02"
                    />
                  </div>
                  {/* Content */}
                  <div
                    className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                    data-aos="fade-left"
                  >
                    <div className="md:pl-4 lg:pl-12 xl:pl-16">
                      <h3 className="text-2xl font-playfair text-rose-500">
                        Hoạt động với
                      </h3>
                      <div className="font-playfair text-[40px] text-rose-500 text-left">
                        Mục đích to lớn hơn
                      </div>
                      <p className="mb-4 pt-4 p ">
                        Giáo dục Phượng Hoàng thừa nhận sự tương trợ lẫn nhau
                        giữa các quốc gia và dân tộc trong cộng đồng toàn cầu và
                        cam kết cho sự phát triển của học sinh nhằm đáp ứng các
                        thách thức của thế kỷ 21 thông qua giữ gìn và tôn vinh
                        các giá trị truyền thống của Việt Nam đồng thời hướng
                        tới các tiêu chuẩn quốc tế cao nhất.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </>
  );
}
