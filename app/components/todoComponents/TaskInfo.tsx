import React, { useContext, useCallback } from 'react'
import { View, Text } from 'react-native'

// Context
import { TodoContext } from './TodoContext'

// Styled Components
import { styles } from './styles/Todo.styles'

const TaskInfo: React.FC = () => {
  const {taskList, setTaskList} = useContext<any>(TodoContext)

  return(
    <View style={styles.boxContainer}>
      <View style={styles.box}>
        <Text style={{fontWeight: 'bold'}}>{taskList.length}</Text>
        <Text>Tâche créées</Text>
      </View>

      <View style={styles.box}>
        <Text style={{fontWeight: 'bold'}}>2</Text>
        <Text style={{textAlign: 'left'}}>Tâches terminées</Text>
      </View>
    </View>
  )
}

export default TaskInfo