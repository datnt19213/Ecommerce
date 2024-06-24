import {Props} from "@/type";
import React from "react";
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

const lists = [
  {
    label: "MH40 Wireless (Silver Metal / Navy Coated Canvas)",
    rating: "4.6",
    price: "$299.00",
    image1: earpad1.src,
    image2: earpad2.src,
  },
  {
    label: "MW08 Sport (Green Sapphire Glass / Black Kevlar® Case)",
    rating: "4.8",
    price: "$349.00",
    image1: earpro1.src,
    image2: earpro2.src,
  },
  {
    label: "MG20 Gaming (Galactic White)",
    rating: "3.7",
    price: "$449.00",
    image1: head1.src,
    image2: head2.src,
  },
  {
    label: "MW07 Plus (Tortoiseshell / Stainless Steel Case)",
    rating: "4.5",
    price: "$249.00",
    image1: headplus1.src,
    image2: headplus2.src,
  },
  {
    label: "MW50+ (Silver Metal / Brown Leather)",
    rating: "4.8",
    price: "$299.00",
    image1: headpro1.src,
    image2: headpro2.src,
  },
  {
    label: "MH40 Wireless Ear Pads",
    rating: "4.6",
    price: "$49.00",
    image1: inear1.src,
    image2: inear2.src,
  },
];

const ProductSlider = ({children, className, verbose}: Props) => {
  const settings = {
    className: "slider variable-width",
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span>Best Seller</span>
        {children}
      </div>
      <Slider {...settings}>
        {lists.map((data, index) => (
          <div className="">{data.label}</div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;
