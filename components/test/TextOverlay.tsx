import {Props} from "@/type";
import React from "react";

const TextOverlay = ({className, children}: Props) => {
  return (
    <span
      className={className}
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(26, 26, 26, 0.2), rgba(26, 26, 26, 0) 100%)",
        backgroundClip: "text",
        color: "transparent",
      }}
    >
      MW08
    </span>
  );
};

export default TextOverlay;
