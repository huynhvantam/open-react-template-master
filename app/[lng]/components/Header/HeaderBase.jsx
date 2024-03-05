import Link from "next/link";
import { Trans } from "react-i18next/TransWithoutContext";
import { languages } from "../../../i18n/settings";
import MobileMenu from './mobile-menu'
import { Button, Dropdown, Space } from 'antd';
import Navv from "./navbar";

export const HeaderBase = ({ t, lng, path = "" }) => {
  const items = [
    { key: '1', href: 'https://www.luohanacademy.com', label: 'Tổng quan' },
    { key: '2', href: 'https://www.luohanacademy.com', label: 'Tầm nhìn - Sứ mệnh' },
    { key: '3', href: 'https://www.luohanacademy.com', label: 'Đội ngũ giáo viên' },
    { key: '4', href: 'https://www.luohanacademy.com', label: 'Đội ngũ lãnh đạo' },
  ];
  const items2 = [
    { key: '1', href: 'https://www.luohanacademy.com', label: 'Tổng quan' },
    { key: '2', href: 'https://www.luohanacademy.com', label: 'Tầm nhìn - Sứ mệnh' },
    { key: '3', href: 'https://www.luohanacademy.com', label: 'Đội ngũ giáo viên' },
    { key: '4', href: 'https://www.luohanacademy.com', label: 'Đội ngũ lãnh đạo' },
  ];


  return (
    <header className="absolute w-full z-30 py-2 bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 ">
        <div className="flex items-start justify-between h-20 ">
          {/* Site branding */}

          <div className="shrink-0 mr-4">
            {/* Logo */}
            <div className='h-24 w-24 bg-red-100'></div>
          </div>
          <div className="space-y-3">
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
                <Navv items={items} buttonText={t('about')} />
                <Navv items={items} buttonText={t('about')} />
                {/* <li><Link className=" font-medium text-rose-600 hover:bg-rose-100  flex items-center transition duration-150 ease-in-out" href="/about">{t('about')}</Link></li>
                <li><Link className=" font-medium text-rose-600 hover:bg-rose-100  flex items-center transition duration-150 ease-in-out" href="/hero">{t('program')}</Link></li>
                <li><Link className=" font-medium text-rose-600 hover:bg-rose-100  flex items-center transition duration-150 ease-in-out" href="/zero">{t('doi-song')}</Link></li>
                <li><Link className=" font-medium text-rose-600 hover:bg-rose-100  flex items-center transition duration-150 ease-in-out" href="/first">{t('tuyen-sinh')}</Link></li>
                <li><Link className="px-1.5 py-2 rounded-sm text-white round bg-rose-600 hover:bg-rose-700 " href="/first">{t('lien-he')}</Link></li> */}
              </ul>
            </nav>
          </div>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
};
const items = [
  {
    key: '1',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item
      </a>
    ),
  },
];

