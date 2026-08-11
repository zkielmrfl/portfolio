import type { PlaylistTrack } from "@/types/playlist";

export function Track({ track, index }: { track: PlaylistTrack; index: number }) {
  const label = `${(index + 1).toString().padStart(2, "0")} // ${track.title} - ${track.artist}`;
  return track.link ? (
    <a className="track" href={track.link} target="_blank" rel="noreferrer" aria-label={`Open ${track.title} by ${track.artist}`}>
      <span>{label}</span>
    </a>
  ) : (
    <div className="track"><span>{label}</span></div>
  );
}
