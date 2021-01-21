// Dependency React Native
import React from 'react'
import { FlatList } from 'react-native'
import ItemList from './ItemList'

// Model
import { Todo } from '../../models/Todo'

// TaskList Component
const TaskList: React.FC = () => {
  const data: Todo[] = [
    {
      title: 'First Item',
      isChecked: false
    },
    {
      title: 'Second Item',
      isChecked: false,
    },
    {
      title: 'Third Item',
      isChecked: false,
    },
  ];

  const renderItem = ({ item }): any => (
    <ItemList title={item.title} />
  );

  return(
    <>
      <FlatList data={data} renderItem={renderItem} />
    </>
  )
}

export default TaskList