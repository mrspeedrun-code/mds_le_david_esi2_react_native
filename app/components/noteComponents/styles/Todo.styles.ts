import styled from 'styled-components'
import { Text, View, TextInput, Button } from "react-native"

// Styles Todo
export const Container = styled(View)`
  flex: 1;
  padding-top: 50px;
  padding-right: 20px;
  padding-left: 20px;
`

export const StyledDate = styled(Text)`
  color: black;
  font-weight: bold;
  font-size: 20px;
`

// Styles Add Todo
export const StyledInput = styled(TextInput)`
  border: 1px solid grey;
  width: 80%;
`

export const StyledButton = styled(Button)`
  color: black;
  border-color: black;
  width: 20%;
`
