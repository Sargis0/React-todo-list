const todoItems = JSON.parse(localStorage.getItem('todos')) || [];
export const todoItemsLength = todoItems.length;

export const todos = (state = todoItems, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, {
        id: action.id,
        text: action.text,
        completed: false
      }];

    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.id
          ?
          {...todo, completed: !todo.completed}
          :
          todo
      );
    case 'DELETE_TODO':
      return state.filter((todo => todo.id !== action.id));
    default:
      return state;
  }
}
