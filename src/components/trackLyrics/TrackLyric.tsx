import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Loader } from "../loader/Loader";
import { lyric } from "./modules";
import { TrackApi } from "./TrackApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompactDisc,
  faMusic,
  faWarning,
  faMicrophone

} from "@fortawesome/free-solid-svg-icons";
import "./track.css";

export const TrackLyric = (track: any) => {
  const [params, setParams] = useState<any>();
  let param = useParams();

  useEffect(() => {
    setParams(param.id);
  }, [param.id]);

  const { lyric, songDetails, loading, error } = TrackApi(param.id);

  if (error) {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>
          There has been an error... Please, try again
        </h1>
      </div>
    );
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <br />
      <Link to="/music_lyrics" style={{ textDecoration: "none" }}>
        <span
          style={{
            backgroundColor: "#232323",
            color: "white",
            padding: ".5rem",
            borderRadius: ".2rem",
            margin: ".5rem",
          }}
        >
          Go back
        </span>
      </Link>
      {songDetails.message.body.track.artist_name !== undefined && (
        <div className="container_lyric">
          <div className="track_title">
            <h2>{songDetails.message.body.track.track_name}</h2>
          </div>
          <div>
            <div className="details">
              <p className="lyric">{lyric.message.body.lyrics.lyrics_body}</p>
              <p>
                <FontAwesomeIcon icon={faMicrophone} />
                <strong> Singer: </strong>
                {songDetails.message.body.track.artist_name}
              </p>
              <p>
                <FontAwesomeIcon icon={faCompactDisc} />
                <strong> Album: </strong>
                {songDetails.message.body.track.album_name}
              </p>
              <p>
                <FontAwesomeIcon icon={faMusic} />
                <strong> Genre: </strong>
                {
                  songDetails.message.body.track.primary_genres
                    .music_genre_list[0].music_genre.music_genre_name
                }
              </p>
              <p>
                <FontAwesomeIcon icon={faWarning} />
                <strong> Explicit Words: </strong>
                {lyric.message.body.lyrics.explicit > 0 ? "Yes" : "No"}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
