import React from 'react';
import { Button, Dropdown, Menu, Space } from 'antd';
import Link from "next/link";

const Navv = ({ items, buttonText }) => (
  <Space direction="vertical">
    <Space wrap className=''>
      <Dropdown
        overlay={
          <Menu>
            {items.map(item => (
              <Menu.Item key={item.key}>
                <Link href={item.href} className='block px-4 py-2 text-blue-500 hover:text-blue-700'>
                  {item.label}
                </Link>
              </Menu.Item>
            ))}
          </Menu>
        }
        placement="bottomLeft"
        className='border-none shadow-none font-inter font-medium text-rose-600 hover:bg-rose-100  flex items-center transition duration-150 ease-in-out'
      >
        <Button className='text-xl'>{buttonText}</Button>
      </Dropdown>
    </Space>
  </Space>
);

export default Navv;