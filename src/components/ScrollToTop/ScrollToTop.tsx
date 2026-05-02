import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Always jump to the top on any navigation. Also set history.scrollRestoration
// to 'manual' while mounted so the browser doesn't try to restore positions.
export default function ScrollToTop(): null {
  const { key } = useLocation();

  useEffect(() => {
    let previous: any;
    try {
      previous = (window as any).history.scrollRestoration;
      (window as any).history.scrollRestoration = "manual";
    } catch (e) {
      // ignore
    }

    return () => {
      try {
        if (previous) (window as any).history.scrollRestoration = previous;
      } catch (e) {
        // ignore
      }
    };
  }, []);

  useEffect(() => {
    const root = document.documentElement || document.body;
    // Save the current scrollBehavior so we can restore it after the jump
    const prev = (root as HTMLElement).style.scrollBehavior;
    let timeoutId: ReturnType<typeof setTimeout>;
    try {
      // Disable smooth scrolling so scrollTo is instant
      (root as HTMLElement).style.scrollBehavior = "auto";
      window.scrollTo(0, 0);
    } finally {
      // Restore scrollBehavior on the next tick after the scroll has been applied
      timeoutId = setTimeout(() => {
        (root as HTMLElement).style.scrollBehavior = prev || "";
      }, 0);
    }
    // Cancel the pending restore if the component unmounts
    // or key changes before the timeout fires
    return () => clearTimeout(timeoutId);
  }, [key]);

  return null;
}
