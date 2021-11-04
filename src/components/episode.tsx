import seasonify from "../utils/seasonify";
import { Episode } from "./IEpisodes";

interface EpisodeProps {
  name: string;
  season: number;
  number: number;
  image: {
    medium: string | null;
  };
  summary: string;
  episodes: Episode[];
}

function EpisodeItem(props: EpisodeProps): JSX.Element {
  return (
    <section id={props.name}>
      <h2>{props.name}</h2>
      <p>{seasonify(props.season, props.number, props.name)}</p>
      {props.image.medium && <img src={props.image.medium} alt="#" />}
      <hr />
      {props.summary
        .slice(3, -4)
        .replace("<br><br>", "")
        .replace("</p><p></p><p>", "")
        .replace("</p><p>", "")}
    </section>
  );
}

export default EpisodeItem;
