import './AddTodo.css';
import {addTodo} from "../../store/actions";
import {connect} from "react-redux";
import {useContext} from "react";
import {TotalTodoContext} from "../../App";

const AddTodo = ({dispatch}) => {
  const [totalTodo, setTotalTodo] = useContext(TotalTodoContext);
  let input;

  return (
    <div>
      <form
        className='form-inline'
        onSubmit={(event) => {
          event.preventDefault();
          if (!input.value.trim()) return;
          dispatch(addTodo(input.value));
          input.value = '';
          setTotalTodo(totalTodo + 1);
        }}
      >
        <input
          className='form-control'
          ref={node => (input = node)}
          placeholder='Add a new todo...'
        />
        <button className='btn btn-lg btn-success add-todo' type='submit'>
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default connect()(AddTodo);
