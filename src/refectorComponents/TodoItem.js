import React from "react";

const TodoItem = ({ todo, handleEditClick, handleDeleteClick }) => {
  return (
    <li key={todo.id}>
      {todo.text}
      {/* we are passing the entire todo object to the handleEditClick function*/}
      <button onClick={() => handleEditClick(todo)}>Edit</button>
      <button onClick={() => handleDeleteClick(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
