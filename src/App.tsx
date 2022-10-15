import "./index.css";
import { Header } from "./components/header/Header";
import { Songs } from "./components/songs/Songs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { TrackLyric } from "./components/trackLyrics/TrackLyric";
import { Counter } from "./features/counter/Counter";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Counter />
        <Routes>
          <Route path="/" element={<Songs />} />
          <Route path={`/track/:id`} element={<TrackLyric />} />
          <Route path="*" element={<h1>sorry, not found</h1>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
