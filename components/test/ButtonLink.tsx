import {Props} from "@/type";
import React from "react";
import ButtonLink from "../button/ButtonLink";

const Link = ({children, className, verbose}: Props) => {
  return (
    <ButtonLink href="/" className={className} style={{textDecoration: "none"}}>
      {children}
    </ButtonLink>
  );
};

export default Link;
