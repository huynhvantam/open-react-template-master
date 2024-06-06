import Link from "next/link";
import { useTranslation } from "../../../i18n";
import { Header } from "../../components/Header/client";
import bannerabout from "@/public/images/banner/banner-about.jpg";
import BannerImage from "../../components/banner";
import Content1 from "../../components/content1";
import Pagedautien from "../../components/pagedautien";
import Image1 from "@/public/images/phuonghoang/hocsinh1.jpg";
import Image from "next/image";
import ZiczagImage from "../../components/ziczagimage";

export async function generateMetadata({ params: { lng } }) {
  const { t } = await useTranslation(lng, "header");
  const title1 = t("dich-vu-th");
  const title2 = t("giao-duc-ph");
  return { title: `${title1} - ${title2}` };
}

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng, "header");
  const highlight = true; // Đặt giá trị highlight ở đây
  const links = [
    {
      href: "/doi-song-hoc-duong",
      content: t("moi-truong-ht"),
    },
    {
      href: "/doi-song-hoc-duong/goc-hoc-sinh",
      content: t("goc-hoc-sinh"),
    },
    {
      href: "/doi-song-hoc-duong/thu-vien-hinh-anh",
      content: t("thu-vien-ha"),
    },
    {
      href: "/doi-song-hoc-duong/dich-vu-truong-hoc",
      content: t("dich-vu-th"),
      hightlight: true,
    },
    {
      href: "/doi-song-hoc-duong/thanh-tich-hoc-duong",
      content: t("thanh-tich-hs"),
    },
    {
      href: "/doi-song-hoc-duong/chuong-trinh-ngoai-khoa",
      content: t("chuong-trinh-nk"),
    },
  ];
  const contentData = [
    {
      heading2: "Chăm sóc Y tế",
      heading3: "Nhiệt tình & Nhanh chóng",
      nestedContent: [
        {
          nestedText:
            "Đội ngũ nhân viên y tế của nhà trường có chuyên môn cao, đầy đủ bằng cấp, nhiệt tình, trách nhiệm.",
        },
        {
          nestedText:
            "Cơ sở y tế được mở cả ngày học đáp ứng nhu cầu sức khỏe cơ bản của học sinh cũng như thầy cô giáo.",
        },
        {
          nestedText:
            "Nhân viên y tế tại nhà trường không ngừng được nâng cao trình độ chuyên môn bởi những khóa đào tạo, huấn luyện chuyên môn sâu nhằm hỗ trợ học sinh vào đúng thời điểm cần thiết nhất.",
        },
      ],
      imageSrc: Image1,
    },
    {
      heading2: "Chú trọng đến việc chăm sóc",
      heading3: "Tâm lý học sinh",
      paragraph:
        "Ở Phoenix Education, sức khỏe tâm lý gắn liền với giáo dục văn hóa, là nền tảng cho sự phát triển toàn diện của mỗi học sinh. Do vậy, chăm sóc tâm lý cho học sinh luôn được chú trọng và quan tâm đúng mức.",
      nestedContent: [
        {
          nestedText:
            "Ưu tiên phát triển sự tự tin, khả năng phục hồi, tôn trọng, cảm thông với từng học sinh.",
        },
        {
          nestedText:
            "Hoạt động thể chất, thời gian hoạt động ngoài lớp học diễn ra thường xuyên, thức ăn bổ dưỡng, an toàn, chương trình học phù hợp…là các yếu tố hỗ trợ giúp học sinh cảm thấy khỏe mạnh và hạnh phúc hơn tại Giáo dục Phượng Hoàn.",
        },
        {
          nestedText:
            "Mỗi giáo viên của Giáo dục Phượng Hoàn đóng vai trò như một nhà tư vấn tâm lý. Dựa trên việc giảng dạy, tiếp xúc trực tiếp với học sinh, lấy học sinh làm trung tâm, thầy cô giáo có thể hỗ trợ học sinh bất kỳ lúc nào khi các em có dấu hiệu căng thẳng, lo lắng.",
        },
      ],
      imageSrc: Image1,
    },
    {
      heading2: "Bảo đảm An toàn và",
      heading3: "Bảo vệ Trẻ em",
      paragraph:
        "Giáo dục Phượng Hoàng tin rằng quyền lợi của trẻ em là tối quan trọng, trẻ em chỉ có thể học hành tốt nhất khi cảm thấy an toàn. Vì vậy, Giáo dục Phượng Hoàn đã và đang:",
      nestedContent: [
        {
          nestedText:
            "Duy trì môi trường giáo dục lành mạnh, không tệ nạn, nơi các em học sinh cảm thấy toàn tuyệt đối khi đến trường.",
        },
        {
          nestedText:
            "Luôn lắng nghe: Khuyến khích các em bày tỏ quan điểm, chia sẻ cảm nhận, nêu lên ý kiến và được thầy cô giáo trong trường lắng nghe khi các em có khó khăn hoặc cảm thấy lo lắng về bất kỳ điều gì đó.",
        },
        {
          nestedText:
            "Nâng cao nhận thức an toàn học đường: Giúp các em nâng cao nhận thức về vấn đề an toàn, lạm dụng, quấy rối, bắt nạt học đường và các thức xử lý thông qua các hoạt động học tập, hoạt động ngoại khóa.",
        },
      ],
      imageSrc: Image1,
    },
  ];
  const contentData2 = [
    {
      heading2: "8 tiêu chí “Vàng”",
      heading3: "trong bếp ăn",
      nestedContent: [
        {
          nestedText: "100% thực phẩm sạch/hữu cơ",
        },
        {
          nestedText: "Thực đơn phong phú, không trùng lặp",
        },
        {
          nestedText: "Tạo thói quen ăn uống lành mạnh cho học sinh",
        },
        {
          nestedText: "Đơn vị cung cấp thực phẩm uy tín",
        },
        {
          nestedText:
            "Bếp ăn nhà trường được cấp chứng chỉ ISO 22000:2018, chứng chỉ HACCP, Giấy phép an toàn thực phẩm",
        },
        {
          nestedText:
            "Chuyên gia dinh dưỡng trực tiếp tư vấn đảm bảo bữa ăn cân bằng, phù hợp từng độ tuổi",
        },
        {
          nestedText:
            "Bữa ăn không chỉ đơn giản là cung cấp năng lượng cho cơ thể mà còn là nơi giao lưu, tiếp thu kiến thức, vui vẻ, thoải mái…",
        },
        {
          nestedText: "Đầu bếp được đào tạo bài bản, tâm huyết, có kinh nghiệm",
        },
      ],
      imageSrc: Image1,
    },
    {
      heading2: "Thực đơn đa dạng",
      heading3: "5 tuần không trùng lặp",

      nestedContent: [
        {
          nestedText:
            "Khẩu phần bữa ăn được xây dựng một cách khoa học, đảm bảo tỷ lệ cân đối giữa các thành phần dinh dưỡng.",
        },
        {
          nestedText:
            "Học sinh tại Phoenix Education có ba bữa ăn chính tại trường: sáng, trưa và xế chiều. Các món ăn được lựa chọn trong mỗi bữa ăn tại Phoenix Education đa dạng từ Á đến Âu, với các món khô, nước, salad, tráng miệng…",
        },
        {
          nestedText:
            "Ngân hàng thực đơn đã xây dựng hơn 1000 món ăn đa dạng, phong phú, hấp dẫn, cân đối dinh dưỡng theo từng lứa tuổi và cấp học.",
        },
      ],
      imageSrc: Image1,
    },
    {
      heading2: "Không gian canteen",
      heading3: "thân thiện, hiện đại",

      nestedContent: [
        {
          nestedText:
            "Tại canteen, học sinh chủ động xếp hàng nhận thức ăn, ngồi ăn uống và trò chuyện cùng các bạn của mình. Các thầy cô giáo và cán bộ phụ trách thường xuyên có mặt tại canteen để trợ giúp các em trong ổn định trật tự, giúp các em khó khăn trong việc ăn chậm và hướng dẫn các em tạo thói quen sắp đặt bát, đĩa, thìa, khay khi ăn xong.",
        },
        {
          nestedText:
            "Học sinh Phoenix Education được thưởng thức các bữa ăn ngon hàng ngày trong canteen với thiết kế vô cùng trẻ trung với nhiều không gian mở để học sinh thoải mái trò chuyện và thư giãn trong mỗi giờ trưa.",
        },
      ],
      imageSrc: Image1,
    },
  ];
  const contentData3 = [
    {
      heading2: "Ưu tiên công tác",
      heading3: "An toàn",
      nestedContent: [
        {
          nestedText:
            "Hệ thống xe bus của Trường Phoenix Education được công ty chuyên cung cấp dịch vụ về xe và lái xe tư vấn thiết kế để đảm bảo an toàn khi đưa đón học sinh.",
        },
        {
          nestedText:
            "Trường đã xem xét tất cả những yếu tố liên quan như số lượng học sinh mỗi xe, nơi cư trú của học sinh, lộ trình giao thông và thời gian di chuyển để có thể cung cấp dịch vụ xe buýt tốt nhất.",
        },
        {
          nestedText:
            "An toàn là ưu tiên hàng đầu khi trường Phoenix Education lựa chọn công ty cung cấp dịch vụ và thiết kế lộ trình xe, điểm đưa và đón học sinh. Trường Phoenix Education chỉ sử dụng phương tiện chất lượng cao 16 chỗ. Mỗi xe đi kèm một nhân viên quản lý hỗ trợ phương tiện trong khi di chuyển.",
        },
      ],
      imageSrc: Image1,
    },
    {
      heading2: "Thời gian chờ xe bus và",
      heading3: "thời gian di chuyển",
      paragraph:
        "Xe buýt của nhà trường luôn sẵn sàng đón học sinh tại trường ngay sau khi kết thúc giờ học. Lộ trình của xe được thiết kế sao cho có thể đưa đón học sinh trong thời gian ngắn nhất nhưng vẫn đảm bảo an toàn giao thông.",
      nestedContent: [
        {
          nestedText:
            "Trường Phoenix Education cung cấp 24 lộ trình xe buýt trên nhiều địa bàn khác nhau trong thành phố Hà Nội. Trường đang xem xét, thiết kế lại các lộ trình hiện tại và bổ sung các tuyến đường mới dựa vào nhu cầu thực tế, phản hồi của phụ huynh và những thay đổi về cơ sở vật chất và giao thông của thành phố.",
        },
        {
          nestedText:
            "Học sinh, phụ huynh, giáo viên và tài xế xe buýt đều phải tuân thủ một số điều luật khi sử dụng dịch vụ xe bus của trường.",
        },
      ],
      imageSrc: Image1,
    },
    {
      heading2: "Danh sách các tuyến xe Bus",
      heading3: "Năm học 2023 – 2024",
      paragraph: "Lộ trình đưa đón",
      nestedContent: [
        {
          nestedText: "Đông Anh – Võ Chí Công – Phoenix Education",
        },
        {
          nestedText: "Đông Anh – Võ Chí Công – Phoenix Education",
        },
      ],
      imageSrc: Image1,
    },
  ];
  return (
    <>
      <Header lng={lng} path="/chuong-trinh-dao-tao/trung-hoc" />
      <BannerImage
        src={bannerabout}
        text1={t("home") + " / " + t("doi-song")}
        text2={t("dich-vu-th")}
      />
      <Pagedautien links={links} highlight={highlight} />{" "}
      <div className="max-w-6xl mx-auto">
        {/* 1 */}
        <div className="grid grid-cols-10 gap-8 py-20">
          <div className="col-span-7">
            <h4 className="text-3xl  font-playfair text-left ">
              <span className="text-rose-500 text-4xl">
                Sức khỏe và An toàn
              </span>{" "}
              của học sinh
              <br /> là trách nhiệm{" "}
              <span className="text-rose-500 text-4xl">HÀNG ĐẦU</span> của
              Phoenix Education
            </h4>
            <div className="p pt-4 max-w-3xl space-y-2">
              <p>
                Phoenix Education đảm bảo tất cả những hoạt động của nhà trường
                từ việc tuyển dụng, quản lý nhân viên, học sinh, an ninh khuôn
                viên… đều tập trung vào việc duy trì các tiêu chuẩn cao nhất về
                chăm sóc sức khỏe và đảm bảo an toàn cho toàn thể học sinh, nhân
                viên và quý phụ huynh.
              </p>
              <p>
                Các bộ phận Bảo trì & Cơ sở vật chất thường xuyên kết hợp với
                giáo viên chủ nhiệm, giáo viên bộ môn tìm ra những mối nguy cơ
                tiềm ẩn trong và ngoài lớp học để có giải pháp xử lý kịp thời.
                Học sinh được đảm bảo an toàn tuyệt đối và vui vẻ trong khoảng
                thời gian ở trường.
              </p>
            </div>
          </div>
          <div className="col-span-3">
            <Image src={Image1} className="w-full h-full" />
          </div>
        </div>

        {/* 2 */}
        <h3
          className="h3  text-center py-3 mb-6  border-[2.5px] border-rose-300"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)",
          }}
        >
          Y tế học đường
        </h3>
        <p className="p pb-4 text-center -mb-14">
          Với mục tiêu không chỉ tạo nên một thế hệ học sinh đầy bản lĩnh, tài
          năng, dám thể hiện quan điểm, cá tính riêng mà còn là những con người
          khỏe mạnh, tràn đầy năng lượng để học tập và vui chơi, Phoenix
          Education luôn chú ý đến công tác chăm sóc, bảo vệ sức khỏe cho các em
          học sinh ngay từ ngày đầu tiên đến trường.
        </p>
        <ZiczagImage contentData={contentData} />

        {/* 3 */}
        <h3
          className="h3 mt-28 text-center py-3 mb-6  border-[2.5px] border-rose-300"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)",
          }}
        >
          Dinh dưỡng học đường
        </h3>
        <p className="p pb-4 text-center -mb-14">
          Song song với quá trình giáo dục toàn diện thì Giáo dục Phượng Hoàng
          luôn chú trọng đến việc chăm sóc sức khỏe và dinh dưỡng cho học sinh
          để các con có đầy đủ năng lượng cho một ngày học tập và hoạt động hiệu
          quả. Thực đơn tại Giáo dục Phượng Hoàng đều được cân đối đảm bảo đủ
          chất dinh dưỡng, đa dạng nguồn thực phẩm, đảm bảo vệ sinh an toàn thực
          phẩm, phù hợp với từng lứa tuổi để các em luôn cảm thấy ngon miệng và
          thoải mái khi dùng bữa tại trường.
        </p>
        <ZiczagImage contentData={contentData2} />

        {/* 4 */}
        <h3
          className="h3 mt-28 text-center py-3 mb-6  border-[2.5px] border-rose-300"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)",
          }}
        >
          School Bus
        </h3>
        <p className="p -mb-14 pb-4 text-center">
          Dịch vụ xe bus đưa đón học sinh với 24 tuyến đường an toàn và phù hợp
          trên khắp Huees giúp bố mẹ có thể hoàn toàn yên tâm và tiết kiệm thời
          gian trong việc đưa đón con đi học.
        </p>
        <ZiczagImage contentData={contentData3} />
      </div>
    </>
  );
}
