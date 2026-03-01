"use client";

import ReactLenis from "@studio-freight/react-lenis";
import { ReactNode } from "react";

export function SmoothScrollProvider({ children }: { children: any }) {
  return (
    <ReactLenis root>
      {children}
    </ReactLenis>
  );
}
