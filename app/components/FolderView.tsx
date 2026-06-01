"use client";

import { useState } from "react";
import type { DesktopItem } from "../lib/types";
import { useWindows } from "../lib/windowStore";
import DesktopIcon from "./DesktopIcon";

export default function FolderView({ folder }: { folder: DesktopItem }) {
  const { open } = useWindows();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const children = folder.children ?? [];

  return (
    <div
      onPointerDown={(e) => {
        // Clicking empty space inside the folder clears selection.
        if (e.target === e.currentTarget) setSelectedId(null);
      }}
      className="grid grid-cols-[repeat(auto-fill,minmax(110px,1fr))] gap-2 p-5"
    >
      {children.length === 0 && (
        <p className="col-span-full p-6 text-center text-sm text-neutral-400">
          This folder is empty.
        </p>
      )}
      {children.map((child) => (
        <div key={child.id} className="flex justify-center">
          <DesktopIcon
            item={child}
            mode="grid"
            selected={selectedId === child.id}
            onSelect={() => setSelectedId(child.id)}
            onOpen={() => open(child)}
          />
        </div>
      ))}
    </div>
  );
}
