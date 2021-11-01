import "./App.css";
import episodes from "./episodes.json";
import { useState } from "react";
import { EpisodeList } from "./utils/episodeList";
import { NavBar } from "./utils/NavBar";

function App(): JSX.Element {
  const [searchText, setSearchText] = useState<string>("");
  const [allEpisodes, setAllEpisodes] = useState<number>(0);
  const [numResults, setNumResults] = useState<number>(0);

  return (
    <div className="App">
      <header>
        <h1>Game of Thrones</h1>
      </header>
      <NavBar
        searchText={searchText}
        handleSearchText={setSearchText}
        allEpisodes={allEpisodes}
        numResults={numResults}
      />
      <main>
        <EpisodeList
          searchText={searchText}
          handleAllEpisodes={setAllEpisodes}
          handleNumResults={setNumResults}
        />
      </main>
    </div>
  );
}
export default App;
console.log(`Imported ${episodes.length} episode(s)`);
console.log(`First episode's name is ${episodes[0].name}`);
