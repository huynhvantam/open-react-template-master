const fs = require("fs");
const path = require("path");

const baseDir = path.join(__dirname, "../public/images/giaovien");
const outputFilePath = path.join(__dirname, "../scripts/imageImports.js");

// Hàm đệ quy để duyệt qua các thư mục con
const getImages = (dir, folderName = "") => {
  let images = [];
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      // Gọi đệ quy cho thư mục con
      images = images.concat(getImages(filePath, path.join(folderName, file)));
    } else if (/\.(jpg|jpeg|png|gif|webp)$/.test(file)) {
      // Thêm ảnh vào danh sách
      images.push({
        src: `@/public/images/phuonghoang/${
          folderName ? folderName + "/" : ""
        }${file}`,
        alt: `${folderName ? folderName + "/" : ""}${file}`,
      });
    }
  });

  return images;
};

// Lấy tất cả các ảnh
const images = getImages(baseDir);

const imports = images
  .map((image, index) => `import img${index} from '${image.src}';`)
  .join("\n");
const exportStatements = `export const images = [\n${images
  .map((image, index) => `{ src: img${index}, alt: '${image.alt}' }`)
  .join(",\n")}\n];`;

const content = `${imports}\n\n${exportStatements}`;

fs.writeFileSync(outputFilePath, content, (err) => {
  if (err) {
    console.error("Error writing image imports file:", err);
    return;
  }
  console.log("Image imports file created successfully!");
});
