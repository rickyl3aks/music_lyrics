import "./index.css";
import { Header } from "./components/header/Header";
import { Songs } from "./components/songs/Songs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { TrackLyric } from "./components/trackLyrics/TrackLyric";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/music_lyrics" element={<Songs />} />
          <Route path={`/track/:id`} element={<TrackLyric />} />
          <Route path="*" element={<h1>sorry, not found</h1>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
