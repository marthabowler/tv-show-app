import EpisodeItem from "./episode";
import seasonify from "../utils/seasonify";
import { Episode } from "./IEpisodes";

interface Props {
  searchText: string;
  handleNumResults: (num: number) => void;
  dropDownValue: string;
  episodes: Episode[];
  handleSetEpisode: (input: []) => void;
}

export function EpisodeList(props: Props): JSX.Element {
  const filteredEpisodes = props.episodes
    .filter((episode) => {
      if (props.dropDownValue)
        return seasonify(episode.season, episode.number, episode.name).includes(
          props.dropDownValue
        );

      if (
        episode.name.toLowerCase().includes(props.searchText.toLowerCase()) ||
        episode.summary.toLowerCase().includes(props.searchText.toLowerCase())
      )
        return episode;
      else return false;
    })

    .map((episode) => (
      <EpisodeItem
        id={episode.id}
        key={episode.id}
        name={episode.name}
        season={episode.season}
        number={episode.number}
        image={episode.image}
        summary={episode.summary}
      />
    ));
  props.handleNumResults(filteredEpisodes.length);

  return (
    <div className="allEps">
      {filteredEpisodes.length !== 0 ? (
        filteredEpisodes
      ) : (
        <p>No Episodes found</p>
      )}
    </div>
  );
}
