import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import "./search.css";
import { useEffect, useRef, useState } from "react";
import { SearchApi } from "./SearchApi";
import { TrackApi } from "../trackLyrics/TrackApi";
import { useDispatch, useSelector } from "react-redux";
import { TRACK_TITLE } from "../../features/track/trackSlice";

export const Search = () => {
  const [userInput, setUserInput] = useState();
  const [getTitle, setGetTitle] = useState<any>("");
  const trackName = useSelector((state: any) => state.track.track);
  const dispatch = useDispatch();

  useEffect(() => {
    if (getTitle.length > 0) dispatch(TRACK_TITLE(getTitle));
  }, [dispatch, getTitle, trackName]);

  const findTrack = (e: any) => {
    e.preventDefault();
    setGetTitle(userInput);
  };

  const onChange = (e: any) => {
    setUserInput(e.target.value);
  };

  return (
    <div className="form">
      <h1>
        <FontAwesomeIcon icon={faMusic} /> Search for a song
      </h1>
      <form onSubmit={findTrack}>
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
        {trackName}
      </form>
    </div>
  );
};
