import Image from 'next/image';
import Link from "next/link";

const BannerImage = ({ src, text1, text2, text3, button, href }) => {
  return (
    <section className="relative overflow-hidden pt-[84px]">
      <div className="relative">
        <Image src={src} alt="picture" layout="responsive" data-aos="fade-up" />
        <div className="absolute top-0 -left-1/4 w-full h-full bg-gradient-to-l from-transparent to-white transition-opacity" />
      </div>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        <div className="absolute top-1/2 transform -translate-y-1/2">
          <h4 className="h44 pb-2" data-aos="fade-up" data-aos-delay="200">{text1}</h4>
          <h1 className="h1" data-aos="fade-up" data-aos-delay="400">{text2}</h1>
          <h1 className="h1" data-aos="fade-up" data-aos-delay="400">{text3}</h1>
          {button && href ? (
            <Link href={href} className="btn mt-4" data-aos="fade-up" data-aos-delay="600">{button}</Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default BannerImage;