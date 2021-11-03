import episodes from "../episodes.json";
import seasonify from "./seasonify";

interface Props {
  dropDownValue: string;
  handleDropDown: (input: string) => void;
}

export function DropDown(props: Props): JSX.Element {
  return (
    <>
      <label htmlFor="episode-picker">Pick an episode:</label>
      <select
        value={props.dropDownValue}
        onChange={(e) => props.handleDropDown(e.target.value)}
      >
        <option value="">Choose an episode</option>
        {episodes.map((episode) => (
          <option key={episode.id} value={episode.name}>
            {seasonify(episode.season, episode.number, episode.name)}
          </option>
        ))}
      </select>
    </>
  );
}
