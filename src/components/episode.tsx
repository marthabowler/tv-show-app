import seasonify from "../utils/seasonify";
import { Episode } from "./IEpisodes";

// interface EpisodeProps {
//   name: string;
//   season: number;
//   number: number;
//   image: {
//     medium: string | null;
//   };
//   summary: string;
//   episodes: Episode[];
// }

function EpisodeItem(props: Episode): JSX.Element {
  return (
    <section id={props.name}>
      <h2>{props.name}</h2>
      <p>{seasonify(props.season, props.number, props.name)}</p>
      <img
        src={
          props.image
            ? props.image.medium
            : "https://resizing.flixster.com/srgN48xbR5qNUbZKOPVL36ajLXI=/300x300/v2/https://flxt.tmsimg.com/assets/p8553063_b_h9_az.jpg"
        }
        alt="#"
      />
      <hr />
      {props.summary &&
        props.summary
          .slice(3, -4)
          .replace("<br><br>", "")
          .replace("</p><p></p><p>", "")
          .replace("</p><p>", "")}
    </section>
  );
}

export default EpisodeItem;
