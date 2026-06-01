"use client";

import {
  createContext,
  useContext,
  useReducer,
  useCallback,
  useMemo,
  type ReactNode,
} from "react";
import type { DesktopItem, WindowState } from "./types";

interface WindowStoreState {
  windows: WindowState[];
  /** Next z-index to assign when focusing/opening. */
  nextZ: number;
}

type Action =
  | { type: "OPEN"; item: DesktopItem }
  | { type: "CLOSE"; id: string }
  | { type: "FOCUS"; id: string }
  | { type: "MOVE"; id: string; x: number; y: number };

/** Cascade offset so stacked windows don't perfectly overlap. */
const CASCADE = 28;

function openPosition(count: number) {
  // Anchor near the upper-left third, cascading down-right per open window.
  const base = { x: 180, y: 90 };
  const step = count % 6;
  return { x: base.x + step * CASCADE, y: base.y + step * CASCADE };
}

function reducer(state: WindowStoreState, action: Action): WindowStoreState {
  switch (action.type) {
    case "OPEN": {
      const existing = state.windows.find((w) => w.id === action.item.id);
      if (existing) {
        // Already open → just bring to front.
        return reducer(state, { type: "FOCUS", id: existing.id });
      }
      const { x, y } = openPosition(state.windows.length);
      const win: WindowState = {
        id: action.item.id,
        item: action.item,
        kind: action.item.kind,
        title: action.item.name,
        x,
        y,
        z: state.nextZ,
      };
      return { windows: [...state.windows, win], nextZ: state.nextZ + 1 };
    }
    case "CLOSE":
      return {
        ...state,
        windows: state.windows.filter((w) => w.id !== action.id),
      };
    case "FOCUS": {
      const target = state.windows.find((w) => w.id === action.id);
      if (!target || target.z === state.nextZ - 1) return state; // already on top
      return {
        windows: state.windows.map((w) =>
          w.id === action.id ? { ...w, z: state.nextZ } : w,
        ),
        nextZ: state.nextZ + 1,
      };
    }
    case "MOVE":
      return {
        ...state,
        windows: state.windows.map((w) =>
          w.id === action.id ? { ...w, x: action.x, y: action.y } : w,
        ),
      };
    default:
      return state;
  }
}

interface WindowContextValue {
  windows: WindowState[];
  /** The id of the front-most (highest z) window, or null. */
  focusedId: string | null;
  open: (item: DesktopItem) => void;
  close: (id: string) => void;
  focus: (id: string) => void;
  move: (id: string, x: number, y: number) => void;
}

const WindowContext = createContext<WindowContextValue | null>(null);

export function WindowProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { windows: [], nextZ: 1 });

  const open = useCallback((item: DesktopItem) => dispatch({ type: "OPEN", item }), []);
  const close = useCallback((id: string) => dispatch({ type: "CLOSE", id }), []);
  const focus = useCallback((id: string) => dispatch({ type: "FOCUS", id }), []);
  const move = useCallback(
    (id: string, x: number, y: number) => dispatch({ type: "MOVE", id, x, y }),
    [],
  );

  const focusedId = useMemo(() => {
    if (state.windows.length === 0) return null;
    return state.windows.reduce((top, w) => (w.z > top.z ? w : top)).id;
  }, [state.windows]);

  const value = useMemo(
    () => ({ windows: state.windows, focusedId, open, close, focus, move }),
    [state.windows, focusedId, open, close, focus, move],
  );

  return <WindowContext.Provider value={value}>{children}</WindowContext.Provider>;
}

export function useWindows() {
  const ctx = useContext(WindowContext);
  if (!ctx) throw new Error("useWindows must be used within a WindowProvider");
  return ctx;
}
