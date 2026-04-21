import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Always jump to the top on any navigation. Also set history.scrollRestoration
// to 'manual' while mounted so the browser doesn't try to restore positions.
export default function ScrollToTop() {
  const { key } = useLocation();

  useEffect(() => {
    // set manual restoration while mounted
    let previous;
    try {
      previous = window.history.scrollRestoration;
      window.history.scrollRestoration = "manual";
    } catch (e) {
      // ignore
    }

    return () => {
      try {
        if (previous) window.history.scrollRestoration = previous;
      } catch (e) {
        // ignore
      }
    };
  }, []);

  useEffect(() => {
    const root = document.documentElement || document.body;
    const prev = root.style.scrollBehavior;
    try {
      root.style.scrollBehavior = "auto";
      window.scrollTo(0, 0);
    } finally {
      setTimeout(() => {
        root.style.scrollBehavior = prev || "";
      }, 0);
    }
  }, [key]);

  return null;
}
