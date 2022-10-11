import { DELETE, COMPLET, ADD, FILTER, EDIT } from "./actionsTypes"

export const handleDelete=(id)=>{
    return{
        type:DELETE,
        payload:id,
    }
}
export const handleComplete=(Id)=>{
    return{
        type:COMPLET,
        payload:Id
    }
}
export const handleAdd=(thisnew)=>{
    return{
        type:ADD,
        payload:thisnew

    }
}
export const handleFilter=()=>{
    return {
        type:FILTER}
    
}
export const handleEdit=(edit)=>{
    return{
        type:EDIT,
        payload:edit,
    }
}

