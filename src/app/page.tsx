'use client'
import { Heading, Stack } from '@yamada-ui/react'

import { Competitions } from '@/features/competitions/components/Competitions/Competitions'
import { SearchBox } from '@/features/search/components/SearchBox/SearchBox'

export default function Home() {
  return (
    <Stack>
      <Heading as="h2" size="md">
        チーム/選手検索
      </Heading>
      <SearchBox />
      <Competitions />
    </Stack>
  )
}
