"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import type { DesktopItem, Position } from "../lib/types";
import { useDrag } from "../lib/useDrag";

const ICON_SRC: Record<DesktopItem["kind"], string> = {
  folder: "/images/folder.png",
  file: "/images/file.png",
};

interface DesktopIconProps {
  item: DesktopItem;
  selected: boolean;
  onSelect: () => void;
  onOpen: () => void;
  /** "desktop" = absolutely positioned & draggable; "grid" = static in flow. */
  mode?: "desktop" | "grid";
  position?: Position;
  onMove?: (pos: Position) => void;
}

export default function DesktopIcon({
  item,
  selected,
  onSelect,
  onOpen,
  mode = "desktop",
  position,
  onMove,
}: DesktopIconProps) {
  const posRef = useRef<Position>(position ?? { x: 0, y: 0 });
  useEffect(() => {
    if (position) posRef.current = position;
  }, [position]);

  const { dragging, onPointerDown, movedRef } = useDrag({
    disabled: mode !== "desktop",
    getPosition: () => posRef.current,
    onDragStart: onSelect,
    onDrag: (p) => onMove?.(p),
  });

  const handlePointerDown = (e: React.PointerEvent) => {
    onSelect();
    if (mode === "desktop") onPointerDown(e);
  };

  const handleClick = () => {
    if (movedRef.current) return; // ignore the click that ends a drag
    onSelect();
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    // On touch there's no dblclick, so a clean tap opens.
    if (e.pointerType === "touch" && !movedRef.current) onOpen();
  };

  const isFolder = item.kind === "folder";
  const isGrid = mode === "grid";

  // Icon-background highlight: subtle white on the dark desktop, soft gray on a
  // light folder window.
  const highlight = selected
    ? isGrid
      ? "bg-black/10"
      : "bg-white/15"
    : isGrid
      ? "hover:bg-black/[0.05]"
      : "hover:bg-white/[0.07]";

  // Label color: blue pill when selected; otherwise black inside folder windows
  // and white-with-shadow on the wallpaper.
  const labelColor = selected
    ? "bg-[#0a64f6] text-white"
    : isGrid
      ? "text-[#1d1d1f]"
      : "text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.6)]";

  return (
    <button
      type="button"
      data-icon-id={item.id}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onClick={handleClick}
      onDoubleClick={onOpen}
      aria-label={`${item.name} ${item.kind}`}
      className={[
        "group flex w-[88px] flex-col items-center gap-1 rounded-lg p-1.5",
        "cursor-default select-none text-center outline-none",
        mode === "desktop" ? "absolute" : "relative",
        dragging ? "z-50" : "",
        highlight,
      ].join(" ")}
      style={
        mode === "desktop" && position
          ? { left: position.x, top: position.y, touchAction: "none" }
          : { touchAction: "none" }
      }
    >
      <Image
        src={ICON_SRC[item.kind]}
        alt=""
        width={isFolder ? 60 : 52}
        height={isFolder ? 60 : 52}
        draggable={false}
        className="pointer-events-none drop-shadow-md"
        loading="eager"
      />
      <span
        className={[
          "max-w-full break-words [overflow-wrap:anywhere]",
          "rounded px-1.5 text-[13px] font-medium leading-tight",
          labelColor,
        ].join(" ")}
      >
        {item.name}
      </span>
    </button>
  );
}
