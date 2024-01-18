import useSWR from 'swr'

import { fetcher } from '@/libs/fetcher'

export const GetCompetitions = (name?: string) => {
  return useSWR<FootballDataResponseType<CompetitionsType>>(`/api/competitions/${name || ''}`, fetcher)
}
