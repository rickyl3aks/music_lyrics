export interface lyric {
  message: {
    body: {
      lyrics: {
        lyrics_body?: string;
        explicit?: number | any;
      };
    };
  };
}