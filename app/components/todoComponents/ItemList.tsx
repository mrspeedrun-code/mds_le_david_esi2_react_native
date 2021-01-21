// Dependency React Native
import React, { useState } from 'react'
import { Text } from "react-native"
import { ListItem, CheckBox, Body } from 'native-base';
import { IconButton, Colors } from 'react-native-paper';

// Model
import { Todo } from '../../models/Todo'

// Styled Components
import { styles } from './styles/Todo.styles'

// ItemList Component
const ItemList: React.FC<Todo> = (item: Todo) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false)

  const onePressed = () => {
    (!toggleCheckBox) ? setToggleCheckBox(true) : setToggleCheckBox(false)
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
          onPress={() => console.log('Pressed')}
        />
      </ListItem>
  )
}

export default ItemList