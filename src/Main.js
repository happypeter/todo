import React, { Component } from 'react';

const Header = () => (
  <div className="header">TODO</div>
)

const TodoList = () => (
  <div className="todo-list">TodoList</div>
)

const Form = () => (
  <div className="form">Form</div>
)

const Actions = () => (
  <div className="actions">Actions</div>
)

class Main extends Component {
  render() {
    return (
      <div className="main">
        <Header />
        <TodoList />
        <Form />
        <Actions />
      </div>
    );
  }
}

export default Main;
