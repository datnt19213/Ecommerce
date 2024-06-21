// "use client";
// import React, {useEffect, useState} from "react";
// import {ShopDrawer} from "../drawer";
// import {Collaborations} from "../mega-menu";
// import {Button, ButtonLink} from "../button";
// import {
//   DropdownMenu,
//   DropdownMenuTrigger,
//   DropdownMenuContent,
//   DropdownMenuGroup,
//   DropdownMenuItem,
// } from "@radix-ui/react-dropdown-menu";
// import CA from "@/assets/images/canada.svg";
// import FR from "@/assets/images/france.svg";
// import HK from "@/assets/images/hongkong.svg";
// import JP from "@/assets/images/japan.svg";
// import UK from "@/assets/images/uk.svg";
// import US from "@/assets/images/us.svg";
// import {ChevronDown, ShoppingCart, User, User2} from "lucide-react";
// import {SearchDrawer} from "../drawer";

// import styles from "@/styles/menu.module.scss";

// const listLang = [
//   {icon: CA, title: "Canada", currency: "CAD $"},
//   {icon: FR, title: "France", currency: "EUR €"},
//   {icon: HK, title: "Hongkong", currency: "HKD $"},
//   {icon: JP, title: "Japan", currency: "JPY ¥"},
//   {icon: UK, title: "United Kingdom", currency: "GBP £"},
//   {icon: US, title: "United States", currency: "USD $"},
// ];
// export interface Props {
//   children?: React.ReactNode;
//   className?: string;
//   verbose?: boolean;
// }

// const Menu = ({children, className, verbose}: Props) => {
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
//   return (
//     <div
//       className={`${className} ${styles.navContainer} ${
//         isHideNav ? "hidden" : "visible"
//       }`}
//     >
//       <div className={styles.innerContainer}>
//         {children}
//         <div className={styles.flexCenter}>
//           <ShopDrawer />
//           <Collaborations />
//           <ButtonLink
//             href="/"
//             className={`${!isHideNav ? "" : `${styles.dark}`} ${styles.button}`}
//           >
//             {children}
//           </ButtonLink>
//           <ButtonLink
//             href="/"
//             className={`${!isHideNav ? "" : `${styles.dark}`} ${styles.button}`}
//           >
//             {children}
//           </ButtonLink>
//           <ButtonLink
//             href="/"
//             className={`${!isHideNav ? "" : `${styles.dark}`} ${styles.button}`}
//           >
//             About
//           </ButtonLink>
//           <ButtonLink
//             href="/"
//             className={`${!isHideNav ? "" : `${styles.dark}`} ${styles.button}`}
//           >
//             Theme Features
//           </ButtonLink>
//         </div>
//         <div className={styles.flexCenter}>
//           <Button
//             className={`${!isHideNav ? "" : `${styles.dark}`} ${styles.button}`}
//           >
//             USD $ <ChevronDown className="h-4 w-4" />
//           </Button>
//           <SearchDrawer />
//           <Button
//             className={`${!isHideNav ? "" : `${styles.dark}`} ${styles.button}`}
//           >
//             <User2 strokeWidth={2} className={`transition-all w-5 h-5`} />
//           </Button>
//           <Button
//             className={`${!isHideNav ? "" : `${styles.dark}`} ${styles.button}`}
//           >
//             <ShoppingCart
//               strokeWidth={2}
//               className={`transition-all w-5 h-5`}
//             />
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Menu;
"use client";
import React, {useEffect, useState} from "react";
import {ShopDrawer} from "../drawer";
import {Collaborations} from "../mega-menu";
import {Button, ButtonLink} from "../button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import CA from "@/assets/images/canada.svg";
import FR from "@/assets/images/france.svg";
import HK from "@/assets/images/hongkong.svg";
import JP from "@/assets/images/japan.svg";
import UK from "@/assets/images/uk.svg";
import US from "@/assets/images/us.svg";
import {ChevronDown, ShoppingCart, User, User2} from "lucide-react";
import {SearchDrawer} from "../drawer";

import styles from "@/styles/menu.module.scss";

const listLang = [
  {icon: CA, title: "Canada", currency: "CAD $"},
  {icon: FR, title: "France", currency: "EUR €"},
  {icon: HK, title: "Hongkong", currency: "HKD $"},
  {icon: JP, title: "Japan", currency: "JPY ¥"},
  {icon: UK, title: "United Kingdom", currency: "GBP £"},
  {icon: US, title: "United States", currency: "USD $"},
];
export interface Props {
  children?: React.ReactNode;
  className?: string;
  verbose?: boolean;
}

const Menu = ({children, className, verbose}: Props) => {
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
  return (
    <div
      className={`${className} ${styles.navContainer} ${
        isHideNav ? "hidden" : "visible"
      }`}
    >
      <div className={styles.innerContainer}>{children}</div>
    </div>
  );
};

export default Menu;
