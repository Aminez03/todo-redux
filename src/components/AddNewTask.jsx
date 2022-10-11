import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { handleAdd, handleFilter } from '../redux/actions';

function AddNewTask() {
    const dispatch=useDispatch()
    const [first, setFirst] = useState("")
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        const theObject = {
            id: Math.random(),
            show:first,
            isDone: false,
          };
        first.trim()===""?alert("write something"):
        dispatch(handleAdd(theObject));
        setFirst("")
    }
    
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={first} onChange={e=>setFirst(e.target.value)} />
            <button type='submit'>Add</button>
        </form>
        <button onClick={()=>dispatch(handleFilter())}>Filter</button>
    </div>
  )
}

export default AddNewTask