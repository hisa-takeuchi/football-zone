import type { FC } from 'react'
import React, { useMemo } from 'react'

import { HStack, Image, Stack, Text } from '@yamada-ui/react'
import type { Column } from '@yamada-ui/table'
import { Table } from '@yamada-ui/table'

import { GetStandings } from '@/features/competitions/api/getStandings'

interface Props {
  competitionCode: string
}

export const Standings: FC<Props> = ({ competitionCode }) => {
  const { data } = GetStandings(competitionCode)

  const standingsTable = data?.data.standings[0].table

  const top5TData = useMemo(() => standingsTable?.slice(0, 5), [standingsTable])

  const columns = useMemo<Column<StandingTableType>[]>(
    () => [
      {
        header: '順位',
        accessorKey: 'position'
      },
      {
        header: 'チーム',
        accessorKey: 'team',
        cell: (props) => {
          const data = props.row.original
          return (
            <HStack>
              <Image fit="contain" w="30px" h="30px" size="xs" alt={data.team.tla} src={data.team.crest} />
              <Text>{data.team.shortName}</Text>
            </HStack>
          )
        }
      },
      {
        header: '勝ち点',
        accessorKey: 'points'
      },
      {
        header: '勝ち',
        accessorKey: 'won'
      },
      {
        header: '負け',
        accessorKey: 'lost'
      },
      {
        header: '引き分け',
        accessorKey: 'draw'
      },
      {
        header: '試合数',
        accessorKey: 'playedGames'
      }
    ],
    []
  )

  return (
    <Stack>
      {top5TData ? (
        <Table columns={columns} data={top5TData} enableRowSelection={false} />
      ) : (
        <Text>データがありません</Text>
      )}
    </Stack>
  )
}
