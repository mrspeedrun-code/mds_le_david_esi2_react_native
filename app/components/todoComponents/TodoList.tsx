// Dependency React Native
import React from 'react'
import { FlatList } from 'react-native'
import ItemList from './ItemList'

// TodoList Component
const TodoList: React.FC = () => {
  const DATA = [
    {
      title: 'First Item',
      isCheck: false
    },
    {
      title: 'Second Item',
      isCheck: false,
    },
    {
      title: 'Third Item',
      isCheck: false,
    },
  ];

  const renderItem = ({ item }) => (
    <ItemList title={item.title} />
  );

  return(
    <>
      <FlatList
        data={DATA}
        renderItem={renderItem}
      />
  </>
  )
}

export default TodoList