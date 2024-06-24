import React from "react";

const TextOverlay = () => {
  return (
    <span
      style={{
        maxWidth: "580px",
        maxHeight: "256px",
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
