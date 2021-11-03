import seasonify from "./seasonify";

interface EpisodeProps {
  name: string;
  season: number;
  number: number;
  image: string;
  summary: string;
}

function EpisodeItem(props: EpisodeProps): JSX.Element {
  return (
    <section id={props.name}>
      <h2>{props.name}</h2>
      <p>{seasonify(props.season, props.number, props.name)}</p>
      <img src={props.image} alt="#" />
      <hr />
      {props.summary.slice(3, -4)}
    </section>
  );
}

export default EpisodeItem;
