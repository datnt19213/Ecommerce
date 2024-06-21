import {Props} from "@/type";
import {Dot} from "lucide-react";
import Link from "next/link";
import * as React from "react";
import Marquee from "react-fast-marquee";
import {Button} from "../button";

let texts = [
  {
    title: "Mastery is a never-ending exploration",
  },
  {title: "Mastery is a never-ending exploration"},
];

const ScrollBanner = ({children, className, verbose}: Props) => {
  return (
    <Marquee
      className={`${className}`}
      speed={200}
      loop={0}
      style={{
        width: "100%",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        color: "#FFFFFF",
        fontSize: "0.75rem",
        fontWeight: 500,
        paddingTop: "0.5rem",
        paddingBottom: "0.5rem",
      }}
    >
      <div
        className="whitespace-nowrap top-0 left-0 flex items-center"
        style={{
          whiteSpace: "nowrap",
          top: 0,
          left: 0,
          display: "flex",
          alignItems: "center",
          gap: "3rem",
        }}
      >
        {texts.map((text, index) => (
          <div
            key={index}
            className="flex items-center gap-7 ml-7 left-0"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.75rem",
              marginLeft: "1.75rem",
              left: 0,
              fontSize: "10em",
              color: "transparent",
              fontWeight: "bold",
              backgroundImage:
                "linear-gradient(90deg, rgba(77, 82, 60, 1), rgba(133, 141, 103, 1) 100%)",
              backgroundClip: "text",
            }}
          >
            {text.title}
          </div>
        ))}
      </div>
    </Marquee>
  );
};

export default ScrollBanner;
