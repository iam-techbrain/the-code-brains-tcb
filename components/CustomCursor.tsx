"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  // Smooth trailing effect for outline circle
  useEffect(() => {
    let animationFrameId: number;
    const followCursor = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.25,
        y: prev.y + (position.y - prev.y) * 0.25,
      }));
      animationFrameId = requestAnimationFrame(followCursor);
    };
    animationFrameId = requestAnimationFrame(followCursor);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position]);

  // Hover detection over interactive elements
  useEffect(() => {
    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("button") ||
        target.closest("a") ||
        target.closest("input") ||
        target.closest(".nuvertos-card") ||
        target.closest("[role='button']")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mouseover", handleElementHover);
    return () => window.removeEventListener("mouseover", handleElementHover);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div
        className="custom-cursor-dot shadow-sm"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          opacity: isVisible ? 1 : 0,
        }}
      />
      <div
        className="custom-cursor-outline"
        style={{
          left: `${trailingPos.x}px`,
          top: `${trailingPos.y}px`,
          opacity: isVisible ? 1 : 0,
          width: isHovered ? "50px" : "36px",
          height: isHovered ? "50px" : "36px",
          borderColor: isHovered ? "#00A4E4" : "rgba(0, 164, 228, 0.4)",
          backgroundColor: isHovered ? "rgba(0, 164, 228, 0.08)" : "transparent",
        }}
      />
    </>
  );
}
