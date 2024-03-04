import Image from 'next/image';
import Image1 from "@/public/images/homepage/image-home1.png"
export default function Content2() {
  return (
    <section className='bg-rose-300 mt-40 pt-36'>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className='grid grid-cols-2 gap-x-20'>
          <div>
            <div className='hh4' data-aos="fade-up" >/CHƯƠNG TRÌNH ĐÀO TẠO</div>
            <div className='h3 mt-6 mb-5' data-aos="fade-up" data-aos-delay="200">Các cấp học toàn diện tại <br /> Hanoi Academy</div>
            <p className='p mb-5' data-aos="fade-up" data-aos-delay="400">Tại Hanoi Academy, học sinh sẽ được hòa mình và trải nghiệm một môi trường giáo dục được thiết kế riêng biệt và độc đáo với mục tiêu dẫn lối thành công, giúp trang bị những kỹ năng và tri thức cho học sinh tiến xa trên con đường trở thành những công dân toàn cầu tương lai.</p>
            <p className='p mb-5' data-aos="fade-up" data-aos-delay="400">Hanoi Academy hân hạnh mang trong mình sứ mệnh tiên phong, đem đến cho học sinh một chương trình học tập toàn diện với 4 cấp học bao gồm:</p>
            <button className='btn' data-aos="fade-up" data-aos-delay="600"> Chương trình đào tạo{" >"}</button>

          </div>

          <div className='grid grid-cols-2 gap-[25px]'>
            <div className=''>
              <div>01</div>
              <Image src={Image1} alt="picture" layout="responsive" data-aos="fade-up" className='my-14' />
            </div>
            <Image src={Image1} alt="picture" layout="responsive" data-aos="fade-up" className='my-14' />
            <Image src={Image1} alt="picture" layout="responsive" data-aos="fade-up" className='my-14' />
            <Image src={Image1} alt="picture" layout="responsive" data-aos="fade-up" className='my-14' />

          </div>
        </div>

      </div>
    </section>
  )
}
