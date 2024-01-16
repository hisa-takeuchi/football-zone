import useSWR from 'swr'

import { fetcher } from '@/libs/fetcher'

import type { SWRResponse } from 'swr'

export const GetStandings = (id: string): SWRResponse => {
  return useSWR(`/api/competitions/${id}/standings`, fetcher)
}
