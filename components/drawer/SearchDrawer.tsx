// "use client";
// import React, {useEffect, useState} from "react";

// import {ChevronDown, ChevronRight, Search, XIcon} from "lucide-react";
// import type {DrawerProps, RadioChangeEvent} from "antd";
// import {Drawer, Radio, Space} from "antd";
// import {Button} from "../button";

// const SearchDrawer = () => {
//   const [open, setOpen] = useState(false);
//   const [placement, setPlacement] = useState<DrawerProps["placement"]>("left");

//   const [posY, setPosY] = useState(0);
//   const [isHideNav, setIsHideNav] = useState(false);

//   const [search, setSearch] = useState("");

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

//   const clearSearch = () => {
//     setSearch((prev) => (prev = ""));
//   };

//   return (
//     <>
//       <Space>
//         <Button
//           className={`flex items-center hover:bg-none hover:opacity-70 duration-300 p-3 transition-all font-bold gap-2 ${
//             !isHideNav ? "text-white" : "text-deepDark"
//           }`}
//           onClick={showDrawer}
//         >
//           <Search strokeWidth={2} className={`transition-all w-5 h-5`} />
//         </Button>
//       </Space>
//       <Drawer
//         placement={"right"}
//         closable={false}
//         onClose={onClose}
//         open={open}
//         size="large"
//         style={{backgroundColor: "rgba(255,255,255,0)", boxShadow: "none"}}
//         contentWrapperStyle={{boxShadow: "none"}}
//       >
//         <div className="p-9 flex flex-col gap-8 bg-white h-full rounded-lg z-[999]">
//           <div className="grid grid-cols-5 h-16 pb-3 border-b-2 border-gray-slay">
//             <input
//               type="text"
//               name=""
//               value={search}
//               id="search-input"
//               className="col-span-4 focus:outline-none w-full text-3xl font-bold placeholder:text-3xl placeholder:font-bold placeholder:text-gray-slay"
//               placeholder="Search for..."
//               onChange={(e) => setSearch(e.target.value)}
//             />
//             <div className="flex items-center justify-center">
//               <Button
//                 type="button"
//                 variant="default"
//                 mode="ghost"
//                 rounded="1"
//                 className="text-gray-slay"
//                 onClick={() => clearSearch()}
//               >
//                 Clear
//               </Button>
//               <Button
//                 type="button"
//                 variant="icon"
//                 mode="ghost"
//                 rounded="1"
//                 onClick={onClose}
//               >
//                 <XIcon className="col-span-1 w-5 h-5 m-auto text-deepDark" />
//               </Button>
//             </div>
//           </div>
//           <div className="w-full">
//             <div className="cursor-pointer flex justify-between items-center py-3 gap-1 font-bold group overflow-hidden">
//               <span className="font-bold relative text-neutral-600">
//                 Popular Requests
//               </span>
//             </div>
//             <div className="cursor-pointer flex justify-between items-center py-2 gap-1 font-bold group overflow-hidden">
//               <span className="text-2xl font-bold relative before:absolute before:content-[''] before:left-0 before:w-0 before:transition-all before:duration-500 before:ease before:-bottom-0.5 before:bg-deepDark before:h-[1px] group-hover:before:w-full">
//                 Noise-Cancelling
//               </span>
//             </div>
//             <div className="cursor-pointer flex justify-between items-center py-2 gap-1 font-bold group overflow-hidden">
//               <span className="text-2xl font-bold relative before:absolute before:content-[''] before:left-0 before:w-0 before:transition-all before:duration-500 before:ease before:-bottom-0.5 before:bg-deepDark before:h-[1px] group-hover:before:w-full">
//                 Paris Saint-Germain
//               </span>
//             </div>
//             <div className="cursor-pointer flex justify-between items-center py-2 gap-1 font-bold group overflow-hidden">
//               <span className="text-2xl font-bold relative before:absolute before:content-[''] before:left-0 before:w-0 before:transition-all before:duration-500 before:ease before:-bottom-0.5 before:bg-deepDark before:h-[1px] group-hover:before:w-full">
//                 Sport Earphones
//               </span>
//             </div>
//             <div className="cursor-pointer flex justify-between items-center py-2 gap-1 font-bold group overflow-hidden">
//               <span className="text-2xl font-bold relative before:absolute before:content-[''] before:left-0 before:w-0 before:transition-all before:duration-500 before:ease before:-bottom-0.5 before:bg-deepDark before:h-[1px] group-hover:before:w-full">
//                 Automobili Lamborghini
//               </span>
//             </div>
//             <div className="cursor-pointer flex justify-between items-center py-2 gap-1 font-bold group overflow-hidden">
//               <span className="text-2xl font-bold relative before:absolute before:content-[''] before:left-0 before:w-0 before:transition-all before:duration-500 before:ease before:-bottom-0.5 before:bg-deepDark before:h-[1px] group-hover:before:w-full">
//                 FAQ
//               </span>
//             </div>
//           </div>
//         </div>
//         <div className=""></div>
//       </Drawer>
//     </>
//   );
// };

// export default SearchDrawer;
"use client";
import React, {useEffect, useState} from "react";

import {ChevronDown, ChevronRight, Search, XIcon} from "lucide-react";
import type {DrawerProps, RadioChangeEvent} from "antd";
import {Drawer, Radio, Space} from "antd";
import {Button} from "../button";

import styles from "@/styles/searchdrawer.module.scss";
import {Props} from "@/type";

const SearchDrawer = ({children, className, verbose}: Props) => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("left");

  const [posY, setPosY] = useState(0);
  const [isHideNav, setIsHideNav] = useState(false);

  const [search, setSearch] = useState("");

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

  const clearSearch = () => {
    setSearch((prev) => (prev = ""));
  };

  return (
    <>
      <Space>
        <Button
          className={`${styles.flex} ${styles.itemsCenter} ${className} ${
            styles.hoverBgNone
          } ${styles.hoverOpacity70} ${styles.duration300} ${styles.p3} ${
            styles.transitionAll
          } ${styles.fontBold} ${styles.gap2} ${
            !isHideNav ? styles.textWhite : styles.textDeepDark
          }`}
          onClick={showDrawer}
          style={{
            backgroundColor: "transparent",
            borderWidth: "0px",
            borderColor: "transparent",
            color: "#fff",
          }}
        >
          <Search
            strokeWidth={2}
            className={`${styles.transitionAll} ${styles.w5} ${styles.h5}`}
          />
        </Button>
      </Space>
      <Drawer
        placement={"right"}
        closable={false}
        onClose={onClose}
        open={open}
        size="large"
        style={{backgroundColor: "rgba(255,255,255,0)", boxShadow: "none"}}
        contentWrapperStyle={{boxShadow: "none"}}
      >
        <div
          className={`${styles.p9} ${styles.flex} ${styles.flexCol} ${styles.gap8} ${styles.bgWhite} ${styles.hFull} ${styles.roundedLg} ${styles.z999}`}
        >
          <div
            className={`${styles.grid} ${styles.gridCols5} ${styles.h16} ${styles.pb3} ${styles.borderB2} ${styles.borderGraySlay}`}
          >
            <input
              type="text"
              name=""
              value={search}
              id="search-input"
              className={`${styles.colSpan4} ${styles.focusOutlineNone} ${styles.wFull} ${styles.text3xl} ${styles.fontBold} ${styles.placeholderText3xl} ${styles.placeholderFontBold} ${styles.placeholderTextGraySlay}`}
              placeholder="Search for..."
              onChange={(e) => setSearch(e.target.value)}
            />
            <div
              className={`${styles.flex} ${styles.itemsCenter} ${styles.justifyCenter}`}
            >
              <Button
                className={styles.textGraySlay}
                onClick={() => clearSearch()}
              >
                Clear
              </Button>
              <Button onClick={onClose}>
                <XIcon className={`w-5 h-5 m-auto ${styles.textDeepDark}`} />
              </Button>
            </div>
          </div>
          <div className={styles.wFull}>
            <div
              className={`${styles.cursorPointer} ${styles.flex} ${styles.justifyBetween} ${styles.itemsCenter} ${styles.py3} ${styles.gap1} ${styles.fontBold} ${styles.group} ${styles.overflowHidden}`}
            >
              <span
                className={`${styles.fontBold} ${styles.relative} ${styles.textNeutral600}`}
              >
                Popular Requests
              </span>
            </div>
            <div
              className={`${styles.cursorPointer} ${styles.flex} ${styles.justifyBetween} ${styles.itemsCenter} ${styles.py2} ${styles.gap1} ${styles.fontBold} ${styles.group} ${styles.overflowHidden}`}
            >
              <span
                className={`${styles.text2xl} ${styles.fontBold} ${styles.relative} ${styles.beforeAbsolute} ${styles.beforeContentEmpty} ${styles.beforeLeft0} ${styles.beforeW0} ${styles.beforeTransitionAll} ${styles.beforeDuration500} ${styles.beforeEase} ${styles.beforeBottom05} ${styles.beforeBgDeepDark} ${styles.beforeH1px} ${styles.groupHoverBeforeWFull}`}
              >
                Noise-Cancelling
              </span>
            </div>
            <div
              className={`${styles.cursorPointer} ${styles.flex} ${styles.justifyBetween} ${styles.itemsCenter} ${styles.py2} ${styles.gap1} ${styles.fontBold} ${styles.group} ${styles.overflowHidden}`}
            >
              <span
                className={`${styles.text2xl} ${styles.fontBold} ${styles.relative} ${styles.beforeAbsolute} ${styles.beforeContentEmpty} ${styles.beforeLeft0} ${styles.beforeW0} ${styles.beforeTransitionAll} ${styles.beforeDuration500} ${styles.beforeEase} ${styles.beforeBottom05} ${styles.beforeBgDeepDark} ${styles.beforeH1px} ${styles.groupHoverBeforeWFull}`}
              >
                Paris Saint-Germain
              </span>
            </div>
            <div
              className={`${styles.cursorPointer} ${styles.flex} ${styles.justifyBetween} ${styles.itemsCenter} ${styles.py2} ${styles.gap1} ${styles.fontBold} ${styles.group} ${styles.overflowHidden}`}
            >
              <span
                className={`${styles.text2xl} ${styles.fontBold} ${styles.relative} ${styles.beforeAbsolute} ${styles.beforeContentEmpty} ${styles.beforeLeft0} ${styles.beforeW0} ${styles.beforeTransitionAll} ${styles.beforeDuration500} ${styles.beforeEase} ${styles.beforeBottom05} ${styles.beforeBgDeepDark} ${styles.beforeH1px} ${styles.groupHoverBeforeWFull}`}
              >
                Sport Earphones
              </span>
            </div>
            <div
              className={`${styles.cursorPointer} ${styles.flex} ${styles.justifyBetween} ${styles.itemsCenter} ${styles.py2} ${styles.gap1} ${styles.fontBold} ${styles.group} ${styles.overflowHidden}`}
            >
              <span
                className={`${styles.text2xl} ${styles.fontBold} ${styles.relative} ${styles.beforeAbsolute} ${styles.beforeContentEmpty} ${styles.beforeLeft0} ${styles.beforeW0} ${styles.beforeTransitionAll} ${styles.beforeDuration500} ${styles.beforeEase} ${styles.beforeBottom05} ${styles.beforeBgDeepDark} ${styles.beforeH1px} ${styles.groupHoverBeforeWFull}`}
              >
                Automobili Lamborghini
              </span>
            </div>
            <div
              className={`${styles.cursorPointer} ${styles.flex} ${styles.justifyBetween} ${styles.itemsCenter} ${styles.py2} ${styles.gap1} ${styles.fontBold} ${styles.group} ${styles.overflowHidden}`}
            >
              <span
                className={`${styles.text2xl} ${styles.fontBold} ${styles.relative} ${styles.beforeAbsolute} ${styles.beforeContentEmpty} ${styles.beforeLeft0} ${styles.beforeW0} ${styles.beforeTransitionAll} ${styles.beforeDuration500} ${styles.beforeEase} ${styles.beforeBottom05} ${styles.beforeBgDeepDark} ${styles.beforeH1px} ${styles.groupHoverBeforeWFull}`}
              >
                FAQ
              </span>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default SearchDrawer;
