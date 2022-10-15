import { useEffect, useState } from "react";
import { TrackLyric } from "../../track_lyrics/TrackLyric";
import "./lyrics.css";

export const Lyrics = ({ track }: any) => {
  const [lyric, setLyric] = useState<any>();
  const [error, setError] = useState<unknown>();

  const track_id = async (id: string) => {
    try {
      const res = await fetch(
        `https://api.codetabs.com/v1/proxy/?quest=api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${id}&apikey=${process.env.REACT_APP_MUSIXMATCH_KEY}`
      );
      const data = await res.json();
      setLyric(data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <button className="btn" onClick={() => track_id(track)}>
        Get track lyrics
      </button>
    </div>
  );
};
