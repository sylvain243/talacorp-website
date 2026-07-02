"use client";

import { useEffect, useRef, useState } from "react";
import TopBar from "./TopBar";
import Header from "./Header";

export default function SiteHeader() {
  const topBarRef = useRef<HTMLDivElement>(null);
  const headerWrapRef = useRef<HTMLDivElement>(null);
  const [pinned, setPinned] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const topBar = topBarRef.current;
    const headerWrap = headerWrapRef.current;
    if (!topBar || !headerWrap) return;

    const updatePinned = () => {
      const topBarBottom = topBar.getBoundingClientRect().bottom;
      setPinned(topBarBottom <= 0);
    };

    const measure = () => setHeaderHeight(headerWrap.offsetHeight);
    measure();

    updatePinned();
    window.addEventListener("scroll", updatePinned, { passive: true });
    window.addEventListener("resize", () => {
      measure();
      updatePinned();
    });

    const ro = new ResizeObserver(() => {
      measure();
      updatePinned();
    });
    ro.observe(headerWrap);

    return () => {
      window.removeEventListener("scroll", updatePinned);
      window.removeEventListener("resize", measure);
      ro.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={topBarRef} data-topbar>
        <TopBar />
      </div>
      <div
        ref={headerWrapRef}
        data-header-wrap
        className={pinned ? "fixed left-0 right-0 top-0 z-50 px-4 py-2 sm:px-6" : "bg-navy"}
      >
        <Header pinned={pinned} />
      </div>
      {pinned && <div aria-hidden="true" style={{ height: headerHeight }} />}
    </>
  );
}
