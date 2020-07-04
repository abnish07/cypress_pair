import React from 'react'

const TaskForm = props =>
<>{
  console.log(props)
}
  <form onSubmit = {()=>props.handleSubmit()}>
    <input
      value={props.value}
      autoFocus
      type='text'
      className="p-2 rounded border task-input"
      onChange={props.handleChange}
      placeholder="Add something?"/>
      
      {/* <type onSubmit=></type> */}
  </form>
     {/* <button className="btns btn-success" type="submit" value="submit" onClick={props.handleSubmit}>submit</button> */}
  </>

  export default TaskForm