import { useMotionValueEvent, useScroll, useMotionValue, motion } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { useTheme } from "../ThemeContext";

function getCarWidth() {
  if (typeof window === "undefined") return 120;
  return window.innerWidth < 640 ? 72 : window.innerWidth < 1024 ? 100 : 120;
}

export default function Car() {
  const directionRef = useRef<"down" | "up">("down");
  const [direction, setDirection] = useState<"down" | "up">("down");
  const prevYRef = useRef(0);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [carWidth, setCarWidth] = useState(getCarWidth);
  const { scrollY } = useScroll();
  const { scrollYProgress } = useScroll();
  const carX = useMotionValue(0);

  const handleResize = useCallback(() => setCarWidth(getCarWidth()), []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const maxX = Math.max(0, window.innerWidth - getCarWidth());
    carX.set(progress * maxX);
  });

  useMotionValueEvent(scrollY, "change", (y) => {
    const dir = y > prevYRef.current ? "down" : y < prevYRef.current ? "up" : directionRef.current;
    if (dir !== directionRef.current) {
      directionRef.current = dir;
      setDirection(dir);
    }
    prevYRef.current = y;
  });

  const lineColor = isDark ? "#475569" : "#cbd5e1";
  const bodyColor = isDark ? "#94a3b8" : "#475569";
  const roofColor = isDark ? "#64748b" : "#334155";
  const windowColor = isDark ? "#475569" : "#1e293b";
  const wheelOuter = isDark ? "#1e293b" : "#0f172a";
  const wheelInner = isDark ? "#475569" : "#64748b";
  const accentGlow = isDark ? "#34d399" : "#059669";

  return (
    <div
      className="fixed top-0 left-0 z-50 pointer-events-none"
      style={{ height: carWidth * 0.4, width: "100vw" }}
    >
      <svg
        width="100%"
        height="4"
        viewBox="0 0 100 4"
        preserveAspectRatio="none"
        className="absolute bottom-0"
      >
        <line x1="0" y1="2" x2="100" y2="2" stroke={lineColor} strokeWidth="2" strokeDasharray="8 6" />
      </svg>
      <motion.div
        className="absolute bottom-0"
        style={{
          x: carX,
          scaleX: direction === "up" ? -1 : 1,
        }}
      >
        <svg
          width={carWidth}
          height={carWidth * 0.4}
          viewBox="0 0 120 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="15" y="14" width="65" height="16" rx="4" fill={bodyColor} />
          <rect x="25" y="6" width="40" height="12" rx="3" fill={roofColor} />
          <rect x="42" y="10" width="10" height="8" rx="1" fill={windowColor} />
          <rect x="80" y="14" width="28" height="16" rx="4" fill={bodyColor} />
          <circle cx="28" cy="36" r="8" fill={wheelOuter} />
          <circle cx="28" cy="36" r="5" fill={wheelInner} />
          <circle cx="88" cy="36" r="8" fill={wheelOuter} />
          <circle cx="88" cy="36" r="5" fill={wheelInner} />
          <rect x="32" y="24" width="6" height="6" rx="1" fill={accentGlow} />
          <rect x="50" y="24" width="6" height="6" rx="1" fill={accentGlow} />
        </svg>
      </motion.div>
    </div>
  );
}
