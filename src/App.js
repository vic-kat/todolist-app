import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';
import Header from './components/layout/header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
//import uuid from 'uuid';
import About from './components/pages/About';
import axios from 'axios';




//import TestComp from './components/TestComp';

class App extends Component {
  state = {
    todos: [
      // {
      //   id: uuid.v4(),
      //   title: "Feed the cats",
      //   completed: false

      // },
      // {
      //   id: uuid.v4(),
      //   title: "Return Amazon Packages",
      //   completed: false
      // },
      // {
      //   id: uuid.v4(),
      //   title: "Meet spouse",
      //   completed: false
      // },
      // {
      //   id: uuid.v4(),
      //   title: "Finish your Portfolio",
      //   completed: false
      // }
    ]
  };


componentDidMount() {
   axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
   .then(res => this.setState({todos: res.data }));
}


  // Toggle complete
  markComplete = (id) => { 
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  }

  //Delete ToDo
  delTodo = (id) => {    
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res=> this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }) );

  }
// Add todo
addTodo = (title) => {
  
axios.post('https://jsonplaceholder.typicode.com/todos', {
  title,
  completed: false
   }).then(res=>this.setState({todos: [...this.state.todos, res.data] }));
}
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete=
                  {this.markComplete} delTodo={this.delTodo} />
              </React.Fragment>
            )} />

            <Route path="/about" component={About} />

          </div>
        </div>
      </Router>
    );
  }
}

export default App;
