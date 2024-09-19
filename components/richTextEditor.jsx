import React, { useCallback } from "react";
import { createEditor, Element } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import CustomImage from "./image";

const RichTextRenderer = ({ content }) => {
  const editor = React.useMemo(() => withReact(createEditor()), []);
  const renderElement = ({ attributes, children, element }) => {
    switch (element.type) {
      case "h2":
        return (
          <h2 className="mb-10" {...attributes}>
            {children}
          </h2>
        );
      case "h3":
        return <h3 {...attributes}>{children}</h3>;
      case "h4":
        return <h4 {...attributes}>{children}</h4>;
      case "ul":
        return <ul {...attributes}>{children}</ul>;
      case "li":
        return <li {...attributes}>{children}</li>;
      case "upload":
        return (
          <CustomImage
            src={element?.value?.url}
            width={1000 * 2}
            height={500 * 2}
            className={`rounded-3xl`}
          />
        );
      default:
        return (
          <p className="!text-xl !font-normal mb-5" {...attributes}>
            {children}
          </p>
        );
    }
  };

  return (
    <Slate editor={editor} value={content} initialValue={content}>
      <Editable renderElement={renderElement} readOnly />
    </Slate>
  );
};

export default RichTextRenderer;
