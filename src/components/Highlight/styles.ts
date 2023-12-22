import { css } from 'styled-components'
import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  margin: 32px 0;
`

export const Title = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.bold};
    font-size: ${theme.FONT_SIZE.xl}px;
    color: ${theme.COLORS.white};
  `}
`

export const SubTitle = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.regular};
    font-size: ${theme.FONT_SIZE.md}px;
    color: ${theme.COLORS.gray[300]};
  `}
`
