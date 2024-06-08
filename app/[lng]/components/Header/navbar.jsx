import React from "react";
import { Button, Dropdown, Menu, Space } from "antd";
import Link from "next/link";

const Navv = ({ items, buttonText, href }) => {
  const menuItems = items.map((item) => (
    <Menu.Item key={item.key}>
      <Link
        href={item.href}
        style={{ textShadow: "0px 0px 0px rgba(0, 0, 0, 0.5)" }}
      >
        <span className="block px-2 py-1 text-base text-[#49505e] font-medium">
          {" "}
          {item.label}{" "}
        </span>
      </Link>
    </Menu.Item>
  ));

  return (
    <Space direction="vertical">
      <Space wrap>
        <Dropdown
          overlay={<Menu>{menuItems}</Menu>}
          placement="bottomLeft"
          className="border-none shadow-none font-inter text-[#49505e] flex items-center transition duration-150 ease-in-out"
        >
          <Link
            href={href}
            className=" px-3"
            style={{ textShadow: "0px 0px 0px rgba(0, 0, 0, 0.5)" }}
          >
            {buttonText}
          </Link>
        </Dropdown>
      </Space>
    </Space>
  );
};

export default Navv;
