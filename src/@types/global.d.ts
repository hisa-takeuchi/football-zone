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

interface CompetitionType {
  id: number
  area: {
    id: number
    name: string
    code: string
    flag: string | null
  }
  name: string
  code: string
  type: string
  emblem: string | null
  plant: string
  currentSeason: {
    id: number
    startDate: string
    endDate: string
    currentMatchday: string | null
    winner: string | null
  }
  numberOfAvailableSeasons: number
  lastUpdated: string
}
