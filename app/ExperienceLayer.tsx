"use client";

import { useEffect } from "react";

export function ExperienceLayer() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("motion-ready");
    const revealTargets = document.querySelectorAll(".section, .situationsSection, .decisionRoomSection, .metrics, .expertise, .assetBand, .contactSection");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.08, rootMargin: "0px 0px -40px" },
    );
    revealTargets.forEach((target) => observer.observe(target));

    const updateProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      root.style.setProperty("--page-progress", String(progress));
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateProgress);
      root.classList.remove("motion-ready");
    };
  }, []);

  return <div className="scrollProgress" aria-hidden="true"><span /></div>;
}
