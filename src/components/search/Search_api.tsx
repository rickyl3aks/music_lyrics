import { useEffect, useState } from "react";

export const Search_api = (title: any) => {
  const [artist, setArtist] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState<unknown>();

  const get_api = async (title: unknown) => {
    try {
      const res = await fetch(
        `https://api.codetabs.com/v1/proxy/?quest=api.musixmatch.com/ws/1.1/track.search?q_track=${title}&apikey=${process.env.REACT_APP_MUSIXMATCH_KEY}`
      );
      const data = await res.json();
      setIsLoading(false);
      setArtist(data.message.body.track_list);
    } catch (error) {
      setIsError(error);
    }
  };

  useEffect(() => {
    get_api(title);
  }, [title]);

  return {
    artist,
    isLoading,
    isError,
  };
};
