import React from 'react'
import { connect } from 'react-redux'
import store from './redux/store'

class TodoList extends React.Component {
  handleClick(id) {
    console.log(id)
    store.dispatch({ type: 'COMPLETE', index: id - 1 })
  }

  render() {
    let todoList = this.props.todos.map(item => (
      <li onClick={this.handleClick.bind(this, item.id)}
        className={item.completed ? 'completed' : ''}key={Math.random()}>
        {item.content}
      </li>
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
