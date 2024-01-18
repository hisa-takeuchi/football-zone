import type { FC } from 'react'

import { Box, Heading, HStack, Image, Loading, Stack, VStack } from '@yamada-ui/react'

import { GetStandings } from '@/features/competitions/api/getStandings'
import { Standings } from '@/features/competitions/components/Standings/Standings'

export const Competition: FC<{ name: string }> = ({ name }) => {
  const { data, isLoading } = GetStandings(name)

  const competition = data?.data.competition

  const standingsTable = data?.data.standings[0].table

  return (
    <Stack>
      {isLoading ? (
        <Loading size="lg" />
      ) : (
        <>
          <HStack>
            <Box w="3rem">
              <Image
                fit="contain"
                w="60px"
                h="60px"
                alt={competition?.name}
                src={competition?.emblem || ''}
                size="xs"
              />
            </Box>
            <Box>
              <Heading as="h3" size="md">
                {competition?.name}
              </Heading>
            </Box>
          </HStack>
          <VStack>{standingsTable && <Standings standingsTable={standingsTable} />}</VStack>
        </>
      )}
    </Stack>
  )
}
