import Image from 'next/image';
import Image1 from "@/public/images/homepage/image-home1.png"
export default function Content1() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className='grid grid-cols-2 gap-x-20'>
          <div>
            <div className='hh4'>VỀ CHÚNG TÔI</div>
            <div className='h3 mt-6 mb-14'>Trường song ngữ <br /> đầu tiên  tại Hà Nội</div>
            <p className='p'>Trường Song Ngữ Quốc Tế Hanoi Academy là hệ thống trường liên cấp từ Mầm Non đến Trung Học Phổ Thông tại Hà Nội, với mục tiêu giáo dục là “Kiến Tạo Công Dân Toàn Cầu”. Hanoi Academy là trường song ngữ đầu tiên trên địa bàn Hà Nội và đã đi vào hoạt động từ năm 2009.</p>
            <div className='grid grid-cols-2 pt-[60px]'>
              <div className=''>
                <div>
                  <p className='numberbig'>150</p>
                  <p className='p font-bold'>Giải thưởng uy tín<br /> trong và ngoài nước</p>
                </div>
                <div>
                  <p className='numberbig pt-[60px]'>30+</p>
                  <p className='p font-bold'>Học sinh đạt điểm<br /> tuyệt đối 9/9 các môn <br />thi iGCSE</p>
                </div>

              </div>
              <div>
                <div>
                  <p className='numberbig pt-[120px]'>60%</p>
                  <p className='p font-bold'>Học sinh nhận được<br /> học bổng du học</p>
                </div>
                <div>
                  <p className='numberbig pt-[60px]'>7.0</p>
                  <p className='p font-bold'>Điểm IELTS trung bình <br />của học sinh lớp 12</p>
                </div></div>
            </div>
          </div>

          <div>
            <Image src={Image1} alt="picture" layout="responsive" data-aos="fade-up" className='my-14' />
            <p className='p'>Trường Song Ngữ Quốc Tế Hanoi Academy là hệ thống trường liên cấp từ Mầm Non đến Trung Học Phổ Thông tại Hà Nội, với mục tiêu giáo dục là “Kiến Tạo Công Dân Toàn Cầu”. Hanoi Academy là trường song ngữ đầu tiên trên địa bàn Hà Nội và đã đi vào hoạt động từ năm 2009.</p>
          </div>
        </div>

      </div>
    </section>
  )
}
