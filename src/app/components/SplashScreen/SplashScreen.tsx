"use client";

import clsx from "clsx";
import React, { useEffect, useState } from "react";
import Map from "./Map";

export default function SplashScreen() {

  const [isSplashScreenOpen, setIsSplashScreenOpen] = useState(true);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      setIsSplashScreenOpen(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsSplashScreenOpen(false);
    }, 4000);
  }, []);


  return (
    <div className={clsx("fixed top-0 left-0 w-full h-full bg-[#E9F1FF] z-[1000]",
      isSplashScreenOpen ? "top-0" : "top-[-100%]",
      "transition-all duration-300 ease-in-out",
      "flex items-center justify-center"
    )}>
      <Map />
    </div>
  );
}