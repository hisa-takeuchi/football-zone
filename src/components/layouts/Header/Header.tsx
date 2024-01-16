import type { FC } from 'react'

import { Box, Heading, HStack } from '@yamada-ui/react'

export const Header: FC = () => {
  return (
    <HStack as="header">
      <Box p="md">
        <Heading as="h1">Football zone</Heading>
      </Box>
    </HStack>
  )
}
