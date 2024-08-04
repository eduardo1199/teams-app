import { Header } from '@components/Header';
import * as S from './styles';
import { HighLight } from '@components/HighLight';
import { GroupCard } from '@components/GroupCard';
import { useState } from 'react';
import { FlatList } from 'react-native'
import { ListEmpty } from '@components/ListEmpty';

export function Groups() {
  const [groups, setGroups] = useState<string[]>([])


  return (
    <S.Container>
      <Header />

      <HighLight 
        title='Turmnas'
        subTitle='jogue com sua turma'
      />

      <FlatList 
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => {
          return (
            <GroupCard 
              title={item} 
            />
          )
        }}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => <ListEmpty message="Que tal cadastrar a primeira turma?" />}
      />
    </S.Container>
  );
}
