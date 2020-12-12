import React,{useState,Fragment} from 'react'
import {connect,useDispatch} from 'react-redux'
import listActions from '../../redux/list/list.action'
// import {GetStaticProps} from 'next'


// export const GetStaticProps = async (context) =>{
//   return {
//     props
//   }
// }

const  EditForm = (props) => {
  
  const [Updatedvalues,setUpdatedvalues] = useState({
    updatedId:props.props.shouldBeEdited.id,
    updatedDescription:props.props.shouldBeEdited.description,
  })
  const dispatch = useDispatch()
  const { updatedId,updatedDescription } = Updatedvalues
  const handleUpDateChange = (name) =>(event) =>{setUpdatedvalues({...Updatedvalues,[name]:event.target.value})}
    return (
          // <div className="form-group">
          <Fragment>
          <label htmlFor="todotxt">Update Your Task</label>
            <input 
            type="text" 
            className="form-control" 
            id="txt3" 
            hidden
            placeholder="Add Your To Do Description"
            value={updatedId}
            onChange={handleUpDateChange("updatedId")}
            />
            <input 
            type="text" 
            className="form-control" 
            id="txt2" 
            placeholder="Add Your To Do Description"
            value={updatedDescription}
            onChange={handleUpDateChange("updatedDescription")}
            />
          <button className="btn btn-primary" onClick={()=>{
            dispatch(listActions.editList(updatedId,updatedDescription))
          }}>Update</button>
          </Fragment>
        // </div> 
    )
}

const mapDispatchToProps = dispatch =>{
  return {
    addList : ()=>dispatch(addList())
  }
}

export const GetStaticProps = state =>{
  return {
    props:{
      noOfList:state.noOfList,
      list:state.list,
      shouldBeEdited:state.shouldBeEdited
    }
    
  }
}
export default connect(
  GetStaticProps,
  mapDispatchToProps
)(EditForm)