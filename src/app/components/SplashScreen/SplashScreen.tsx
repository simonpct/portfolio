"use client";

import clsx from "clsx";
import React, { useEffect, useState, useCallback } from "react";
import Map from "./Map";
import { usePostHog } from "posthog-js/react";

export default function SplashScreen(): React.ReactElement {
  const [isSplashScreenOpen, setIsSplashScreenOpen] = useState<boolean>(true);
  const posthog = usePostHog();

  const handleKeyDown = useCallback((event: KeyboardEvent): void => {
    if (event.key === "Enter" || event.key === "Escape" || event.key === " ") {
      posthog.capture("splash_screen_closed", {
        method: "keyboard",
        key_pressed: event.key
      });
      setIsSplashScreenOpen(false);
    }
  }, [posthog, setIsSplashScreenOpen]);

  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    // Track when splash screen is shown
    posthog.capture("splash_screen_shown");
    
    const timer = setTimeout(() => {
      posthog.capture("splash_screen_closed", {
        method: "auto_timeout",
        timeout_duration: 4000
      });
      setIsSplashScreenOpen(false);
    }, 4000);
    
    return () => clearTimeout(timer);
  }, [posthog]);


  const handleManualClose = (): void => {
    posthog.capture("splash_screen_closed", {
      method: "manual_click"
    });
    setIsSplashScreenOpen(false);
  };

  return (
    <div 
      className={clsx("fixed top-0 left-0 w-full h-full bg-[#E9F1FF] z-[1000]",
        isSplashScreenOpen ? "top-0" : "top-[-100%]",
        "transition-all duration-300 ease-in-out",
        "flex items-center justify-center max-h-screen"
      )}
      onClick={handleManualClose}
    >
      <Map />
    </div>
  );
}