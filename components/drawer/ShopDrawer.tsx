// "use client";
// import React, {useEffect, useState} from "react";

// import {ChevronDown, ChevronRight, XIcon} from "lucide-react";
// import type {DrawerProps, RadioChangeEvent} from "antd";
// import {Drawer, Radio, Space} from "antd";
// import {Button} from "../button";

// const ShopDrawer = () => {
//   const [open, setOpen] = useState(false);
//   const [placement, setPlacement] = useState<DrawerProps["placement"]>("left");

//   const [posY, setPosY] = useState(0);
//   const [isHideNav, setIsHideNav] = useState(false);

//   useEffect(() => {
//     const scrollDown = () => {
//       const currentScrollY = window.scrollY;
//       setPosY(currentScrollY);

//       if (currentScrollY > 400) {
//         setIsHideNav(true);
//       } else {
//         setIsHideNav(false);
//       }
//     };

//     window.addEventListener("scroll", scrollDown);

//     return () => {
//       window.removeEventListener("scroll", scrollDown);
//     };
//   }, []);

//   const showDrawer = () => {
//     setOpen(true);
//   };

//   const onClose = () => {
//     setOpen(false);
//   };

//   return (
//     <>
//       <Space>
//         <Button
//           className={`flex items-center hover:bg-none hover:opacity-70 duration-300 transition-all font-bold gap-2 ${
//             !isHideNav ? "text-white" : "text-deepDark"
//           }`}
//           onClick={showDrawer}
//         >
//           Shop <ChevronDown className={`transition-all w-4 h-4`} />
//         </Button>
//       </Space>
//       <Drawer
//         placement={"left"}
//         closable={false}
//         onClose={onClose}
//         open={open}
//         size="default"
//         style={{backgroundColor: "rgba(255,255,255,0)", boxShadow: "none"}}
//         contentWrapperStyle={{
//           boxShadow: "none",
//           width: "500px",
//         }}
//       >
//         <div className="p-9 flex flex-col gap-8 bg-white h-full rounded-lg z-[999]">
//           <div className="p-3">
//             <button
//               onClick={onClose}
//               type="button"
//               className="rounded-full p-4 border border-deepDark group border-opacity-10"
//             >
//               <XIcon className="group-hover:rotate-90 transition-all ease-in-out duration-300 w-4 h-4" />
//             </button>
//           </div>

//           <div className="p-3 w-full flex flex-col gap-1.5">
//             <div className="flex w-full justify-between items-center py-2 gap-1 font-bold group cursor-pointer">
//               <span className="text-3xl">Headphones</span>
//               <button
//                 type="button"
//                 className="bg-gray duration-300 group-hover:bg-deepDark transition-all rounded-full h-6 w-6 flex justify-center items-center group-hover:text-white"
//               >
//                 <ChevronRight className="h-3 w-3  text-deepDark group-hover:text-white" />
//               </button>
//             </div>
//             <div className="flex w-full justify-between items-center py-2 gap-1 font-bold group cursor-pointer">
//               <span className="text-3xl">Earphones</span>
//               <button
//                 type="button"
//                 className="bg-gray duration-300 group-hover:bg-deepDark transition-all rounded-full h-6 w-6 flex justify-center items-center group-hover:text-white"
//               >
//                 <ChevronRight className="h-3 w-3  text-deepDark group-hover:text-white" />
//               </button>
//             </div>
//             <div className="cursor-pointer flex justify-between items-center py-2 gap-1 font-bold group overflow-hidden">
//               <span className="text-3xl font-bold relative before:absolute before:content-[''] before:left-0 before:w-0 before:transition-all before:duration-500 before:ease before:-bottom-0.5 before:bg-deepDark before:h-[1px] group-hover:before:w-full">
//                 Accessories
//               </span>
//             </div>
//             <div className="cursor-pointer flex justify-between items-center py-2 gap-1 font-bold group overflow-hidden">
//               <span className="text-3xl font-bold relative before:absolute before:content-[''] before:left-0 before:w-0 before:transition-all before:duration-500 before:ease before:-bottom-0.5 before:bg-deepDark before:h-[1px] group-hover:before:w-full">
//                 Speaker
//               </span>
//             </div>
//           </div>
//           <div className=""></div>
//         </div>
//       </Drawer>
//     </>
//   );
// };

// export default ShopDrawer;

// "use client";
// import React, {useEffect, useState} from "react";

// import {ChevronDown, ChevronRight, XIcon} from "lucide-react";
// import type {DrawerProps, RadioChangeEvent} from "antd";
// import {Drawer, Radio, Space} from "antd";
// import {Button} from "../button";
// import styles from "@/styles/shopdrawer.module.scss";
// import {Props} from "@/type";

// const ShopDrawer = ({children, className, verbose}: Props) => {
//   const [open, setOpen] = useState(false);
//   const [placement, setPlacement] = useState<DrawerProps["placement"]>("left");

//   const [posY, setPosY] = useState(0);
//   const [isHideNav, setIsHideNav] = useState(false);

//   useEffect(() => {
//     const scrollDown = () => {
//       const currentScrollY = window.scrollY;
//       setPosY(currentScrollY);

//       if (currentScrollY > 400) {
//         setIsHideNav(true);
//       } else {
//         setIsHideNav(false);
//       }
//     };

//     window.addEventListener("scroll", scrollDown);

//     return () => {
//       window.removeEventListener("scroll", scrollDown);
//     };
//   }, []);

//   const showDrawer = () => {
//     setOpen(true);
//   };

//   const onClose = () => {
//     setOpen(false);
//   };

//   return (
//     <>
//       <Space>
//         <Button
//           className={`${styles.flex} ${styles.itemsCenter} ${
//             styles.hoverOpacity70
//           } ${styles.duration300} ${styles.transitionAll} ${styles.fontBold} ${
//             styles.gap2
//           } ${!isHideNav ? styles.textWhite : styles.textDeepDark}`}
//           onClick={showDrawer}
//         >
//           Shop{" "}
//           <ChevronDown
//             className={`${styles.transitionAll} ${styles.w4} ${styles.h4}`}
//           />
//         </Button>
//       </Space>
//       <Drawer
//         placement={"left"}
//         closable={false}
//         onClose={onClose}
//         open={open}
//         size="default"
//         style={{backgroundColor: "rgba(255,255,255,0)", boxShadow: "none"}}
//         contentWrapperStyle={{
//           boxShadow: "none",
//           width: "500px",
//         }}
//       >
//         <div
//           className={`${styles.p9} ${styles.flex} ${styles.flexCol} ${styles.gap8} ${styles.bgWhite} ${styles.hFull} ${styles.roundedLg} ${styles.z999}`}
//         >
//           <div className={styles.p3}>
//             <button
//               onClick={onClose}
//               type="button"
//               className={`${styles.roundedFull} ${styles.p4} ${styles.border} ${styles.borderDeepDark} ${styles.borderOpacity10}`}
//             >
//               <XIcon
//                 className={`${styles.groupHoverRotate90} ${styles.transitionAll} ${styles.easeInOut} ${styles.duration300} ${styles.w4} ${styles.h4}`}
//               />
//             </button>
//           </div>

//           <div
//             className={`${styles.p3} ${styles.wFull} ${styles.flex} ${styles.flexCol} ${styles.gap15}`}
//           >
//             <div
//               className={`${styles.flex} ${styles.wFull} ${styles.justifyBetween} ${styles.itemsCenter} ${styles.py2} ${styles.gap1} ${styles.fontBold} ${styles.group} ${styles.cursorPointer}`}
//             >
//               <span className={styles.text3xl}>Headphones</span>
//               <button
//                 type="button"
//                 className={`${styles.bgGray} ${styles.duration300} ${styles.groupHoverBgDeepDark} ${styles.transitionAll} ${styles.roundedFull} ${styles.h6} ${styles.w6} ${styles.flex} ${styles.justifyCenter} ${styles.itemsCenter} ${styles.groupHoverTextWhite}`}
//               >
//                 <ChevronRight
//                   className={`${styles.h3} ${styles.w3} ${styles.textDeepDark} ${styles.groupHoverTextWhite}`}
//                 />
//               </button>
//             </div>
//             <div
//               className={`${styles.flex} ${styles.wFull} ${styles.justifyBetween} ${styles.itemsCenter} ${styles.py2} ${styles.gap1} ${styles.fontBold} ${styles.group} ${styles.cursorPointer}`}
//             >
//               <span className={styles.text3xl}>Earphones</span>
//               <button
//                 type="button"
//                 className={`${styles.bgGray} ${styles.duration300} ${styles.groupHoverBgDeepDark} ${styles.transitionAll} ${styles.roundedFull} ${styles.h6} ${styles.w6} ${styles.flex} ${styles.justifyCenter} ${styles.itemsCenter} ${styles.groupHoverTextWhite}`}
//               >
//                 <ChevronRight
//                   className={`${styles.h3} ${styles.w3} ${styles.textDeepDark} ${styles.groupHoverTextWhite}`}
//                 />
//               </button>
//             </div>
//             <div
//               className={`${styles.cursorPointer} ${styles.flex} ${styles.justifyBetween} ${styles.itemsCenter} ${styles.py2} ${styles.gap1} ${styles.fontBold} ${styles.group} ${styles.overflowHidden}`}
//             >
//               <span
//                 className={`${styles.text3xl} ${styles.fontBold} ${styles.relative} ${styles.beforeAbsolute} ${styles.beforeContentEmpty} ${styles.beforeLeft0} ${styles.beforeW0} ${styles.beforeTransitionAll} ${styles.beforeDuration500} ${styles.beforeEase} ${styles.beforeBottom05} ${styles.beforeBgDeepDark} ${styles.beforeH1px} ${styles.groupHoverBeforeWFull}`}
//               >
//                 Accessories
//               </span>
//             </div>
//             <div
//               className={`${styles.cursorPointer} ${styles.flex} ${styles.justifyBetween} ${styles.itemsCenter} ${styles.py2} ${styles.gap1} ${styles.fontBold} ${styles.group} ${styles.overflowHidden}`}
//             >
//               <span
//                 className={`${styles.text3xl} ${styles.fontBold} ${styles.relative} ${styles.beforeAbsolute} ${styles.beforeContentEmpty} ${styles.beforeLeft0} ${styles.beforeW0} ${styles.beforeTransitionAll} ${styles.beforeDuration500} ${styles.beforeEase} ${styles.beforeBottom05} ${styles.beforeBgDeepDark} ${styles.beforeH1px} ${styles.groupHoverBeforeWFull}`}
//               >
//                 Speaker
//               </span>
//             </div>
//           </div>
//           <div className=""></div>
//         </div>
//       </Drawer>
//     </>
//   );
// };

// export default ShopDrawer;

// #region Test

"use client";
import React, {useEffect, useState} from "react";

import {ChevronDown, ChevronRight, XIcon} from "lucide-react";
import type {DrawerProps, RadioChangeEvent} from "antd";
import {Drawer, Radio, Space} from "antd";
import {Button} from "../button";
import styles from "@/styles/shopdrawer.module.scss";
import {Props} from "@/type";

const ShopDrawer = ({children, className, verbose}: Props) => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("left");

  const [posY, setPosY] = useState(0);
  const [isHideNav, setIsHideNav] = useState(false);

  useEffect(() => {
    const scrollDown = () => {
      const currentScrollY = window.scrollY;
      setPosY(currentScrollY);

      if (currentScrollY > 400) {
        setIsHideNav(true);
      } else {
        setIsHideNav(false);
      }
    };

    window.addEventListener("scroll", scrollDown);

    return () => {
      window.removeEventListener("scroll", scrollDown);
    };
  }, []);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Space>
        <Button
          className={`${styles.flex} ${styles.itemsCenter} ${className} ${
            styles.hoverOpacity70
          } ${styles.duration300} ${styles.transitionAll} ${styles.fontBold} ${
            styles.gap2
          } ${!isHideNav ? styles.textWhite : styles.textDeepDark}`}
          onClick={showDrawer}
          style={{
            backgroundColor: "transparent",
            borderWidth: "0px",
            borderColor: "transparent",
            color: "#fff",
          }}
        >
          Shop{" "}
          <ChevronDown
            className={`${styles.transitionAll} ${styles.w4} ${styles.h4}`}
          />
        </Button>
      </Space>
      <Drawer
        placement={"left"}
        closable={false}
        onClose={onClose}
        open={open}
        size="default"
        style={{backgroundColor: "rgba(255,255,255,0)", boxShadow: "none"}}
        contentWrapperStyle={{
          boxShadow: "none",
          width: "500px",
        }}
      >
        <div
          className={`${styles.p9} ${styles.flex} ${styles.flexCol} ${styles.gap8} ${styles.bgWhite} ${styles.hFull} ${styles.roundedLg} ${styles.z999}`}
        >
          <div className={styles.p3}>
            <button
              onClick={onClose}
              type="button"
              className={`${styles.roundedFull} ${styles.p4} ${styles.border} ${styles.borderDeepDark} ${styles.borderOpacity10}`}
            >
              <XIcon
                className={`${styles.groupHoverRotate90} ${styles.transitionAll} ${styles.easeInOut} ${styles.duration300} ${styles.w4} ${styles.h4}`}
              />
            </button>
          </div>

          <div
            className={`${styles.p3} ${styles.wFull} ${styles.flex} ${styles.flexCol} ${styles.gap15}`}
          >
            <div
              className={`${styles.flex} ${styles.wFull} ${styles.justifyBetween} ${styles.itemsCenter} ${styles.py2} ${styles.gap1} ${styles.fontBold} ${styles.group} ${styles.cursorPointer}`}
            >
              <span className={styles.text3xl}>Headphones</span>
              <button
                type="button"
                className={`${styles.bgGray} ${styles.duration300} ${styles.groupHoverBgDeepDark} ${styles.transitionAll} ${styles.roundedFull} ${styles.h6} ${styles.w6} ${styles.flex} ${styles.justifyCenter} ${styles.itemsCenter} ${styles.groupHoverTextWhite}`}
              >
                <ChevronRight
                  className={`${styles.h3} ${styles.w3} ${styles.textDeepDark} ${styles.groupHoverTextWhite}`}
                />
              </button>
            </div>
            <div
              className={`${styles.flex} ${styles.wFull} ${styles.justifyBetween} ${styles.itemsCenter} ${styles.py2} ${styles.gap1} ${styles.fontBold} ${styles.group} ${styles.cursorPointer}`}
            >
              <span className={styles.text3xl}>Earphones</span>
              <button
                type="button"
                className={`${styles.bgGray} ${styles.duration300} ${styles.groupHoverBgDeepDark} ${styles.transitionAll} ${styles.roundedFull} ${styles.h6} ${styles.w6} ${styles.flex} ${styles.justifyCenter} ${styles.itemsCenter} ${styles.groupHoverTextWhite}`}
              >
                <ChevronRight
                  className={`${styles.h3} ${styles.w3} ${styles.textDeepDark} ${styles.groupHoverTextWhite}`}
                />
              </button>
            </div>
            <div
              className={`${styles.cursorPointer} ${styles.flex} ${styles.justifyBetween} ${styles.itemsCenter} ${styles.py2} ${styles.gap1} ${styles.fontBold} ${styles.group} ${styles.overflowHidden}`}
            >
              <span
                className={`${styles.text3xl} ${styles.fontBold} ${styles.relative} ${styles.beforeAbsolute} ${styles.beforeContentEmpty} ${styles.beforeLeft0} ${styles.beforeW0} ${styles.beforeTransitionAll} ${styles.beforeDuration500} ${styles.beforeEase} ${styles.beforeBottom05} ${styles.beforeBgDeepDark} ${styles.beforeH1px} ${styles.groupHoverBeforeWFull}`}
              >
                Accessories
              </span>
            </div>
            <div
              className={`${styles.cursorPointer} ${styles.flex} ${styles.justifyBetween} ${styles.itemsCenter} ${styles.py2} ${styles.gap1} ${styles.fontBold} ${styles.group} ${styles.overflowHidden}`}
            >
              <span
                className={`${styles.text3xl} ${styles.fontBold} ${styles.relative} ${styles.beforeAbsolute} ${styles.beforeContentEmpty} ${styles.beforeLeft0} ${styles.beforeW0} ${styles.beforeTransitionAll} ${styles.beforeDuration500} ${styles.beforeEase} ${styles.beforeBottom05} ${styles.beforeBgDeepDark} ${styles.beforeH1px} ${styles.groupHoverBeforeWFull}`}
              >
                Speaker
              </span>
            </div>
          </div>
          <div className=""></div>
        </div>
      </Drawer>
    </>
  );
};

export default ShopDrawer;

// #endregion
