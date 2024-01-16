import type { FC } from 'react'

import { Button, Input, InputGroup, InputRightElement } from '@yamada-ui/react'

export const SearchBox: FC = () => {
  return (
    <InputGroup size="lg">
      <Input placeholder="チーム名または選手名を入力してください" />
      <InputRightElement w="4.5rem">
        <Button size="sm">検索</Button>
      </InputRightElement>
    </InputGroup>
  )
}
