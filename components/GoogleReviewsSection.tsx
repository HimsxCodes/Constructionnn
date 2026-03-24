"use client";

import Script from "next/script";

export function GoogleReviewsSection() {
  return (
    <div className="w-full min-h-[400px] relative z-10">
      <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
      
      {/* 
        Elfsight widget is controlled via their dashboard, but we can use CSS filters 
        to force a dynamically adaptive dark mode when your theme switches to dark.
        The invert and hue-rotate will flip light backgrounds to dark, while keeping 
        the overall color hues roughly accurate.
       */}
      <div className="transition-all duration-300 dark:invert dark:hue-rotate-180 dark:contrast-100 dark:brightness-95">
        <div 
          className="elfsight-app-094142ca-c508-44c1-8bee-56231708cc2a" 
          data-elfsight-app-lazy="true"
        ></div>
      </div>
    </div>
  );
}
