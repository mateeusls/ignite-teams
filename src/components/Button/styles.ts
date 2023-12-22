import { TouchableOpacity } from 'react-native'
import { css } from 'styled-components'
import styled from 'styled-components/native'

export type ButtonTypeStyleProps = 'primary' | 'secondary'

type ButtonProps = {
  type: ButtonTypeStyleProps
}

export const Container = styled(TouchableOpacity)<ButtonProps>`
  flex: 1;

  max-height: 56px;

  background-color: ${({ theme, type }) =>
    type === 'primary' ? theme.COLORS.green[700] : theme.COLORS.red[700]};

  border-radius: 6px;

  align-items: center;
  justify-content: center;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.md}px;
    font-family: ${theme.FONT_FAMILY.bold};
    color: ${theme.COLORS.white};
  `}
`
