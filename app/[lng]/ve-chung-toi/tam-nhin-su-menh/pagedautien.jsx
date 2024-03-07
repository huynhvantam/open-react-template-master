import Link from "next/link";

export default function PageDautien({ links }) {
  // Tính số lượng cột dựa trên số lượng liên kết
  const numCols = Math.ceil(links.length);

  return (
    <section>
      <div className={`max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-${numCols} items-center  justify-items-center`}>
        {/* {numCols} */}
        {links.map((link, index) => (
          <Link key={index} href={link.href} className="px-4 py-3 text-rose-600 font-semibold text-xl border-2">
            {link.content}
          </Link>
        ))}
      </div>
    </section>
  );
}