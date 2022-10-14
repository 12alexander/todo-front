import { useState } from "react";
import {CreateTask} from "../../api/task"

function TodoSearch({state, setState}){
    const [dataTask,setDataTask] = useState("");
    const handleClick = async ()=>{        
        await CreateTask({user:"alex",task:dataTask});
        setState([...state,{user:"alex",task:dataTask}]);        
    }
return(
    <>
    <input type="text" placeholder="lavar la ropa" onChange={(e)=>setDataTask(e.target.value)}/>
    <button onClick={()=> handleClick()}>+</button>
    </>
)
}

export {TodoSearch};