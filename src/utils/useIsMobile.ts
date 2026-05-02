import { useEffect, useRef, useState } from "react";

// Safe default for missing CSS variable
const FALLBACK_MOBILE_BREAKPOINT = 1080;

function getCssMobileBreakpoint(): number {
  // During SSR there is no window or document, so use fallback
  if (typeof window === "undefined" || typeof document === "undefined") {
    return FALLBACK_MOBILE_BREAKPOINT;
  }

  // Read the breakpoint from :root CSS variable set in App.scss
  const rootStyles = window.getComputedStyle(document.documentElement);
  const rawValue = rootStyles.getPropertyValue("--bp-mobile").trim();

  // parseFloat handles values like "1080px" and returns 1080
  const parsedValue = Number.parseFloat(rawValue);

  // If CSS value is missing or invalid, keep behavior predictable
  return Number.isFinite(parsedValue)
    ? parsedValue
    : FALLBACK_MOBILE_BREAKPOINT;
}

export default function useIsMobile(breakpoint?: number): boolean {
  // Cache the CSS-derived breakpoint in a ref so getComputedStyle runs at most
  // once per hook instance rather than on every render
  const cssBreakpointRef = useRef<number | null>(null);
  if (breakpoint === undefined && cssBreakpointRef.current === null) {
    cssBreakpointRef.current = getCssMobileBreakpoint();
  }
  const resolvedBreakpoint = breakpoint ?? cssBreakpointRef.current!;

  // Guard for where window may not exist
  const getIsMobile = (bp: number) =>
    typeof window !== "undefined" && window.innerWidth <= bp;

  // Compute initial value lazily once on mount
  const [isMobile, setIsMobile] = useState<boolean>(() =>
    getIsMobile(resolvedBreakpoint),
  );

  useEffect(() => {
    function onResize() {
      setIsMobile(getIsMobile(resolvedBreakpoint));
    }

    // Run once so state stays in sync when breakpoint changes.
    onResize();
    if (typeof window === "undefined") return;

    // Keep state updated as viewport width changes
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [resolvedBreakpoint]);

  return isMobile;
}
