import React from 'react'

const TaskForm = props =>
<>
  <form  >
    <input
      value={props.value}
      autoFocus
      type='text'
      className="p-2 rounded border task-input"
      onChange={props.handleChange}
      placeholder="Add something?"/>

      {/* <type onSubmit=></type> */}
  </form>
     <button onClick={props.handleSubmit}>submit</button>
  </>

  export default TaskForm