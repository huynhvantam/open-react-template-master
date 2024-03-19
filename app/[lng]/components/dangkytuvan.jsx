

import Image from 'next/image';
import Image1 from "@/public/images/phuonghoang/hocsinh2.jpg"
import {
  Button,
  Cascader,
  Checkbox,
  ColorPicker,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
  Col, Row
} from 'antd'
export default function Dangkytuvan() {
  const onChange = (checkedValues) => {
    console.log('checked = ', checkedValues);
  };
  return (
    <section id='tuyen-sinh'>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative py-20">
        <h3 className='h3' data-aos="fade-up" >Đăng ký nhận tư vấn</h3>
        <p className='p' data-aos="fade-up" data-aos-delay="200">Đội ngũ Tuyển sinh sẽ tư vấn tận tâm và đem lại trải nghiệm tuyệt vời nhất cho gia đình!</p>
        <div className='grid grid-cols-2 gap-20 pt-10'>
          <div className="">
            <Image className="h-fit " src={Image1} alt="Môn học" priority />
          </div>
          <div className='space-y-6'>
            <div className='border-b'>
              <p className='p'>Họ và tên phụ huynh<span className='text-red-500'>*</span></p>
              <Input className='rounded-md border-none ' placeholder="Điền tên tại đây" />
            </div>
            <div className='border-b'>
              <p className='p'>Số điện thoại<span className='text-red-500'>*</span></p>
              <Input className='rounded-md border-none' placeholder="Điền số điền thoại tại đây" />
            </div>
            <div className='border-b'>
              <p className='p'>Email<span className='text-red-500'>*</span></p>
              <Input className='rounded-md border-none' placeholder="Điền email tại đây" />
            </div>
            <div className='border-b'>
              <p className='p'>Lời nhắn hoặc thắc mắc của quý phụ huynh</p>
              <Input className='rounded-md border-none' placeholder="Thắc mắc của quý phụ huynh" />
            </div>
            <div className=''>
              <p className='p'>Tìm hiểu cấp học</p>
              <Checkbox.Group
                style={{
                  width: '100%',
                }}
                onChange={onChange}
              >
                <Checkbox value="mamnon">Mầm non</Checkbox>
                <Checkbox value="tieuhoc">Tiểu học</Checkbox>
                <Checkbox value="trunghoc">Trung học</Checkbox>
                <Checkbox value="anhngu">Trung tâm anh ngữ</Checkbox>
              </Checkbox.Group>
            </div>
            <button className='btn' data-aos="fade-up" data-aos-delay="600"> Gửi đăng ký{" >"}</button>
          </div>
        </div>

      </div>
    </section>
  )
}
