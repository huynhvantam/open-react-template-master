import Image from "next/image";
import Image1 from "@/public/images/phuonghoang/truonghoc.jpg";
import Image2 from "@/public/images/phuonghoang/hocsinh3.jpg";
import Icon1 from "@/public/images/icon/Frame-6.png";
import Icon2 from "@/public/images/icon/Frame-5.png";
import Icon3 from "@/public/images/icon/Frame-2.png";
import Icon4 from "@/public/images/icon/Frame-3.png";
export default function Content1() {
  return (
    <section className="pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="grid grid-cols-2 gap-x-20">
          <div>
            <h4 className="hh4" data-aos="fade-up">
              /VỀ CHÚNG TÔI
            </h4>
            <div
              className="h3 mt-6 mb-14"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Trường song ngữ <br /> tiên phong tại Huế
            </div>
            <p className="p" data-aos="fade-up" data-aos-delay="400">
              Giáo Dục Phượng Hoàng là hệ thống trường liên cấp từ Mầm Non đến
              Trung Học Phổ Thông tại Huế, với mục tiêu giáo dục là “Kiến Tạo
              Công Dân Toàn Cầu”. Giáo Dục Phượng Hoàng là trường song ngữ tiên
              phong trên địa bàn thành phố Huế và đã đi vào hoạt động từ năm
              2009.
            </p>
            <div className="grid grid-cols-2 pt-[60px]">
              <div className="">
                <div>
                  <p
                    className="numberbig w-32"
                    data-aos="fade-up"
                    data-aos-delay="600"
                  >
                    <Image
                      priority="true"
                      src={Icon1}
                      alt="icon"
                      height={38}
                      width={38}
                      data-aos="fade-up"
                      className="inline mr-2"
                    />
                    15+
                  </p>
                  <p
                    className="p font-bold"
                    data-aos="fade-up"
                    data-aos-delay="600"
                  >
                    Năm kinh nghiệm đào tạo
                    <br /> song ngữ
                  </p>
                </div>
                <div>
                  <p
                    className="numberbig pt-[60px] w-32"
                    data-aos="fade-up"
                    data-aos-delay="800"
                  >
                    <Image
                      priority="true"
                      src={Icon2}
                      alt="icon"
                      height={38}
                      width={38}
                      data-aos="fade-up"
                      className="inline mr-2"
                    />
                    23
                  </p>
                  <p
                    className="p font-bold"
                    data-aos="fade-up"
                    data-aos-delay="800"
                  >
                    Sĩ số trung bình <br />
                    trong lớp học
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <p
                    className="numberbig pt-[120px]"
                    data-aos="fade-up"
                    data-aos-delay="700"
                  >
                    <Image
                      priority="true"
                      src={Icon3}
                      alt="icon"
                      height={38}
                      width={38}
                      data-aos="fade-up"
                      className="inline mr-2"
                    />
                    100%
                  </p>
                  <p
                    className="p font-bold"
                    data-aos="fade-up"
                    data-aos-delay="700"
                  >
                    Học sinh tốt nghiệp THPT và ứng tuyển thành công vào các
                    trường đh trong nước và Quốc tế
                  </p>
                </div>
                <div>
                  <p
                    className="numberbig pt-[60px]"
                    data-aos="fade-up"
                    data-aos-delay="900"
                  >
                    <Image
                      priority="true"
                      src={Icon4}
                      alt="icon"
                      height={38}
                      width={38}
                      data-aos="fade-up"
                      className="inline mr-2"
                    />
                    99%
                  </p>
                  <p
                    className="p font-bold"
                    data-aos="fade-up"
                    data-aos-delay="900"
                  >
                    Phụ huynh đánh giá cao về môi trường và chất lượng dạy, học
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <Image
              priority="true"
              src={Image1}
              alt="picture"
              data-aos="fade-up"
              className="mt-14"
            />
            <Image
              priority="true"
              src={Image2}
              alt="picture"
              data-aos="fade-up"
              className="mb-14"
            />
            <p className="p" data-aos="fade-up" data-aos-delay="200">
              Đến với Giáo Dục Phượng Hoàng, học sinh có cơ hội hòa mình vào một
              môi trường học Song Ngữ: Việt Nam và Quốc tế...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
