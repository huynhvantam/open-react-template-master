import Image from 'next/image';

const BannerImage = ({ src, text1, text2, text3 }) => {
  return (
    <div className="relative overflow-hidden">
      <div className="relative">
        <Image src={src} alt="picture" layout="responsive" data-aos="fade-up" />
        <div className="absolute top-0 -left-1/4 w-full h-full bg-gradient-to-l from-transparent to-white transition-opacity  " />
      </div>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 mb-12'>
        <div className="absolute top-1/2 transform -translate-y-1/2">
          <p className="hh4" data-aos="fade-up" data-aos-delay="200">{text1}</p>
          <h1 className="h1" data-aos="fade-up" data-aos-delay="400">{text2}</h1>
          <h1 className="h1" data-aos="fade-up" data-aos-delay="400">{text3}</h1>
          {/* <button className='button'>Đăng ký ngay</button> */}
        </div>
      </div>
    </div>
  );
}

export default BannerImage;