"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { Position } from "../lib/types";
import { DESKTOP_ITEMS } from "../lib/data";
import { WindowProvider, useWindows } from "../lib/windowStore";
import { clamp, useViewportWidth, useViewportHeight } from "../lib/viewport";
import DesktopIcon from "./DesktopIcon";
import Window from "./Window";
import FolderView from "./FolderView";
import FileView from "./FileView";

const ICON_W = 88;
const ICON_H = 104;

function DesktopSurface() {
  const { windows, focusedId, open, close } = useWindows();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const width = useViewportWidth();
  const height = useViewportHeight();

  // Positions the user has dragged an icon to. An icon without an override
  // flows in the CSS grid below; one with an override is absolutely positioned.
  const [overrides, setOverrides] = useState<Record<string, Position>>({});

  // Keep every icon fully on-screen for the current viewport.
  const clampIcon = useCallback(
    (p: Position): Position => ({
      x: clamp(p.x, 0, Math.max(0, width - ICON_W)),
      y: clamp(p.y, 0, Math.max(0, height - ICON_H)),
    }),
    [width, height],
  );

  // Overrides, re-clamped to the current viewport so a dragged icon never ends
  // up off-screen after a resize.
  const clampedOverrides = useMemo(() => {
    const out: Record<string, Position> = {};
    for (const id in overrides) out[id] = clampIcon(overrides[id]);
    return out;
  }, [overrides, clampIcon]);

  const moveIcon = useCallback(
    (id: string, pos: Position) => {
      setOverrides((prev) => ({ ...prev, [id]: clampIcon(pos) }));
    },
    [clampIcon],
  );

  const itemsById = useMemo(
    () => new Map(DESKTOP_ITEMS.map((it) => [it.id, it])),
    [],
  );

  // Arrow-key selection: pick the nearest icon in the pressed direction. Icon
  // positions are read from the live DOM so this works whether an icon is
  // flowing in the grid or has been dragged to an absolute spot.
  const moveSelection = useCallback(
    (dir: "up" | "down" | "left" | "right") => {
      const rects: Record<string, Position> = {};
      gridRef.current
        ?.querySelectorAll<HTMLElement>("[data-icon-id]")
        .forEach((el) => {
          const id = el.dataset.iconId;
          if (!id) return;
          const r = el.getBoundingClientRect();
          rects[id] = { x: r.left, y: r.top };
        });

      const current = selectedId ? rects[selectedId] : null;
      if (!current) {
        setSelectedId(DESKTOP_ITEMS[0]?.id ?? null);
        return;
      }
      let best: { id: string; dist: number } | null = null;
      for (const it of DESKTOP_ITEMS) {
        if (it.id === selectedId) continue;
        const p = rects[it.id];
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
    [selectedId],
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

  const clearSelection = useCallback((e: React.PointerEvent) => {
    // Clicking empty desktop (or the grid gaps) clears selection.
    if (e.target === e.currentTarget) setSelectedId(null);
  }, []);

  return (
    <main
      onPointerDown={clearSelection}
      className="relative h-dvh w-dvw overflow-hidden"
    >
      {/* Desktop icons. Un-dragged icons flow in this CSS grid, so the server
          renders the final layout and there's no post-hydration flash; the
          grid also re-flows responsively on resize. A dragged icon carries a
          `position` override and is pulled out of flow (absolutely placed). */}
      <div
        ref={gridRef}
        onPointerDown={clearSelection}
        className="grid content-start justify-start gap-1 px-4 py-5"
        style={{ gridTemplateColumns: "repeat(auto-fill, 88px)" }}
      >
        {DESKTOP_ITEMS.map((item) => (
          <DesktopIcon
            key={item.id}
            item={item}
            mode="desktop"
            position={clampedOverrides[item.id]}
            selected={selectedId === item.id}
            onSelect={() => setSelectedId(item.id)}
            onOpen={() => open(item)}
            onMove={(p) => moveIcon(item.id, p)}
          />
        ))}
      </div>

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
