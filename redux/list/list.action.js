import {ADD_TODO_LIST, DELETE_TODO_LIST,SHOULD_BE_EDIT_TODO_LIST,EDIT_TODO_LIST} from './list.type'

export default {
    addList: (description) =>{
        return {
            type:ADD_TODO_LIST,
            description
        }
    },
    deleteList : (id) =>{
        return {
            type:DELETE_TODO_LIST,
            id
        }
    },
    shouldEdit:(id,description)=>{
        return {
            type:SHOULD_BE_EDIT_TODO_LIST,
            id,
            description
        }
    },
    editList : (id,description)=>{
        return {
            type:EDIT_TODO_LIST,
            id,
            description
        }
    }
}