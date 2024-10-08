"use client";
import React from "react";
import RichTextRenderer from "./richTextEditor";
import Link from "next/link";
import Image from "next/legacy/image";

const PageContent = ({ content }) => {
  const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  console.log("@base url...", baseUrl);
  const renderElement = (element) => {
    switch (element?.blockType) {
      case "contentBlock":
        return <RichTextRenderer content={element?.content} />;
      case "image":
        return (
          <Image
            src={`${baseUrl}${element?.image?.url}`}
            width={1000 * 2}
            height={500 * 2}
            className={`rounded-xl`}
          />
        );
      case "cta":
        return (
          <Link
            className="bg-black text-white py-3 px-5 rounded-full w-full max-w-sm mx-auto flex items-center justify-center"
            href={element?.href || "#"}
          >
            {element?.title}
          </Link>
        );

      default:
        return null;
    }
  };

  return (
    <div className="py-10 flex flex-col gap-10 container content">
      {content?.map((ls) => (
        <>{renderElement(ls)}</>
      ))}
    </div>
  );
};

export default PageContent;
