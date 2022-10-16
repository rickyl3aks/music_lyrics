import { GetApi } from "../api/GetApi";
import { Lyrics } from "./lyrics/Lyrics";
import { TrackLyric } from "../trackLyrics/TrackLyric";
import { Loader } from "../loader/Loader";
import { Search } from "../search/Search";
import { useDispatch, useSelector } from "react-redux";
import { SearchApi } from "../search/SearchApi";
import { TrackApi } from "../trackLyrics/TrackApi";
import GetTrack from "../getTrack/GetTrack";
import { useEffect } from "react";

export const Songs = () => {
  const trackName = useSelector((state: any) => state.track.track);
  const { lyrics, songDetails, isLoading, isError } = GetApi(trackName);

   console.log(trackName)
  if (isError) {
    console.log(isError)
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
          (songDetails.length > 0 ? songDetails : lyrics.track_list).map(
            (song: any) => {
              return <GetTrack song={song} key={song.track.commontrack_id} />;
            }
          )}
      </div>
    </>
  );
};
