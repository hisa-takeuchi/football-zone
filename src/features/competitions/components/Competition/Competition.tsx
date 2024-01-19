import type { FC } from 'react'
import { useMemo } from 'react'

import { Box, Heading, HStack, Image, Skeleton, SkeletonCircle, SkeletonText, Stack, VStack } from '@yamada-ui/react'

import { useStandings } from '@/features/competitions/api/useStandings'
import { Standings } from '@/features/competitions/components/Standings/Standings'

export const Competition: FC<{ name: string }> = ({ name }) => {
  const { data, isLoading } = useStandings(name)

  const competition = data?.data.competition

  const standingsTable = data?.data.standings[0].table

  const top5Data = useMemo(() => standingsTable?.slice(0, 5), [data])

  return (
    <Stack>
      <HStack>
        <SkeletonCircle isLoaded={!isLoading}>
          <Box w="3rem">
            <Image fit="contain" w="60px" h="60px" alt={competition?.name} src={competition?.emblem || ''} size="xs" />
          </Box>
        </SkeletonCircle>
        <SkeletonText isLoaded={!isLoading} lineClamp={1} textHeight={6}>
          <Box>
            <Heading as="h3" size="md">
              {competition?.name}
            </Heading>
          </Box>
        </SkeletonText>
      </HStack>

      <VStack>
        <Skeleton isLoaded={!isLoading} h="sm" w="100%">
          <Standings tableData={top5Data} />
        </Skeleton>
      </VStack>
    </Stack>
  )
}
