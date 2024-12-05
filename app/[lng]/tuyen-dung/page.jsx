import Link from "next/link";
import { useTranslation } from "../../i18n";
import { Header } from "../components/Header/client";
import bannerabout from "@/public/images/banner/banner-tuyendung.jpg";
import BannerImage from "../components/banner";
import FeatImage02 from "@/public/images/banner/banner-mobile.png";

export async function generateMetadata({ params: { lng } }) {
  const { t } = await useTranslation(lng, "header");
  const title1 = t("tuyen-dung");
  const title2 = t("giao-duc-ph");
  return { title: `${title1} - ${title2}` };
}
const jobPostings = [
  {
    title: "Giáo viên Tiếng Anh",
    department: "ESL EXPAT TEACHERS",
    location: "Địa điểm: Huế, Việt Nam",
    deadline: "Hạn ứng tuyển: ...",
    quantity: "Số lượng: ...",
    description: "Job Description",
    requirement: "Job Requirements",
    Benefit: "Benefits",
    forward: "Please forward by email: phoenixschoolvn@gmail.com",
    jobDescription: [
      "Be responsible for planning, preparing and delivering lessons and workshops for kindergarten, primary and secondary students at weekend and/or weekdays.",
      "Designing and producing teaching materials based on given textbooks.",
      "Be responsible for assessing learners’ progress and keeping records.",
      "Following teaching process and ensuring teaching quality.",
      "Be able to take care of students during lessons.ccc",
    ],
    requirements: [
      "American, British and Australian are preferred",
      "University degree (BA/BS or higher)",
      "CELTA/TESOL/TEFL certificate",
      "Skilled, qualified and ESL teaching experienced (5 years at least with reference letters from institutes)",
      "Able to create an interesting and engaging learning atmosphere",
      "Passion in English teaching, especially interacting with children",
      "A clean police clearance from your country of origin",
    ],
    benefits: [
      "Professional working environment",
      "Opportunities for career development",
      "Work Permit covered by the center",
      "Attractive Income",
      "Opportunities to earn a 12 month, full time contract, with extra benefits (paid holidays, health insurance, second contract incentives)",
      "Dedicated academic management team support and on-going professional development",
      "Great social network including quarterly and annual social events of school",
    ],
    applicationDocuments: [
      "Full CV with a photo, dated and with references",
      "Copy of your passport photo page.",
      " Location and start date preference.",
      "Due to government regulations regarding work permits you will need to provide: The original of your BA degree and a fully legalized copy.Your original CELTA/TEFL/TESOL certificate. A clean police clearance certificate from your home country and a fully legalized copy.",
    ],
  },
  {
    title: "Giáo viên Việt Nam",
    department: "Giáo viên bộ môn",
    location: "Địa điểm: Huế, Việt Nam",
    deadline: "Hạn ứng tuyển: ...",
    quantity: "Số lượng: ...",
    description: "Mô tả chi tiết công việc",
    requirement: "Điều kiện",
    Benefit: "Chế độ",
    forward: "Hồ sơ xin gửi về email: phoenixschoolvn@gmail.com",
    jobDescription: [
      "Giảng dạy, giáo dục đảm bảo chất lượng theo chương trình giáo dục và kế hoạch dạy học.",
      "Nhận xét, đánh giá và xếp loại học sinh cuối kỳ và cuối năm học; ghi sổ điểm và học bạ học sinh.",
      "Đánh giá, phát hiện và bồi dưỡng học sinh.",
      "Quản lý học sinh trong các hoạt động giáo dục do nhà trường tổ chức.",
      "Tham gia các hoạt động chuyên môn.",
      "Chịu trách nhiệm về chất lượng, hiệu quả giảng dạy và giáo dục.",
      "Kết nối thông tin giữa nhà trường và phụ huynh.",
    ],
    requirements: [
      "Trình độ học vấn: Tốt nghiệp Đại học Sư phạm chính quy loại Khá trở lên các chuyên ngành Sư phạm theo đúng môn học phụ trách.",
      "Sử dụng thành thạo vi tính văn phòng và phần mềm ứng dụng trong giảng dạy.",
      "Phát âm chuẩn, yêu nghề, mến trẻ.",
      "Năng động, sáng tạo, có tinh thần học hỏi, cầu tiến, sẵn sàng đổi mới phương pháp giảng dạy.",
      "Ưu tiên ứng viên có kinh nghiệm giảng dạy tại các trường công, bán công, tư thục chất lượng cao, trường song ngữ hoặc quốc tế.",
      "Kỹ năng giao tiếp, thuyết trình, giải quyết tình huống và làm việc nhóm tốt.",
      "Có khả năng đọc hiểu và giao tiếp Tiếng Anh là lợi thế.",
    ],
    benefits: ["Lương theo thỏa thuận."],
    applicationDocuments: [
      "Đơn xin việc (Cover letter).",
      "Sơ yếu lý lịch (CV) mô tả chi tiết quá trình công tác, vị trí và kỹ năng/kinh nghiệm.",
      "Bản sao công chứng bảng điểm, các văn bằng và chứng chỉ liên quan.",
      "Giấy khám sức khỏe.",
    ],
  },
];

const JobPosting = ({ job }) => {
  return (
    <div key={job.title} className="pb-20 text-left">
      <h4 className="h4 pb-6">{job.title}</h4>
      <div className="grid grid-cols-1 md:grid-cols-4 items-center justify-items-center divide-2 border-2 ">
        <p className="h5 w-full text-center">{job.department}</p>
        <p className="h5 w-full text-center">{job.location}</p>
        <p className="h5 w-full text-center">{job.deadline}</p>
        <p className="h5 w-full text-center">{job.quantity}</p>
      </div>
      <h4 className="h5 pt-10">{job.description}</h4>
      <ol className="marker:text-red-500 p list-outside list-disc ml-6">
        {job.jobDescription.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
      <h4 className="h5 pt-10">{job.requirement}</h4>
      <ol className="marker:text-red-500 p list-outside list-disc ml-6">
        {job.requirements.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
      <h4 className="h5 pt-10">{job.Benefit}</h4>
      <ol className="marker:text-red-500 p list-outside list-disc ml-6">
        {job.benefits.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
      <h4 className="h5 pt-10">{job.forward}</h4>
      <ol className="marker:text-red-500 p list-outside list-disc ml-6">
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
      <BannerImage
        srcmobile={FeatImage02}
        src={bannerabout}
        text1={t("home") + " / " + t("tuyen-dung")}
        text2={t("tuyen-dung")}
      />
      <section className="max-w-6xl mx-auto px-4 sm:px-6 ">
        <div>
          <h3 className="h3 pt-10 pb-10 text-center">
            Về Chế Độ Đãi Ngộ Của Chúng Tôi
          </h3>
          <p className="p">
            Chúng tôi chào đón tất cả ứng viên giàu kinh nghiệm và nhiệt tình
            cùng chia sẻ tầm nhìn và sứ mệnh giáo dục. Bên cạnh các phúc lợi
            lương thưởng cạnh tranh, Phoenix Education mang đến cho nhân viên cơ
            hội phát triển bản thân, thăng tiến trong sự nghiệp và trải nghiệm
            một môi trường làm việc đa văn hóa và không ngừng tiến bộ.
          </p>
        </div>
        <div>
          <h3 className="h3 pt-10 pb-10 text-center">Danh sách tuyển dụng</h3>
          {jobPostings.map((job) => (
            <JobPosting job={job} />
          ))}
        </div>
      </section>
      {/* <Footer /> */}
    </>
  );
}
