import React from 'react'

import * as S from './styles'
import { Header } from '@/components'

export const Home: React.FC = () => {
  return (
    <S.Container>
      <Header title='Home' />
    </S.Container>
  )
}
