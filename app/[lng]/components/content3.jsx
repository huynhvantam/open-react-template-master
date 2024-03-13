'use client'
import Image from 'next/image';
import Link from 'next/link';
import Image1 from "@/public/images/homepage/image-home1.png"
// Định nghĩa mảng các đối tượng chứa dữ liệu cho mỗi phần tử
const items = [
  {
    href: "/chuong-trinh/mam-non",
    alt: "Mam Non Program",
    imageSrc: Image1,
    caption: "CHƯƠNG TRÌNH MẦM NON"
  },
  {
    href: "/chuong-trinh/mam-non",
    alt: "Mam Non Program",
    imageSrc: Image1,
    caption: "CHƯƠNG TRÌNH TIỂU HỌC"
  },
  {
    href: "/chuong-trinh/mam-non",
    alt: "Mam Non Program",
    imageSrc: Image1,
    caption: "CHƯƠNG TRÌNH TRUNG HỌC"
  },
  {
    href: "/chuong-trinh/mam-non",
    alt: "Mam Non Program",
    imageSrc: Image1,
    caption: "TRUNG TÂM ANH NGỮ"
  },
  // Thêm các phần tử khác tại đây nếu cần
];

export default function Content3() {
  return (
    <section className='bg-green-300  py-36'>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className='grid grid-cols-2 gap-x-10'>
          <Image src={Image1} alt="picture" layout="responsive" data-aos="fade-up" className='' />
          <div>
            <div className='hh4' data-aos="fade-up" >/CHƯƠNG TRÌNH ĐÀO TẠO</div>
            <div className='h25 mt-6 mb-5' data-aos="fade-up" data-aos-delay="200">Điểm nổi bật của Chương trình <br /> Song ngữ Anh - Việt</div>
            <p className='p mb-5' data-aos="fade-up" data-aos-delay="400">Tại Hanoi Academy, học sinh sẽ được hòa mình và trải nghiệm một môi trường giáo dục được thiết kế riêng biệt và độc đáo với mục tiêu dẫn lối thành công, giúp trang bị những kỹ năng và tri thức cho học sinh tiến xa trên con đường trở thành những công dân toàn cầu tương lai.</p>
            <p className='p mb-5' data-aos="fade-up" data-aos-delay="400">Hanoi Academy hân hạnh mang trong mình sứ mệnh tiên phong, đem đến cho học sinh một chương trình học tập toàn diện với 4 cấp học bao gồm:</p>
            <button className='btn' data-aos="fade-up" data-aos-delay="600"> Chương trình đào tạo{" >"}</button>
          </div>


        </div>
      </div>
    </section>
  );
}
