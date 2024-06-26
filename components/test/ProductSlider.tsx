"use client";
import {Props} from "@/type";
import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import earpad1 from "@/assets/images/earpad_1.jpg";
import earpad2 from "@/assets/images/earpad_2.jpg";
import earpro1 from "@/assets/images/earpro_1.webp";
import earpro2 from "@/assets/images/earpro_2.webp";
import head1 from "@/assets/images/head_1.webp";
import head2 from "@/assets/images/head_2.webp";
import headplus1 from "@/assets/images/headplus_1.webp";
import headplus2 from "@/assets/images/headplus_2.webp";
import headpro1 from "@/assets/images/headpro_1.webp";
import headpro2 from "@/assets/images/headpro_2.webp";
import inear1 from "@/assets/images/inear_1.webp";
import inear2 from "@/assets/images/inear_2.webp";
import {ChevronLeft, ChevronRight} from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./ProductSlider.module.css";

const lists = [
  {
    label: "MH40 Wireless (Silver Metal / Navy Coated Canvas)",
    rating: "4.6",
    price: "$299.00",
    images: [earpad1.src, earpad2.src],
    colors: ["#f58888"],
  },
  {
    label: "MW08 Sport (Green Sapphire Glass / Black Kevlar® Case)",
    rating: "4.8",
    price: "$349.00",
    images: [earpro1.src, earpro2.src],
    colors: [["#88f588", "#85fff5"], "#f55888"],
  },
  {
    label: "MG20 Gaming (Galactic White)",
    rating: "3.7",
    price: "$449.00",
    images: [head1.src, head2.src],
    colors: ["#8f5888"],
  },
  {
    label: "MW07 Plus (Tortoiseshell / Stainless Steel Case)",
    rating: "4.5",
    price: "$249.00",
    images: [headplus1.src, headplus2.src],
    colors: ["#f58f58"],
  },
  {
    label: "MW50+ (Silver Metal / Brown Leather)",
    rating: "4.8",
    price: "$299.00",
    images: [headpro1.src, headpro2.src],
    colors: ["#f588f5"],
  },
  {
    label: "MH40 Wireless Ear Pads",
    rating: "4.6",
    price: "$49.00",
    images: [inear1.src, inear2.src],
    colors: ["#f5f588", "#88f5f5"],
  },
];

function NextArrow(props: any) {
  const {className, style, onClick} = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "1.1rem",
        height: "1.1rem",
        backgroundColor: "#1A1A1A1A",
        borderRadius: "100%",
      }}
      onClick={onClick}
    >
      <ChevronRight size={16} />
    </div>
  );
}

function PrevArrow(props: any) {
  const {className, style, onClick} = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "1.1rem",
        height: "1.1rem",
        backgroundColor: "#1A1A1A1A",
        borderRadius: "100%",
      }}
      onClick={onClick}
    >
      <ChevronLeft size={16} />
    </div>
  );
}

const ProductSlider = ({children, className, verbose}: Props) => {
  const [hoveredProduct, setHoveredProduct] = useState("");
  const [viewAll, setViewAll] = useState(false);
  const [numberOfSlide, setNumberOfSlide] = useState(4);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    initialSlide: 0,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
  };

  useEffect(() => {
    const setSlide = () => {
      let viewSize = 0;
      viewSize = window.innerWidth;
      if (viewSize > 1600) {
        setNumberOfSlide(4);
      } else if (viewSize > 1024 && viewSize < 1600) {
        setNumberOfSlide(3);
      } else if (viewSize > 768 && viewSize < 1024) {
        setNumberOfSlide(2);
      } else {
        setNumberOfSlide(1);
      }
    };

    window.addEventListener("resize", setSlide);
    return () => window.removeEventListener("resize", setSlide);
  }, []);
  return (
    // #region old
    // <div className={className}>
    //   <div
    //     style={{
    //       display: "flex",
    //       justifyContent: "space-between",
    //       alignItems: "center",
    //     }}
    //   >
    //     <span
    //       className="title-products-seller"
    //       id="title-products-seller"
    //       style={{
    //         fontSize: "3rem",
    //         color: "#1A1A1A",
    //         fontWeight: "bold",
    //       }}
    //     >
    //       Best Seller
    //     </span>
    //     <button
    //       style={{
    //         display: "flex",
    //         flexWrap: "nowrap",
    //         gap: "0.75rem",
    //         backgroundColor: "transparent",
    //         border: "none",
    //         cursor: "pointer",
    //       }}
    //       onMouseOver={() => setViewAll(true)}
    //       onMouseLeave={() => setViewAll(false)}
    //     >
    //       <span
    //         style={{
    //           backgroundColor: "transparent",
    //           border: "none",
    //           color: "#1A1A1A",
    //           fontSize: "1rem",
    //           position: "relative",
    //         }}
    //       >
    //         View all
    //         <div
    //           style={{
    //             position: "absolute",
    //             bottom: "0",
    //             left: "0",
    //             height: "1px",
    //             backgroundColor: "#1A1A1A",
    //             transition: "0.3s ease",
    //             width: viewAll ? "100%" : "0%",
    //           }}
    //         />
    //       </span>
    //       <div
    //         style={{
    //           height: "1.5rem",
    //           aspectRatio: "1",
    //           borderRadius: "100%",
    //           backgroundColor: viewAll ? "#1A1A1A" : "#1A1A1A1A",
    //           display: "flex",
    //           justifyContent: "center",
    //           alignItems: "center",
    //           transition: "0.3s ease",
    //         }}
    //       >
    //         <ChevronRight
    //           size={12}
    //           style={{
    //             color: viewAll ? "#FFF" : "#1A1A1A",
    //             transition: "0.3s ease",
    //           }}
    //         />
    //       </div>
    //     </button>
    //   </div>
    //   <Slider {...settings}>
    //     {lists.map((data, index) => (
    //       <div
    //         key={index}
    //         style={{
    //           display: "grid",
    //           gridTemplateColumns: "mimax(0,1fr)",
    //           gridTemplateRows: "repeat(3, 1fr)",
    //           maxWidth: "380px",
    //           width: "100%",
    //           minWidth: "200px",
    //           maxHeight: "540px",
    //           height: "100%",
    //           gap: "1rem",
    //           cursor: "pointer",
    //           position: "relative",
    //           overflow: "hidden",
    //           borderRadius: "1rem",
    //           boxSizing: "border-box",
    //           backgroundColor: "#ffffff",
    //         }}
    //         onMouseOver={() => setHoveredProduct(data.label)}
    //         onMouseLeave={() => setHoveredProduct("")}
    //       >
    //         <div
    //           style={{
    //             gridRow: "span 2",
    //             position: "relative",
    //             maxWidth: "380px",
    //             minWidth: "200px",
    //             maxHeight: "540px",
    //             display: "flex",
    //             justifyContent: "center",
    //             alignItems: "center",
    //             overflow: "hidden",
    //           }}
    //         >
    //           <img
    //             style={{
    //               position: "absolute",
    //               height: "auto",
    //               width: "100%",
    //               zIndex: "1",
    //               top: "0",
    //               backgroundSize: "contain",
    //               transition: "0.2s ease",
    //               filter: "contrast(80%)",
    //               opacity: hoveredProduct == data.label ? "1" : "0",
    //             }}
    //             src={data.image2}
    //             alt={data.label}
    //           />
    //           <img
    //             style={{
    //               position: "relative",
    //               height: "auto",
    //               width: "100%",
    //               zIndex: "0",
    //               top: "0",
    //               backgroundSize: "contain",
    //               opacity: hoveredProduct == data.label ? "0" : "1",
    //               transition: "0.2s ease",
    //             }}
    //             src={data.image1}
    //             alt={data.label}
    //           />
    //         </div>
    //         <div
    //           style={{
    //             gridRow: "span 1",
    //             padding: "1.5rem 2rem 2rem 2rem",
    //             height: "1000px",
    //             maxHeight: "160px",
    //             display: "flex",
    //             flexDirection: "column",
    //             justifyContent: "end",
    //             boxSizing: "border-box",
    //           }}
    //         >
    //           <div
    //             style={{
    //               display: "grid",
    //               gridTemplateColumns: "repeat(10,1fr)",
    //               justifyItems: "start",
    //               gap: "1rem",
    //               minHeight: "2rem",
    //             }}
    //           >
    //             <div
    //               style={{
    //                 gridColumn: "span 9",
    //               }}
    //             >
    //               <span
    //                 style={{
    //                   fontWeight: "bold",
    //                   fontSize: "1rem",
    //                   color: "#1A1A1A",
    //                 }}
    //               >
    //                 {data.label.length > 64
    //                   ? data.label.slice(0, 64) + "..."
    //                   : data.label}
    //               </span>
    //             </div>
    //             <div
    //               style={{
    //                 gridColumn: "span 1",
    //               }}
    //             >
    //               <span
    //                 style={{
    //                   fontSize: "0.8rem",
    //                   color: "#1A1A1A",
    //                 }}
    //               >
    //                 {data.rating}⭐
    //               </span>
    //             </div>
    //           </div>
    //           <span
    //             style={{
    //               padding: "0.5rem 0",
    //               fontSize: "1rem",
    //               color: "#1A1A1AB3",
    //             }}
    //           >
    //             {data.price}
    //           </span>
    //           <div
    //             style={{
    //               padding: "0.1rem",
    //               border: "1px solid #1A1A1A",
    //               width: "fit-content",
    //               borderRadius: "100%",
    //               transform: "rotate(45deg)",
    //             }}
    //           >
    //             <div
    //               style={{
    //                 display: "flex",
    //                 justifyContent: "center",
    //                 alignItems: "center",
    //                 width: "1.35rem",
    //                 aspectRatio: "1",
    //                 borderRadius: "100%",
    //                 overflow: "hidden",
    //               }}
    //             >
    //               {Array.isArray(data.colors) ? (
    //                 <>
    //                   {data.colors.map((color, index) => (
    //                     <div
    //                       style={{
    //                         backgroundColor: `${color}`,
    //                         width: "50%",
    //                         height: "100%",
    //                       }}
    //                     />
    //                   ))}
    //                 </>
    //               ) : (
    //                 <div
    //                   style={{
    //                     backgroundColor: `${data.colors}`,
    //                     width: "100%",
    //                     aspectRatio: "1",
    //                   }}
    //                 />
    //               )}
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </Slider>
    // </div>
    // #endregion
    <div
      className={className}
      style={{
        maxWidth: "1600px",
      }}
    >
      <div className={styles.container}>
        <span
          className={styles["title-products-seller"]}
          id="title-products-seller"
        >
          Best Seller
        </span>
        <button
          className={styles.button}
          onMouseOver={() => setViewAll(true)}
          onMouseLeave={() => setViewAll(false)}
        >
          <span className={styles["button-view-all-text"]}>
            View all
            <div
              className={styles["button-view-all-underline"]}
              style={{width: viewAll ? "100%" : "0%"}}
            />
          </span>
          <div
            className={styles["button-view-all-circle"]}
            style={{backgroundColor: viewAll ? "#1A1A1A" : "#1A1A1A1A"}}
          >
            <ChevronRight
              size={12}
              style={{
                color: viewAll ? "#FFF" : "#1A1A1A",
              }}
            />
          </div>
        </button>
      </div>
      <Slider {...settings} className={styles["slider-container"]}>
        {lists.map((data, index) => (
          <div key={index} className={`${styles["slider-item"]} bg-red-500`}>
            <div
              className={styles["product-image-container"]}
              onMouseOver={() => setHoveredProduct(data.label)}
              onMouseLeave={() => setHoveredProduct("")}
            >
              <img
                className={`${styles["product-image"]} ${
                  hoveredProduct === data.label
                    ? styles["product-image-unhovered"]
                    : styles["product-image-hovered"]
                }`}
                src={data.images[0]}
                alt={data.label}
              />
              <img
                className={`${styles["product-image"]} ${
                  hoveredProduct === data.label
                    ? styles["product-image-hovered"]
                    : styles["product-image-unhovered"]
                }`}
                src={data.images[1]}
                alt={data.label}
              />
            </div>
            <div className={styles["product-info"]}>
              <div className={styles["product-title-container"]}>
                <div className={styles["product-title"]}>
                  <span>
                    {data.label.length > 64
                      ? data.label.slice(0, 64) + "..."
                      : data.label}
                  </span>
                </div>
                <div className={styles["product-rating"]}>
                  <span>{data.rating}⭐</span>
                </div>
              </div>
              <span className={styles["product-price"]}>{data.price}</span>
              <div className={styles["color-list"]}>
                {data.colors.map((color: any, index: number) => (
                  <div className={styles["color-indicator"]}>
                    <div className={styles["color-circle"]}>
                      {Array.isArray(color) ? (
                        color.map((c, jndex: number) => (
                          <div
                            key={jndex}
                            className={styles["color-half"]}
                            style={{backgroundColor: c}}
                          />
                        ))
                      ) : (
                        <div
                          className={styles["color-full"]}
                          style={{backgroundColor: color}}
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;
