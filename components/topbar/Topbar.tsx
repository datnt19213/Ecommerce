import {Props} from "@/type";
import {Dot} from "lucide-react";
import Link from "next/link";
import * as React from "react";
import Marquee from "react-fast-marquee";

let texts = [
  {
    title: "New Collaboration: Master & Dynamic x Paris Saint-Germain",
    link: "#",
  },
  {title: "Free standard shipping on all orders", link: "#"},
  {
    title:
      "Discount: Use the code IMPACT20 to receive a 20% discount on your order",
    link: "#",
  },
  {title: "A question? Visit our contact page to send us a message", link: "#"},
];

const Topbar = ({children, className, verbose}: Props) => {
  return (
    <Marquee
      className={`${className}`}
      speed={100}
      loop={0}
      style={{
        width: "100%",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#1F2937",
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
            }}
          >
            <Dot size={32} />
            <Link
              href={text.link}
              key={index}
              className="inline-block"
              style={{
                display: "inline-block",
                color: "white",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              {text.title}
            </Link>
          </div>
        ))}
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
            }}
          >
            <Dot size={32} />
            <Link
              href={text.link}
              key={index}
              className="inline-block"
              style={{
                display: "inline-block",
                color: "white",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              {text.title}
            </Link>
          </div>
        ))}
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
            }}
          >
            <Dot size={32} />
            <Link
              href={text.link}
              key={index}
              className="inline-block"
              style={{
                display: "inline-block",
                color: "white",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              {text.title}
            </Link>
          </div>
        ))}
      </div>
    </Marquee>
  );
};

export default Topbar;
