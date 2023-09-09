import TodoList from "../../components/todoList/TodoList";
import {connect} from "react-redux";
import {handleClose, toggleTodo, VisibilityFilters} from "../../store/actions";
import './TodoList.css'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
}

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  handleClose: id => dispatch(handleClose(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
