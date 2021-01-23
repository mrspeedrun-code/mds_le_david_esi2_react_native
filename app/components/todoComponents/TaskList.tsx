// Dependency React Native
import React, { useContext, useMemo }  from 'react'
import { SafeAreaView, FlatList, ListRenderItem } from 'react-native'

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
    <ItemList id={item.id} title={item.title} isChecked={item.isChecked}/>
  )

  return(
    <>
      <SafeAreaView style={{flex: 1}}>
        <FlatList data={data} renderItem={renderItem} />
      </SafeAreaView>
    </>
  )
}

export default TaskList