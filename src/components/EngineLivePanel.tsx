"use client";
import { useEffect, useState } from "react";

const STREAMS = [
  "Syncing finance + delivery workstreams…",
  "Reconciling CRM, Notion, and SQL snapshots…",
  "Flagging operational risk in escalation queue…",
  "Enriching playbook with autonomous agent notes…",
  "Publishing updated command dashboard…"
];

export default function EngineLivePanel() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIdx(i => (i + 1) % STREAMS.length), 1600);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="rounded-2xl border p-6 shadow-sm bg-neutral-950 text-neutral-50">
      <div className="text-sm opacity-80 mb-2">Engine</div>
      <div className="font-mono text-base">{STREAMS[idx]}</div>
    </div>
  );
}


