// Dependency React Native
import styled from 'styled-components'
import { Text, View, TextInput, Button, StatusBar, StyleSheet } from "react-native"
import { FAB } from 'react-native-paper';

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
export const StyledFAB = styled(FAB)`
    margin: 0;
    position: absolute;
    right: 15;
    bottom: 15;
    background-color: orange;
`
// Styles styles
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: 'white',
  },
  title: {
    fontSize: 14,
  },
});
