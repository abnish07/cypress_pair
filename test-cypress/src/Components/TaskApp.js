import React, {Component} from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import TaskForm from './TaskForm'
import TaskList from './TaskList'


export default class TodoApp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: [
        {
          title:"Rice",
          id:100,
          status:false
        }
        // {
        //   title:"Rice",
        //   id:101,
        //   status:false
        // }
      ],
      inputValue: ""
    }
  }

  handleChange=(e)=>{
    this.setState({
      inputValue:e.target.value
    })
  }

  handleSubmit=(e)=>{
    
    e.preventDefault()
    let item = {
      title: this.state.inputValue ,
      id:this.state.todos.length,
      status:false
    }
    this.setState({
      todos: [...this.state.todos,item]
    })

  }
  render () {
    console.log(this.state.todos)
    return (
      <Router>
        <div className="container-fluid text-center">
          <header className="p-2">
            <h1>Tasks</h1>
            <TaskForm value={this.state.inputValue} 
                      handleChange={this.handleChange}
                      handleSubmit={this.handleSubmit}
            />
          </header>
          <section className="mt-2">
            <TaskList todos={this.state.todos} />
          </section>
        </div>
      </Router>
    )
  }
}