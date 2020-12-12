import {ADD_TODO_LIST,DELETE_TODO_LIST,SHOULD_BE_EDIT_TODO_LIST,EDIT_TODO_LIST} from './list.type'

const initialState = {
    noOfList:3,
    list:[
        {id:1,description:'Wake up early in the morning'},
        {id:2,description:'Make your own breakfast'},
        {id:3,description:'Moving to office'}
    ],
    shouldBeEdited:{}
}


const toDoReducer = (state = initialState,action) =>{
    // trySwitch(state,action)
    switch(action.type){
        case ADD_TODO_LIST:{
            const list = state.list
            //console.log(action.description.description,"DESCRIPTION")
            list.push({id:list.length+1,description:action.description.description})
            //console.log(state.edit)
            return{
            ...state,
            noOfList:list.length+1
            }
        }
        case DELETE_TODO_LIST:{
            //console.log(action.id,"ID")
            const list = state.list
            const filtered = list.filter((item)=>item.id !== action.id)
            //console.log(filtered,"Updated List")
            return{
                ...state,
                list:filtered
            }
        }
        case EDIT_TODO_LIST: {
            // console.log(action.id,"SHOULD EDIT ID")
            // console.log(action.description,"SHOULD EDIT Description")
            const list = state.list
            const filtered = list.filter((item)=>item.id !== action.id)
            // const newObject = {id:filtered.id,description:action.description}
            filtered.push({id:action.id,description:action.description})
            // const toBeEdited = asyncEdit(list,action)
            // console.log(toBeEdited,"FROM EDIT FUNCTION")
            // state.list = localList
            //state.list = localList
            // toBeEdited.description = "EDITED TASK"
            return{
                ...state,
                shouldBeEdited:{},
                list:filtered
            }
        }
        case SHOULD_BE_EDIT_TODO_LIST:{
            // const shouldEditTask = state.shouldBeEdited
            //const object = state.shouldBeEdited
            // list.push({id:action.id})
            // console.log(state.shouldBeEdited,"FROM EDIT FUNTION ADDITION")
            return {
                ...state,
                shouldBeEdited:{id:action.id,description:action.description}
            }
        }
        default:return state
    }
}

// const asyncEdit = async (list,action) =>{
//     const toBeEdited = await list.find((item)=> item.id === action.id)
//     return toBeEdited
// }

export default toDoReducer