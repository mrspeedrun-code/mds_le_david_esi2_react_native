// Dependency React Native
import React, { useState, useContext, useCallback } from 'react'
import { TouchableOpacity } from 'react-native'

// Context
import { TodoContext } from './TodoContext'

// Model
import { Todo } from '../../models/Todo'

// Styled Components
import { StyledInline, StyledInput, StyledButton } from './styles/Todo.styles'

// AddTodo Component
const AddTodo: React.FC = () => {
  const {taskList, setTaskList} = useContext<any>(TodoContext)
  const [value, onChangeText] = useState('')

  const formatter = (title: string, isChecked: boolean) => {
    return {
      title: title,
      isChecked: isChecked
    }
  }

  const addCall = useCallback(() => {
    taskList.push(formatter(value, false))
    onChangeText('')
  }, [])

  const add = () => {
    taskList.push(formatter(value, false))
    //setTaskList(taskList)
    onChangeText('')
  }

  return(
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
  )
}

export default AddTodo
