"use client";
import Image from "next/image";
import Link from "next/link";
import Image1 from "@/public/images/homepage/q.jpg";
import Image2 from "@/public/images/homepage/tieu hoc.jpg";
import Image3 from "@/public/images/homepage/trunghoc.jpg";
import Image4 from "@/public/images/homepage/anhngu.jpg";
// Định nghĩa mảng các đối tượng chứa dữ liệu cho mỗi phần tử
const items = [
  {
    href: "/chuong-trinh-dao-tao/mam-non",
    alt: "Mam Non Program",
    imageSrc: Image1,
    caption: "CHƯƠNG TRÌNH MẦM NON",
  },
  {
    href: "/chuong-trinh-dao-tao/mam-non",
    alt: "Mam Non Program",
    imageSrc: Image2,
    caption: "CHƯƠNG TRÌNH TIỂU HỌC",
  },
  {
    href: "/chuong-trinh-dao-tao/mam-non",
    alt: "Mam Non Program",
    imageSrc: Image3,
    caption: "CHƯƠNG TRÌNH TRUNG HỌC",
  },
  {
    href: "/chuong-trinh-dao-tao/mam-non",
    alt: "Mam Non Program",
    imageSrc: Image4,
    caption: "TRUNG TÂM ANH NGỮ",
  },
  // Thêm các phần tử khác tại đây nếu cần
];

export default function Content2() {
  return (
    <section
      className="mt-20 lg:mt-40 py-20 lg:py-36"
      style={{
        backgroundImage: "linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative text-gray-600">
        <div className="grid lg:grid-cols-2 gap-x-10">
          <div>
            <div className="hh4" data-aos="fade-up">
              /CHƯƠNG TRÌNH ĐÀO TẠO
            </div>
            <div
              className="h3 mt-6 mb-5 text-gray-700 text-left"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Các cấp học toàn diện tại{" "}
              <span className="hidden lg:block"></span> Giáo Dục Phượng Hoàng
            </div>
            <p className="p mb-5" data-aos="fade-up" data-aos-delay="200">
              Tại Giáo Dục Phượng Hoàng, học sinh sẽ được hòa mình và trải
              nghiệm một môi trường giáo dục được thiết kế riêng biệt và độc đáo
              với mục tiêu dẫn lối thành công, giúp trang bị những kỹ năng và
              tri thức cho học sinh tiến xa trên con đường trở thành những công
              dân toàn cầu tương lai.
            </p>
            <p className="p mb-5" data-aos="fade-up" data-aos-delay="300">
              Giáo Dục Phượng Hoàng hân hạnh mang trong mình sứ mệnh tiên phong,
              đem đến cho học sinh một chương trình học tập toàn diện bao gồm:
              Mầm non, Tiểu học, Trung học cơ sơ và Trung tâm anh ngữ Phượng
              Hoàng.
            </p>
            <Link
              href="/chuong-trinh-dao-tao"
              className="btn text-lg collapse lg:visible"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Chương trình đào tạo{" >"}
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 ">
            {/* Lặp qua mảng items để render các phần tử */}
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-rose-400 font-semibold hover:text-0 bg-white h-fit px-2"
              >
                <div className="pt-4 pb-2">
                  <Image
                    src={item.imageSrc}
                    alt={item.alt}
                    data-aos="fade-up"
                    loading="lazy"
                    className="lg:h-[190px]"
                  />
                  <div className="text-center pt-2" data-aos="fade-up">
                    {item.caption}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <Link
            href="/chuong-trinh-dao-tao"
            className="btn text-lg lg:hidden mt-10"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Chương trình đào tạo{" >"}
          </Link>
        </div>
      </div>
    </section>
  );
}
