'use client'
import { Stack } from '@yamada-ui/react'

import { Competitions } from '@/features/competitions/components/Competitions/Competitions'
import { SearchBox } from '@/features/search/components/SearchBox/SearchBox'

export default function Home() {
  return (
    <Stack gap="2xl">
      <SearchBox />
      <Competitions />
    </Stack>
  )
}
