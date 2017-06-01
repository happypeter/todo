import React from 'react'
import { connect } from 'react-redux'
import store from './redux/store'

class TodoList extends React.Component {
  handleClick(id) {
    console.log(id)
    store.dispatch({ type: 'COMPLETE', index: id - 1 })
  }
  render() {
    let todos
    if(this.props.visibilityFilter === 'SHOW_COMPLETED'){
      todos = this.props.todos.filter(item => item.completed)
    }
    if(this.props.visibilityFilter === 'SHOW_ALL'){
      todos = this.props.todos
    }
    let todoList = todos.map(item => (
      <li onClick={() => this.props.onTodoClick(item.id)}
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
  todos: state.todos,
  visibilityFilter: state.visibilityFilter
})

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch({ type: 'COMPLETE', index: id - 1 })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
