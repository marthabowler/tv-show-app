import doubleDigitEpisode from "./doubleDigitEp";

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
      <p>
        SO0{props.season}E{doubleDigitEpisode(props.number) && 0}
        {props.number}
      </p>
      <img src={props.image} alt="#" />
      <hr />
      {props.summary.slice(3, -4)}
    </section>
  );
}

export default EpisodeItem;
