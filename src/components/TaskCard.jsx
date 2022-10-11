import React from 'react'
import { useDispatch } from 'react-redux'
import { handleComplete, handleDelete } from '../redux/actions'
import Edit from './Edit'

const TaskCard = ({task}) => {
  const dispatch=useDispatch()
  

  return (
    <div>
        <h1 id={task.isDone?"theOne":null}>{task.show}</h1>
        <button onClick={()=>dispatch(handleDelete(task.id))}>delete</button>
        <button onClick={()=>dispatch(handleComplete(task.id))}>{task.isDone?"Undo":"Complete"}</button>

        {/* <button task={task}>Edit</button> */}
        <Edit task={task}/>

 
        <hr/>

    </div>
  )
}

export default TaskCard