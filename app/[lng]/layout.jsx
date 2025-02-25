import "../css/style.css";
import { dir } from "i18next";
import { languages, fallbackLng } from "../i18n/settings";
import { useTranslation } from "../i18n";
import { Be_Vietnam_Pro, Playfair_Display } from "next/font/google";
import Footer from "../components/ui/footer";
import Dangkytuvan from "./components/dangkytuvan";
import DefaultLayout from "./DefaultLayout";
import Googlemap from "./components/googlemap";
const inter = Be_Vietnam_Pro({
  subsets: ["vietnamese"],
  variable: "--font-inter",
  display: "swap",
  weight: "400",
});
const architects_daughter = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: "400",
  display: "swap",
});

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export async function generateMetadata({ params: { lng } }) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  const { t } = await useTranslation(lng);
  return {
    title: "Giáo Dục Phượng Hoàng",
    description: "Tuyển sinh năm học 2025 - 2026",
  };
}

export default function RootLayout({ children, params: { lng } }) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <DefaultLayout />
      <head />
      <body
        className={`${architects_daughter.variable} ${inter.variable}
       font-inter antialiased text-[#1f253a] tracking-tight text-justify`}
      >
        <div className="flex flex-col min-h-screen overflow-hidden">
          {children}
        </div>
        <Dangkytuvan />
        {/* <Googlemap /> */}
        <Footer />
      </body>
    </html>
  );
}
