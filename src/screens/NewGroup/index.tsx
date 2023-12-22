import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import { groupCreate } from '@storage/group/groupCreate'

import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { Button } from '@components/Button'
import { Input } from '@components/Input'

import { Container, Content, Icon } from './styles'
import { AppError } from '@utils/AppError'
import { Alert } from 'react-native'

export function NewGroup() {
  const [group, setGroup] = useState('')
  const navigation = useNavigation()

  async function handlePlayers() {
    try {
      if (group.trim().length === 0) {
        return Alert.alert('Novo Grupo', 'Informe o nome da turma')
      }

      await groupCreate(group)
      navigation.navigate('players', { group })
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Ops!', error.message)
      } else {
        Alert.alert('Ops!', 'Não foi possível criar a turma')
        console.log(error)
      }
    }
  }

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight
          title="Nova turma"
          subTitle="Crie a turma para adicionar as pessoas"
        />

        <Input
          placeholder="Nome da turma"
          style={{ marginBottom: 20 }}
          onChangeText={setGroup}
          value={group}
        />

        <Button title="Criar" onPress={handlePlayers} />
      </Content>
    </Container>
  )
}
