interface Props {
  searchText: string;
  handleSearchText: (input: string) => void;
  allEpisodes: number;
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
        {props.numResults === props.allEpisodes
          ? `Displaying ${props.allEpisodes} episodes`
          : `Displaying ${props.numResults} of ${props.allEpisodes} episodes`}
      </p>
    </>
  );
}
