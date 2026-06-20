"use client";

import Image, { ImageProps } from "next/image";

interface AppImageProps extends Omit<ImageProps, "src"> {
  src?: string | null;
}

const PLACEHOLDER = "/images/placeholder.png";

export default function AppImage({ src, alt, ...props }: AppImageProps) {
  const isValidImage =
    src &&
    (src.startsWith("http://") ||
      src.startsWith("https://") ||
      src.startsWith("/"));

  return <Image src={isValidImage ? src : PLACEHOLDER} alt={alt} {...props} />;
}
