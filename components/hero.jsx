import React, { useMemo } from "react";
import RichTextRenderer from "./richTextEditor";

const Hero = ({ background, title, description }) => {
  const bgUrl = `https://payload-cms-23760da.payloadcms.app${background}`;
  const initialValue = useMemo(() => {
    return Array.isArray(description) && description.length > 0
      ? description
      : [
          {
            type: "paragraph",
            children: [{ text: "Default content" }],
          },
        ];
  }, [description]);
  return (
    <div
      style={{
        backgroundImage: `url(${bgUrl})`,
      }}
      className="h-[50vh] md:h-[80vh] relative bg-cover bg-bottom "
    >
      <div className="bg-black/70 container absolute inset-0 py-10 flex flex-col items-center justify-center text-center gap-3">
        <h1 className="text-5xl md:text-6xl font-black tracking-wider  text-white">
          {title}
        </h1>
        <div className="text-white max-w-4xl mx-auto">
          <RichTextRenderer content={initialValue} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
