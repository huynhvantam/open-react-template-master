import React from "react";
import { Button, Dropdown, Menu, Space } from "antd";
import Link from "next/link";

const Navv = ({ items, buttonText, href }) => (
  <Space direction="vertical">
    <Space wrap>
      <Dropdown
        overlay={
          <Menu>
            {items.map((item) => (
              <Menu.Item key={item.key}>
                <Link href={item.href}>
                  <span className="block px-2 py-1 text-lg text-[#49505e] font-medium">
                    {item.label}
                  </span>
                </Link>
              </Menu.Item>
            ))}
          </Menu>
        }
        placement="bottomLeft"
        className="border-none shadow-none font-inter font-medium text-[#49505e] flex items-center transition duration-150 ease-in-out"
      >
        <Link href={href} className="text-lg px-3">
          {buttonText}
        </Link>
      </Dropdown>
    </Space>
  </Space>
);

export default Navv;
