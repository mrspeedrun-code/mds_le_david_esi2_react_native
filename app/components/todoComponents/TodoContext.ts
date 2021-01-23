import { createContext } from 'react'
import { Todo } from '../../models/Todo'

export const TodoContext = createContext<Todo[]>([])

export const DoneContext = createContext<number>(0)