import Link from "next/link";
import { Trans } from "react-i18next/TransWithoutContext";
import { languages } from "../../../i18n/settings";
import MobileMenu from './mobile-menu'
export const HeaderBase = ({ t, lng, path = "" }) => {
  return (
    <header className="absolute w-full z-30 py-2 bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 ">

        <div className="flex items-start justify-between h-20 ">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <div className='h-24 w-24 bg-red-100'></div>
          </div>
          <div className="space-y-3 ">
            {/* Desktop navigation */}
            <div className="flex gap-x-6 justify-end items-center">
              <div className="px-1.5 py-2 rounded-sm text-xs leading-4 text-white bg-rose-500 hover:bg-rose-700 ">Đăng ký tư vấn</div>
              <div className="pp">Tin tức - Sự kiện</div>
              <div className="pp">Tuyển dụng</div>
              {/* đổi ngôn ngữ */}
              <div className="uppercase  text-rose-600  hover:font-normal">
                <span className="font-bold">{lng}</span>  {" "} | {" "}
                <span className="hover:font-bold">
                  {languages
                    .filter((l) => lng !== l)
                    .map((l, index) => {
                      return (
                        <span key={l}>
                          {index > 0 && " or "}
                          <Link href={`/${l}${path}`}>{l}</Link>
                        </span>
                      );
                    })}
                </span>
              </div>
            </div>
            <nav className="hidden md:flex md:grow ">
              {/* Desktop sign in links */}
              <ul className='flex gap-x-10  flex-1 justify-end items-center text-lg'>
                <li><Link className=" font-medium text-rose-600 hover:bg-rose-100  flex items-center transition duration-150 ease-in-out" href="/about">{t('about')}</Link></li>
                <li><Link className=" font-medium text-rose-600 hover:bg-rose-100  flex items-center transition duration-150 ease-in-out" href="/hero">{t('program')}</Link></li>
                <li><Link className=" font-medium text-rose-600 hover:bg-rose-100  flex items-center transition duration-150 ease-in-out" href="/zero">{t('doi-song')}</Link></li>
                <li><Link className=" font-medium text-rose-600 hover:bg-rose-100  flex items-center transition duration-150 ease-in-out" href="/first">{t('tuyen-sinh')}</Link></li>
                <li><Link className="px-1.5 py-2 rounded-sm text-white round bg-rose-600 hover:bg-rose-700 " href="/first">{t('lien-he')}</Link></li>
              </ul>

            </nav>
          </div>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
};
