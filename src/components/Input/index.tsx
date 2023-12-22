import { TextInput, TextInputProps } from 'react-native' // Import Ref from 'react-native'
import { Container } from './styles'
import { useTheme } from 'styled-components/native'

type InputProps = TextInputProps & {
  inputRef?: React.RefObject<TextInput>
}

export function Input({ inputRef, ...rest }: InputProps) {
  const { COLORS } = useTheme()
  return (
    <Container
      {...rest}
      placeholderTextColor={COLORS.gray[300]}
      ref={inputRef}
    />
  )
}
