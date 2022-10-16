import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export const GetApi = (song?: unknown) => {
  const [lyrics, setLyrics] = useState<any>();
  const [songDetails, setSongDetails] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState<any>();
  const trackName = useSelector((state: any) => state.track.track);

  useEffect(() => {
    const getLyrics = async (): Promise<void> => {
      try {
        const res = await fetch(
          `https://api.codetabs.com/v1/proxy/?quest=api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_MUSIXMATCH_KEY}`
        );
        const secondRes = await fetch(
          `https://api.codetabs.com/v1/proxy/?quest=api.musixmatch.com/ws/1.1/track.search?q_track=${trackName}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MUSIXMATCH_KEY}`
        );
        const tracks = await res.json();
        const dataTrack = await secondRes.json();
        setIsLoading(false);
        setLyrics({
          track_list: tracks.message.body.track_list,
          heading: "Top 10 Tracks",
        });
        setSongDetails(dataTrack.message.body.track_list);
      } catch (error) {
        setIsError(error);
      }
    };
    getLyrics();
  }, [trackName]);

  return { lyrics, songDetails, isLoading, isError };
};
