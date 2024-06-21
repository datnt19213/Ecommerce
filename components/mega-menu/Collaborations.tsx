"use client";
import {ChevronDown} from "lucide-react";
import React, {useEffect, useState} from "react";

const Collaborations = () => {
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
    <div>
      <button
        type="button"
        className={`flex items-center font-bold duration-300 transition-all hover:opacity-70 gap-2 ${
          !isHideNav ? "text-white" : "text-deepDark"
        }`}
      >
        Collaborations <ChevronDown className="w-4 h-4" />
      </button>
    </div>
  );
};

export default Collaborations;
