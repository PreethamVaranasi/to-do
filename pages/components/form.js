import React,{useState,Fragment} from 'react'
import {connect,useDispatch} from 'react-redux'
import listActions from '../../redux/list/list.action'
import EditForm from './editForm'

const Form = (props)=> {
  const [values,setvalues] = useState({
    description:"",
  })
  
  const dispatch = useDispatch()
  const { description } = values
  // const { updatedId,updatedDescription } = Updatedvalues
  const handleChange = (name) =>(event) =>{setvalues({...values,[name]:event.target.value})}
  // const tobeEditedTask = props.list.filter((item)=>if) 
  
    return (
        <div>
          <div className="form-group">
            {<p>{(Object.keys(props.shouldBeEdited).length) === 0 ? 
              <Fragment>
              <label htmlFor="todotxt">Add Your List</label>
              <input 
              type="text" 
              className="form-control" 
              id="todotxt" 
              placeholder="Add Your To Do Description"
              value={description}
              onChange={handleChange("description")}
              />
            <button className="btn btn-primary" onClick={()=>{
              dispatch(listActions.addList({
                description
              }))
            }}>Add List</button>
          </Fragment>
            : 
            <EditForm/>
            
            }</p>}
          </div>
        </div>
    )
}

const mapStateToProps = state =>{
  return {
    noOfList:state.noOfList,
    list:state.list,
    shouldBeEdited:state.shouldBeEdited
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
)(Form)