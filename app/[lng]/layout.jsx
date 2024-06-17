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
    title: t("title"),
    description:
      "A playground to explore new Next.js 13/14 app directory features such as nested layouts, instant loading states, streaming, and component level data fetching.",
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: "https://phuong-hoang.vercel.app/vi",
      images: [
        {
          url: "https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-6/429570304_947518154040866_4185484461421526268_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=2bWFOUhAo6cQ7kNvgECWkA3&_nc_ht=scontent.fdad1-4.fna&oh=00_AYAA25g6wKdtzjMBlqJOjOnrh6gxkYlRJ38fsKgi7SIL6Q&oe=66754F03", // Thay đổi URL ảnh đại diện của bạn ở đây
          width: 1200,
          height: 630,
          alt: "Mô tả ảnh đại diện",
        },
      ],
    },
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
