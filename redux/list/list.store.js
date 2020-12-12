import {createStore} from 'redux'
import toDoReducer from './list.reducer'

const store = createStore(toDoReducer)

export default store