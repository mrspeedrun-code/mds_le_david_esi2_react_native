// Dependency React Native
import React from 'react'
import moment from  'moment'
import { Stack } from "react-native-spacing-system"

// Todo Components
import AddTodo from './AddTodo'

// Styled Components
import { Container, StyledDate, StyledFAB } from './styles/Todo.styles'
import TodoList from './TodoList'

// Todo Component
const Todo: React.FC = () => {
  const day: String = moment().format('dddd')
  const date: String = moment().format('LL')

  return(
    <>
      <Container>
        <StyledDate>{day} {date}</StyledDate>
        <Stack size={20} />
        <AddTodo />
        <TodoList />
        <StyledFAB
          icon="plus"
          onPress={() => console.log('Pressed')}
       />
      </Container>
    </>
  )

}

export default Todo
