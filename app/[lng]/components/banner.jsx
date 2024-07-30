import Image from "next/image";
import Link from "next/link";

const BannerImage = ({ src, srcmobile, text1, text2, text3, button, href }) => {
  return (
    <>
      <section className="hidden lg:block relative overflow-hidden pt-[84px]">
        <div className="relative ">
          <Image loading="lazy" src={src} alt="banner" />
          <div className="absolute top-0 -left-1/4 w-full h-full bg-gradient-to-l from-transparent to-white transition-opacity" />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="absolute top-1/2 transform -translate-y-1/2">
            <h4 className="h44 pb-2" data-aos="fade-up" data-aos-delay="200">
              {text1}
            </h4>
            <h1 className="h1" data-aos="fade-up" data-aos-delay="400">
              {text2}
            </h1>
            <h1 className="h1" data-aos="fade-up" data-aos-delay="400">
              {text3}
            </h1>
            {button && href ? (
              <Link
                href={href}
                className="btn mt-4"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                {button}
              </Link>
            ) : null}
          </div>
        </div>
      </section>
      <section className="lg:hidden">
        <div style={{ position: "relative", width: "100%", height: "500px" }}>
          {/* Điều chỉnh chiều cao theo yêu cầu */}
          <Image
            src={srcmobile}
            alt="banner"
            fill
            style={{ objectFit: "cover" }}
          />

          <div className="pt-40 px-4 relative text-left">
            <h4
              className="h4 font-playfair pb-2 text-gray-300"
              style={{ textShadow: "1px 1px #555" }}
            >
              {text1}
            </h4>
            <h1
              className="h3 text-gray-100 "
              style={{ textShadow: "2px 1px #333" }}
            >
              {text2}
            </h1>
            <h1 className="h3 text-white">{text3}</h1>
            {button && href ? (
              <Link
                href={href}
                className="btn mt-4"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                {button}
              </Link>
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
};

export default BannerImage;
