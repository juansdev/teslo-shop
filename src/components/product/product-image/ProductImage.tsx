import Image from "next/image";
import {StyleHTMLAttributes} from "react";

interface IProductImageProps {
  src?: string;
  alt: string;
  className?: StyleHTMLAttributes<HTMLImageElement>["className"];
  width: number;
  height: number;
  style?: StyleHTMLAttributes<HTMLImageElement>["style"];
  onMouseLeave?: () => void;
  onMouseEnter?: () => void;
}

export const ProductImage = ({
                               src,
                               alt,
                               className,
                               width,
                               height,
                               style,
                               onMouseLeave,
                               onMouseEnter
                             }: IProductImageProps) => {
  let localSrc = "/imgs/placeholder.jpg";
  if (src) localSrc = src.startsWith("http") ? src : `/products/${src}`;
  return (
    <Image src={localSrc}
           width={width}
           height={height}
           alt={alt}
           className={className}
           style={style}
           onMouseLeave={() => onMouseLeave && onMouseLeave()}
           onMouseEnter={() => onMouseEnter && onMouseEnter()}/>
  );
}