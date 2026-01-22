"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    const handleTouchEnd = () => setIsDragging(false);

    if (isDragging) {
      document.addEventListener("mouseup", handleMouseUp);
      document.addEventListener("touchend", handleTouchEnd);
      return () => {
        document.removeEventListener("mouseup", handleMouseUp);
        document.removeEventListener("touchend", handleTouchEnd);
      };
    }
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-96 md:h-[500px] rounded-lg overflow-hidden cursor-col-resize select-none"
      onMouseMove={handleMouseMove}
      onMouseDown={() => setIsDragging(true)}
      onTouchMove={handleTouchMove}
      onTouchStart={() => setIsDragging(true)}
    >
      <div className="absolute inset-0 bg-slate-200 dark:bg-slate-700">
        {afterImage ? (
          <Image
            src={afterImage}
            alt="After construction"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 80vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-400">
            After Image
          </div>
        )}
      </div>

      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        {beforeImage ? (
          <Image
            src={beforeImage}
            alt="Before construction"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 80vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-400">
            Before Image
          </div>
        )}
      </div>

      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10"
        style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
          <div className="flex space-x-1">
            <div className="w-1 h-6 bg-slate-400 rounded" />
            <div className="w-1 h-6 bg-slate-400 rounded" />
          </div>
        </div>
      </div>

      <div className="absolute top-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg font-semibold text-sm">
        {beforeLabel}
      </div>
      <div className="absolute top-4 right-4 bg-black/70 text-white px-4 py-2 rounded-lg font-semibold text-sm">
        {afterLabel}
      </div>
    </div>
  );
}
