import type { FC } from 'react'

import { Loading, Stack } from '@yamada-ui/react'

import { GetCompetitions } from '@/features/competitions/api/getCompetitions'
import { Competition } from '@/features/competitions/components/Competition/Competition'

export const Competitions: FC = () => {
  const { data, isLoading } = GetCompetitions()

  const competitions = data?.data.competitions

  return (
    <Stack direction={{ base: 'row', lg: 'column' }} w="full">
      {isLoading ? (
        <Loading size="lg" />
      ) : (
        <>
          {competitions?.map((competition) => (
            <Stack w={{ base: 'full', lg: '50%' }} key={competition.id}>
              <Competition {...competition} />
            </Stack>
          ))}
        </>
      )}
    </Stack>
  )
}
