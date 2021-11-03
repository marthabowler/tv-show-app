import "./App.css";
import { useState } from "react";
import { EpisodeList } from "./utils/episodeList";
import { NavBar } from "./utils/NavBar";
import { DropDown } from "./utils/DropDown";

function App(): JSX.Element {
  const [searchText, setSearchText] = useState<string>("");
  const [numResults, setNumResults] = useState<number>(0);
  const [dropDownValue, setDropDownValue] = useState<string>("");

  return (
    <div className="App">
      <header>
        <h1>Game of Thrones</h1>
      </header>
      <DropDown
        handleDropDown={setDropDownValue}
        dropDownValue={dropDownValue}
      />
      <NavBar
        searchText={searchText}
        handleSearchText={setSearchText}
        numResults={numResults}
      />
      <main>
        <EpisodeList
          searchText={searchText}
          handleNumResults={setNumResults}
          dropDownValue={dropDownValue}
        />
      </main>
    </div>
  );
}
export default App;
