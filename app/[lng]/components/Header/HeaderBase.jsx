import Link from "next/link";
import { Trans } from "react-i18next/TransWithoutContext";
import { languages } from "../../../i18n/settings";
import MobileMenu from './mobile-menu'
import { Button, Dropdown, Space } from 'antd';
import Navv from "./navbar";

export const HeaderBase = ({ t, lng, path = "" }) => {
  const items = [
    { key: '1', href: '/ve-chung-toi', label: 'Giới thiệu chung' },
    { key: '2', href: '/ve-chung-toi/tam-nhin-su-menh', label: 'Tầm nhìn - Sứ mệnh' },
    { key: '3', href: '/', label: 'Đội ngũ giáo viên' },
    { key: '4', href: '/', label: 'Đội ngũ lãnh đạo' },
    { key: '5', href: '/', label: 'Thành tích của chúng tôi' },
  ];
  const items2 = [
    { key: '1', href: '/', label: 'Tổng quan chương trình' },
    { key: '2', href: '/', label: 'Mầm non' },
    { key: '3', href: '/', label: 'Tiểu học' },
    { key: '4', href: '/', label: 'Trung học' },
    { key: '5', href: '/', label: 'Anh ngữ Phượng Hoàng' },
  ];
  const items3 = [
    { key: '1', href: '/', label: 'Thành tích học sinh' },
    { key: '2', href: '/', label: 'Dịch vụ đưa đón' },
    { key: '3', href: '/', label: 'Thư viện' },
    { key: '4', href: '/', label: 'Chăm sóc y tế' },
    { key: '5', href: '/', label: 'Nhà ăn' },
  ];
  const items4 = [
    { key: '1', href: '/', label: 'Đăng ký tuyển sinh' },
    { key: '2', href: '/', label: 'Quy định va chính sách' },
    { key: '3', href: '/', label: 'Học phí' },
    { key: '4', href: '/', label: 'Chương trình ưu đãi' },
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
              <ul className='flex   flex-1 justify-end items-center text-lg'>
                <Navv items={items} buttonText={t('about')} />
                <Navv items={items2} buttonText={t('program')} />
                <Navv items={items3} buttonText={t('doi-song')} />
                <Navv items={items4} buttonText={t('tuyen-sinh')} />

                <Link className="px-1.5 py-2 rounded-sm text-white round bg-rose-600 hover:bg-rose-700 " href="/lien-he">{t('lien-he')}</Link>

              </ul>
            </nav>
          </div>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

