"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Image1 from "@/public/images/phuonghoang/hocsinh2.jpg";
import { Button, Checkbox, Input } from "antd";

export default function Dangkytuvan() {
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setClassLevel((prevClassLevel) =>
      checked
        ? [...prevClassLevel, value]
        : prevClassLevel.filter((classValue) => classValue !== value)
    );
  };

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [answer, setAnswer] = useState("");
  const [classLevel, setClassLevel] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formId = "1FAIpQLScLq9PYH4wrUsW-x8Th49wHEvdxc7ZUsI9HC54lxGS5AA2dxQ"; // FORM_ID của bạn
    const data = new URLSearchParams({
      "entry.53428729": name, // Entry ID của trường "Họ và tên"
      "entry.1891195606": phone, // Entry ID của trường "Số điện thoại"
      "entry.384779362": email, // Entry ID của trường "Email"
      "entry.1275452875": answer, // Entry ID của trường "Câu trả lời"
      "entry.1835956141": classLevel.join(","), // Entry ID của trường "Lớp" (concatenate selected values)
    });

    console.log(Object.fromEntries(data.entries())); // Log the data to the console

    const response = await fetch(
      `https://docs.google.com/forms/d/e/${formId}/formResponse`,
      {
        method: "POST",
        mode: "no-cors", // Bypass CORS
        body: data,
      }
    );

    // Note: You won't be able to check response.ok due to no-cors mode.
    alert(
      "Đăng ký nhận tư vấn thành công. Chúng tôi sẽ liên lạc với quý phụ huynh trong thời gian sớm nhất."
    );

    setName("");
    setPhone("");
    setEmail("");
    setAnswer("");
    setClassLevel([]);
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
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="border-b">
              <p className="p">
                Họ và tên phụ huynh<span className="text-red-500">*</span>
              </p>
              <Input
                required
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="phuhuynh"
                className="rounded-md border-none"
                placeholder="Điền tên tại đây"
              />
            </div>
            <div className="border-b">
              <p className="p">
                Số điện thoại
                <span className="text-red-500">*</span>
              </p>
              <Input
                required
                type="number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                name="sdt"
                className="rounded-md border-none"
                placeholder="Điền số điền thoại tại đây"
              />
            </div>
            <div className="border-b">
              <p className="p">
                Email
                {/* <span className="text-red-500">*</span> */}
              </p>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                className="rounded-md border-none"
                placeholder="Điền email tại đây"
                autoComplete="email"
              />
            </div>
            <div className="border-b">
              <p className="p">Lời nhắn hoặc thắc mắc của quý phụ huynh</p>
              <Input
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                name="sms"
                className="rounded-md border-none"
                placeholder="Thắc mắc của quý phụ huynh"
              />
            </div>
            <div>
              <p className="p">Tìm hiểu cấp học</p>
              <div className="lg:flex gap-4 p">
                <div className="">
                  <label className="flex items-center">
                    <input
                      className="mr-2"
                      type="checkbox"
                      value="Mầm non"
                      checked={classLevel.includes("Mầm non")}
                      onChange={handleCheckboxChange}
                    />
                    Mầm non
                  </label>
                </div>
                <div>
                  <label className="flex items-center">
                    <input
                      className="mr-2"
                      type="checkbox"
                      value="Tiểu học"
                      checked={classLevel.includes("Tiểu học")}
                      onChange={handleCheckboxChange}
                    />
                    Tiểu học
                  </label>
                </div>
                <div>
                  <label className="flex items-center">
                    <input
                      className="mr-2"
                      type="checkbox"
                      value="Trung học"
                      checked={classLevel.includes("Trung học")}
                      onChange={handleCheckboxChange}
                    />
                    Trung học
                  </label>
                </div>
                <div>
                  <label className="flex items-center">
                    <input
                      className="mr-2"
                      type="checkbox"
                      value="Trung tâm anh ngữ"
                      checked={classLevel.includes("Trung tâm anh ngữ")}
                      onChange={handleCheckboxChange}
                    />
                    Trung tâm anh ngữ
                  </label>
                </div>
              </div>
            </div>
            <button type="submit" className="btn" data-aos="fade-up">
              Gửi đăng ký {" >"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
