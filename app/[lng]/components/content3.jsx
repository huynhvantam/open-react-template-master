'use client'
import Image from 'next/image';
import Link from 'next/link';
import Image1 from "@/public/images/homepage/image-home1.png"
import { AiOutlineCaretRight, AiOutlineCaretDown } from "react-icons/ai";
// Định nghĩa mảng các đối tượng chứa dữ liệu cho mỗi phần tử
const items = [
  {
    caption: "Chương trình học song ngữ được thiết kế ĐẶC BIỆT",
    description: "Học sinh Hanoi Academy được học song song 2 chương trình của bộ Giáo dục & Đào tạo và Chương trình học quốc tế có bản quyền từ Anh Quốc."
  },
  {
    caption: "Chương trình phát triển năng lực cá nhân và nhận thức xã hội của học sinh",
    description: "\"Chìa khoá” để học sinh trở thành công dân toàn cầu trong cuộc cách mạng công nghiệp 4.0"
  },
  {
    caption: "Phương pháp dạy học TIÊN TIẾN",
    description: "Với phương châm “nói không với lỗi thời\", đảm bảo không có học sinh nào bị bỏ lại ở phía sau."
  },
  {
    caption: "Phương thức đánh giá CHÍNH XÁC & HIỆU QUẢ",
    description: "Không đánh giá kết quả học tập theo phương thức cũ mà dựa vào khả năng vận dụng sáng tạo tri thức thông qua các “Dự án học tập\" ..."
  },
  {
    caption: "Hoạt động - Sự kiện liên cấp PHONG PHÚ & ĐA DẠNG",
    description: "Học sinh được “trao quyền\" làm chủ và rèn luyện 6 giá trị cốt lõi thông qua các hoạt động, sự kiện… của Nhà trường."
  },
  {
    caption: "Bằng cấp Việt Nam và Quốc tế được xã hội CÔNG NHẬN",
    description: "Được công nhận bởi các cơ quan khảo thí, có giá trị cả trong nước và thế giới, mở ra cơ hội học tập toàn cầu cho học sinh ở mọi cấp học."
  },
];
import { useState } from 'react';
export default function Content3() {
  const [visibleIndex, setVisibleIndex] = useState(0);

  const toggleVisibility = index => {
    setVisibleIndex(visibleIndex === "" ? null : index);
  };
  return (
    <section className='py-36'>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className='grid grid-cols-2 gap-x-10 place-items-end'>
          <Image src={Image1} alt="picture" layout="responsive" data-aos="fade-up" className=' ' />
          <div>
            <div className='hh4' data-aos="fade-up" >/CHƯƠNG TRÌNH ĐÀO TẠO</div>
            <div className='h25 mt-6 mb-5' data-aos="fade-up" data-aos-delay="200">Điểm nổi bật của Chương trình <br /> Song ngữ Anh - Việt</div>
            <div className="h-[400px] pt-4">
              {items.map((item, index) => (
                <div key={index}>
                  <h5 data-aos="slide-up"
                    onClick={() => toggleVisibility(index)}
                    className={visibleIndex === index ? 'text-rose-500 text-lg font-semibold leading-[26px]' : 'text-lg pb-5 hover:text-rose-500 hover:font-medium cursor-pointer'}
                  >
                    {visibleIndex === index ? <AiOutlineCaretDown className='inline text-xs text-rose-700' /> : <AiOutlineCaretRight className='inline text-xs text-rose-700' />} <span className='pl-2 '>{item.caption}</span>
                  </h5>
                  {visibleIndex === index && <p className=' pl-4 text-sm leading-[22px] text-[#49505e] pt-4 pb-5' data-aos="fade-down-right">{item.description}</p>}
                </div>
              ))}
            </div>
            <button className='btn' data-aos="fade-up" data-aos-delay="600">Tìm hiểu chương trình đào tạo
              {" >"}</button>
          </div>


        </div>
      </div>
    </section>
  );
}
