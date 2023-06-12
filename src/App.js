import './App.css';
import React, { Component } from "react";
import uniqid from "uniqid"; //function will allow generation of unique id for new element
import Overview from "./components/Overview";
class App extends Component {
  constructor() { //no props because we don't pass anything in
    super(); 
    this.state = { //we do however maintain a state and initialize current state of task.text as ""
      task: { 
        text: '', //current task object of state that is represented by text string (initial value of task.text is empty string)
        id: uniqid() //generates a unique id for each task in the array 
      }, 
      tasks: [], //current tasks (object for tasks) is set to empty array 
       
    };
  }

  handleChange = (e) => { //this is a class property that holds a function (handlechange)
    this.setState({
      task: { //sets current task in state to what is typed into input field 
        text: e.target.value, //set as the input value (which is task.text)
        id: this.state.task.id,
      }
    })
  }

  onSubmitTask = (e) => {
    e.preventDefault(); //prevent default behavior of refreshing form completely (want to store state values)
    this.setState({
      tasks: this.state.tasks.concat(this.state.task), //adds current tasks to current list of tasks
      task: { 
        text: "", //resets the text field 
        id: uniqid(),
      }
    })
  }

  handleDeleteTask = (taskId) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => task.id !== taskId)
    }))
  };



  render() {
    const { task, tasks } = this.state; //destructuring 

    return(
      <div>
        <form> 
          <label htmlFor="taskInput">Enter task</label>
          <input onChange={this.handleChange} value={task.text} type="text" id="taskInput"/>
          <button type="submit" onClick={this.onSubmitTask}>Submit Task</button> 
        </form>
        <Overview tasks={tasks} onDeleteTask={this.handleDeleteTask}></Overview>  
      </div>
    )
  }


}
export default App;

//initial tasks prop value given to Overview is the empty array given in the state of the App 
