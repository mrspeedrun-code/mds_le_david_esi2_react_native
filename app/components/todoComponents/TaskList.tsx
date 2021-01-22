// Dependency React Native
import React, { useContext, useEffect, useCallback, useState, useMemo }  from 'react'
import { Text, FlatList, ListRenderItem, ScrollView  } from 'react-native'

// Context
import { TodoContext } from './TodoContext'

// Local Component
import ItemList from './ItemList'

// Model
import { Todo } from '../../models/Todo'

// TaskList Component
const TaskList: React.FC = () => {
  const {taskList, setTaskList} = useContext<any>(TodoContext)
  const data = useMemo(() => taskList, [taskList])

  const renderItem: ListRenderItem<Todo> = ({ item }) => (
    <ItemList title={item.title} isChecked={item.isChecked} />
  )

  return(
    <>
      <Text>{taskList.title}</Text>
      <ScrollView>
        <FlatList data={data} renderItem={renderItem} />
      </ScrollView>
    </>
  )
}

export default TaskList