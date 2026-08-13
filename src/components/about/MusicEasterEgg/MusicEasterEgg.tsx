"use client";

import { Music, Pause, Play, SkipBack, SkipForward } from "lucide-react";
import { useState } from "react";
import { playlist } from "@/data/playlist";
import { useSessionStorage } from "@/hooks/useSessionStorage";
import { Equalizer } from "./Equalizer";
import { StatsSpiderChart } from "../StatsSpiderChart";

function getEmbedUrl(track: { link?: string; embedUrl?: string }) {
  if (track.embedUrl) return track.embedUrl;
  if (!track.link) return null;

  try {
    const url = new URL(track.link);
    if (url.hostname.includes("youtu.be")) {
      const videoId = url.pathname.replace("/", "");
      return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
    }
    if (url.hostname.includes("youtube.com")) {
      const videoId = url.searchParams.get("v");
      return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
    }
    if (url.hostname.includes("open.spotify.com")) {
      const parts = url.pathname.split("/").filter(Boolean);
      if (parts.length >= 2) return `https://open.spotify.com/embed/${parts[0]}/${parts[1]}`;
    }
  } catch {
    return null;
  }

  return null;
}

export function MusicEasterEgg() {
  const [open, setOpen] = useSessionStorage("audio-archive-open", false);
  const [playing, setPlaying] = useState(false);
  const [trackIndex, setTrackIndex] = useState(0);
  const activeTrack = playlist[trackIndex];
  const embedUrl = getEmbedUrl(activeTrack);

  function previousTrack() {
    setTrackIndex((current) => (current === 0 ? playlist.length - 1 : current - 1));
    setPlaying(false);
  }

  function nextTrack() {
    setTrackIndex((current) => (current + 1) % playlist.length);
    setPlaying(false);
  }

  return (
    <div className="music-easter-egg">
      <div className="music-stats-row">
        <div className="music-player panel">
          <div className="music-player-top">
            <div className="album-cover" aria-label={`Cover placeholder for ${activeTrack.title}`}>
              {activeTrack.image ? <img src={activeTrack.image} alt={activeTrack.imageAlt ?? `${activeTrack.title} cover`} /> : <span>{activeTrack.title.slice(0, 2).toUpperCase()}</span>}
            </div>
            <span className="music-cast-icon" aria-hidden>
              <span />
            </span>
          </div>
          <div className="song-info">
            <h3>{activeTrack.title}</h3>
            <p>{activeTrack.artist}</p>
          </div>
          <div className="player-footer">
            <div className="player-controls" aria-label="Music controls">
              <button type="button" aria-label="Previous song" onClick={previousTrack}>
                <SkipBack size={16} />
              </button>
              <button type="button" aria-label={playing ? "Hide embedded player" : "Show embedded player"} onClick={() => setPlaying(!playing)} disabled={!embedUrl}>
                {playing ? <Pause size={16} /> : <Play size={16} />}
              </button>
              <button type="button" aria-label="Next song" onClick={nextTrack}>
                <SkipForward size={16} />
              </button>
              {playing ? <Equalizer /> : null}
            </div>
            {!embedUrl ? <p className="embed-note">No official embed available for this link.</p> : null}
            {activeTrack.link ? <a className="inline-link" href={activeTrack.link} target="_blank" rel="noreferrer">Open official link</a> : null}
          </div>
        </div>
        {playing && embedUrl ? (
          <div className="embedded-player music-embed-panel">
            <iframe
              title={`${activeTrack.title} official embedded player`}
              src={embedUrl}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        ) : null}
        <StatsSpiderChart />
      </div>
      <button className="frequency-trigger" type="button" onClick={() => setOpen(!open)} aria-expanded={open}>
        <Music size={16} aria-hidden />
        {open ? "ACCESS GRANTED // CLOSE AUDIO ARCHIVE" : "SIGNAL DETECTED // OPEN AUDIO ARCHIVE"}
      </button>
      {open ? (
        <div className="playlist-console panel">
          <header>
            <span>PERSONAL FREQUENCIES // PLAYLIST</span>
            <Equalizer />
          </header>
          {playlist.map((track, index) => (
            <button className={index === trackIndex ? "track active" : "track"} key={`${track.title}-${index}`} type="button" onClick={() => { setTrackIndex(index); setPlaying(false); }}>
              <span>{String(index + 1).padStart(2, "0")} // {track.title}</span>
              <span>{track.artist}</span>
            </button>
          ))}
          <footer>AUDIO ARCHIVE // {playlist.length.toString().padStart(2, "0")} TRACKS</footer>
        </div>
      ) : null}
    </div>
  );
}
