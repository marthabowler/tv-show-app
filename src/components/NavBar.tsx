import { Episode } from "./IEpisodes";

interface Props {
  searchText: string;
  handleSearchText: (input: string) => void;
  numResults: number;
  episodes: Episode[];
}

export function NavBar(props: Props): JSX.Element {
  return (
    <div className="wrapper">
      <input
        className="search"
        type="text"
        placeholder="Search.."
        name="search"
        value={props.searchText}
        onChange={(e) => props.handleSearchText(e.target.value)}
      />
      <br />
      <br />
      <p className="results">
        {props.numResults === props.episodes.length
          ? `   Displaying ${props.episodes.length} episodes`
          : `   Displaying ${props.numResults} of ${props.episodes.length} episodes`}
      </p>
    </div>
  );
}
