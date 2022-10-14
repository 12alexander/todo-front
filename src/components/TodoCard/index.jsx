function TodoCard ({stateTask}){    
    return(
        <>
        <h2>listado de tareas</h2>
        {
            stateTask.map((task, index)=>(<h3 key={index}>{task.task}</h3>))
        }                
        </>
    )
}

export {TodoCard}