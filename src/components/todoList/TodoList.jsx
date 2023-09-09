import PropTypes from "prop-types";
import Todo from "../todo/Todo";
import {useEffect} from "react";

const TodoList = ({todos, toggleTodo, handleClose}) => {
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  return (
    <ul className="list-group">
      {todos.map((todo, index) => (
        <Todo key={index} {...todo} onClick={() => toggleTodo(todo.id)} onClose={() => handleClose(todo.id)}/>
      ))}
    </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired
}

export default TodoList;
