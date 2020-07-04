import React from 'react'

// const {handleDelete} = props
const TaskItem = props =>
  <li>
    <div >
      <label>
        {props.data.title}
        {/* {props.id} */}
      </label>
    </div>
    <button value="button" id ={props.data.id} type ="button" className="btn btn-danger newbtn" onClick={()=>{props.handleDelete(props.data.id)}}>delete</button>
  </li>

const TaskList = props =>
{
  console.log(props.todos)
  return (

  <ul className="task-list">
    {props.todos.map(todo => <TaskItem  
    key={todo.id} 
    data={todo} 
    handleDelete={props.handleDelete}/>)}
  </ul>
  )
}


export default TaskList