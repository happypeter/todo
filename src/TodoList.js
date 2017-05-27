import React from 'react'
import { connect } from 'react-redux'

class TodoList extends React.Component {
  render() {
    let todoList = this.props.todos.map(item => (
      <li key={Math.random()}>{item}</li>
    ))
    return(
      <div className="todo-list">
        <div className="container">
          <ul>
            {todoList}
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  todos: state
})

export default connect(mapStateToProps)(TodoList)
