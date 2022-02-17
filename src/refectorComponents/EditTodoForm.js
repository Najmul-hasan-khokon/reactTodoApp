import React from "react";

const EditTodoForm = ({
  currentTodo,
  setIsEditing,
  handleEditInputChange,
  handleEditFormSubmit,
}) => {
  return (
    <form onSubmit={handleEditFormSubmit}>
      {/* we've added an h2 element */}
      <h2>Edit Todo</h2>
      {/* also added a label for the input */}
      <label htmlFor="editTodo">Edit todo: </label>
      {/* notice that the value for the update input is set to the currentTodo state */}
      {/* also notice the handleEditInputChange is being used */}
      <input
        name="editTodo"
        type="text"
        placeholder="Edit todo"
        value={currentTodo.text}
        onChange={handleEditInputChange}
      />
      {/* here we added an "update" button element - use the type="submit" on the button which will still submit the form when clicked using the handleEditFormSubmit function */}
      <button type="submit">Update</button>
      {/* here we added a "Cancel" button to set isEditing state back to false which will cancel editing mode */}
      <button onClick={() => setIsEditing(false)}>Cancel</button>
    </form>
  );
};

export default EditTodoForm;
