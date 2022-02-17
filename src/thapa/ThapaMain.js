import React, { useEffect, useState } from "react";

// getData function from localStorage
const getData = () => {
  const result = localStorage.getItem("Lists");
  if (result) {
    return JSON.parse(localStorage.getItem("Lists"));
  } else {
    return [];
  }
};

const ThapMain = () => {
  const [inputFeild, setInputFeild] = useState("");
  const [todos, setTodos] = useState(getData()); // call the get function
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [isEditItem, setIsEditItem] = useState(null);

  // add single item function .
  function addItems() {
    if (!inputFeild) {
    } else if (inputFeild && !toggleSubmit) {
      setTodos(
        todos.map((todo) => {
          if (todo.id === isEditItem) {
            return { ...todo, name: inputFeild };
          }
          return todo;
        })
      );
      setToggleSubmit(true);
      setInputFeild("");
      setIsEditItem(null);
    } else {
      const allInputData = {
        id: new Date().getTime().toString(),
        name: inputFeild,
      };
      setTodos([...todos, allInputData]);
      setInputFeild("");
    }
  }

  // delete single item function.
  function deleteItem(id) {
    const removeItem = todos.filter((todo) => todo.id !== id);
    setTodos(removeItem);
  }

  // remove all items function.
  function removeLists() {
    setTodos([]);
  }

  // add data to localStorage
  useEffect(() => {
    localStorage.setItem("Lists", JSON.stringify(todos));
  }, [todos]);

  // edit item function
  function editItem(id) {
    const newEditItem = todos.find((todo) => {
      return todo.id === id;
    });

    setToggleSubmit(false);
    setInputFeild(newEditItem.name);
    setIsEditItem(id);
  }

  return (
    <div>
      <input
        type="text"
        value={inputFeild}
        onChange={(e) => setInputFeild(e.target.value)}
        name=""
        placeholder="write something"
        id=""
      />

      {toggleSubmit ? (
        <button onClick={addItems}>add todo</button>
      ) : (
        <button onClick={addItems}>edit todo</button>
      )}

      <div>
        {todos.map((todo) => (
          <div key={todo.id}>
            <strong>{todo.name}</strong>
            <span
              onClick={() => editItem(todo.id)}
              style={{ color: "blue", margin: "0 10px" }}
            >
              edit
            </span>
            <span onClick={() => deleteItem(todo.id)} style={{ color: "red" }}>
              X
            </span>
          </div>
        ))}
        <button onClick={removeLists}>remove all</button>
      </div>
    </div>
  );
};

export default ThapMain;
// class='fa fa-plus add-btn' // icon
