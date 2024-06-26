"use client";
import React, {useState} from "react";
import {Button} from "@/components/button";
import {ChevronRight} from "lucide-react";

import Earphones from "@/assets/images/earphone_card.webp";
import Headphones from "@/assets/images/headphone_card.webp";
import Accessories from "@/assets/images/accessories_card.webp";
import {Props} from "@/type";

const lists = [
  {
    label: "Lightweight luxury earphones",
    value: "lightweight-luxury-earphones",
    image: Earphones.src,
  },
  {
    label: "Upgrade your listening experience",
    value: "upgrade-your-listening-experience",
    image: Headphones.src,
  },
  {
    label: "Discover exclusive collaborations",
    value: "discover-exclusive-collaborations",
    image: Accessories.src,
  },
];
const ProductCardHome = ({className, children}: Props) => {
  const [hoveredCard, setHoveredCard] = useState("");
  return (
    <div
      className={className}
      style={{
        display: "flex",
        gap: "1.5rem",
        justifyContent: "center",
        maxWidth: "1600px",
      }}
    >
      {lists.map((data, index) => (
        <div
          style={{
            overflow: "hidden",
            maxWidth: "520px",
            width: "520px",
            maxHeight: "580px",
            height: "580px",
            borderRadius: "1rem",
            position: "relative",
          }}
        >
          <div
            style={{
              height: "580px",
              width: "520px",
              overflow: "hidden",
              position: "relative",
              zIndex: "1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={data.image}
              alt="image"
              style={{
                height: hoveredCard == data.value ? "103%" : "100%",
                width: "auto",
                backgroundSize: "contain",
                transition: "0.7s ease-out",
              }}
            />
          </div>
          <button
            style={{
              height: "100%",
              width: "100%",
              position: "absolute",
              zIndex: "2",
              top: "0",
              left: "0",
              display: "flex",
              flexDirection: "column",
              justifyContent: "end",
              alignItems: "start",
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
              padding: "2.7rem 2.7rem 2.7rem 2.7rem",
            }}
            onMouseOver={() => setHoveredCard(data.value)}
            onMouseLeave={() => setHoveredCard("")}
          >
            <div
              style={{
                height: "2.7rem",
                aspectRatio: "1",
                backgroundColor: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "100%",
                transition: "0.2s ease-in-out",
                transform:
                  hoveredCard == data.value
                    ? "translateY(-0.5rem)"
                    : "translateY(0rem)",
                opacity: hoveredCard == data.value ? "1" : "0",
                backgroundClip: "text",
              }}
            >
              <svg
                role="presentation"
                focusable="false"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12ZM10.47 9.53 12.94 12l-2.47 2.47 1.06 1.06 3-3 .53-.53-.53-.53-3-3-1.06 1.06Z"
                  fill="#fff"
                ></path>
              </svg>
            </div>
            <span
              style={{
                fontSize: "2rem",
                textAlign: "left",
                fontWeight: "bold",
                color: "#fff",
                transition: "0.2s ease-in-out",
                transform:
                  hoveredCard == data.value
                    ? "translateY(0.5rem)"
                    : "translateY(0rem)",
              }}
            >
              {data.label}
            </span>
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductCardHome;
