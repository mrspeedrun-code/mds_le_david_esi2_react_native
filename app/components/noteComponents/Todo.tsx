import React from 'react'
import { View, Button, Alert } from "react-native"
import moment from  'moment'
import { Container, StyledDate, StyledInput, StyledButton } from './styles/Todo.styles'
import { Stack } from "react-native-spacing-system";

const Todo: React.FC = () => {
  const day: String = moment().format('dddd')
  const date: String = moment().format('LL')

  console.log(date)
  return(
    <>
      <Container>
        <StyledDate>{day} {date}</StyledDate>
        <Stack size={20} />
        <View style={{ flexDirection:'row' }}>
          <StyledInput />
          <StyledButton
          title="AJOUTER"
          color="blueviolet"
          onPress={() => Alert.alert('Right button pressed')}
        />
        </View>

      </Container>
    </>
  )

}

export default Todo
