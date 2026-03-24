"use client";

import Script from "next/script";

export function GoogleReviewsSection() {
  return (
    <div className="w-full min-h-[400px]">
      <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
      <div 
        className="elfsight-app-094142ca-c508-44c1-8bee-56231708cc2a" 
        data-elfsight-app-lazy="true"
      ></div>
    </div>
  );
}
