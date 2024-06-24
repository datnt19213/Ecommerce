// #region old
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
// #endregion
"use client";
import React, {useEffect, useState} from "react";

import {ChevronDown, ChevronRight, Search, XIcon} from "lucide-react";
import type {DrawerProps, RadioChangeEvent} from "antd";
import {Drawer, Radio, Space} from "antd";
import {Button} from "../button";

import styles from "@/styles/searchdrawer.module.scss";
import {Props} from "@/type";

const lists = [
  {label: "Noise-Cancelling", value: "noise-cancelling"},
  {label: "Paris Saint-Germain", value: "paris-saint-germain"},
  {label: "Sport Earphones", value: "sport-earphones"},
  {label: "Automobili Lamborghini", value: "automobili-lamborghini"},
  {label: "FAQ", value: "faq"},
];

const SearchDrawer = ({children, className, verbose}: Props) => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("left");

  const [posY, setPosY] = useState(0);
  const [isHideNav, setIsHideNav] = useState(false);

  const [search, setSearch] = useState("");
  const [hoverSearch, setHoverSearch] = useState("");
  const [showClearSearch, setShowClearSearch] = useState(false);

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

  useEffect(() => {
    if (search == "") {
      setShowClearSearch(false);
    } else {
      setShowClearSearch(true);
    }
  }, [search]);

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
          className={`${className}`}
          onClick={showDrawer}
          style={{
            backgroundColor: "transparent",
            borderWidth: "0px",
            borderColor: "transparent",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            transition: "opacity 0.3s ease, transform 0.3s ease",
            fontWeight: "bold",
            gap: "0.5rem",
          }}
        >
          <Search
            strokeWidth={2}
            style={{
              width: "1.5rem",
              height: "1.5rem",
              transition: "0.3s ease",
            }}
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
          style={{
            padding: "2.3rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            gap: "1rem",
            backgroundColor: "white",
            height: "100%",
            borderRadius: "0.5rem",
            zIndex: "999",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
              height: "4rem",
              paddingBottom: "0.75rem",
              borderBottom: "2px solid #F0F0F0",
              position: "relative",
              gap: "0.6rem",
            }}
          >
            <div
              style={{
                gridColumn: "span 4",
              }}
            >
              <input
                type="text"
                name=""
                value={search}
                id="search-input"
                onFocus={(e) => (e.currentTarget.style.outline = "none")}
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  border: "none",
                  width: "100%",
                  backgroundColor: "#fff",
                }}
                placeholder="Search for..."
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div
              style={{
                gridColumn: "span 1",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Button
                onClick={() => clearSearch()}
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  color: "#1A1A1AAA",
                  fontWeight: "400",
                  pointerEvents: showClearSearch ? "auto" : "none",
                  opacity: showClearSearch ? "1" : "0",
                  transition: "0.3s ease",
                }}
              >
                Clear
              </Button>
              <Button
                onClick={onClose}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "transparent",
                  border: "none",
                }}
              >
                <XIcon className={`w-5 h-5 m-auto ${styles.textDeepDark}`} />
              </Button>
            </div>
          </div>
          <div
            style={{
              padding: ".5rem 0px 0px 0px",
            }}
          >
            <span
              style={{
                fontWeight: "bold",
                color: "#1A1A1A88",
              }}
            >
              Popular Requests
            </span>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            {lists.map((data, index) => (
              <span
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  position: "relative",
                  cursor: "pointer",
                  width: "fit-content",
                }}
                onMouseOver={() => {
                  setHoverSearch(data.value);
                }}
                onMouseLeave={() => {
                  setHoverSearch("");
                }}
              >
                {data.label}
                <div
                  style={{
                    transition: "0.45s ease",
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    height: "1px",
                    backgroundColor: "#1A1A1AEE",
                    width: hoverSearch == data.value ? "100%" : "0%",
                  }}
                />
              </span>
            ))}
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default SearchDrawer;
