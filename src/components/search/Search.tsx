import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import "./search.css";
import { useEffect, useState } from "react";
import { Track_api } from "../track_lyrics/Track_api";
import { Search_api } from "./Search_api";
import { useDispatch, useSelector } from "react-redux";
import { artist_name } from "../../features/artist/ArtistSlice";

export const Search = () => {
  const [userInput, setUserInput] = useState();
  const [trackTitle, setTrackTitle] = useState<any>("");
  const artistName = useSelector((state: any) => state.artist.artist);
  const dispatch = useDispatch();

  const find_track = (e: any) => {
    e.preventDefault();
    setTrackTitle(userInput);
  };

  const onChange = (e: any) => {
    setUserInput(e.target.value);
  };

  useEffect(() => {
    if (trackTitle !== "") dispatch(artist_name(trackTitle));
  }, [dispatch, trackTitle]);

  // const { artist } = Search_api(artistName);

  // console.log(artist !== undefined && artist.map((e: any) => e.track));

  return (
    <div className="form">
      <h1>
        <FontAwesomeIcon icon={faMusic} /> Search for a song
      </h1>
      <form onSubmit={find_track}>
        <input
          type="text"
          placeholder="Song title..."
          name="userInput"
          value={userInput || ""}
          onChange={onChange}
        />
        <button className="btn" type="submit">
          Get track lyrics
        </button>
        {artistName}
      </form>
    </div>
  );
};
