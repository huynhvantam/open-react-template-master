// components/ImageGrid.js
import Image from "next/image";
import { images } from "./imageImports";
const ImageGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <div key={index} className="p-2">
          <Image
            src={image.src} // Chuyển đổi đường dẫn thành đường dẫn hợp lệ cho trình duyệt
            alt={image.alt}
            className="w-full h-auto"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
