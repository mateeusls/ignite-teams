import { css } from 'styled-components'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const Message = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.sm}px;
    font-family: ${theme.FONT_FAMILY.regular};
    color: ${theme.COLORS.gray[300]};
  `}
`
