import type { DesktopItem } from "./types";

/**
 * Sample desktop tree. Content is placeholder for now — real project/article
 * data will replace it later. Markdown `content` is rendered README-style.
 */

const project1 = `# Aurora — Realtime Collaboration Engine

A low-latency, conflict-free collaborative editing engine powering live
multiplayer documents for **30k+ concurrent users**.

![Aurora preview](/images/wallpaper.png)

## Overview

Aurora is a CRDT-based sync layer that keeps every client eventually consistent
without a central lock. It ships as a tiny client SDK and a horizontally
scalable Rust backend.

## Highlights

- **Sub-50ms** edit propagation across regions
- Offline-first with automatic merge on reconnect
- End-to-end encrypted document channels
- Pluggable storage (Postgres, S3, Redis)

## Stack

\`TypeScript\` · \`Rust\` · \`WebSockets\` · \`Postgres\` · \`Redis\`

## Links

- [Live demo](https://example.com)
- [Source on GitHub](https://github.com)
`;

const project2 = `# Ledgerly — Developer-First Payments API

A payments platform that lets engineering teams integrate billing in an
afternoon, not a quarter.

![Ledgerly preview](/images/wallpaper.png)

## The problem

Most billing stacks force teams to model invoices, proration, and tax by hand.
Ledgerly abstracts all of it behind a single idempotent API.

## What I built

- Designed the **double-entry ledger** core for guaranteed balance integrity
- Built the webhook delivery system with exponential backoff + replay
- Shipped SDKs for Node, Python, and Go

## Results

> Cut median integration time from **3 weeks to 6 hours** across 200+ teams.

## Links

- [Documentation](https://example.com)
- [Case study](https://example.com)
`;

const project3 = `# Pulse — Observability for the Edge

Distributed tracing and metrics built for edge runtimes where traditional
agents can't run.

![Pulse preview](/images/wallpaper.png)

## Why

Edge functions are ephemeral and sandboxed — classic APM agents simply don't
fit. Pulse uses a zero-dependency, async-batched exporter that adds **< 1ms**
overhead per request.

## Features

1. OpenTelemetry-compatible spans
2. Tail-based sampling at the collector
3. Live flame graphs in the dashboard

## Stack

\`Go\` · \`OpenTelemetry\` · \`ClickHouse\` · \`Next.js\`

## Links

- [GitHub](https://github.com)
`;

const article1 = `# Designing Systems That Survive Their Authors

The best architectures aren't the cleverest — they're the ones a new engineer
can safely change six months later.

## The cost of cleverness

Every abstraction is a bet that the future will look like the past. Senior
engineering is mostly about **placing fewer, better bets**.

- Optimize for deletion, not just extension
- Make the right thing the easy thing
- Treat boundaries as contracts, not suggestions

## A rule of thumb

> If you can't explain a module to a teammate in two sentences, it's doing too
> much.

More to come on this topic.
`;

const article2 = `# What I Learned Scaling to a Billion Requests

Notes from operating a high-traffic API — the things no architecture diagram
ever tells you.

## Lessons

1. **Backpressure is a feature.** Failing fast beats failing slowly.
2. **Every retry is a small DDoS.** Add jitter, always.
3. **Observability before scale.** You can't fix what you can't see.

## The mindset shift

Reliability isn't a phase you finish — it's a budget you spend every release.
`;

const about = `# About Me

Hi, I'm **Amir Ghezala** — a full-stack software engineer who builds
thoughtful interfaces and scalable systems.

![Workspace](/images/wallpaper.png)

## What I do

I work across the stack, from pixel-level UI polish to distributed backend
infrastructure. I care about **craft, clarity, and shipping things that last**.

## Currently

- Building delightful, performance-obsessed web experiences
- Writing about systems design and engineering culture

## Find me

- [GitHub](https://github.com)
- [LinkedIn](https://linkedin.com)
- [Email](mailto:amirmghezala@gmail.com)
`;

export const DESKTOP_ITEMS: DesktopItem[] = [
  {
    id: "work",
    name: "Work",
    kind: "folder",
    position: { x: 1180, y: 90 },
    children: [
      { id: "work/aurora", name: "aurora.md", kind: "file", content: project1 },
      { id: "work/ledgerly", name: "ledgerly.md", kind: "file", content: project2 },
      { id: "work/pulse", name: "pulse.md", kind: "file", content: project3 },
    ],
  },
  {
    id: "writing",
    name: "Writing",
    kind: "folder",
    position: { x: 1180, y: 270 },
    children: [
      {
        id: "writing/systems",
        name: "surviving-systems.md",
        kind: "file",
        content: article1,
      },
      {
        id: "writing/scale",
        name: "billion-requests.md",
        kind: "file",
        content: article2,
      },
    ],
  },
  {
    id: "about",
    name: "about.md",
    kind: "file",
    position: { x: 60, y: 70 },
    content: about,
  },
];
