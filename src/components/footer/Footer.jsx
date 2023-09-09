import './Footer.css';
import {VisibilityFilters} from "../../store/actions";
import FilterLink from "../../containers/filterLink/FilterLink";

const Footer = ({totalTodo}) => (
  <div className='footer'>
    <div>
      <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
    </div>
    <div>
      Total: {totalTodo}
    </div>
  </div>
);

export default Footer;
