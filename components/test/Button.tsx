import {Props} from "@/type";
import React from "react";
import Button from "../button/Button";

const Buttons = ({children, className, verbose}: Props) => {
  return <Button className={className}>{children}</Button>;
};

export default Buttons;
