import { useState, useEffect } from "react";

export const Get_api = () => {
  const [lyrics, setLyrics] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState<unknown>();

  const get_lyrics = async () => {
    try {
      const res = await fetch(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_MUSIXMATCH_KEY}`
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
    get_lyrics();
  }, []);

  return { lyrics, isLoading, isError };
};
