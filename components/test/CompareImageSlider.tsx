import React from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import Image1 from "@/assets/images/head_1.webp";
import Image2 from "@/assets/images/headplus_1.webp";
import {Props} from "@/type";

const CompareImageSlider = ({className, children}: Props) => {
  return (
    <ReactCompareSlider
      className={className}
      itemOne={<ReactCompareSliderImage src={Image1.src} alt="Image one" />}
      itemTwo={<ReactCompareSliderImage src={Image2.src} alt="Image two" />}
    />
  );
};

export default CompareImageSlider;
