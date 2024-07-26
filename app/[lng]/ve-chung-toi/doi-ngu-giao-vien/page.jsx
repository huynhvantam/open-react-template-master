import Link from "next/link";
import { useTranslation } from "../../../i18n";
import { Header } from "../../components/Header/client";
import bannerabout from "@/public/images/banner/banner-about.jpg";
import BannerImage1 from "../../components/banner";
import Pagedautien from "../../components/pagedautien";
import Listthongtin from "../../components/listthongtin";
import Image1 from "@/public/images/testimonial-01.jpg";
import Imagegvnn from "@/public/images/phuonghoang/gvnn.jpg";
import FeatImage02 from "@/public/images/home/background-mobile.png";
import Image02 from "@/public/images/giaovien/02.jpeg";
import Image03 from "@/public/images/giaovien/03.jpeg";
import Image04 from "@/public/images/giaovien/04.jpeg";
import Image05 from "@/public/images/giaovien/05.jpeg";
import Image06 from "@/public/images/giaovien/06.jpg";
import Image07 from "@/public/images/giaovien/07.jpg";
import Image08 from "@/public/images/giaovien/08.jpg";
import Image09 from "@/public/images/giaovien/09.jpg";
import Image10 from "@/public/images/giaovien/10.jpg";
import Image11 from "@/public/images/giaovien/11.jpg";
import Image12 from "@/public/images/giaovien/12.jpg";
import Image13 from "@/public/images/giaovien/13.jpg";
import Image14 from "@/public/images/giaovien/14.jpg";
import Image15 from "@/public/images/giaovien/15.jpg";
import Image16 from "@/public/images/giaovien/16.jpg";
import Image17 from "@/public/images/giaovien/17.jpg";
import Image18 from "@/public/images/giaovien/18.jpg";
import Image19 from "@/public/images/giaovien/19.jpg";
import Image20 from "@/public/images/giaovien/20.jpg";
import Image21 from "@/public/images/giaovien/21.jpg";
import Image22 from "@/public/images/giaovien/22.jpg";
import Image23 from "@/public/images/giaovien/23.jpg";
import Image24 from "@/public/images/giaovien/24.jpg";

import Image from "next/image";
export async function generateMetadata({ params: { lng } }) {
  const { t } = await useTranslation(lng, "header");
  const title1 = t("giao-vien");
  const title2 = t("giao-duc-ph");
  return { title: `${title1} - ${title2}` };
}
const buttonData = {
  mamnon: {
    title: "Giáo Viên Việt Nam",
    listItems: [
      {
        imageSrc: Image11,
        HoTen: "Nguyễn Trường Vũ",
        LopKhoi: "Giáo viên THCS",
        BangCap: "Cử nhân Vật lý tiên tiên, ĐHSP Huế",
        KinhNghiem:
          "Hơn 10 năm kinh nghiệm dạy các môn khoa học Lý, Hoá, Sinh bằng tiếng Anh, dạy Vật lý và Khoa học tự nhiên cấp 2.",
        ThanhTich:
          "Cuộc thi Thi thức trẻ vì giáo dục: Giải nhất năm 2017, thuộc top 15 vào vòng chung kết năm 2020. Hội thi Khoa học kĩ thuật tỉnh Thừa Thiên Huế: 2 giải 3, 2 giải khuyến khích.",
        LienHe: "vuphoenixedu@gmail.com",
        buttonText: "Xem thêm",
      },
      {
        imageSrc: Image13,
        HoTen: "Hồ Thị Phương Châu",
        LopKhoi: "Giáo viên THCS",
        BangCap:
          "Cử nhân Sư phạm Toán - chương trình Toán tiếng Anh (TRIG) trường Đại học Sư phạm Huế",
        KinhNghiem:
          "Hơn 8 năm kinh nghiệm giảng dạy chương trình Toán Song ngữ và Quốc tế tại trường Quốc tế Phượng Hoàng - Huế. Kinh nghiệm bồi dưỡng học sinh tham gia các kỳ thi Toán Quốc tế như SEAMO, ASMO; kỳ thi đánh giá năng lực SAT.",
        ThanhTich:
          "Giải Nhì cấp Tỉnh môn Sinh học năm học 2018-2019. Đạt Giải thưởng “Sao tháng giêng” năm học 2014-2015 dành cho sinh viên đạt thành tích tốt trong học tập, rèn luyện, công tác Đoàn và phong trào thanh niên. Được công nhận là Đảng viên chính thức ngày 30 tháng 7 năm 2017.",
        LienHe: "Đang cập nhật",
        buttonText: "Xem thêm",
      },
      {
        imageSrc: Image17,
        HoTen: "Đặng Nhật Khánh Hằng",
        LopKhoi: "Giáo viên THCS",
        BangCap: "Cử nhân Toán-tin ứng dụng Trường ĐHKH Huế",
        KinhNghiem: "Đang cập nhật",
        LienHe: "Đang cập nhật",
        buttonText: "Xem thêm",
      },
      {
        imageSrc: Image12,
        HoTen: "Trần Thị Loan",
        LopKhoi: "Giáo viên Tiểu học",
        BangCap: "Đang cập nhật",
        KinhNghiem: "Đang cập nhật",
        LienHe: "Đang cập nhật",
        buttonText: "Xem thêm",
      },
      {
        imageSrc: Image14,
        HoTen: "Lê Thị Trang",
        LopKhoi: "Giáo viên Tiểu học",
        BangCap: "Đại học sư phạm Giáo dục Tiểu học",
        KinhNghiem: "Đang cập nhật",
        LienHe: "Trag123phoenixedu@gmail.com",
        buttonText: "Xem thêm",
      },
      {
        imageSrc: Image19,
        HoTen: "Nguyễn Thị Thảo Ngọc",
        LopKhoi: "Giáo viên Tiểu học",
        BangCap: "Đang cập nhật",
        KinhNghiem: "Đang cập nhật",
        LienHe: "ngocntt@phoenixeducation.asia",
        buttonText: "Xem thêm",
      },
      {
        imageSrc: Image24,
        HoTen: "Lê Thị Định",
        LopKhoi: "Giáo viên Tiểu học",
        BangCap: "Đang cập nhật",
        KinhNghiem: "Đang cập nhật",
        LienHe: "Đang cập nhật",
        buttonText: "Xem thêm",
      },
      {
        imageSrc: Image02,
        HoTen: "Nguyễn Thị Hồng Thái",
        LopKhoi: "Giáo viên mầm non",
        BangCap: "Cao đẳng sư phạm",
        KinhNghiem: "4 năm",
        ThanhTich: "Lao động tiên tiến",
        LienHe: "Đang cập nhật",
        buttonText: "Xem thêm",
      },
      {
        imageSrc: Image03,
        HoTen: "Phạm Thị Ánh Uyên",
        LopKhoi: "Giáo viên mầm non",
        BangCap: "Cao đẳng",
        KinhNghiem: "4 năm",
        ThanhTich: "Lao động tiên tiến",
        LienHe: "Đang cập nhật",
        buttonText: "Xem thêm",
      },
      {
        imageSrc: Image04,
        HoTen: "Trần Thị Ni",
        LopKhoi: "Giáo viên mầm non",
        BangCap: "Cao đẳng",
        KinhNghiem: "4 năm",
        ThanhTich: "Lao động tiên tiến",
        LienHe: "Đang cập nhật",
        buttonText: "Xem thêm",
      },
      {
        imageSrc: Image05,
        HoTen: "Hoàng Tuyết Phương Nhi",
        LopKhoi: "Giáo viên mầm non",
        BangCap: "Cao Đẳng Sư Phạm",
        KinhNghiem: "Đang cập nhật",
        ThanhTich: "Lao động tiên tiến",
        LienHe: "phuongnhiphoenixeducation@gmail.com",
        buttonText: "Xem thêm",
      },
      {
        imageSrc: Image06,
        HoTen: "Hoàng Thị Thanh Hằng",
        LopKhoi: "Giáo viên mầm non",
        BangCap: "Cao đẳng",
        KinhNghiem: "Đang cập nhật",
        LienHe: "Thanhhang1phoenixedu@gmail.com",
        buttonText: "Xem thêm",
      },
      {
        imageSrc: Image07,
        HoTen: "Trần Thị Ngọc Trang",
        LopKhoi: "Giáo viên mầm non",
        BangCap: "Cao đẳng Mầm non",
        KinhNghiem: "5 năm",
        LienHe: "Đang cập nhật",
        buttonText: "Xem thêm",
      },
      {
        imageSrc: Image08,
        HoTen: "Bùi Thị Hằng",
        LopKhoi: "Giáo viên mầm non",
        BangCap: "Đại học",
        KinhNghiem: "9 năm",
        LienHe: "Hangbuiphoenixedu@gmail.com",
        buttonText: "Xem thêm",
      },
      {
        imageSrc: Image09,
        HoTen: "Hoàng Thị Phương Nguyên",
        LopKhoi: "Giáo viên mầm non",
        BangCap: "Cao đẳng mầm non",
        KinhNghiem: "5 năm",
        LienHe: "Đang cập nhật",
        buttonText: "Xem thêm",
      },
      {
        imageSrc: Image10,
        HoTen: "Lê Thị Thu Hà",
        LopKhoi: "Giáo viên mầm non",
        BangCap: "Đại học",
        KinhNghiem: "12 năm",
        LienHe: "Đang cập nhật",
        buttonText: "Xem thêm",
      },
      {
        imageSrc: Image15,
        HoTen: "Nguyễn Thị Hằng",
        LopKhoi: "Giáo viên mầm non",
        BangCap: "Cao đẳng sư phạm",
        KinhNghiem: "8 năm",
        ThanhTich: "Lao động tiên tiến",
        LienHe: "Đang cập nhật",
        buttonText: "Xem thêm",
      },
      {
        imageSrc: Image16,
        HoTen: "Lê Thị Trúc",
        LopKhoi: "Giáo viên mầm non",
        BangCap: "Đại Học",
        KinhNghiem: "37 năm",
        ThanhTich: "Lao động tiên tiến",
        LienHe: "Đang cập nhật",
        buttonText: "Xem thêm",
      },
      {
        imageSrc: Image18,
        HoTen: "Nguyễn Thị Thuận",
        LopKhoi: "Giáo viên mầm non",
        BangCap: "đại học giáo dục mầm non",
        KinhNghiem: "5 năm",
        ThanhTich: "lao động tiên tiến",
        LienHe: "Đang cập nhật",
        buttonText: "Xem thêm",
      },
      {
        imageSrc: Image20,
        HoTen: "Nguyễn Thị Thảo Tiên",
        LopKhoi: "Giáo viên mầm non",
        BangCap: "Đại học sư phạm",
        KinhNghiem: "Đang cập nhật",
        LienHe: "thaotienphoenixedu@gmail.com",
        buttonText: "Xem thêm",
      },
      {
        imageSrc: Image21,
        HoTen: "Nguyễn Quang Tín",
        LopKhoi: "Giáo viên thể dục",
        BangCap: "Đại học",
        KinhNghiem: "Từng giảng dạy tại Tp. Hồ Chí Minh, Đà Nẵng.",
        LienHe: "Đang cập nhật",
        buttonText: "Xem thêm",
      },
      {
        imageSrc: Image22,
        HoTen: "Hoàng Thị Thanh Hằng",
        LopKhoi: "Giáo viên mầm non",
        BangCap: "Cao Đẳng",
        KinhNghiem: "4 năm",
        ThanhTich: "Lao động tiên tiến",
        LienHe: "Đang cập nhật",
        buttonText: "Xem thêm",
      },
      {
        imageSrc: Image23,
        HoTen: "Phan Nguyễn Khánh Linh",
        LopKhoi: "Giáo viên mầm non",
        BangCap: "Đại học sư phạm mầm non",
        KinhNghiem: "10 năm kinh nghiệm giáo viên mầm non",
        ThanhTich: "Lao động tiên tiến",
        LienHe: "khanhlinh1phoenixedu@gmail.com",
        buttonText: "Xem thêm",
      },
    ],
  },
  // quocte: {
  //   title: "Giáo Viên Quốc tế",
  //   listItems: [
  //     {
  //       imageSrc: Image1,
  //       title: "Ms. Emily Johnson",
  //       description: "English Language Instructor",
  //       text2: "Certified",
  //       text3: "Experience",
  //       chuyenmon: "Specialization:",
  //       thanhtich: "With 10 years of experience",
  //       lienhe: "Contact Dr. David Brown",
  // buttonText: "Xem thêm",
  //       buttonText: "Read more",
  //     },
  //     {
  //       imageSrc: Image1,
  //       title: "Mr. Michael Clark",
  //       description: "ESL Teacher",
  //       text2: "Certified",
  //       text3: "Experience",
  //       chuyenmon: "Specialization:",
  //       thanhtich: "With 15 years of experience",
  //       lienhe: "Contact Prof. Sarah White",
  // buttonText: "Xem thêm",
  //       buttonText: "Read more",
  //     },
  //     {
  //       imageSrc: Image1,
  //       title: "Ms. Sophie Martin",
  //       description: "English Language Tutor",
  //       text2: "Certified",
  //       text3: "Experience",
  //       chuyenmon: "Specialization:",
  //       thanhtich: "With 5 years of experience",
  //       lienhe: "Contact Dr. James Wilson",
  // buttonText: "Xem thêm",
  //       buttonText: "Read more",
  //     },
  //     {
  //       imageSrc: Image1,
  //       title: "Mr. Daniel Brown",
  //       description: "IELTS Instructor",
  //       text2: "Certified",
  //       text3: "Experience",
  //       chuyenmon: "Specialization:",
  //       thanhtich: "With 8 years of experience",
  //       lienhe: "Contact Prof. Emma Taylor",
  // buttonText: "Xem thêm",
  //       buttonText: "Read more",
  //     },
  //     {
  //       imageSrc: Image1,
  //       title: "Mr. John Smith",
  //       description: "English Teacher",
  //       text2: "Certified",
  //       text3: "Experience",
  //       chuyenmon: "Specialization:",
  //       thanhtich: "With 15 years of experience",
  //       lienhe: "Contact Dr. Jane Doe",
  // buttonText: "Xem thêm",
  //       buttonText: "Read more",
  //     },
  //     {
  //       imageSrc: Image1,
  //       title: "Mrs. Maria Gonzalez",
  //       description: "Spanish Teacher",
  //       text2: "Certified",
  //       text3: "Experience",
  //       chuyenmon: "Specialization:",
  //       thanhtich: "With 20 years of experience",
  //       lienhe: "Contact Prof. Juan Martinez",
  // buttonText: "Xem thêm",
  //       buttonText: "Read more",
  //     },
  //     {
  //       imageSrc: Image1,
  //       title: "Ms. Sakura Tanaka",
  //       description: "Japanese Teacher",
  //       text2: "Certified",
  //       text3: "Experience",
  //       chuyenmon: "Specialization:",
  //       thanhtich: "With 10 years of experience",
  //       lienhe: "Contact Dr. Takeshi Yamamoto",
  // buttonText: "Xem thêm",
  //       buttonText: "Read more",
  //     },
  //     {
  //       imageSrc: Image1,
  //       title: "Mr. Ali Khan",
  //       description: "Arabic Teacher",
  //       text2: "Certified",
  //       text3: "Experience",
  //       chuyenmon: "Specialization:",
  //       thanhtich: "With 25 years of experience",
  //       lienhe: "Contact Prof. Fatima Ahmed",
  // buttonText: "Xem thêm",
  //       buttonText: "Read more",
  //     },
  //   ],
  // },
};
export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng, "header");
  const highlight = true; // Đặt giá trị highlight ở đây
  const links = [
    { href: "/ve-chung-toi/", content: t("gioi-thieu") },
    { href: "/ve-chung-toi/tam-nhin-su-menh", content: t("tam-nhin") },
    {
      href: "/ve-chung-toi/doi-ngu-giao-vien",
      content: t("giao-vien"),
      hightlight: true,
    },
    {
      href: "/ve-chung-toi/thong-diep-tu-ban-lanh-dao",
      content: t("lanh-dao"),
    },
    // {
    //   href: "/ve-chung-toi/thanh-tich-cua-chung-toi",
    //   content: t("thanh-tich"),
    // },
  ];

  return (
    <>
      <Header lng={lng} path="/ve-chung-toi/doi-ngu-giao-vien" />
      <BannerImage1
        src={bannerabout}
        srcmobile={FeatImage02}
        text1={t("home") + " / " + t("about")}
        text2={t("giao-vien")}
      />
      <Pagedautien links={links} highlight={highlight} />
      <div className="max-w-6xl mx-auto">
        <div className="lg:grid lg:grid-cols-10 gap-4 py-20 px-4 lg:px-0">
          <div className="col-span-4">
            <h4 className="text-3xl  font-playfair text-left text-rose-500">
              Là đơn vị tiên phong triển khai mô hình trường học song ngữ tại
              Huế
            </h4>
            <p className="p py-4">
              Là đơn vị tiên phong triển khai mô hình trường học song ngữ tại
              Huế, Giáo dục Phượng Hoàng tự hào với nhiều năm xây dựng và phát
              triển đội ngũ giáo viên với đầy đủ phẩm chất, năng lực chuyên môn
              và kỹ năng phù hợp với đặc thù môi trường giáo dục song ngữ, đáp
              ứng tốt mục tiêu và định hướng chung của nhà trường: “Kiến Tạo
              Công Dân Toàn Cầu”.
            </p>
          </div>
          <div className="col-span-6">
            <Image
              loading="lazy"
              src={Imagegvnn}
              alt="giao vien"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
      <h3 className="h3  text-center pb-3 mb-10 pt-10 border-b-[3px] border-rose-500 w-fit mx-auto">
        Khung tiêu chí tuyển chọn giáo viên
      </h3>
      <div className="max-w-6xl mx-4 lg:mx-auto overflow-x-auto p">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border border-gray-300 text-left min-w-[200px] ">
                Phân loại
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left min-w-[400px]">
                Bằng cấp
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left min-w-[400px]">
                Kinh nghiệm
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border border-gray-300 font-semibold">
                Giáo viên Quốc tế
              </td>
              <td className="px-4 py-2 border border-gray-300">
                <ul className="list-disc list-inside space-y-2 marker:text-red-500">
                  <li>
                    Bắt buộc có bằng cử nhân, chứng chỉ giảng dạy tiếng Anh
                    (TESOL, TEFL, CELTA, DELTA)
                  </li>
                  <li>
                    Chứng chỉ năng lực ngoại ngữ C1 – theo Khung tham chiếu
                    chung Châu u (CEFR) (Đối với GV không thuộc 5 nước bản địa).
                  </li>
                  <li>
                    Ưu tiên ứng viên có bằng sư phạm chuyên ngành đúng với môn
                    sẽ giảng dạy và có chứng chỉ PGCE (đảm bảo truyền tải được
                    kiến thức chuyên sâu với các môn học đặc thù như Business,
                    Literature (văn học Anh), …).
                  </li>
                </ul>
              </td>
              <td className="px-4 py-2 border border-gray-300 align-top">
                <ul className="list-disc list-inside space-y-2 marker:text-red-500">
                  <li>
                    Có ít nhất 03 năm kinh nghiệm giảng dạy tại môi trường Quốc
                    tế sau khi tốt nghiệp chương trình cử nhân.
                  </li>
                  <li>
                    Đối với Tiểu học, giáo viên có kinh nghiệm giảng dạy cả 03
                    môn tiếng Anh, Khoa học và Toán.
                  </li>
                  <li>
                    Đối với Trung học, giáo viên có kinh nghiệm dạy chương trình
                    IGCSE.
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300 font-semibold">
                Giáo viên Việt Nam
              </td>
              <td className="px-4 py-2 border border-gray-300 ">
                <ul className="list-disc list-inside space-y-2 marker:text-red-500 ">
                  <li>
                    Tốt nghiệp Đại học trở lên các chuyên ngành Giáo dục, Sư
                    phạm, tiếng Anh hoặc các chuyên ngành liên quan. Ứng viên
                    không tốt nghiệp chuyên ngành Sư phạm cần có chứng chỉ
                    nghiệp vụ Sư phạm.
                  </li>
                </ul>
              </td>
              <td className="px-4 py-2 border border-gray-300">
                <ul className="list-disc list-inside space-y-2 marker:text-red-500">
                  <li>Có ít nhất 01 năm kinh nghiệm giảng dạy thực tế;</li>
                  <li>
                    Tâm huyết với nghề, có phẩm chất đạo đức tốt; Năng động, có
                    tư duy đổi mới phương pháp dạy và học;
                  </li>
                  <li>
                    Sử dụng thành thạo tin học văn phòng và các phần mềm, ứng
                    dụng hỗ trợ giảng dạy;
                  </li>
                  <li>
                    Có khả năng giao tiếp tiếng Anh và có kinh nghiệm làm việc
                    trong môi trường giáo dục có yếu tố quốc tế.
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 className="h3  text-center pb-3 mb-10 pt-10 border-b-[3px] border-rose-500 w-fit mx-auto">
        Gặp gỡ đội ngũ
      </h3>
      <Listthongtin buttonData={buttonData} />
    </>
  );
}
