import Link from "next/link";
import { useTranslation } from "../../i18n";
import { Header } from "../components/Header/client";
import bannerabout from '@/public/images/banner/banner-tuyendung.jpg';
import BannerImage from '../components/banner'
import Footer from "@/app/components/ui/footer";

export async function generateMetadata({ params: { lng } }) {
  const { t } = await useTranslation(lng, "header");
  const title1 = t("tuyen-dung");
  const title2 = t("giao-duc-ph");
  return { title: `${title1} - ${title2}` };
}
const jobPostings = [
  {
    title: "Giáo viên Tiếng Anh",
    department: "Phòng ban: giáo viên",
    location: "Địa điểm: Huế, Việt Nam",
    deadline: "Hạn ứng tuyển: 32/12/2024",
    quantity: "Số lượng: 01",
    jobDescription: [
      "Thực hiện công tác nuôi dưỡng, chăm sóc, giáo dục trẻ theo sự phân công của Ban giám hiệu",
      "Bảo vệ an toàn sức khỏe, tính mạng của trẻ trong thời gian trẻ học tập và sinh hoạt tại trường",
      "Chủ động phối hợp với gia đình trẻ trong công tác giáo dục trẻ, thường xuyên trao đổi với phụ huynh về tình hình sức khỏe và học tập của trẻ"
    ],
    requirements: [
      "Có ít nhất 01 năm kinh nghiệm giảng dạy thực tế;",
      "Ngoại hình khá, phát âm chuẩn;"
    ],
    benefits: [
      "Làm việc trong môi trường năng động, chuyên nghiệp;",
      "Bảo vệ an toàn sức khỏe, tính mạng của trẻ trong thời gian trẻ học tập và sinh hoạt tại trường",
      "Ăn sáng, ăn trưa tại trường;"
    ],
    applicationDocuments: [
      "Lý lịch tự thuật mô tả chi tiết quá trình học tập, công tác cũng như những thành tích đạt được;",
      "Bảo vệ an toàn sức khỏe, tính mạng của trẻ trong thời gian trẻ học tập và sinh hoạt tại trường",
      "Bản sao các văn bằng chứng chỉ, bảng điểm;",
      "Ứng viên gửi hồ sơ ứng tuyển về hòm thư: ..."
    ]
  }

];

const JobPosting = ({ job }) => {
  return (
    <div key={job.title} className="pb-20">
      <h4 className="h4 pb-6">{job.title}</h4>
      <div className="grid grid-cols-4 items-center justify-items-center divide-x-2 border-2">
        <p className="h5 w-full text-center">{job.department}</p>
        <p className="h5 w-full text-center">{job.location}</p>
        <p className="h5 w-full text-center">{job.deadline}</p>
        <p className="h5 w-full text-center">{job.quantity}</p>
      </div>
      <h4 className="h5 pt-10">Mô tả công việc</h4>
      <ol className='marker:text-red-500 p list-outside list-disc ml-6'>
        {job.jobDescription.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
      <h4 className="h5 pt-10">Tiêu chí tuyển dụng</h4>
      <ol className='marker:text-red-500 p list-outside list-disc ml-6'>
        {job.requirements.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
      <h4 className="h5 pt-10">Quyền lợi</h4>
      <ol className='marker:text-red-500 p list-outside list-disc ml-6'>
        {job.benefits.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
      <h4 className="h5 pt-10">Hồ sơ ứng viên gồm</h4>
      <ol className='marker:text-red-500 p list-outside list-disc ml-6'>
        {job.applicationDocuments.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div>
  );
};

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng, "header");

  return (
    <>
      <Header lng={lng} path="/tuyen-dung" />
      <BannerImage src={bannerabout}
        text1="Trang chủ / Tuyển dụng"
        text2="Tuyển dụng"
      />
      <section className='max-w-6xl mx-auto px-4 sm:px-6 '>
        <div>
          <h3 className="h3 pt-10 pb-10 text-center">Về Chế Độ Đãi Ngộ Của Chúng Tôi</h3>
          <p className='p'>Chúng tôi chào đón tất cả ứng viên giàu kinh nghiệm và nhiệt tình cùng chia sẻ tầm nhìn và sứ mệnh giáo dục. Bên cạnh các phúc lợi lương thưởng cạnh tranh, EMASI mang đến cho nhân viên cơ hội phát triển bản thân, thăng tiến trong sự nghiệp và trải nghiệm một môi trường làm việc đa văn hóa và không ngừng tiến bộ.</p>
        </div>
        <div >
          <h3 className="h3 pt-10 pb-10 text-center">Danh sách tuyển dụng</h3>
          {jobPostings.map((job) => (
            <JobPosting job={job} />
          ))}
        </div>
      </section>
      <Footer />

    </>
  );
}
