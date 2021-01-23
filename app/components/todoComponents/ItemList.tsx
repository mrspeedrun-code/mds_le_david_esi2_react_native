// Dependency React Native
import React, { useState, useContext, useMemo } from 'react'
import { Text } from "react-native"
import { ListItem, CheckBox, Body } from 'native-base';
import { IconButton, Colors } from 'react-native-paper';

// Context
import { TodoContext } from './TodoContext'

// Model
import { Todo } from '../../models/Todo'

// Styled Components
import { styles } from './styles/Todo.styles'

// ItemList Component
const ItemList: React.FC<Todo> = (item: Todo, {getId}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const {taskList, setTaskList} = useContext<any>(TodoContext)

  const onePressed = () => {
    if (!toggleCheckBox) {
      setToggleCheckBox(true)
    } else {
      setToggleCheckBox(false)
    }
  }

  const removeItem = () => {
    setTaskList(t => t.filter(idx => idx.id !== item.id))
  }

  return(
    <ListItem>
      <CheckBox checked={toggleCheckBox}
        onPress={() => onePressed()}
        style={{marginRight:20}}
      />
      <Body>
        <Text style={styles.title}>{item.title}</Text>
      </Body>
      <IconButton
          icon="delete"
          color={Colors.black}
          size={20}
          onPress={removeItem}
        />
      </ListItem>
  )
}

export default ItemList