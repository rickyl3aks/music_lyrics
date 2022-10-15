import { useEffect, useState } from "react";
import { lyric } from "./modules";

export const TrackApi = (id: unknown) => {
  const [lyric, setLyric] = useState<lyric | any>();
  const [songDetails, setSongDetails] = useState<any>();
  const [loading, setIsLoading] = useState(true);
  const [error, setIsError] = useState<unknown>();

  const getApi = async (song: unknown) => {
    try {
      const res = await fetch(
        `https://api.codetabs.com/v1/proxy/?quest=api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${song}&apikey=${process.env.REACT_APP_MUSIXMATCH_KEY}`
      );
      const res_two = await fetch(
        `https://api.codetabs.com/v1/proxy/?quest=api.musixmatch.com/ws/1.1/track.get?track_id=${song}&apikey=${process.env.REACT_APP_MUSIXMATCH_KEY}`
      );
      const data = await res.json();
      const data_track = await res_two.json();
      setIsLoading(false);
      setSongDetails(data_track);
      setIsLoading(false);
      setLyric(data);
    } catch (error) {
      setIsError(error);
    }
  };

  useEffect(() => {
    getApi(id);
  }, [id]);

  return {
    lyric,
    songDetails,
    loading,
    error,
  };
};
