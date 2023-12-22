import { useCallback, useEffect, useState } from 'react'
import { Alert, FlatList } from 'react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native'

import { groupGetAll } from '@storage/group/groupGetAll'

import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { GroupCard } from '@components/GroupCard'
import { ListEmpty } from '@components/ListEmpty'
import { Button } from '@components/Button'

import { Container } from './styles'
import { Loading } from '@components/Loading'

export function Groups() {
  const [isLoading, setIsLoading] = useState(true)
  const [groups, setGroups] = useState<string[]>([])

  const navigation = useNavigation()

  function handleOpenGroup(group: string) {
    navigation.navigate('players', { group })
  }

  function handleNewGroup() {
    navigation.navigate('new')
  }

  async function fetchGroups() {
    try {
      setIsLoading(true)

      const data = await groupGetAll()

      setGroups(data)
    } catch (error) {
      Alert.alert('Turmas', 'Não foi possível carregar as turmas.')
    } finally {
      setIsLoading(false)
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchGroups()
    }, []),
  )

  return (
    <Container>
      <Header />

      <Highlight title="Turmas" subtitle="jogue com a sua turma" />

      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={groups}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <GroupCard title={item} onPress={() => handleOpenGroup(item)} />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={groups.length === 0 && { flex: 1 }}
          ListEmptyComponent={() => (
            <ListEmpty message="Que tal cadastrar a primeira turma?" />
          )}
        />
      )}
      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </Container>
  )
}
