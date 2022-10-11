import { DELETE, COMPLET, ADD, FILTER } from "./actionsTypes"

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
