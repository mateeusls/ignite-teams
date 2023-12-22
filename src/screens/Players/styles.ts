import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.gray[600]};

  padding: 24px;
`

export const Form = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.gray[700]};
  border-radius: 6px;

  justify-content: center;

  flex-direction: row;
`

export const HeaderList = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;

  margin: 32px 0 12px;
`

export const NumberOfPlayers = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.white};
    font-family: ${theme.FONT_FAMILY.bold};
    font-size: ${theme.FONT_SIZE.sm}px;
  `};
`
