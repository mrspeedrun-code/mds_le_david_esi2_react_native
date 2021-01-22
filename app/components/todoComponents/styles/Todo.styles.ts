// Dependency React Native
import styled from 'styled-components'
import { Text, View, TextInput, Button, StatusBar, StyleSheet } from "react-native"
import { FAB } from 'react-native-paper'
import { Label } from 'native-base'

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
export const StyledInline = styled(View)`
  flex-direction: row;
`

export const StyledInput = styled(TextInput)`
  border: 1px solid #D0D0D0;
  width: 80%;
`

export const StyledButton = styled(Button)`
  color: black;
  border-color: black;
  width: 20%;
`

// Style Floating Action Button
type props = { icon: string, onPress: any };
export const StyledFAB: React.FC<props> = styled(FAB)`
    margin: 0;
    position: absolute;
    right: 15px;
    bottom: 15px;
    background-color: orange;
`
// Styles styles
export const styles = StyleSheet.create({
  title: {
    fontSize: 14,
  },
  boxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  box: {
    paddingTop: 20,
    paddingBottom: 10
  },
  inner: {
    backgroundColor: "#eee",
  },
  innerLeft: {
    backgroundColor: "#eee",
  }
})
