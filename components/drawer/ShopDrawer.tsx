// #region old
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
// <>
//   <Space>
//     <Button
//       className={`flex items-center hover:bg-none hover:opacity-70 duration-300 transition-all font-bold gap-2 ${
//         !isHideNav ? "text-white" : "text-deepDark"
//       }`}
//       onClick={showDrawer}
//     >
//       Shop <ChevronDown className={`transition-all w-4 h-4`} />
//     </Button>
//   </Space>
//   <Drawer
//     placement={"left"}
//     closable={false}
//     onClose={onClose}
//     open={open}
//     size="default"
//     style={{backgroundColor: "rgba(255,255,255,0)", boxShadow: "none"}}
//     contentWrapperStyle={{
//       boxShadow: "none",
//       width: "500px",
//     }}
//   >
//     <div className="p-9 flex flex-col gap-8 bg-white h-full rounded-lg z-[999]">
//       <div className="p-3">
//         <button
//           onClick={onClose}
//           type="button"
//           className="rounded-full p-4 border border-deepDark group border-opacity-10"
//         >
//           <XIcon className="group-hover:rotate-90 transition-all ease-in-out duration-300 w-4 h-4" />
//         </button>
//       </div>

//       <div className="p-3 w-full flex flex-col gap-1.5">
//         <div className="flex w-full justify-between items-center py-2 gap-1 font-bold group cursor-pointer">
//           <span className="text-3xl">Headphones</span>
//           <button
//             type="button"
//             className="bg-gray duration-300 group-hover:bg-deepDark transition-all rounded-full h-6 w-6 flex justify-center items-center group-hover:text-white"
//           >
//             <ChevronRight className="h-3 w-3  text-deepDark group-hover:text-white" />
//           </button>
//         </div>
//         <div className="flex w-full justify-between items-center py-2 gap-1 font-bold group cursor-pointer">
//           <span className="text-3xl">Earphones</span>
//           <button
//             type="button"
//             className="bg-gray duration-300 group-hover:bg-deepDark transition-all rounded-full h-6 w-6 flex justify-center items-center group-hover:text-white"
//           >
//             <ChevronRight className="h-3 w-3  text-deepDark group-hover:text-white" />
//           </button>
//         </div>
//         <div className="cursor-pointer flex justify-between items-center py-2 gap-1 font-bold group overflow-hidden">
//           <span className="text-3xl font-bold relative before:absolute before:content-[''] before:left-0 before:w-0 before:transition-all before:duration-500 before:ease before:-bottom-0.5 before:bg-deepDark before:h-[1px] group-hover:before:w-full">
//             Accessories
//           </span>
//         </div>
//         <div className="cursor-pointer flex justify-between items-center py-2 gap-1 font-bold group overflow-hidden">
//           <span className="text-3xl font-bold relative before:absolute before:content-[''] before:left-0 before:w-0 before:transition-all before:duration-500 before:ease before:-bottom-0.5 before:bg-deepDark before:h-[1px] group-hover:before:w-full">
//             Speaker
//           </span>
//         </div>
//       </div>
//       <div className=""></div>
//     </div>
//   </Drawer>
// </>
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
// #endregion

// #region Test

"use client";
import React, {useEffect, useRef, useState} from "react";

import {ChevronDown, ChevronRight, XIcon} from "lucide-react";
import type {DrawerProps, RadioChangeEvent} from "antd";
import {Drawer, Radio, Space} from "antd";
import {Button} from "../button";
import styles from "@/styles/shopdrawer.module.scss";
import {Props} from "@/type";
import {label} from "../ui";

const lists = [
  {label: "Headphones", value: "headphones"},
  {label: "Earphones", value: "earphones"},
  {label: "Accessories", value: "accessories"},
  {label: "Speaker", value: "speaker"},
];

const ShopDrawer = ({children, className, verbose}: Props) => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("left");

  const [posY, setPosY] = useState(0);
  const [isHideNav, setIsHideNav] = useState(false);

  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredIcon, setIsHoveredIcon] = useState("");

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
          onClick={showDrawer}
          style={{
            backgroundColor: "transparent",
            borderWidth: "0px",
            borderColor: "transparent",
            display: "flex",
            alignItems: "center",
            transition: "opacity 0.3s ease, transform 0.3s ease",
            fontWeight: "bold",
            gap: "0.5rem",
            color: !isHideNav ? "#fff" : "#1A1A1A",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.opacity = "0.7";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.opacity = "1";
          }}
        >
          Shop{" "}
          <ChevronDown
            style={{
              transition: "transform 0.3s ease",
              width: "1rem",
              height: "1rem",
            }}
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
          style={{
            padding: "2.25rem",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            backgroundColor: "white",
            height: "100%",
            borderRadius: "0.5rem",
            zIndex: "999",
          }}
        >
          <div style={{padding: "0.75rem"}}>
            <button
              onClick={onClose}
              type="button"
              style={{
                borderRadius: "9999px",
                width: "3.4rem",
                border: "1px solid #1A1A1A22",
                aspectRatio: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                backgroundColor: "white",
              }}
              onMouseOver={() => setIsHovered(true)}
              onMouseOut={() => setIsHovered(false)}
            >
              <XIcon
                id="XiconClose"
                style={{
                  transition: "0.2s ease-in-out",
                  width: "1.1rem",
                  height: "1.1rem",
                  transform: isHovered ? "rotate(90deg)" : "rotate(0deg)",
                }}
              />
            </button>
          </div>

          <div
            style={{
              padding: "0.75rem",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "0.375rem",
            }}
          >
            {lists.map((data: any, index: number) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "0.5rem 0",
                  gap: "0.25rem",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
                onMouseOver={() => setIsHoveredIcon(data.value)}
                onMouseLeave={() => setIsHoveredIcon("")}
              >
                <span style={{fontSize: "1.875rem", position: "relative"}}>
                  {data.label}

                  <div
                    style={{
                      transition: "0.45s ease",
                      position: "absolute",
                      bottom: "0",
                      left: "0",
                      height: "1px",
                      backgroundColor: "#1A1A1AEE",
                      width:
                        (isHoveredIcon == "accessories" ||
                          isHoveredIcon == "speaker") &&
                        isHoveredIcon == data.value
                          ? "100%"
                          : "0%",
                    }}
                  />
                </span>
                {data.value != "accessories" && data.value != "speaker" && (
                  <button
                    type="button"
                    style={{
                      backgroundColor:
                        isHoveredIcon == data.value ? "#1A1A1AEE" : "#E7E7E7",
                      transition: "background-color 0.3s ease",
                      borderRadius: "9999px",
                      borderWidth: "0px",
                      height: "1.5rem",
                      width: "1.5rem",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      pointerEvents: "none",
                    }}
                  >
                    <ChevronRight
                      style={{
                        width: "0.75rem",
                        height: "0.75rem",
                        pointerEvents: "none",
                        color: isHoveredIcon == data.value ? "white" : "black",
                      }}
                    />
                  </button>
                )}
              </div>
            ))}
          </div>
          <div className=""></div>
        </div>
      </Drawer>
    </>
  );
};

export default ShopDrawer;

// #endregion
