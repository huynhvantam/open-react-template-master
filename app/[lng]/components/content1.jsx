import Image from "next/image";
import Image1 from "@/public/images/phuonghoang/truonghoc.jpg";
import Image2 from "@/public/images/phuonghoang/hocsinh3.jpg";
import Icon1 from "@/public/images/homepage/icon/Frame-6.png";
import Icon2 from "@/public/images/homepage/icon/Frame-5.png";
import Icon3 from "@/public/images/homepage/icon/Frame-2.png";
import Icon4 from "@/public/images/homepage/icon/Frame-3.png";
export default function Content1() {
  return (
    <section className="pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="grid lg:grid-cols-2 gap-x-20">
          <div>
            <h4 className="hh4" data-aos="fade-up">
              /VỀ CHÚNG TÔI
            </h4>
            <div
              className="h3 mt-6 mb-14"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Trường song ngữ <br /> tiên phong tại Huế
            </div>
            <p className="p" data-aos="fade-up" data-aos-delay="200">
              Giáo Dục Phượng Hoàng là hệ thống trường liên cấp từ Mầm Non đến
              Trung Học Cơ Sở tại Huế, với mục tiêu giáo dục là “Kiến Tạo Công
              Dân Toàn Cầu”. Giáo Dục Phượng Hoàng là trường song ngữ tiên phong
              trên địa bàn thành phố Huế và đã đi vào hoạt động từ năm 2011.
            </p>
            <div className="grid lg:grid-cols-2 pt-[60px]">
              <div className="">
                <div data-aos="fade-up" data-aos-delay="300">
                  <p className="numberbig w-32">
                    <Image
                      loading="lazy"
                      src={Icon1}
                      alt="icon"
                      height={38}
                      width={38}
                      className="inline mr-2"
                    />
                    13+
                  </p>
                  <p className="p font-bold">
                    Năm kinh nghiệm đào tạo
                    <span className="hidden lg:block"></span> song ngữ
                  </p>
                </div>
                <div data-aos="fade-up" data-aos-delay="400">
                  <p className="numberbig pt-[60px] w-32">
                    <Image
                      loading="lazy"
                      src={Icon2}
                      alt="icon"
                      height={38}
                      width={38}
                      className="inline mr-2"
                    />
                    20
                  </p>
                  <p className="p font-bold">
                    Sĩ số trung bình <br />
                    trong lớp học
                  </p>
                </div>
              </div>
              <div>
                <div data-aos="fade-up" data-aos-delay="500">
                  <p className="numberbig pt-[60px] lg:pt-[120px]">
                    <Image
                      loading="lazy"
                      src={Icon3}
                      alt="icon"
                      height={38}
                      width={38}
                      className="inline mr-2"
                    />
                    100%
                  </p>
                  <p className="p font-bold">
                    Học sinh tốt nghiệp THPT và ứng tuyển thành công vào các
                    trường Đại học trong nước và Quốc tế
                  </p>
                </div>
                <div data-aos="fade-up" data-aos-delay="600">
                  <p className="numberbig pt-[60px]">
                    <Image
                      loading="lazy"
                      src={Icon4}
                      alt="icon"
                      height={38}
                      width={38}
                      className="inline mr-2"
                    />
                    99%
                  </p>
                  <p className="p font-bold">
                    Phụ huynh đánh giá cao về môi trường và chất lượng dạy, học
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="200">
            <Image
              loading="lazy"
              src={Image1}
              alt="picture"
              className="mt-14"
            />
            {/* <Image
              loading="lazy"
              src={Image2}
              alt="picture"
              className="mb-14"
            /> */}
            <p className="p pt-4">
              Đến với Giáo Dục Phượng Hoàng, học sinh có cơ hội hòa mình vào một
              môi trường học Song Ngữ: Việt Nam và Quốc tế...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
