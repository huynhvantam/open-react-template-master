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
    { href: "/ve-chung-toi/doi-ngu-lanh-dao", content: t("lanh-dao") },
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
        text1="Trang chủ / Về chúng tôi"
        text2="Giới thiệu chung"
      />
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <PageDautien className="" links={links} highlight={highlight} />

        <h2 className="pt-20 h3  text-center border-b-[3px] border-b-rose-500 pb-6 w-fit mx-auto">
          VỀ CHÚNG TÔI
        </h2>
        <p className="p py-8">
          Được thành lập từ năm 2009, Giáo Dục Phượng Hoàng được xem là đơn vị
          tiên phong trong lĩnh vực giáo dục song ngữ quốc tế tại Hà Nội. Với
          triết lý giáo dục “Kiến tạo công dân toàn cầu", Giáo Dục Phượng Hoàng
          đã và đang nỗ lực để trở thành một ngôi trường Việt Nam mang tầm đẳng
          cấp quốc tế, trở thành cái nôi phát triển của học sinh, đồng thời là
          địa chỉ uy tín để các bậc phụ huynh tin tưởng, lựa chọn.
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
                      className="max-w-full mx-auto md:max-w-none h-auto"
                      src={FeatImage01}
                      width={540}
                      height={405}
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
                        15 năm
                      </div>
                      <h3 className="text-2xl mb-3 font-playfair text-rose-500">
                        hình thành và phát triển…
                      </h3>
                      <p className="mb-4 pt-4">
                        Tính đến nay, Giáo Dục Phượng Hoàng đã có gần 15 năm
                        hình thành và phát triển với 100+ học sinh đạt chứng chỉ
                        IGCSE, 70+ học sinh đạt chứng chỉ A-level / IFD. Tự hào
                        hơn nữa, 100% học sinh tốt nghiệp THPT Quốc Gia, 100%
                        học sinh ứng tuyển thành công vào các trường đại học
                        trong và ngoài nước. Để có được những kết quả đó, trong
                        suốt 15 năm qua, Giáo Dục Phượng Hoàng luôn nỗ lực duy
                        trì và đảm bảo dịch vụ thông qua quy trình quản lý chất
                        lượng dạy, học, vận hành nghiêm ngặt, chặt chẽ theo tiêu
                        chuẩn Quốc tế với kinh nghiệm và sự nhiệt thành của các
                        nhà giáo dục và quản lý Việt Nam, Quốc tế. Với tôn chỉ
                        hoạt động: “Lấy học sinh làm trung tâm”, thầy cô và cán
                        bộ nhà trường luôn thực hành đúng các chuẩn mực đạo đức
                        nghề nghiệp: Tôn trọng, yêu thương, lắng nghe chia sẻ,
                        tâm nguyện của mọi học sinh.
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
                      className="max-w-full mx-auto md:max-w-none h-auto"
                      src={FeatImage01}
                      width={540}
                      height={405}
                      alt="Features 02"
                    />
                  </div>
                  {/* Content */}
                  <div
                    className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                    data-aos="fade-left"
                  >
                    <div className="md:pl-4 lg:pl-12 xl:pl-16">
                      <h4 className="font-playfair text-[40px] text-rose-500 leading-9">
                        Chương trình giáo dục
                      </h4>
                      <h4 className="font-playfair text-[40px] text-rose-500">
                        song ngữ chuẩn quốc tế
                      </h4>

                      <h5 className="text-2xl mb-3 font-playfair text-rose-500">
                        “Cái nôi” tạo ra những công dân toàn cầu
                      </h5>
                      <p className="mb-4 pt-4">
                        Nếu như các trường học truyền thống chú trọng phần lớn
                        thời gian cho kiến thức và những môn học cơ bản thì Giáo
                        Dục Phượng Hoàng với mô hình giáo dục liên cấp từ bậc
                        Mầm non – Tiền tiểu học – Tiểu học – THCS – THPT cùng
                        chương trình học thuật toàn diện, kết hợp hài hoà giữa
                        các bộ môn theo tiêu chuẩn của Bộ Giáo dục & Đào tạo
                        Việt Nam, các bộ môn Quốc tế theo tiêu chuẩn của Vương
                        Quốc Anh giúp trau dồi, rèn luyện & phát triển toàn diện
                        KIẾN THỨC – KỸ NĂNG – PHẨM CHẤT, giúp các học sinh trở
                        thành những “Công dân toàn cầu”.
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
                      className="max-w-full mx-auto md:max-w-none h-auto"
                      src={FeatImage01}
                      width={540}
                      height={405}
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

                      <p className="mb-4 pt-4">
                        Không chỉ được tích luỹ, tiếp cận kiến thức từ các môn
                        học, các Acers (Học sinh Giáo Dục Phượng Hoàng) còn được
                        định hướng bài bản giúp tăng cường kỹ năng sống, bồi
                        dưỡng thể lực, ý thức kỷ luật, phẩm chất và tâm thế của
                        công dân thế hệ mới, sẵn sàng dấn thân, hội nhập, thành
                        công hơn trong thời đại số hoá và toàn cầu hoá hiện nay.
                        Tại Giáo Dục Phượng Hoàng, sự an toàn, niềm vui tới
                        trường hàng ngày và sự phát triển tích cực của học sinh
                        đóng vai trò nòng cốt, là mục tiêu, đích đến là cũng là
                        động lực để nhà trường không ngừng thay đổi, học hỏi và
                        cải thiện các hoạt động liên quan.
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
                      className="max-w-full mx-auto md:max-w-none h-auto"
                      src={FeatImage01}
                      width={540}
                      height={405}
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
                      <div className="font-playfair text-[40px] text-rose-500">
                        Mục đích to lớn hơn
                      </div>
                      <p className="mb-4 pt-4 ">
                        Lợi nhuận không phải là mục đích cuối cùng của Giáo Dục
                        Phượng Hoàng. Chúng tôi tin rằng, Giáo Dục Phượng Hoàng
                        sẽ là nơi lý tưởng để mọi học sinh phát triển được tối
                        đa tài năng của mình. Qua quá trình học tập, phát triển
                        toàn diện về thái độ, kỹ năng, kiến thức, rèn luyện cả
                        trí và lực, các thế hệ học sinh khi ra trường sẽ trở
                        thành người có ích, mang lại của cải, tri thức cho xã
                        hội và làm chủ tương lai của đất nước.
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
