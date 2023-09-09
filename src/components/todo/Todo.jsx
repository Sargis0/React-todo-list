import './Todo.css';
import PropTypes from "prop-types";

const Todo = ({onClick, onClose, completed, text}) => {
  let todoClass = completed ? "done" : "undone";
  return (
    <li className="list-group-item">
      <div className={todoClass}>
        <div>
          <span
            className="icon"
            aria-hidden="true"
            onClick={onClick}
          >
          </span>
          <span className="text">{text}</span>
        </div>
        <button type="button" className="remove" onClick={onClose}>
          Remove
        </button>
      </div>
    </li>
  );
};

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
