import Link from "next/link";
import { useTranslation } from "../../../i18n";
import { Header } from "../../components/Header/client";
import bannerabout from "@/public/images/banner/banner-about.jpg";
import BannerImage from "../../components/banner";
import Content1 from "../../components/content1";
import Pagedautien from "../../components/pagedautien";
import Image1 from "@/public/images/testimonial-01.jpg";
import FeesTable from "./FeesTable";
export async function generateMetadata({ params: { lng } }) {
  const { t } = await useTranslation(lng, "header");
  const title1 = t("hoc-phi");
  const title2 = t("giao-duc-ph");
  return { title: `${title1} - ${title2}` };
}

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng, "header");
  const highlight = true; // Đặt giá trị highlight ở đây
  const links = [
    {
      href: "/tuyen-sinh",
      content: t("thong-tin-ts"),
    },
    {
      href: "/tuyen-sinh/quy-dinh-chinh-sach",
      content: t("quy-dinh-chinh-sach"),
    },
    {
      href: "/tuyen-sinh/hoc-phi",
      content: t("hoc-phi"),
      hightlight: true,
    },
    {
      href: "/tuyen-sinh/chuong-trinh-uu-dai",
      content: t("chuong-trinh-ud"),
    },
  ];

  return (
    <>
      <Header lng={lng} path="/tuyen-sinh/hoc-phi" />
      <BannerImage
        src={bannerabout}
        text1={t("home") + " / " + t("tuyen-sinh")}
        text2={t("hoc-phi")}
      />
      <Pagedautien links={links} highlight={highlight} />{" "}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 ">
        <div>
          <h3 className="h3 pt-10 pb-10 text-center">ĐANG PHÁT TRIỂN</h3>
        </div>
        {/* <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="bg-gray-200 text-gray-800 font-bold text-sm p-2">
                Độ tuổi
              </th>
              <th className="bg-gray-200 text-gray-800 font-bold text-sm p-2">
                Học phí/năm (VND)
              </th>
              <th className="bg-gray-200 text-gray-800 font-bold text-sm p-2">
                Tiền ăn/năm (VND)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b border-gray-200 text-gray-900 text-sm p-2">
                Từ 18 tháng tuổi đến dưới 6 tuổi
              </td>
              <td className="border-b border-gray-200 text-gray-900 text-sm p-2">
                <div className="flex flex-col">
                  <div>26.730.000</div>
                  <div className="text-gray-600">(Học cả ngày)</div>
                </div>
                <div className="flex flex-col">
                  <div>13.365.000</div>
                  <div className="text-gray-600">(Học nữa ngày có ăn trưa)</div>
                </div>
                <div className="flex flex-col">
                  <div>13.365.000</div>
                  <div className="text-gray-600">
                    (Học nửa ngày không ăn trưa)
                  </div>
                </div>
              </td>
              <td className="border-b border-gray-200 text-gray-900 text-sm p-2">
                <div className="flex flex-col">
                  <div>7.920.000</div>
                  <div className="text-gray-600">(Có ăn trưa)</div>
                </div>
                <div className="text-gray-600">1.980.000 (Không ăn trưa)</div>
              </td>
            </tr>
          </tbody>
        </table> */}
        <FeesTable />
      </section>
    </>
  );
}
