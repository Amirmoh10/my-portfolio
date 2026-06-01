"use client";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { DesktopItem } from "../lib/types";

export default function FileView({ file }: { file: DesktopItem }) {
  return (
    <div className="markdown-body px-7 py-6">
      <Markdown
        remarkPlugins={[remarkGfm]}
        components={{
          // Render markdown images as plain <img> (sources are local/public or
          // remote sample URLs); next/image needs known dimensions we don't have.
          // eslint-disable-next-line @next/next/no-img-element
          img: (props) => <img {...props} alt={props.alt ?? ""} loading="lazy" />,
          a: (props) => <a {...props} target="_blank" rel="noopener noreferrer" />,
        }}
      >
        {file.content ?? ""}
      </Markdown>
    </div>
  );
}
