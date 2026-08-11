import { playlist } from "@/data/playlist";
import { Equalizer } from "./Equalizer";
import { Track } from "./Track";

export function Playlist() {
  return (
    <div className="playlist-console panel">
      <header>
        <span>PERSONAL FREQUENCIES // PLAYLIST</span>
        <Equalizer />
      </header>
      {playlist.map((track, index) => (
        <Track key={`${track.title}-${index}`} track={track} index={index} />
      ))}
      <footer>AUDIO ARCHIVE // {playlist.length.toString().padStart(2, "0")} TRACKS</footer>
    </div>
  );
}
