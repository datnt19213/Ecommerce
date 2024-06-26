import {Props} from "@/type";
import React from "react";

const TextContent = ({className, children}: Props) => {
  return (
    <span
      className={className}
      style={{
        minHeight: "1.5rem",
        minWidth: "5rem",
      }}
    >
      {children}
    </span>
  );
};

export default TextContent;
