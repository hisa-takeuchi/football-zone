import type { FC } from 'react'
import React, { useMemo } from 'react'

import { HStack, Image, Stack, Text } from '@yamada-ui/react'
import { Table } from '@yamada-ui/table'

import type { Column } from '@yamada-ui/table'

interface Props {
  tableData?: StandingTableType[]
}

export const Standings: FC<Props> = ({ tableData }) => {
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
      {tableData ? (
        <Table columns={columns} data={tableData} enableRowSelection={false} />
      ) : (
        <Text>データがありません</Text>
      )}
    </Stack>
  )
}
