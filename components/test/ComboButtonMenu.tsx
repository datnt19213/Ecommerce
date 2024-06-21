import React from "react";
import {SearchDrawer} from "../drawer";
import {Button} from "../button";
import {ChevronDown, ShoppingCart, User2} from "lucide-react";
import {Props} from "@/type";

const ComboButtonMenu = ({children, className, verbose}: Props) => {
  return (
    <div className={className}>
      <Button className={className}>
        USD $ <ChevronDown className="h-4 w-4" />
      </Button>
      {children}
      <Button className={className}>
        <User2 strokeWidth={2} className={`transition-all w-5 h-5`} />
      </Button>
      <Button className={className}>
        <ShoppingCart strokeWidth={2} className={`transition-all w-5 h-5`} />
      </Button>
    </div>
  );
};

export default ComboButtonMenu;
