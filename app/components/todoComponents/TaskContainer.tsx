// Dependency React Native
import React, { useMemo, useState } from 'react'
import moment from  'moment'
import { Stack } from "react-native-spacing-system"
import { TouchableOpacity } from 'react-native'

// Context
import { TodoContext } from './TodoContext'

// Local Components
import AddTask from './AddTask'
import TaskList from './TaskList'

// Model
import { Todo } from '../../models/Todo'

// Styled Components
import { Container, StyledDate, StyledFAB, StyledInput, StyledInline, StyledButton } from './styles/Todo.styles'
import TaskInfo from './TaskInfo'

// TaskContainer Component
const TaskContainer: React.FC = () => {
  const [taskList, setTaskList] = useState<Todo[]>([])
  const [value, onChangeText] = useState('')
  let [count, setCount] = useState(0)

  const providerValue: any = useMemo(() => ({taskList, setTaskList}), [taskList, setTaskList])

  const day: String = moment().format('dddd')
  const date: String = moment().format('LL')

  const formatter = (id:number, title: string, isChecked: boolean) => {
    return {
      id: id,
      title: title,
      isChecked: isChecked
    }
  }

  const add = () => {
    taskList.push(formatter(count+1, value, false))
    //setTaskList(taskList)
    onChangeText('')
    setCount(c => c +1)
  }

  const removeTask = (i: number) => {


    // for(const data of dataUser[0].bu) { // parcours la liste de bu de l'utilisateur actuel pour supprimer la bu décocher.
    // if (data.buLabel == this.state.saveSelection[seqIdx].select) {
    //   delete data.buId // supprime la propriété id de l'élément bu
    // }
  }

  return(
    <>
      <Container>
        <StyledDate>{day} {date}</StyledDate>
        <Stack size={20} />
        <TodoContext.Provider value={providerValue}>
          <StyledInline>
            <StyledInput
              onChangeText={text => onChangeText(text)}
              value={value}
            />
            <TouchableOpacity>
              <StyledButton
                title='AJOUTER'
                color='blueviolet'
                onPress={add} />
            </TouchableOpacity>
          </StyledInline>
          <TaskInfo />
          <TaskList />
        </TodoContext.Provider>
        <StyledFAB icon="plus" onPress={() => console.log('Pressed')}/>
      </Container>
    </>
  )
}

export default TaskContainer
