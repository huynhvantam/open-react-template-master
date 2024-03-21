import Link from "next/link";

export default function Pagethuhai({ className, links }) {
  const splitContent = (content) => {
    const words = content.split(" ");
    if (words.length > 1) {
      const firstPart = words.slice(0, 2).join(" ");
      const secondPart = words.slice(2).join(" ");
      return (
        <div className="">
          {firstPart}
          <br />
          {secondPart}
        </div>
      );
    }
    return content;
  };
  return (
    <section className={`pt-14 pb-6 ${className}`}>
      <div className={`max-w-6xl mx-auto px-4 sm:px-6 flex gap-x-2 `}>
        {/* {numCols} */}
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className={`${
              link.hightlight
                ? "bg-[#070758] text-white"
                : "hover:bg-[#070758] hover:text-white bg-gray-100 text-gray-400"
            } h-[100px] text-center p-4 flex items-center justify-center w-full  font-semibold text-lg`}
          >
            {splitContent(link.content)}
          </Link>
        ))}
      </div>
    </section>
  );
}
