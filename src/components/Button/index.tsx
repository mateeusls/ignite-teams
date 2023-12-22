import { TouchableOpacityProps } from 'react-native'
import { ButtonTypeStyleProps, Container, Title } from './styles'

type ButtonProps = TouchableOpacityProps & {
  title: string
  type?: ButtonTypeStyleProps
}

export function Button({ title, type = 'primary', ...rest }: ButtonProps) {
  return (
    <Container {...rest} type={type}>
      <Title>{title}</Title>
    </Container>
  )
}
