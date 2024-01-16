import type { FC } from 'react'

import { Loading, Stack } from '@yamada-ui/react'

import { GetCompetitions } from '@/features/competitions/api/getCompetitions'
import { Competition } from '@/features/competitions/components/Competition/Competition'

export const Competitions: FC = () => {
  const { data, isLoading } = GetCompetitions()

  const competitions = data?.data.competitions

  console.log(competitions)

  return (
    <Stack>
      {isLoading ? (
        <Loading size="lg" />
      ) : (
        <>{competitions?.map((competition) => <Competition key={competition.id} {...competition} />)}</>
      )}
    </Stack>
  )
}