import useSWR from 'swr'

import { fetcher } from '@/libs/fetcher'

export const GetStandings = (id: string) => {
  return useSWR<FootballDataResponseType<StandingsType>>(`/api/competitions/${id}/standings`, fetcher)
}
