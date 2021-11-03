export default function seasonify(
  season: number,
  episode: number,
  name: string
): string {
  if (episode < 10) {
    const episode1 = "0" + episode.toString();
    return `S0${season.toString()} ${episode1}-${name}`;
  } else {
    return `S0${season.toString()} ${episode.toString()}-${name}`;
  }
}
