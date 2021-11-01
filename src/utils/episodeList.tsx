import episodes from "../episodes.json";
import EpisodeItem from "./episode";

interface Props {
  searchText: string;
  handleAllEpisodes: (num: number) => void;
  handleNumResults: (num: number) => void;
}

export function EpisodeList(props: Props): JSX.Element {
  const filteredEpisodes = episodes
    .filter((episode) => {
      if (
        episode.name.toLowerCase().includes(props.searchText.toLowerCase()) ||
        episode.summary.toLowerCase().includes(props.searchText.toLowerCase())
      ) {
        return episode;
      } else {
        return false;
      }
    })
    .map((episode) => (
      <EpisodeItem
        key={episode.id}
        name={episode.name}
        season={episode.season}
        number={episode.number}
        image={episode.image.medium}
        summary={episode.summary}
      />
    ));
  props.handleNumResults(filteredEpisodes.length);
  props.handleAllEpisodes(episodes.length);

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
