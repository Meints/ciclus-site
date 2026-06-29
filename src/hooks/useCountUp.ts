"use client";
import { useEffect, useState } from "react";

export function useCountUp(target: number, active: boolean, duration = 1600) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!active) return;
    const step = 16;
    const increment = target / (duration / step);
    let val = 0;
    const timer = setInterval(() => {
      val = Math.min(val + increment, target);
      setCurrent(val);
      if (val >= target) clearInterval(timer);
    }, step);
    return () => clearInterval(timer);
  }, [active, target, duration]);

  return Number.isInteger(target) ? Math.round(current) : parseFloat(current.toFixed(1));
}
