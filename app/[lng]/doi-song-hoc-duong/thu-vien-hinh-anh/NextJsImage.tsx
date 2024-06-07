"use client";
import { useState } from "react";
import { Image } from "antd";
import Image1 from "@/public/images/testimonial-01.jpg";
import Image2 from "@/public/images/features-03-image-01.png"; // Thay đổi đường dẫn ở đây
import { trungthu2023, trungthu2024, trungthu2025 } from "./imageImports";

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Image.PreviewGroup>
          {trungthu2023.map((image, index) => (
            <Image
              key={index}
              src={image.src}
            />
          ))}
        </Image.PreviewGroup>
      </div>
    </>
  );
};

export default App;