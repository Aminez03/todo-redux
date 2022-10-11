import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { handleEdit } from '../redux/actions';

const Edit = ({task}) => {
const [show, setShow] = useState(task.show)
console.log(show)
const dispatch=useDispatch()

  
  const handleSubmit= (e) =>{
    e.preventDefault();
    const Edit={
      id:task.id,show
    };
    dispatch(handleEdit(Edit))
}
  return (
    <div>
        <form  onSubmit={handleSubmit}>
        <input type="text" value={show} onChange={e=>setShow(e.target.value)}/>
      
          <button id='btn' type="submit">edid</button>
          </form>
          
    </div>
  )

}

export default Edit