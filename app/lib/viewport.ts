"use client";

import { useSyncExternalStore } from "react";

/** Clamp `value` into the inclusive range [min, max]. */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

function subscribe(cb: () => void) {
  window.addEventListener("resize", cb);
  return () => window.removeEventListener("resize", cb);
}

/**
 * Live viewport width/height via `useSyncExternalStore` — SSR-safe (server
 * snapshot is a desktop default) and free of set-state-in-effect.
 */
export function useViewportWidth(): number {
  return useSyncExternalStore(subscribe, () => window.innerWidth, () => 1024);
}

export function useViewportHeight(): number {
  return useSyncExternalStore(subscribe, () => window.innerHeight, () => 768);
}

const noopSubscribe = () => () => {};

/**
 * `false` during SSR and the hydration render, `true` afterwards. Lets us hold
 * off painting viewport-dependent UI until the real dimensions are known,
 * avoiding the post-hydration position flash. No effect / setState involved.
 */
export function useIsHydrated(): boolean {
  return useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );
}
