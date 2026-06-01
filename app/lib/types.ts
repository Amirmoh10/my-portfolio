export type ItemKind = "folder" | "file";

export interface Position {
  x: number;
  y: number;
}

/**
 * A node on the desktop tree. A `folder` has `children`; a `file` has markdown
 * `content`. Positions are only meaningful for top-level desktop items — items
 * inside a folder window are laid out in a grid.
 */
export interface DesktopItem {
  id: string;
  name: string;
  kind: ItemKind;
  /** Initial position on the desktop (top-level items only). */
  position?: Position;
  /** Child items (folders only). */
  children?: DesktopItem[];
  /** Raw markdown rendered as a README-style preview (files only). */
  content?: string;
}

/** An open window in the window manager. */
export interface WindowState {
  /** Unique window id (one per open item). */
  id: string;
  /** The desktop item this window represents. */
  item: DesktopItem;
  kind: ItemKind;
  title: string;
  x: number;
  y: number;
  /** Stacking order — higher is closer to the front. */
  z: number;
}
