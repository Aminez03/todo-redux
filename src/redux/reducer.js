import { ADD, COMPLET, DELETE, FILTER } from "./actionsTypes";

const initstate={
   list: [
        { id:Math.random(),show:"Wake up",isDone:true},
        {id:Math.random(),show:"Go back home",isDone:false},
      ],
    
}

export const reducer=(state=initstate,action)=>{
  switch(action.type){
    case DELETE:
      return {
        ...state,list:state.list.filter(task=>task.id!==action.payload)
      };
      
    case COMPLET:
      return{
        ...state,list:state.list.map(el=>el.id===action.payload?{...el,isDone:!el.isDone}:el)
      }
    case ADD:
      return{
...state,list:[...state.list,action.payload]
      }
      case FILTER:
        return{
          ...state,list:state.list.filter(el=>el.isDone===false)
        }
      default:
        return state;
  }
}




   