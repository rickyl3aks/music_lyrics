import { GetApi } from "../api/GetApi";
import { Lyrics } from "./lyrics/Lyrics";
import { TrackLyric } from "../trackLyrics/TrackLyric";
import { Loader } from "../loader/Loader";
import { Search } from "../search/Search";
import { useSelector } from "react-redux";
import GetTrack from "../getTrack/GetTrack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const Songs = () => {
  const trackName = useSelector((state: any) => state.track.track);
  const { lyrics, songDetails, isLoading, isError } = GetApi(trackName);

  const errorComponents: { [key: string]: JSX.Element | null } = {
    "no access": (
      <p style={{ textAlign: "center" }}>
        <a
          href="https://cors-anywhere.herokuapp.com/corsdemo"
          target="_blank"
          rel="noreferrer"
        >
          Access the CORS server link, then refresh the page
        </a>
      </p>
    ),
    "client error": (
      <h1 style={{ textAlign: "center" }}>
        There has been an error... Please, try again
      </h1>
    ),
  };

  if (isError) {
    return errorComponents[isError];
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Search />
      <h1 className="page_title">
        {trackName.length > 0 ? (
          <>
            <FontAwesomeIcon icon={faPlay} /> Track: {trackName}
          </>
        ) : (
          "Top 10 Track"
        )}
      </h1>
      <div className="container">
        {!isLoading &&
          lyrics.track_list !== undefined &&
          (songDetails.length > 0 ? songDetails : lyrics.track_list).map(
            (song: any) => {
              return <GetTrack song={song} key={song.track.commontrack_id} />;
            }
          )}
      </div>
    </>
  );
};
