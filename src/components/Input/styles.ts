import styled from 'styled-components/native'
import { TextInput } from 'react-native'
import { css } from 'styled-components'

export const Container = styled(TextInput)`
  flex: 1;

  max-height: 56px;

  ${({ theme }) => css`
    color: ${theme.COLORS.white};
    background-color: ${theme.COLORS.gray[700]};

    font-family: ${theme.FONT_FAMILY.regular};
    font-size: ${theme.FONT_SIZE.md}px;
  `}

  border-radius: 6px;
  padding: 16px;
`
