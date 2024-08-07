import monhoc from "@/public/images/homepage/taisaochon/monhoc.png";
import canhanhoa from "@/public/images/homepage/taisaochon/canhanhoa.png";
import duhoc from "@/public/images/homepage/taisaochon/duhoc.png";
import khoahoc from "@/public/images/homepage/taisaochon/khoahoc.png";
import moitruongquocte from "@/public/images/homepage/taisaochon/moitruongquocte.png";
import phattriennangkhieu from "@/public/images/homepage/taisaochon/phatriennangkhieu.png";
import renluyenkhanang from "@/public/images/homepage/taisaochon/renluyenkhanang.png";
import tienphong from "@/public/images/homepage/taisaochon/tienphong.png";
import logophuonghoang from "@/public/images/phuonghoang/logo.png";
import tyle from "@/public/images/homepage/taisaochon/tyle.png";
import toida from "@/public/images/homepage/taisaochon/toida.png";
import songngu from "@/public/images/homepage/taisaochon/songngu.png";
import tienganh from "@/public/images/homepage/taisaochon/tienganh.png";
import giaotrinh from "@/public/images/homepage/taisaochon/giaotrinh.png";
import monhoc1 from "@/public/images/homepage/taisao.jpg";
import banner from "@/public/images/homepage/beboi.jpg";
import Image from "next/image";
export default function Taisaonenchon() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-4 pb-20 pt-10">
        <div className="lg:hidden">
          <div className="hh4" data-aos="fade-up">
            /CHƯƠNG TRÌNH ĐÀO TẠO
          </div>
          <div className="h25 mt-6 mb-5 text-center" data-aos="fade-up">
            Tại sao chọn
            <br /> Phoenix Education?
          </div>
        </div>
        <div className=" w-full h-32 rounded-l lg:hidden relative">
          <Image
            src={banner}
            alt="pictures"
            className="rounded-lg w-full h-full object-cover"
            loading="lazy"
          />
          <div
            style={{ textShadow: "2px 2px #d20dbe" }}
            className="text-amber-300 h4 absolute bottom-0 pt-20 px-4 pb-4 rounded-lg "
          >
            Cơ sở vật chất hiện đại
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-8 gap-4 ">
          <div
            // style={{
            //   backgroundImage:
            //     "linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)",
            // }}
            className="col-start-1 col-end-3 h3  w-full h-full rounded-lg p-5 hidden lg:block relative "
          >
            <p
              style={{ textShadow: "2px 2px #FDEE98" }}
              className="z-20 text-rose-500 absolute right-2 left-2 top-10 text-center"
            >
              Tại sao chọn Phoenix Education?
            </p>
            <Image
              src={logophuonghoang}
              alt="Logo Phương Hoàng"
              width={250}
              height={250}
              loading="lazy"
              className="absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 opacity-10"
            />
          </div>
          <div className="col-start-3 col-end-7">
            <div className="grid lg:grid-cols-2 gap-4 rounded-lg">
              <div
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)",
                }}
                className="  to-rose-200 h-32 rounded-lg flex items-center pl-5"
              >
                <Image
                  className="h-fit "
                  src={giaotrinh}
                  width={40}
                  height={40}
                  alt="Môn học"
                  loading="lazy"
                  style={{ width: "auto", height: "auto" }}
                />
                <div className="pl-4">
                  <p className=" ">GIÁO TRÌNH</p>
                  <h4 className="h4 text-rose-500">SONG NGỮ</h4>
                </div>
              </div>
              <div
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)",
                }}
                className="  to-rose-200 h-32 rounded-lg flex items-center pl-5"
              >
                <Image
                  className="h-fit "
                  src={tyle}
                  width={40}
                  height={40}
                  alt="Môn học"
                  loading="lazy"
                />
                <div className="pl-4">
                  <p className=" ">HỌC SINH / LỚP</p>
                  <h4 className="h4 text-rose-500">20</h4>
                </div>
              </div>
              <div
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)",
                }}
                className="  to-rose-200 h-32 rounded-lg flex items-center pl-5"
              >
                <Image
                  className="h-fit "
                  src={tyle}
                  width={40}
                  height={40}
                  alt="Môn học"
                  loading="lazy"
                />
                <div className="pl-4">
                  <p className="">
                    TỈ LỆ <br />
                    HỌC SINH/GIÁO VIÊN
                  </p>
                  <h4 className="h4 text-rose-500">1 : 12</h4>
                </div>
              </div>
              <div
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)",
                }}
                className="  to-rose-200 h-32 rounded-lg flex items-center pl-5"
              >
                <Image
                  className="h-fit "
                  src={tienganh}
                  alt="Môn học"
                  loading="lazy"
                  style={{ width: "auto", height: "auto" }}
                />
                <div className="pl-4">
                  <p className="">TIẾNG ANH/ TUẦN</p>
                  <h4 className="h4 text-rose-500">18 TIẾT</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-start-7 col-end-9  w-full h-full relative">
            <Image
              src={monhoc1}
              alt="pictures"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="rounded-lg lg:absolute top-4 right-0 -bottom-0 left-0 -z-10 hidden lg:block"
              loading="lazy"
            />
            <div className="bg-gradient-to-t from-rose-300 lg:absolute bottom-0 pt-20 px-4 pb-4 rounded-lg text-gray-100">
              <span
                style={{ textShadow: "2px 2px #D22C31" }}
                className="text-white h4"
              >
                5 chương trình học
              </span>{" "}
              đa dạng, hệ thống đánh giá và tiêu chuẩn đầu ra rõ ràng
            </div>
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-8 gap-4 space-y-4 lg:space-y-0">
          <div className="col-start-1 col-end-3 bg-gradient-to-b from-rose-100  to-rose-200 w-full h-full rounded-lg">
            <div
              style={{
                backgroundImage:
                  "linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)",
              }}
              className="  to-rose-50 h-32 rounded-lg flex items-center px-3"
            >
              <Image
                className="h-fit"
                src={canhanhoa}
                width={40}
                height={40}
                alt="Môn học"
                loading="lazy"
              />
              <div className="pl-4">
                <span className="p text-rose-500 font-semibold">
                  Cá nhân hóa
                </span>
                <span className="p">
                  {" "}
                  kế hoạch học tập cùng chuyên gia tư vấn hướng nghiệp & du học
                </span>
              </div>
            </div>
          </div>
          <div className="col-start-3 col-end-7">
            <div className=" w-full h-32 rounded-l hidden lg:block relative">
              <Image
                src={banner}
                alt="pictures"
                className="rounded-lg w-full h-full object-cover"
                loading="lazy"
              />
              <div
                style={{ textShadow: "2px 2px #d20dbe" }}
                className="text-amber-300 h4 absolute bottom-0 pt-20 px-4 pb-4 rounded-lg "
              >
                Cơ sở vật chất hiện đại
              </div>
            </div>
          </div>
          <div className="col-start-7 col-end-9 bg-gradient-to-b from-rose-100  to-rose-200 w-full h-full rounded-lg">
            <div
              style={{
                backgroundImage:
                  "linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)",
              }}
              className="  to-rose-50 h-32 rounded-lg flex items-center px-3"
            >
              <Image
                className="h-fit"
                src={duhoc}
                width={40}
                height={40}
                alt="Môn học"
                loading="lazy"
              />
              <div className="pl-4">
                <span className="p text-rose-500 font-semibold">
                  Cơ hội du học{" "}
                </span>
                <span className="p">
                  tại các quốc gia như Anh, Mỹ, Úc, Canada, Singarpore
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-8 gap-4 space-y-4 lg:space-y-0">
          <div className="col-start-1 col-end-3 bg-gradient-to-b from-rose-100  to-rose-200 w-full h-full rounded-lg">
            <div
              style={{
                backgroundImage:
                  "linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)",
              }}
              className="  to-rose-50 h-32 rounded-lg flex items-center px-3"
            >
              <Image
                className="h-fit"
                src={moitruongquocte}
                width={40}
                height={40}
                alt="Môn học"
                loading="lazy"
              />
              <div className="pl-4">
                <span className="p text-rose-500 font-semibold">
                  Môi trường quốc tế
                </span>
                <span className="p">
                  {" "}
                  với Học sinh và Giáo viên đến từ nhiều quốc gia
                </span>
              </div>
            </div>
          </div>
          <div className="col-start-3 col-end-5 bg-gradient-to-b from-rose-100  to-rose-200 w-full h-32 rounded-lg">
            <div
              style={{
                backgroundImage:
                  "linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)",
              }}
              className="  to-rose-50 h-32 rounded-lg flex items-center px-3"
            >
              <Image
                className="h-fit"
                src={renluyenkhanang}
                width={40}
                height={40}
                alt="Môn học"
                loading="lazy"
              />
              <div className="pl-4">
                <span className="p text-rose-500 font-semibold">
                  Rèn luyện khả năng
                </span>
                <span className="p">
                  {" "}
                  giải quyết vấn đề qua các dự án cá nhân & cộng đồng
                </span>
              </div>
            </div>
          </div>
          <div className="col-start-5 col-end-7 bg-gradient-to-b from-rose-100  to-rose-200 w-full h-32 rounded-lg">
            <div
              style={{
                backgroundImage:
                  "linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)",
              }}
              className="  to-rose-50 h-32 rounded-lg flex items-center px-3"
            >
              <Image
                className="h-fit"
                src={phattriennangkhieu}
                width={40}
                height={40}
                alt="Môn học"
                loading="lazy"
              />
              <div className="pl-4">
                <span className="p text-rose-500 font-semibold">
                  Phát triển năng khiếu
                </span>
                <span className="p">
                  {" "}
                  với 10+ CLB ngoại khóa, nghệ thuật, thể thao
                </span>
              </div>
            </div>
          </div>
          <div className="col-start-7 col-end-9 bg-gradient-to-b from-rose-100  to-rose-200 w-full h-full rounded-lg">
            <div
              style={{
                backgroundImage:
                  "linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)",
              }}
              className="  to-rose-50 h-32 rounded-lg flex items-center px-3"
            >
              <Image
                className="h-fit"
                src={tienphong}
                width={40}
                height={40}
                alt="Môn học"
                loading="lazy"
              />
              <div className="pl-4">
                <span className="p text-rose-500 font-semibold">
                  Hội đồng Khoa học & Sư phạm
                </span>
                <span className="p">
                  {" "}
                  thiết kế chương trình & đồng bộ chất lượng giảng dạy
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
