import {cn} from "@/lib/utils";
import React from "react";
type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  children: React.ReactNode;
  className?: string;
};
function Button({children, className, style, ...props}: ButtonProps) {
  return (
    <button
      className={cn("flex items-center", className)}
      style={{cursor: "pointer", ...style}}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;

// import Link from "next/link";
// import React, {
//   AnchorHTMLAttributes,
//   ButtonHTMLAttributes,
//   ReactNode,
// } from "react";

// type CommonProps = {
//   variant?: "default" | "icon" | "both";
//   variant2?: "default" | "icon" | "both";
//   mode: "ghost" | "fill" | "line";
//   type: "link" | "button";
//   rounded: "1" | "2" | "3";
//   href?: string;
//   children?: ReactNode;
//   className?: string;
// };

// type ButtonElementProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>;
// type LinkElementProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement>;

// export type ButtonProps = ButtonElementProps | LinkElementProps;

// const types = {
//   link: "link",
//   button: "button",
// };

// const variants = {
//   default: "cursor-pointer px-4 py-2 flex item-center justify-center",
//   icon: "cursor-pointer p-2 aspect-square flex justify-center item-center",
//   both: "cursor-pointer px-4 py-2 flex justify-center item-center",
// };
// const variants2 = {
//   default: "cursor-pointer flex item-center justify-center",
//   icon: "cursor-pointer aspect-square flex justify-center item-center",
//   both: "cursor-pointer flex justify-center item-center",
// };

// const modes = {
//   line: "ring-1 transition-all",
//   fill: "transition-all",
//   ghost: "bg-transparent transition-all",
// };

// const roundeds = {
//   "1": "rounded-md",
//   "2": "rounded-lg",
//   "3": "rounded-full",
// };

// const Button: React.FC<ButtonProps> = ({
//   variant,
//   variant2,
//   mode,
//   type,
//   rounded,
//   href,
//   children,
//   className,
//   ...props
// }) => {
//   const isHref = href ? href : "/";
//   const isTypes = type == "button" ? types.button : types.link;
//   const isRoundeds =
//     rounded === "1"
//       ? roundeds[1]
//       : rounded === "2"
//       ? roundeds[2]
//       : rounded === "3"
//       ? roundeds[3]
//       : roundeds[1];
//   const isVariants =
//     variant === "default"
//       ? variants.default
//       : variant === "both"
//       ? variants.both
//       : variant === "icon"
//       ? variants.icon
//       : variant2 === "both"
//       ? variants2.both
//       : variant2 === "icon"
//       ? variants2.icon
//       : variants2.default;
//   const isModes =
//     mode === "ghost" ? modes.ghost : mode === "line" ? modes.line : modes.fill;
//   if (isTypes === types.button) {
//     return (
//       <button
//         {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
//         className={`${isVariants} ${isModes} ${className} ${isRoundeds}`}
//       >
//         {children}
//       </button>
//     );
//   } else {
//     return (
//       <Link
//         href={isHref}
//         {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
//         className={`${variants2} ${isModes} ${className} ${isRoundeds}`}
//       >
//         {children}
//       </Link>
//     );
//   }
// };

// export default Button;
