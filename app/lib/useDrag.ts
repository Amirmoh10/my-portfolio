"use client";

import { useCallback, useRef, useState } from "react";
import type { Position } from "./types";

interface UseDragOptions {
  /** Returns the current committed position (top-left) of the dragged element. */
  getPosition: () => Position;
  /** Called on every move with the new absolute position. */
  onDrag?: (pos: Position) => void;
  /** Called once when a drag actually begins (after threshold). */
  onDragStart?: () => void;
  /** Called on release with the final position. */
  onDragEnd?: (pos: Position) => void;
  /** Pixels of movement before a press becomes a drag. */
  threshold?: number;
  /** Disable dragging entirely. */
  disabled?: boolean;
}

/**
 * Pointer-based dragging (mouse + touch) with a movement threshold so a press
 * that doesn't move is still treated as a click/double-click by the element.
 */
export function useDrag({
  getPosition,
  onDrag,
  onDragStart,
  onDragEnd,
  threshold = 4,
  disabled = false,
}: UseDragOptions) {
  const [dragging, setDragging] = useState(false);
  // True if the most recent interaction moved past the threshold — lets the
  // consumer suppress the click that fires after a drag.
  const movedRef = useRef(false);

  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      if (disabled || e.button !== 0) return;

      const startPointer = { x: e.clientX, y: e.clientY };
      const startPos = getPosition();
      movedRef.current = false;
      let started = false;

      const handleMove = (ev: PointerEvent) => {
        const dx = ev.clientX - startPointer.x;
        const dy = ev.clientY - startPointer.y;

        if (!started && Math.hypot(dx, dy) < threshold) return;
        if (!started) {
          started = true;
          movedRef.current = true;
          setDragging(true);
          onDragStart?.();
        }
        onDrag?.({ x: startPos.x + dx, y: startPos.y + dy });
      };

      const handleUp = (ev: PointerEvent) => {
        window.removeEventListener("pointermove", handleMove);
        window.removeEventListener("pointerup", handleUp);
        if (started) {
          const dx = ev.clientX - startPointer.x;
          const dy = ev.clientY - startPointer.y;
          setDragging(false);
          onDragEnd?.({ x: startPos.x + dx, y: startPos.y + dy });
        }
      };

      window.addEventListener("pointermove", handleMove);
      window.addEventListener("pointerup", handleUp);
    },
    [disabled, getPosition, onDrag, onDragStart, onDragEnd, threshold],
  );

  return { dragging, onPointerDown, movedRef };
}
