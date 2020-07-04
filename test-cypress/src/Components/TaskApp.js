import React, {Component} from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import TaskForm from './TaskForm'
import TaskList from './TaskList'
import { loadData, addTask } from '../utils/axios'


export default class TodoApp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: [],
      inputValue: ""
    }
  }

  handleChange=(e)=>{
    this.setState({
      inputValue:e.target.value
    })
  }

  componentDidMount(){
    loadData().then(res=>res.data).then(res=>{
      this.setState({
        todos: res
      })
    })
    .catch((error)=>{

    })
  }

  handleSubmit=(e)=>{
    e.preventDefault()
    let item = {
      title:this.state.inputValue,
      id:this.state.todos.length,
      status:false
    }
    console.log("item")
    
    addTask(item).then(res=>{
      res = res.data
      this.setState({
        todos: [...this.state.todos, res]
      })
    })
  }
  handleDelete=(id)=>{
    
    let deleteItem = [...this.state.todos]
    // console.log("id", id)
    console.log("deleteItem", deleteItem[0])
    let filterItem = deleteItem.filter((item)=>(item.id!== id))
    // console.log("filterItem", filterItem)
    this.setState({
      todos: filterItem
    })
  }

  render () {
    // console.log(this.state.todos)
    return (
      <Router>
        <div className="container-fluid text-center">
          <header className="p-2">
            <h1>Tasks</h1>
            <TaskForm value={this.state.inputValue} 
                      handleChange={this.handleChange}
                      handleSubmit={(e)=>this.handleSubmit(e)}
                      
            />
          </header>
          <section className="mt-2">
            <TaskList todos={this.state.todos} handleDelete = {this.handleDelete} />
          </section>
        </div>
      </Router>
    )
  }
}