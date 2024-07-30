import Image from 'next/image'

import TestimonialImage01 from '@/public/images/homepage/testimonial-01.jpg'
const testimonials = [
  {
    image: TestimonialImage01,
    people: "Chia sẻ của học sinh",
    quote: "Con ấn tượng nhất là Thầy/ Cô không la mắng con, chỉ nhắc nhở con thôi. Thầy cô cũng giúp đỡ con, nói chuyện với con, quan tâm và lắng nghe con. Đối với con Thầy/Cô như là một người bạn giúp đỡ con trên con đường trở thành công dân toàn cầu.",
    author: "- Nguyễn Văn A -",
    position: "UX Board"
  }, {
    image: TestimonialImage01,
    people: "Chia sẻ của phụ huynh",
    quote: "Cảm ơn toàn thể các thầy cô và CBNV đã tạo nên sự khác biệt rất lớn mà theo tôi rất đậm phong cách “Ngôi trường của thế hệ tiên phong”. Khi tôi hỏi con tôi “con thích nhất điều gì khi đi học tại trường” thì một bé 6 tuổi cũng có thể nói ra cảm nhận của mình “niềm vui khi mỗi ngày đến lớp”.",
    author: "- Nguyễn văn B -",
    position: "UX Board"
  }, {
    image: TestimonialImage01,
    people: "Chia sẻ của giáo viên",
    quote: "Tại Giáo Dục Phượng Hoàng, học sinh không những học lý thuyết mà còn được ứng dụng lý thuyết vào trong thực hành. Không chỉ có vậy, học sinh còn được trải nghiệm và sáng tạo, đồng thời phát triển các kỹ năng mềm như làm việc nhóm.",
    author: "- Nguyễn Văn C -",
    position: "UX Board"
  },

];

export default function Chiasecongdong() {
  const splitContent = (content: any) => {
    const words = content.split(' ');
    if (words.length > 1) {
      const firstPart = words.slice(0, 2).join(' ');
      const secondPart = words.slice(2).join(' ');
      return (
        <div>
          {firstPart}<br />
          {secondPart}
        </div>
      );
    }
    return content;
  };
  return (
    <section className=''
      style={{
        backgroundImage:
          "linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)",
      }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 ">

          {/* Section header */}
          <h2 className="max-w-3xl h3 mx-auto text-center pb-6 md:pb-10 h3 mb-4">Câu chuyện chia sẻ</h2>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

            {/* Loop through testimonials array */}
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex flex-col h-full p-6 bg-white" data-aos="fade-up">
                <div className='flex gap-x-4 items-center '>
                  <div className="relative inline-flex flex-col mb-4">
                    <Image loading="lazy" className="rounded-full" src={testimonial.image} width={80} height={80} alt={`Testimonial ${index + 1}`} />
                    <svg className="absolute top-0 left-0 -mr-3 w-6 h-5 fill-current text-rose-500" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                    </svg>
                  </div>

                  <div className="text-rose-500 text-2xl">

                    {splitContent(testimonial.people)}</div>
                </div>
                <blockquote className="text-lg  grow">— {testimonial.quote}</blockquote>
                <div className=" font-medium mt-6 pt-5 border-t border-gray-700">
                  <cite className=" not-italic">{testimonial.author}</cite>
                  {/* <a className="text-rose-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">{testimonial.position}</a> */}
                </div>
              </div>
            ))}


          </div>

        </div>
      </div>
    </section>
  )
}
