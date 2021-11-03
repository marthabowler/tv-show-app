import episodes from "../episodes.json";

interface Props {
  searchText: string;
  handleSearchText: (input: string) => void;
  numResults: number;
}

export function NavBar(props: Props): JSX.Element {
  return (
    <>
      <input
        type="text"
        placeholder="Search.."
        name="search"
        value={props.searchText}
        onChange={(e) => props.handleSearchText(e.target.value)}
      />
      <p>
        {props.numResults === episodes.length
          ? `Displaying ${episodes.length} episodes`
          : `Displaying ${props.numResults} of ${episodes.length} episodes`}
      </p>
    </>
  );
}
