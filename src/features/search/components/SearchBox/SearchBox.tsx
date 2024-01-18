import type { FC } from 'react'

import { Button, Heading, Input, InputGroup, InputRightElement, Stack } from '@yamada-ui/react'

export const SearchBox: FC = () => {
  return (
    <Stack>
      <Heading as="h2" size="md">
        チーム/選手検索
      </Heading>
      <InputGroup size="lg">
        <Input placeholder="チーム名または選手名を入力してください" />
        <InputRightElement w="4.5rem">
          <Button size="sm">検索</Button>
        </InputRightElement>
      </InputGroup>
    </Stack>
  )
}
