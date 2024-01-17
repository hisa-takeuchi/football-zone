import type { FC } from 'react'

import { Box, Heading, HStack, Image, Stack, VStack } from '@yamada-ui/react'

import { Standings } from '@/features/competitions/components/Standings/Standings'

export const Competition: FC<CompetitionType> = (props) => {
  const { id, name, emblem, code } = props
  return (
    <Stack key={id}>
      <HStack>
        <Box w="3rem">
          <Image fit="contain" w="60px" h="60px" alt={name} src={emblem || ''} size="xs" />
        </Box>
        <Box>
          <Heading as="h3" size="md">
            {name}
          </Heading>
        </Box>
      </HStack>
      <VStack>
        <Standings competitionCode={code} />
      </VStack>
    </Stack>
  )
}
