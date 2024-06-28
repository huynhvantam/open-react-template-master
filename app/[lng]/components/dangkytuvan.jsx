"use client";
import { useState } from "react";
import Image from "next/image";
import Image1 from "@/public/images/phuonghoang/hocsinh2.jpg";
import { Button, Checkbox, Input } from "antd";

const CustomCheckboxGroup = ({ options, onChange }) => {
  const [checkedValues, setCheckedValues] = useState([]);

  const handleCheckboxChange = (values) => {
    setCheckedValues(values);
    if (onChange) {
      onChange(values);
    }
  };

  return (
    <Checkbox.Group
      name="luachon"
      options={options}
      value={checkedValues}
      onChange={handleCheckboxChange}
    />
  );
};

export default function Dangkytuvan() {
  const handleCheckboxChange = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };

  return (
    <section id="tuyen-sinh">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative py-20">
        <h3 className="h3 text-left pb-4 lg:pb-0" data-aos="fade-up">
          Đăng ký nhận tư vấn
        </h3>
        <p className="p" data-aos="fade-up" data-aos-delay="200">
          Đội ngũ Tuyển sinh sẽ tư vấn tận tâm và đem lại trải nghiệm tuyệt vời
          nhất cho gia đình!
        </p>
        <div className="lg:grid lg:grid-cols-2 gap-20 pt-10" data-aos="fade-up">
          <div data-aos="fade-up" data-aos-delay="300">
            <Image
              loading="lazy"
              className="h-fit pb-4 lg:pb-0"
              src={Image1}
              alt="Môn học"
              // objectFit="cover"
            />
          </div>
          <div className="space-y-6" data-aos="fade-up" data-aos-delay="400">
            <div className="border-b">
              <p className="p">
                Họ và tên phụ huynh<span className="text-red-500">*</span>
              </p>
              <Input
                name="phuhuynh"
                className="rounded-md border-none"
                placeholder="Điền tên tại đây"
              />
            </div>
            <div className="border-b">
              <p className="p">
                Số điện thoại<span className="text-red-500">*</span>
              </p>
              <Input
                name="sdt"
                className="rounded-md border-none"
                placeholder="Điền số điền thoại tại đây"
              />
            </div>
            <div className="border-b">
              <p className="p">
                Email<span className="text-red-500">*</span>
              </p>
              <Input
                name="email"
                className="rounded-md border-none"
                placeholder="Điền email tại đây"
                autoComplete="email"
              />
            </div>
            <div className="border-b">
              <p className="p">Lời nhắn hoặc thắc mắc của quý phụ huynh</p>
              <Input
                name="sms"
                className="rounded-md border-none"
                placeholder="Thắc mắc của quý phụ huynh"
              />
            </div>
            <div>
              <p className="p">Tìm hiểu cấp học</p>
              <CustomCheckboxGroup
                options={[
                  { label: "Mầm non", value: "mamnon" },
                  { label: "Tiểu học", value: "tieuhoc" },
                  { label: "Trung học", value: "trunghoc" },
                  { label: "Trung tâm anh ngữ", value: "anhngu" },
                ]}
                onChange={handleCheckboxChange}
              />
            </div>
            <button className="btn" data-aos="fade-up">
              Gửi đăng ký {" >"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
