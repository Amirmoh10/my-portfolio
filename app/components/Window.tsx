"use client";

import { useEffect, useRef, type ReactNode } from "react";
import type { WindowState, Position } from "../lib/types";
import { useWindows } from "../lib/windowStore";
import { useDrag } from "../lib/useDrag";

interface WindowProps {
  win: WindowState;
  focused: boolean;
  children: ReactNode;
}

export default function Window({ win, focused, children }: WindowProps) {
  const { close, focus, move } = useWindows();
  const posRef = useRef<Position>({ x: win.x, y: win.y });
  useEffect(() => {
    posRef.current = { x: win.x, y: win.y };
  }, [win.x, win.y]);

  const { onPointerDown } = useDrag({
    getPosition: () => posRef.current,
    onDragStart: () => focus(win.id),
    onDrag: (p) => move(win.id, p.x, p.y),
  });

  return (
    <section
      role="dialog"
      aria-label={win.title}
      onPointerDown={() => focus(win.id)}
      className={[
        "absolute flex max-h-[80vh] w-[min(720px,92vw)] flex-col overflow-hidden",
        "rounded-xl border border-black/10 bg-white text-neutral-800",
        focused ? "shadow-2xl" : "shadow-lg",
        "max-sm:inset-x-2 max-sm:!left-2 max-sm:top-10 max-sm:!w-auto",
      ].join(" ")}
      style={{ left: win.x, top: win.y, zIndex: win.z }}
    >
      {/* Title bar — drag handle */}
      <header
        onPointerDown={onPointerDown}
        className="relative flex h-11 flex-none items-center border-b border-black/10 bg-[#f6f6f6] px-4"
        style={{ touchAction: "none" }}
      >
        <button
          type="button"
          aria-label={`Close ${win.title}`}
          onPointerDown={(e) => e.stopPropagation()}
          onClick={() => close(win.id)}
          className="group/close flex size-3.5 items-center justify-center rounded-full bg-[#ff6157] transition-colors hover:bg-[#ff4d42]"
        >
          <svg
            viewBox="0 0 12 12"
            className="size-2 opacity-0 transition-opacity group-hover/close:opacity-100"
            aria-hidden="true"
          >
            <path
              d="M3 3l6 6M9 3l-6 6"
              stroke="#7a0c00"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <span className="pointer-events-none absolute inset-x-0 mx-auto text-center text-[13px] font-semibold text-neutral-600">
          {win.title}
        </span>
      </header>

      {/* Body */}
      <div className="min-h-0 flex-1 overflow-auto">{children}</div>
    </section>
  );
}
