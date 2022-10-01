import { Get_api } from "../api/Get_api";
import "./songs.css";

export const Songs = () => {
  const { lyrics, isLoading, isError } = Get_api();
  console.log(lyrics)

  const song_array: Array<string> = [
    "David Guetta feat. Bebe Rexha",
    "Coolio feat. L.V.",
    "Lewis Capaldi",
    "Sam Smith feat. Kim Petras",
    "Ed Sheeran",
    "Eliza Rose feat. Interplanetary Criminal",
    "Lizzo",
    "Cian Ducrot",
    "OneRepublic",
    "Harry Styles",
  ];

  return (
    <div>
      {/* {!isLoading &&
        lyrics.track_list?.map((song: any) => {
          return (
            <div key={song.track.commontrack_id}>
              <h1 className="title">{song.track.artist_name}</h1>
            </div>
          );
        })} */}
      <div className="container">
        {song_array.map((e) => {
          return (
            <div className="container_item">
              <details>
                <summary className="title">{e}</summary>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. In,
                  quibusdam ducimus. Vel voluptate nisi, incidunt voluptates
                  magnam explicabo accusamus optio neque porro quis, sit ipsam
                  officia harum veritatis deleniti adipisci.
                </p>
              </details>
            </div>
          );
        })}
      </div>
    </div>
  );
};
