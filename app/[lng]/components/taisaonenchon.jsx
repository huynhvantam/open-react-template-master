
import monhoc from "@/public/images/taisaochon/monhoc.jpg"
import logophuonghoang from "@/public/images/phuonghoang/logo.png"
import monhoc1 from "@/public//images/phuonghoang/hocsinh5.jpg"
import banner from "@/public/images/oneuse/anh1.jpg"
import Image from "next/image"
export default function Taisaonenchon() {

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-4 pb-20 pt-10">
        <div className="grid grid-cols-8 gap-4 ">
          <div className="col-start-1 col-end-3 h3 bg-gradient-to-b from-amber-200 to-rose-100 w-full h-full rounded-lg p-5 relative">
            <p style={{ textShadow: '2px 2px #ffffff' }} className="text-rose-500">Tại sao chọn Phoenix Education?</p>
            <Image src={logophuonghoang} alt="Logo Phương Hoàng" width={70} height={70} className="absolute bottom-2 right-2 z-0" />
          </div>
          <div className="col-start-3 col-end-7">
            <div className="grid grid-cols-2 gap-4 rounded-lg">
              <div className="bg-gradient-to-b from-rose-100  to-rose-200 h-32 rounded-lg flex items-center pl-5">
                <Image className="h-fit " src={monhoc} width={56} height={56} alt="Môn học" />
                <div className="pl-4">
                  <p className="p">GIÁO TRÌNH</p>
                  <h4 className="h4 text-rose-500">SONG NGỮ</h4>
                </div>
              </div>
              <div className="bg-gradient-to-b from-rose-100  to-rose-200 h-32 rounded-lg flex items-center pl-5">
                <Image className="h-fit " src={monhoc} width={56} height={56} alt="Môn học" />
                <div className="pl-4">
                  <p className="p">HỌC SINH / LỚP</p>
                  <h4 className="h4 text-rose-500">20</h4>
                </div>
              </div>
              <div className="bg-gradient-to-b from-rose-100  to-rose-200 h-32 rounded-lg flex items-center pl-5">
                <Image className="h-fit " src={monhoc} width={56} height={56} alt="Môn học" />
                <div className="pl-4">
                  <p className="p">TỈ LỆ <br />HỌC SINH/GIÁO VIÊN</p>
                  <h4 className="h4 text-rose-500">1 : 12</h4>
                </div>
              </div>
              <div className="bg-gradient-to-b from-rose-100  to-rose-200 h-32 rounded-lg flex items-center pl-5">
                <Image className="h-fit " src={monhoc} width={56} height={56} alt="Môn học" />
                <div className="pl-4">
                  <p className="p">TIẾNG ANH/ TUẦN</p>
                  <h4 className="h4 text-rose-500">18 TIẾT</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-start-7 col-end-9  w-full h-full rounded-lg relative">
            <Image src={monhoc1} layout="fill" alt="pictures" className="rounded-lg absolute top-0 right-0 bottom-0 left-0 -z-10" />
            <div className="bg-gradient-to-t from-rose-300 absolute bottom-0 pt-20 px-4 pb-4 rounded-lg text-gray-100">
              <span style={{ textShadow: '2px 2px #D22C31' }} className="text-white h4"> 5 chương trình học</span> đa dạng, hệ thống đánh giá và tiêu chuẩn đầu ra rõ ràng</div>

          </div>
        </div>
        <div className="grid grid-cols-8 gap-4 ">
          <div className="col-start-1 col-end-3 bg-gradient-to-b from-rose-100  to-rose-200 w-full h-full rounded-lg">
            <div className="bg-gradient-to-b from-rose-100  to-rose-50 h-32 rounded-lg flex items-center px-3">
              <Image className="h-fit" src={monhoc} width={40} height={40} alt="Môn học" />
              <div className="pl-4">
                <span className="p text-rose-500">Cá nhân hóa</span>
                <span className="p"> kế hoạch học tập cùng chuyên gia tư vấn hướng nghiệp & du học</span>
              </div>
            </div>
          </div>
          <div className="col-start-3 col-end-7">
            <div className=" w-full h-32 rounded-l relative">
              <Image src={banner} layout="fill" alt="pictures" className="rounded-lg absolute top-0 right-0 bottom-0 left-0 -z-10" />
              <div style={{ textShadow: '2px 2px #d20dbe' }} className="text-amber-300 h4 absolute bottom-0 pt-20 px-4 pb-4 rounded-lg ">Cơ sở vật chất hiện đại
              </div>
            </div>
          </div>
          <div className="col-start-7 col-end-9 bg-gradient-to-b from-rose-100  to-rose-200 w-full h-full rounded-lg">
            <div className="bg-gradient-to-b from-rose-100  to-rose-50 h-32 rounded-lg flex items-center px-3">
              <Image className="h-fit" src={monhoc} width={40} height={40} alt="Môn học" />
              <div className="pl-4">
                <span className="p text-rose-500">Cơ hội du học </span>
                <span className="p">tại các quốc gia như Anh, Mỹ, Úc, Canada, Singarpore</span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-8 gap-4 ">
          <div className="col-start-1 col-end-3 bg-gradient-to-b from-rose-100  to-rose-200 w-full h-full rounded-lg">
            <div className="bg-gradient-to-b from-rose-100  to-rose-50 h-32 rounded-lg flex items-center px-3">
              <Image className="h-fit" src={monhoc} width={40} height={40} alt="Môn học" />
              <div className="pl-4">
                <span className="p text-rose-500">Môi trường quốc tế</span>
                <span className="p"> với Học sinh và Giáo viên đến từ nhiều quốc gia</span>
              </div>
            </div>
          </div>
          <div className="col-start-3 col-end-5 bg-gradient-to-b from-rose-100  to-rose-200 w-full h-32 rounded-lg">
            <div className="bg-gradient-to-b from-rose-100  to-rose-50 h-32 rounded-lg flex items-center px-3">
              <Image className="h-fit" src={monhoc} width={40} height={40} alt="Môn học" />
              <div className="pl-4">
                <span className="p text-rose-500">Rèn luyện khả năng</span>
                <span className="p"> giải quyết vấn đề qua các dự án cá nhân & cộng đồng</span>
              </div>
            </div>
          </div>
          <div className="col-start-5 col-end-7 bg-gradient-to-b from-rose-100  to-rose-200 w-full h-32 rounded-lg">
            <div className="bg-gradient-to-b from-rose-100  to-rose-50 h-32 rounded-lg flex items-center px-3">
              <Image className="h-fit" src={monhoc} width={40} height={40} alt="Môn học" />
              <div className="pl-4">
                <span className="p text-rose-500">Phát triển năng khiếu</span>
                <span className="p"> với 30+ CLB ngoại khóa, nghệ thuật, thể thao</span>
              </div>
            </div>
          </div>
          <div className="col-start-7 col-end-9 bg-gradient-to-b from-rose-100  to-rose-200 w-full h-full rounded-lg">
            <div className="bg-gradient-to-b from-rose-100  to-rose-50 h-32 rounded-lg flex items-center px-3">
              <Image className="h-fit" src={monhoc} width={40} height={40} alt="Môn học" />
              <div className="pl-4">
                <span className="p text-rose-500">Hội đồng Khoa học & Sư phạm</span>
                <span className="p"> thiết kế chương trình & đồng bộ chất lượng giảng dạy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
