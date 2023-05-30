import { useEffect, useState } from "react";

export function userScrollY() {
  const [scrollY, setScrollY] = useStateState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffectffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return scrollY;
}
