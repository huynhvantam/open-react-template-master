'use client'; // Ensure this component is a Client Component

import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import React from 'react';
import Link from 'next/link';
import { useTranslation } from "../../../i18n/client";

// Define props interface for Menubar
interface MenubarProps {
  lng: string; // Language parameter
  mode: 'inline' | 'horizontal'; // Mode of the menu ('inline' or 'horizontal')
  items: any;
}

const Menubar: React.FC<MenubarProps> = ({ lng, mode, items }) => {
  const { t } = useTranslation(lng, "header");



  return (
    <div>
      <Menu
        mode={mode}
        items={items}
        className={`${mode === 'inline' ? "lg:hidden" : "hidden lg:block"} text-base font-inter border-none`}
      />
    </div>
  );
};

export default Menubar;
