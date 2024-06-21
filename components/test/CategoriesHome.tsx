"use client";
import {ChevronRightIcon} from "lucide-react";
import React, {useState} from "react";
import Headphones from "@/assets/images/headphones.webp";
import Earphones from "@/assets/images/earphones.webp";
import Speakers from "@/assets/images/speakers.webp";
import Collaborations from "@/assets/images/collaborations.webp";
import Accessories from "@/assets/images/accessories.webp";
import {Props} from "@/type";

const lists = [
  {label: "Headphones", value: "headphones", image: Headphones},
  {label: "Earphones", value: "earphones", image: Earphones},
  {label: "Speakers", value: "speakers", image: Speakers},
  {label: "Collaborations", value: "collaborations", image: Collaborations},
  {label: "Accessories", value: "accessories", image: Accessories},
];

const Categories = ({children, className, verbose}: Props) => {
  const [hoverIndex, setHoveredIndex] = useState<any>(null);

  return (
    <div style={{display: "flex", gap: "1.7rem"}} className={className}>
      {lists.map((list, index) => (
        <div
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          style={{
            position: "relative",
            cursor: "pointer",
            minWidth: "16rem",
            maxHeight: "16rem",
            height: "100dvh",
            overflow: "hidden",
            aspectRatio: 1,
            backgroundColor: "#eee",
            borderRadius: ".8rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              height: "100%",
              overflow: "hidden",
              aspectRatio: "1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img style={{height: "100%"}} src={list.image.src} />
          </div>
          <button
            type="button"
            style={{
              pointerEvents: "none",
              bottom: "0px",
              position: "absolute",
              padding: "0 1rem",
              color: `${index === 3 ? "#fff" : "#333"}`,
              backgroundColor: "transparent",
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              border: "none",
              height: "3rem",
              alignItems: "center",
              fontWeight: "bold",
              fontSize: ".9rem",
            }}
          >
            <span>{list.label}</span>
            <div
              style={{
                height: "1.5rem",
                aspectRatio: "1",
                border: "1px solid #333",
                borderRadius: "100rem",
                display: "flex",
                transition: ".3s ease",
                opacity: `${hoverIndex == index ? "1" : "0"}`,
                backgroundColor: `${index === 3 ? "#fff" : "#333"}`,
                color: `${index === 3 ? "#333" : "#fff"}`,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ChevronRightIcon size={16} />
            </div>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Categories;
