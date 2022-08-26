import React from 'react'

import * as S from './styles'

type HeaderProps = {
  title: string
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
    </S.Container>
  )
}
