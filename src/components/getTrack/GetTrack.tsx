import {
  faMusic,
  faPlay,
  faCompactDisc,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Lyrics } from "../songs/lyrics/Lyrics";
import "./getTrack.css";

const GetTrack = ({ song }: any) => {
  const limitText = (artist_name: string): string => {
    if (artist_name.length > 30) return artist_name.substring(0, 30) + "...";
    return artist_name;
  };

  return (
    <div className="container_item">
      <div className="title">{limitText(song.track.artist_name)}</div>
      <div className="infos">
        <p>
          <FontAwesomeIcon icon={faPlay} />
          <strong> Track:</strong> {song.track.track_name}
        </p>
        <p>
          <FontAwesomeIcon icon={faCompactDisc} />
          <strong> Album:</strong> {song.track.album_name}
        </p>
        {song.track.primary_genres.music_genre_list[0] && (
          <p>
            <FontAwesomeIcon icon={faMusic} />
            <strong> Genre:</strong>
            {
              song.track.primary_genres.music_genre_list[0].music_genre
                .music_genre_name
            }
          </p>
        )}

        <div className="space"></div>
        <Link
          to={`/track/${song.track.track_id}`}
          style={{ textDecoration: "none" }}
        >
          <Lyrics track={song.track.track_id} artist={song.track.artist_name} />
        </Link>
      </div>
    </div>
  );
};

export default GetTrack;
