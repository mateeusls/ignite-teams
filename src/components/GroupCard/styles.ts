import styled from 'styled-components/native'
import { UsersThree } from 'phosphor-react-native'
import { css } from 'styled-components'

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 90px;

  background-color: ${({ theme }) => theme.COLORS.gray[500]};
  border-radius: 6px;

  flex-direction: row;
  align-items: center;

  padding: 24px;
  margin-bottom: 12px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.md}px;
    font-family: ${theme.FONT_FAMILY.regular};
    color: ${theme.COLORS.gray[200]};
  `}
`

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
  color: theme.COLORS.green[700],
  size: 32,
  weight: 'fill',
}))`
  margin-right: 20px;
`
