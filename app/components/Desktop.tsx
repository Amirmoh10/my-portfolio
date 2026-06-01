"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type { DesktopItem, Position } from "../lib/types";
import { DESKTOP_ITEMS } from "../lib/data";
import { WindowProvider, useWindows } from "../lib/windowStore";
import DesktopIcon from "./DesktopIcon";
import Window from "./Window";
import FolderView from "./FolderView";
import FileView from "./FileView";

function DesktopSurface() {
  const { windows, focusedId, open, close } = useWindows();
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // Per-icon positions, seeded from the data, so they can be dragged.
  const [positions, setPositions] = useState<Record<string, Position>>(() =>
    Object.fromEntries(
      DESKTOP_ITEMS.map((it) => [it.id, it.position ?? { x: 40, y: 40 }]),
    ),
  );

  const itemsById = useMemo(
    () => new Map(DESKTOP_ITEMS.map((it) => [it.id, it])),
    [],
  );

  const moveIcon = useCallback((id: string, pos: Position) => {
    setPositions((prev) => ({ ...prev, [id]: pos }));
  }, []);

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
      {/* Desktop icons */}
      {DESKTOP_ITEMS.map((item: DesktopItem) => (
        <DesktopIcon
          key={item.id}
          item={item}
          mode="desktop"
          position={positions[item.id]}
          selected={selectedId === item.id}
          onSelect={() => setSelectedId(item.id)}
          onOpen={() => open(item)}
          onMove={(pos) => moveIcon(item.id, pos)}
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
