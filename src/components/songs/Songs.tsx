import { Link, Route, Routes } from "react-router-dom";
import { GetApi } from "../api/GetApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompactDisc,
  faMusic,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { Lyrics } from "./lyrics/Lyrics";
import "./songs.css";
import { TrackLyric } from "../trackLyrics/TrackLyric";
import { Loader } from "../loader/Loader";
import { Search } from "../search/Search";
import { useSelector } from "react-redux";
import { SearchApi } from "../search/SearchApi";
import { TrackApi } from "../trackLyrics/TrackApi";

export const Songs = () => {
  const { lyrics, isLoading, isError } = GetApi();



  // const song_array: Array<string> = [
  //   "David Guetta feat. Bebe Rexha",
  //   "Coolio feat. L.V.",
  //   "Lewis Capaldi",
  //   "Sam Smith feat. Kim Petras",
  //   "Ed Sheeran",
  //   "Eliza Rose feat. Interplanetary Criminal",
  //   "Lizzo",
  //   "Cian Ducrot",
  //   "OneRepublic",
  //   "Harry Styles",
  // ];

  const limitText = (artist_name: string): string => {
    if (artist_name.length > 30) return artist_name.substring(0, 30) + "...";
    return artist_name;
  };

  if (isError) {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>
          There has been an error... Please, try again
        </h1>
      </div>
    );
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Search />
      <h1 className="page_title">Top 10 Tracks</h1>
      <div className="container">
        {!isLoading &&
          lyrics.track_list !== undefined &&
          lyrics.track_list.map((song: any) => {
            return (
              <div className="container_item" key={song.track.commontrack_id}>
                <details>
                  <summary className="title">
                    {limitText(song.track.artist_name)}
                  </summary>
                  <div className="box_container">
                    <p>
                      <FontAwesomeIcon icon={faPlay} />
                      <strong> Track:</strong> {song.track.track_name}
                    </p>
                    <p>
                      <FontAwesomeIcon icon={faCompactDisc} />
                      <strong> Album:</strong> {song.track.album_name}
                    </p>
                    <p>
                      <FontAwesomeIcon icon={faMusic} />
                      <strong> Genre:</strong>
                      {song.track.primary_genres.music_genre_list[0] !==
                        undefined &&
                        song.track.primary_genres.music_genre_list[0]
                          .music_genre.music_genre_name}
                    </p>
                    <Link
                      to={`/track/${song.track.track_id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <Lyrics
                        track={song.track.track_id}
                        artist={song.track.artist_name}
                      />
                    </Link>
                  </div>
                </details>
              </div>
            );
          })}
        {/* {song_array.map((song: any) => {
          return (
            <div className="container_item">
              <details>
                <summary className="title">{song}</summary>
                <div className="box_container">
                  <p>
                    <FontAwesomeIcon icon={faPlay} />
                    <strong> Track:</strong> hello
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faCompactDisc} />
                    <strong> Album:</strong> Come on
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faMusic} />
                    <strong> Genre:</strong>
                    Pop
                  </p>
                  <Link to={`/track/${song}`}>
                    <Lyrics track={song} />
                  </Link>
                  <Routes>
                    <Route path={`/track/${song}`} element={<TrackLyric />} />
                  </Routes>
                </div>
              </details>
            </div>
          );
        })} */}
      </div>
    </>
  );
};
