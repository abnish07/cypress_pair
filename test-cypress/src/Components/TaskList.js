import React from 'react'

const TaskItem = props =>
  <li>
    <div >
      <label>
        {props.input}
      </label>
    </div>
    <button value="button" type ="button" className="btn btn-danger">delete</button>
  </li>

const TaskList = props =>
  <ul className="task-list">
    {props.todos.map(todo => <TaskItem  key={todo.id} input={todo.title}/>)}
  </ul>

export default TaskList