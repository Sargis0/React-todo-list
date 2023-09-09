import PropTypes from "prop-types";
import './Link.css'

const Link = ({active, children, onClick}) => {
  return (
    <button
      onClick={onClick}
      disabled={active}
      className="filter-btn"
      style={{
        marginLeft: '4px'
      }}
    >
      {children}
    </button>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link;
