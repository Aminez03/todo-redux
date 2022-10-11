import React from 'react'
import TaskCard from './TaskCard'
import {  useSelector } from 'react-redux';


function TaskList() {
  const list=useSelector(state=>state.list)
  
  return (
    <div>
        {React.Children.toArray(list.map(el=><TaskCard task={el} />))}

    </div>
  )
}

export default TaskList