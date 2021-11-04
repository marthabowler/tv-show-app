import "./App.css";
import { useState } from "react";
import { EpisodeList } from "./components/episodeList";
import { NavBar } from "./components/NavBar";
import { DropDown } from "./components/DropDown";
import { useEffect } from "react";
import seasonify from "./utils/seasonify";

function App(): JSX.Element {
  const [searchText, setSearchText] = useState<string>("");
  const [numResults, setNumResults] = useState<number>(0);
  const [dropDownValue, setDropDownValue] = useState<string>("");
  const [episodes, setEpisode] = useState([]);

  useEffect(() => {
    const loadEpisodes = async () => {
      const resp = await fetch("https://api.tvmaze.com/shows/82/episodes");
      const jsonBody = await resp.json();
      setEpisode(jsonBody);
    };
    loadEpisodes();
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Game of Thrones</h1>
      </header>
      <DropDown
        episodes={episodes}
        handleDropDown={setDropDownValue}
        dropDownValue={dropDownValue}
      />
      <NavBar
        searchText={searchText}
        episodes={episodes}
        handleSearchText={setSearchText}
        numResults={numResults}
      />
      <main>
        <EpisodeList
          episodes={episodes}
          handleSetEpisode={setEpisode}
          searchText={searchText}
          handleNumResults={setNumResults}
          dropDownValue={dropDownValue}
        />
      </main>
    </div>
  );
}
export default App;
