import useSWR from 'swr'

import { fetcher } from '@/libs/fetcher'

export const useCompetitions = (name?: string) => {
  return useSWR<FootballDataResponseType<CompetitionsType>>(`/api/competitions/${name || ''}`, fetcher)
}
