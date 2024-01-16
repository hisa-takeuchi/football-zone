import type { FC } from 'react'

import { List, ListItem, Stack } from '@yamada-ui/react'

import { GetStandings } from '@/features/competitions/api/getStandings'

interface Props {
  competitionCode: string
}

export const Standings: FC<Props> = ({ competitionCode }) => {
  const { data } = GetStandings(competitionCode)

  console.log(data)

  return (
    <Stack>
      <List>
        <ListItem>アーセナル</ListItem>
      </List>
      <List>
        <ListItem>アーセナル</ListItem>
      </List>
    </Stack>
  )
}
