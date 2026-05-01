import { useEffect, useState } from "react";

export default function useIsMobile(breakpoint: number = 1080): boolean {
  // Guard for where window may not exist
  const getIsMobile = (bp: number) =>
    typeof window !== "undefined" && window.innerWidth <= bp;

  // Compute initial value lazily once on mount
  const [isMobile, setIsMobile] = useState<boolean>(() =>
    getIsMobile(breakpoint),
  );

  useEffect(() => {
    function onResize() {
      setIsMobile(getIsMobile(breakpoint));
    }

    // Sync immediately when breakpoint changes, without waiting for a resize
    onResize();
    if (typeof window === "undefined") return;

    // Keep state updated as viewport width changes
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [breakpoint]);

  return isMobile;
}
