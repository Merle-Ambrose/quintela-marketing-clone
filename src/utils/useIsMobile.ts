import { useEffect, useState } from "react";

export default function useIsMobile(breakpoint = 1080): boolean {
  const [isMobile, setIsMobile] = useState<boolean>(
    () => window.innerWidth <= breakpoint,
  );

  useEffect(() => {
    function onResize() {
      setIsMobile(window.innerWidth <= breakpoint);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [breakpoint]);

  return isMobile;
}
