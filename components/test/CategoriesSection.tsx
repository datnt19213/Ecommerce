import React from "react";

import Cate1 from "@/assets/images/cate_1.webp";
import Cate2 from "@/assets/images/cate_2.jpg";
import Cate3 from "@/assets/images/cate_3.webp";
import styles from "./CategoriesSection.module.css";
import {Props} from "@/type";
import videoReview from "@/assets/images/review_video.mp4";

const CategoriesSection = ({className, children}: Props) => {
  return (
    <div className={`${className} ${styles["grid-split-container"]}`}>
      <div className={styles["video-layout"]}>
        {/* <video
          className={styles["media-player"]}
          src="../../assets/images/review_video"
          autoPlay
          muted
        /> */}
        <video loop muted autoPlay className={styles["media-player"]}>
          <source src={videoReview} type="video/mp4" />
        </video>
        <span className={styles["label-session-grid-categories"]}>
          MG20 Gaming Headphones
        </span>
      </div>
      <div className={styles["list-image-layout"]}>
        <div className={styles["image-layout-top"]}>
          <div className={styles["layout-top-left"]}>
            <img className={styles["image-top-left"]} src={Cate1.src} />
            <span className={styles["label-session-grid-categories"]}>
              MW08 Sport
            </span>
          </div>
          <div className={styles["layout-top-right"]}>
            <img className={styles["image-top-right"]} src={Cate2.src} />
            <span className={styles["label-session-grid-categories"]}>
              Accessories
            </span>
          </div>
        </div>
        <div className={styles["image-layout-bottom"]}>
          <img className={styles["image-bottom"]} src={Cate3.src} />
          <span className={styles["label-session-grid-categories"]}>
            MH40 Wireless
          </span>
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;
