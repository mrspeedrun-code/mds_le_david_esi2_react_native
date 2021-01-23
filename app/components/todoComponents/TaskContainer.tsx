// Dependency React Native
import React, { useMemo, useState } from 'react'
import moment from  'moment'
import { Stack } from "react-native-spacing-system"
import { TouchableOpacity } from 'react-native'

// Context
import { DoneContext, TodoContext } from './TodoContext'

// Local Components
import TaskList from './TaskList'

// Model
import { Todo } from '../../models/Todo'

// Styled Components
import { Container, StyledDate, StyledFAB, StyledInput, StyledInline, StyledButton } from './styles/Todo.styles'
import TaskInfo from './TaskInfo'

// Todo Formatter
const formatter = (id: any, title: string, isChecked: boolean): Todo => {
  return {
    id: id.toString(), // convert id to string because cellKey warning
    title: title,
    isChecked: isChecked
  }
}

// TaskContainer Component
const TaskContainer: React.FC = () => {
  const [shouldShow, setShouldShow] = useState(false);
  const [taskList, setTaskList] = useState<Todo[]>([])
  const [value, onChangeText] = useState('')
  let [count, setCount] = useState(0)
  let [doneCount, setDoneCount] = useState(0)

  const providerValue: any = useMemo(() => ({taskList, setTaskList}), [taskList, setTaskList])

  const day: String = moment().format('dddd')
  const date: String = moment().format('LL')

  const addTask = (): void => {
    setTaskList(oldArray => [...oldArray, formatter(count+1, value, false)])
    onChangeText('') // clean la valeur de l'input
    setCount(c => c +1)
  }

  const hideShow = (): void => {
    
  }

  return(
    <>
      <Container>
        <StyledDate>{day} {date}</StyledDate>
        <Stack size={20} />
        <TodoContext.Provider value={providerValue}>
          <DoneContext.Provider value={{doneCount, setDoneCount}}>
            {shouldShow ? (
              <StyledInline>
                <StyledInput onChangeText={text => onChangeText(text)} value={value}/>
                <TouchableOpacity>
                  <StyledButton title='AJOUTER' color='blueviolet' onPress={addTask} />
                </TouchableOpacity>
              </StyledInline>
            ) : null}
            <TaskInfo />
            <TaskList />
          </DoneContext.Provider>
        </TodoContext.Provider>
        <StyledFAB icon="plus" onPress={() => setShouldShow(!shouldShow)}/>
      </Container>
    </>
  )
}

export default TaskContainer
