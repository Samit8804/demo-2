"use client";

import { useMousePosition } from "@/hooks/use-mouse-position";

export function MouseGlow() {
  const { x, y } = useMousePosition();

  return (
    <div
      className="fixed pointer-events-none z-[1] hidden lg:block"
      style={{
        left: x - 200,
        top: y - 200,
        width: 400,
        height: 400,
        background: "radial-gradient(circle at center, rgba(234,179,8,0.12) 0%, transparent 70%)",
        transition: "left 0.3s ease-out, top 0.3s ease-out",
      }}
    />
  );
}
