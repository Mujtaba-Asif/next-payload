import React from "react";
import Image from "next/legacy/image";

const CustomImage = ({ src, width, height, alt, className }) => {
  const url = `https://payload-cms-23760da.payloadcms.app${src}`;
  return (
    <Image
      className={`${className}`}
      src={url}
      width={width}
      height={height}
      alt={alt}
    />
  );
};

export default CustomImage;
