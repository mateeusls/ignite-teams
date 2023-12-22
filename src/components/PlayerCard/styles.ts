import styled, { css } from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'

export const Container = styled.View`
  width: 100%;
  height: 56px;

  background-color: ${({ theme }) => theme.COLORS.gray[500]};
  border-radius: 6px;

  flex-direction: row;
  align-items: center;

  margin-bottom: 16px;
`

export const Name = styled.Text`
  flex: 1;
  ${({ theme }) => css`
    color: ${theme.COLORS.gray[200]};
    font-family: ${theme.FONT_FAMILY.regular};
    font-size: ${theme.FONT_SIZE.md}px;
  `}
`

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.gray[200],
}))`
  margin-right: 4px;
  margin-left: 16px;
`
