/**
 * @description API仕様
 * football data.org | APIリファレンス
 * https://www.football-data.org/documentation/quickstart
 */

interface FootballDataResponseType<T> {
  data: T
}

interface CompetitionsType {
  competitions: CompetitionType[]
}

interface AreaType {
  id: number
  name: string
  code: string
  flag: string | null
}

interface CurrentSeasonType {
  id: number
  startDate: string
  endDate: string
  currentMatchday: string | null
  winner: string | null
}

interface TeamType {
  id: number
  crest: string
  name: string
  shortName: string
  tla: string
}

interface StandingTableType {
  draw: number | null
  form: number | null
  goalDifference: number | null
  goalsAgainst: number | null
  goalsFor: number | null
  lost: number | null
  playedGames: number | null
  points: number | null
  position: number | null
  won: number | null
  team: TeamType
}

interface CompetitionType {
  id: number
  area: AreaType
  name: string
  code: string
  type: string
  emblem: string | null
  plant?: string
  currentSeason?: CurrentSeasonType
  numberOfAvailableSeasons?: number
  lastUpdated?: string
}

interface StandingsType {
  area: AreaType
  competition: CompetitionType
  filters: {
    season: string
  }
  season: {
    currentMatchday: number
    endDate: string
    id: number
    startDate: string
    winner: string | null
  }
  standings: StandingType[]
}

interface StandingType {
  group: string | null
  stage: string
  table: StandingTableType[]
  type: string
}
