"use client";

import { useScrollProgress } from "@/hooks/use-scroll-progress";

export function ScrollProgress() {
  const progress = useScrollProgress();
  return (
    <div
      className="scroll-progress"
      style={{ width: `${progress}%` }}
    />
  );
}
