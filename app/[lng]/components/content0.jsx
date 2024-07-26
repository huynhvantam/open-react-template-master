import Link from "next/link";

export default function Content0() {
  return (
    <section className="pt-20">
      <div className="max-w-6xl text- mx-auto px-4 sm:px-6 relative">
        <div className="text-center">
          <h3 className="h44 pt-10 text-black lg:text-gray-500">
            TRƯỜNG TIỂU HỌC & TRUNG HỌC CƠ SƠ <br />
            PHƯỢNG HOÀNG
          </h3>
          <h2 className="text-3xl font-playfair font-bold text-white lg:text-black">
            Tuyển sinh năm học <br />
            2024 - 2025
          </h2>
          <Link
            href="#tuyen-sinh"
            className="btn mt-4 text-lg "
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-anchor-placement="top-bottom"
          >
            Đăng ký ngay
          </Link>
        </div>
      </div>
    </section>
  );
}
