import React from "react";
import PropTypes from "prop-types";

function TodoList(props) {
  return (
    <ul>
      {props.items.map(item => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  items: PropTypes.array
};

export default TodoList;
