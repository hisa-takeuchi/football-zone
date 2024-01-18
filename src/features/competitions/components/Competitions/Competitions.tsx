import type { FC } from 'react'

import { GridItem, SimpleGrid } from '@yamada-ui/react'

import { Const } from '@/const/constant'
import { Competition } from '@/features/competitions/components/Competition/Competition'

export const Competitions: FC = () => {
  const competitionNameList: readonly string[] = Const.LEAGUE_LIST

  return (
    <SimpleGrid w="full" columns={{ base: 2, md: 1 }} gap="xl">
      <>
        {competitionNameList?.map((name) => (
          <GridItem w="full" key={name}>
            <Competition name={name} />
          </GridItem>
        ))}
      </>
    </SimpleGrid>
  )
}
