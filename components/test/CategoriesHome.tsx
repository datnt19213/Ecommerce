"use client";
import {ChevronRightIcon} from "lucide-react";
import React, {useState} from "react";
import Headphones from "@/assets/images/headphones.webp";
import Earphones from "@/assets/images/earphones.webp";
import Speakers from "@/assets/images/speakers.webp";
import Collaborations from "@/assets/images/collaborations.webp";
import Accessories from "@/assets/images/accessories.webp";
import {Props} from "@/type";
import styles from "./CategoiesHome.module.css";

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
    // #region old
    // <div style={{display: "flex", gap: "1.7rem"}} className={className}>
    //   {lists.map((list, index) => (
    //     <div
    //       onMouseOver={() => setHoveredIndex(index)}
    //       onMouseLeave={() => setHoveredIndex(null)}
    //       style={{
    //         position: "relative",
    //         cursor: "pointer",
    //         maxWidth: "16rem",
    //         width: "100dvh",
    //         overflow: "hidden",
    //         aspectRatio: 1,
    //         backgroundColor: "#eee",
    //         borderRadius: ".8rem",
    //         display: "flex",
    //         flexDirection: "column",
    //         gap: "1rem",
    //         justifyContent: "space-between",
    //       }}
    //     >
    //       <div
    //         style={{
    //           height: "100%",
    //           overflow: "hidden",
    //           aspectRatio: "1",
    //           display: "flex",
    //           justifyContent: "center",
    //           alignItems: "center",
    //         }}
    //       >
    //         <img
    //           style={{
    //             height: hoverIndex == index ? "105%" : "100%",
    //             aspectRatio: "1",
    //             transition: "0.6s ease-out",
    //           }}
    //           src={list.image.src}
    //         />
    //       </div>
    //       <button
    //         type="button"
    //         style={{
    //           pointerEvents: "none",
    //           bottom: "0px",
    //           position: "absolute",
    //           padding: "0 1rem",
    //           color: `${index === 3 ? "#fff" : "#333"}`,
    //           backgroundColor: "transparent",
    //           display: "flex",
    //           width: "100%",
    //           justifyContent: "space-between",
    //           border: "none",
    //           height: "3rem",
    //           alignItems: "center",
    //           fontWeight: "bold",
    //           fontSize: ".9rem",
    //         }}
    //       >
    //         <span>{list.label}</span>
    //         <div
    //           style={{
    //             height: "1.5rem",
    //             aspectRatio: "1",
    //             border: "1px solid #333",
    //             borderRadius: "100rem",
    //             display: "flex",
    //             transition: ".3s ease",
    //             opacity: `${hoverIndex == index ? "1" : "0"}`,
    //             backgroundColor: `${index === 3 ? "#fff" : "#333"}`,
    //             color: `${index === 3 ? "#333" : "#fff"}`,
    //             justifyContent: "center",
    //             alignItems: "center",
    //           }}
    //         >
    //           <ChevronRightIcon size={16} />
    //         </div>
    //       </button>
    //     </div>
    //   ))}
    // </div>
    // #endregion
    <div className={`${styles["categories-container"]} ${className}`}>
      {lists.map((list, index) => (
        <div
          key={index}
          className={`${styles["category-item"]}`}
          // onMouseOver={() => setHoveredIndex(index)}
          // onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className={`${styles["category-image-container"]}`}>
            <img
              className={`${styles["category-image"]}`}
              src={list.image.src}
            />
          </div>
          <button type="button" className={`${styles["category-button"]}`}>
            <span className={index == 3 ? styles["special-text"] : styles[""]}>
              {list.label}
            </span>
            <div
              className={`${styles["category-icon-container"]} ${
                index == 3 && styles["special-icon"]
              }`}
            >
              <ChevronRightIcon size={12} />
            </div>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Categories;
