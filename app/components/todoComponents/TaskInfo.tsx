// Dependency React Native
import React, { useContext, useMemo } from 'react'
import { View, Text } from 'react-native'

// Context
import { TodoContext, DoneContext } from './TodoContext'

// Styled Components
import { styles } from './styles/Todo.styles'

// Model
import { Todo } from '../../models/Todo'

// TaskInfo Components
const TaskInfo: React.FC = () => {
  const {taskList, setTaskList} = useContext<any>(TodoContext)
  let {doneCount, setDoneCount} = useContext<any>(DoneContext)
  const done = useMemo(() => doneCount, [doneCount])


  return(
    <View style={styles.boxContainer}>
      <View style={styles.box}>
        <Text style={{fontWeight: 'bold'}}>{taskList.length}</Text>
        <Text>Tâche créées</Text>
      </View>

      <View style={styles.box}>
        <Text style={{fontWeight: 'bold'}}>{done}</Text>
        <Text style={{textAlign: 'left'}}>Tâches terminées</Text>
      </View>
    </View>
  )
}

export default TaskInfo