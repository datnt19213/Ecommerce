import React from "react";

import styles from "@/styles/menu.module.scss";
import {Props} from "@/type";
import {cn} from "@/lib/utils";

const FlexContainer = ({children, className, verbose}: Props) => {
  return <div className={className}>{children}</div>;
};

export default FlexContainer;
