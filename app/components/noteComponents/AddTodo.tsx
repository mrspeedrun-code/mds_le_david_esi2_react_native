import React from 'react'
import { Alert } from "react-native"
import { StyledInline, StyledInput, StyledButton } from './styles/Todo.styles'

const AddTodo: React.FC = () => {

  return(
    <StyledInline>
      <StyledInput />
        <StyledButton
          title="AJOUTER"
          color="blueviolet"
          onPress={() => Alert.alert('Right button pressed')}
        />
    </StyledInline>
  )
}

export default AddTodo
