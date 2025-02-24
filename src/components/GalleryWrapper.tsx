// components/GalleryWrapper.tsx
import fs from "fs";
import path from "path";
import HoverImage, { ImageData } from "@/components/HoverImage";

export default function GalleryWrapper() {
  const imagesDirectory = path.join(process.cwd(), "public/images/gallery");

  // Define allowed image extensions.
  const validExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp"];

  // Read and filter filenames that have a valid image extension.
  const filenames = fs
    .readdirSync(imagesDirectory)
    .filter((filename) =>
      validExtensions.includes(path.extname(filename).toLowerCase())
    );

  const images: ImageData[] = filenames.map((filename) => ({
    title: filename.split(".")[0],
    image: `/images/gallery/${filename}`,
  }));

  return <HoverImage images={images} />;
}
