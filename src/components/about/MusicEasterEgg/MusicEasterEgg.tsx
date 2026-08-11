"use client";

import { Music } from "lucide-react";
import { useSessionStorage } from "@/hooks/useSessionStorage";
import { Playlist } from "./Playlist";

export function MusicEasterEgg() {
  const [open, setOpen] = useSessionStorage("audio-archive-open", false);
  return (
    <div className="music-easter-egg">
      <button className="frequency-trigger" type="button" onClick={() => setOpen(!open)} aria-expanded={open}>
        <Music size={16} aria-hidden />
        {open ? "ACCESS GRANTED // CLOSE AUDIO ARCHIVE" : "SIGNAL DETECTED // OPEN AUDIO ARCHIVE"}
      </button>
      {open ? <Playlist /> : null}
    </div>
  );
}
