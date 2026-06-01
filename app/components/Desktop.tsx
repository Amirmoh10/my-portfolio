"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type { Position } from "../lib/types";
import { DESKTOP_ITEMS } from "../lib/data";
import { WindowProvider, useWindows } from "../lib/windowStore";
import { clamp, useViewportWidth, useViewportHeight } from "../lib/viewport";
import DesktopIcon from "./DesktopIcon";
import Window from "./Window";
import FolderView from "./FolderView";
import FileView from "./FileView";

/** Below this width we use a fitted grid; at/above it, the Figma desktop coords. */
const WIDE_MIN = 1024;
const ICON_W = 88;
const ICON_H = 104;

type Layout = "compact" | "wide";

/** Lay icons out in a top-anchored grid sized to the viewport (mobile/tablet). */
function computeGridLayout(width: number): Record<string, Position> {
  const cell = 92;
  const padX = 16;
  const padY = 20;
  const cols = Math.max(2, Math.floor((width - padX) / cell));
  const map: Record<string, Position> = {};
  DESKTOP_ITEMS.forEach((it, i) => {
    map[it.id] = {
      x: padX + (i % cols) * cell,
      y: padY + Math.floor(i / cols) * cell,
    };
  });
  return map;
}

/** Figma desktop coordinates (used on wide screens). */
const WIDE_BASE: Record<string, Position> = Object.fromEntries(
  DESKTOP_ITEMS.map((it) => [it.id, it.position ?? { x: 40, y: 40 }]),
);

function DesktopSurface() {
  const { windows, focusedId, open, close } = useWindows();
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const width = useViewportWidth();
  const height = useViewportHeight();
  const layout: Layout = width < WIDE_MIN ? "compact" : "wide";

  // Default positions for the current layout class.
  const base = useMemo(
    () => (layout === "wide" ? WIDE_BASE : computeGridLayout(width)),
    [layout, width],
  );

  // User drags are stored PER layout class, so a desktop arrangement never
  // leaks into the mobile/tablet layout (and vice-versa).
  const [overrides, setOverrides] = useState<Record<Layout, Record<string, Position>>>(
    { compact: {}, wide: {} },
  );

  // Keep every icon fully on-screen for the current viewport.
  const clampIcon = useCallback(
    (p: Position): Position => ({
      x: clamp(p.x, 0, Math.max(0, width - ICON_W)),
      y: clamp(p.y, 0, Math.max(0, height - ICON_H)),
    }),
    [width, height],
  );

  const positions = useMemo(() => {
    const active = overrides[layout];
    const out: Record<string, Position> = {};
    for (const it of DESKTOP_ITEMS) {
      out[it.id] = clampIcon(active[it.id] ?? base[it.id]);
    }
    return out;
  }, [overrides, layout, base, clampIcon]);

  const moveIcon = useCallback(
    (id: string, pos: Position) => {
      const clamped = clampIcon(pos);
      setOverrides((prev) => ({
        ...prev,
        [layout]: { ...prev[layout], [id]: clamped },
      }));
    },
    [layout, clampIcon],
  );

  const itemsById = useMemo(
    () => new Map(DESKTOP_ITEMS.map((it) => [it.id, it])),
    [],
  );

  // Arrow-key selection: pick the nearest icon in the pressed direction.
  const moveSelection = useCallback(
    (dir: "up" | "down" | "left" | "right") => {
      const current = selectedId ? positions[selectedId] : null;
      if (!current) {
        setSelectedId(DESKTOP_ITEMS[0]?.id ?? null);
        return;
      }
      let best: { id: string; dist: number } | null = null;
      for (const it of DESKTOP_ITEMS) {
        if (it.id === selectedId) continue;
        const p = positions[it.id];
        if (!p) continue;
        const dx = p.x - current.x;
        const dy = p.y - current.y;
        const ok =
          (dir === "right" && dx > 0) ||
          (dir === "left" && dx < 0) ||
          (dir === "down" && dy > 0) ||
          (dir === "up" && dy < 0);
        if (!ok) continue;
        const dist = Math.hypot(dx, dy);
        if (!best || dist < best.dist) best = { id: it.id, dist };
      }
      if (best) setSelectedId(best.id);
    },
    [selectedId, positions],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      // Close the front-most window: Escape or Cmd/Ctrl+W.
      if (
        (e.key === "Escape" || ((e.metaKey || e.ctrlKey) && e.key === "w")) &&
        focusedId
      ) {
        e.preventDefault();
        close(focusedId);
        return;
      }
      if (e.key === "Enter" && selectedId) {
        e.preventDefault();
        const item = itemsById.get(selectedId);
        if (item) open(item);
        return;
      }
      const map: Record<string, "up" | "down" | "left" | "right"> = {
        ArrowUp: "up",
        ArrowDown: "down",
        ArrowLeft: "left",
        ArrowRight: "right",
      };
      if (map[e.key]) {
        e.preventDefault();
        moveSelection(map[e.key]);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [focusedId, selectedId, close, open, itemsById, moveSelection]);

  return (
    <main
      onPointerDown={(e) => {
        if (e.target === e.currentTarget) setSelectedId(null);
      }}
      className="relative h-dvh w-dvw overflow-hidden"
    >
      {/* Desktop icons — absolutely positioned (and draggable) on every
          viewport; layout adapts to compact vs. wide and is clamped on-screen. */}
      {DESKTOP_ITEMS.map((item) => (
        <DesktopIcon
          key={item.id}
          item={item}
          mode="desktop"
          position={positions[item.id]}
          selected={selectedId === item.id}
          onSelect={() => setSelectedId(item.id)}
          onOpen={() => open(item)}
          onMove={(p) => moveIcon(item.id, p)}
        />
      ))}

      {/* Open windows */}
      {windows.map((win) => (
        <Window key={win.id} win={win} focused={focusedId === win.id}>
          {win.kind === "folder" ? (
            <FolderView folder={win.item} />
          ) : (
            <FileView file={win.item} />
          )}
        </Window>
      ))}
    </main>
  );
}

export default function Desktop() {
  return (
    <WindowProvider>
      <DesktopSurface />
    </WindowProvider>
  );
}
