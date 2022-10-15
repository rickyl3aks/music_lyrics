import { useState, useEffect } from "react";

export const GetApi = () => {
  const [lyrics, setLyrics] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState<unknown>();

  const getLyrics = async () => {
    try {
      const res = await fetch(
        `https://api.codetabs.com/v1/proxy/?quest=api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_MUSIXMATCH_KEY}`
      );
      const tracks = await res.json();
      setIsLoading(false);
      setLyrics({
        track_list: tracks.message.body.track_list,
        heading: "Top 10 Tracks",
      });
    } catch (error) {
      setIsError(error);
    }
  };

  useEffect(() => {
    getLyrics();
  }, []);

  return { lyrics, isLoading, isError };
};
