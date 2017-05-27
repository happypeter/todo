let todos = [
  { id: 1, content: "hello1", completed: false },
  { id: 2, content: "hello2", completed: false }
]

function rootReducer(state=todos, action) {
  switch (action.type) {
    case 'COMPLETE':
      console.log(action.type, action.index)
      const i = action.index
      return [...state.slice(0,i), { ...state[i], completed: true }, ...state.slice(i + 1)]
    default:
      return state
  }
  return state
}

export default rootReducer
