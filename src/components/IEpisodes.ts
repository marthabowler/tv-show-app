export interface Episode {
  id: number;
  name: string;
  season: number;
  number: number;
  image: {
    medium: string | null;
  };
  summary: string;
}
