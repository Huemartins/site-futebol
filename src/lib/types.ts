export type ChampionshipStatus = "inscricoes" | "em_andamento" | "encerrado";

export type Championship = {
  id: string;
  name: string;
  slug: string;
  game: string;
  status: ChampionshipStatus;
};

export type Team = {
  id: string;
  name: string;
  slug: string;
  crestUrl: string | null;
  discord: string | null;
  championshipId: string;
  ownerUserId: string | null;
};

export type TeamPlayer = {
  id: string;
  teamId: string;
  name: string;
  position: string;
};

export type Match = {
  id: string;
  championshipId: string;
  homeTeamId: string;
  awayTeamId: string;
  homeScore: number | null;
  awayScore: number | null;
  playedAt: string;
};

export type Attributes = {
  pace: number;
  shooting: number;
  passing: number;
  dribbling: number;
  defending: number;
  physical: number;
};

export type RealPlayer = {
  id: string;
  name: string;
  club: string;
  position: string;
  season: string;
  goals: number;
  assists: number;
  attributes: Attributes;
};

export type EaPlayer = {
  id: string;
  name: string;
  club: string;
  overall: number;
  position: string;
  archetype: string;
  attributes: Attributes;
};

export type PlayerLink = {
  id: string;
  slug: string;
  real: RealPlayer;
  ea: EaPlayer;
  fieldVsGame: string;
};

export type Account = {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  platform: string | null;
  gamertag: string | null;
  createdAt: string;
};

export type SessionUser = {
  id: string;
  name: string;
  email: string;
  platform: string | null;
  gamertag: string | null;
};

export type StandingRow = {
  team: Team;
  played: number;
  wins: number;
  draws: number;
  losses: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDiff: number;
  points: number;
};

export type ArticleFrontmatter = {
  title: string;
  section: "ea-fc" | "pro-clubs" | "esports" | "noticias" | "guias";
  tags: string[];
  date: string;
  excerpt: string;
};

export type ArticleMeta = ArticleFrontmatter & {
  slug: string;
};
