import React from "react";
import Image from "next/image"; // Import your Image component from Next.js

const ZiczagImage = ({ contentData }) => {
  return (
    <ul className="space-y-14 pt-20">
      {contentData.map((item, index) => (
        <li key={index} className="even:flex-row-reverse flex gap-x-10 ">
          <div className="basis-1/2 ">
            {item.heading && (
              <h2 className="h3 text-center border-b-[3px] border-b-rose-500 pb-3 mb-6 w-fit mx-auto">
                {item.heading}
              </h2>
            )}
            {item.paragraph && <p className="p">{item.paragraph}</p>}
            {item.paragraph2 && <p className="p pt-2">{item.paragraph2}</p>}
            {item.paragraph3 && <p className="p pt-2">{item.paragraph3}</p>}
            {item.paragraph4 && <p className="p pt-2">{item.paragraph4}</p>}
            {item.nestedContent && Array.isArray(item.nestedContent) && (
              <ul className="list-disc marker:text-red-500 ml-5 p space-y-2">
                {item.nestedContent.map((nestedItem, nestedIndex) => (
                  <li key={nestedIndex} className="">
                    {/* Access properties of nested item */}
                    {nestedItem.nestedHeading && (
                      <h2>{nestedItem.nestedHeading}</h2>
                    )}
                    {nestedItem.nestedText && <p>{nestedItem.nestedText}</p>}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="basis-1/2 ">
            <Image
              src={item.imageSrc}
              alt="image"
              objectFit="contain"
              priority={true}
              className=""
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ZiczagImage;
