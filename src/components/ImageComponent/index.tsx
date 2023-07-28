import Image from "next/image";
import { FC } from "react";

interface IProps {
  src: string;
  width?: number;
  height?: number;
  className?: string;
  figClassName?: string;
  alt?: string;
  blurEffect?: boolean;
  priority?: boolean;
  fill?: boolean;
}

const ImageComponent: FC<IProps> = ({
  src,
  width,
  height,
  className,
  figClassName,
  alt,
  blurEffect,
  priority,
  fill,
  ...rest
}: IProps) => {
  return (
    <>
      <figure
        className={`relative leading-0 ${figClassName ? figClassName : ""}`}
      >
        <Image
          src={src}
          fill={fill}
          width={width}
          height={height}
          className={className}
          quality={100}
          placeholder={!blurEffect ? "empty" : "blur"}
          blurDataURL={`/_next/image?url=${src}&w=16&q=1`}
          alt={alt ? alt : "Image"}
          priority={priority}
          sizes=""
          {...rest}
        />
      </figure>
    </>
  );
};

export default ImageComponent;
