import { Episode } from "./IEpisodes";
import seasonify from "../utils/seasonify";

interface Props {
  dropDownValue: string;
  handleDropDown: (input: string) => void;
  episodes: Episode[];
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
        {props.episodes.map((episode) => (
          <option key={episode.id} value={episode.name}>
            {seasonify(episode.season, episode.number, episode.name)}
          </option>
        ))}
      </select>
      <button onClick={() => props.handleDropDown("")}>Reset</button>
    </>
  );
}
