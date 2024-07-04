'use client'; // Ensure this component is a Client Component

import React from 'react';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import { useTranslation } from "../../../i18n/client";

// Define props interface for Menubar
interface MenubarProps {
  lng: string; // Language parameter
  mode: 'inline' | 'horizontal'; // Mode of the menu ('inline' or 'horizontal')
  items?: MenuProps['items']; // Define the correct type for items, making it optional
}

const Menubar: React.FC<MenubarProps> = ({ lng, mode, items }) => {
  const { t } = useTranslation(lng, "header");

  // Customize the last item if items is defined
  const customizedItems: MenuProps['items'] | undefined = items?.map((item, index) => {
    // Ensure we only apply the class to default items with a label, not dividers or submenus
    if (item && 'label' in item && index === items.length - 1) {
      return {
        ...item,
        className: 'bg-rose-500 !text-white lg:bg-transparent lg:!text-gray-700', // Tailwind CSS classes for red background and white text
      };
    }
    return item;
  });

  return (
    <div>
      <Menu
        mode={mode}
        items={customizedItems}
        className={`${mode === 'inline' ? "lg:hidden" : "hidden lg:block"} text-base font-inter border-none`}
        overflowedIndicator={<span>...</span>}
      />
    </div>
  );
};

export default Menubar;
