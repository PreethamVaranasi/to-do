import React from 'react'
import listActions from '../../redux/list/list.action'
import {connect,useDispatch} from 'react-redux'

const List = (props)=> {
  const dispatch = useDispatch()
  console.log(props.list,"FROM LISTJS")
  const editTask = (id)=>{
    console.log(id,"ID FROM EDIT TASK FUNCTION")
  }
    return (
        <div>
          {/* <p>Number of taks-{props.list.length}</p> */}
          {/* <p>Boolean-{props.edit}</p> */}
        <table className="table">
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Description</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {props.list.sort((a, b) => a.id > b.id ? 1 : -1)
            .map((post) => (
              <tr key={post.id}>
              <th scope="row">{post.id}</th>
              <td>{post.description}</td>
              <td><button onClick={()=>dispatch(listActions.shouldEdit(post.id,post.description))}>Edit</button>
              <button onClick={()=>dispatch(listActions.deleteList(post.id))}>Delete</button></td>
            </tr>
              // <li>{post.description}</li>
              // <button onClick={()=>dispatch(listActions.editList(post.id,post.description))}>Edit</button>
            ))}
          </tbody>
        </table>

        </div>
    )
}

const mapStateToProps = state =>{
  return {
    noOfList:state.noOfList,
    shouldBeEdited:state.shouldBeEdited,
    edit:state.edit,
    list:state.list
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    addList : ()=>dispatch(addList())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)