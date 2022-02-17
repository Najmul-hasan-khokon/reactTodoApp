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

const TodoWithThapa = () => {
  const [inputFeild, setInputFeild] = useState("");
  const [lists, setLists] = useState(getData()); // call the get function

  // add single item function .
  function addItems() {
    if (!inputFeild) {
    } else {
      setLists([...lists, inputFeild]);
      setInputFeild("");
    }
  }

  // delete single item function.
  function deleteItem(id) {
    const removeItem = lists.filter((listItem, index) => index !== id);
    setLists(removeItem);
  }

  // remove all items function.
  function removeLists() {
    setLists([]);
  }

  // add data to localStorage
  useEffect(() => {
    localStorage.setItem("Lists", JSON.stringify(lists));
  }, [lists]);

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
      <button onClick={addItems}>add todo</button>

      <div>
        {lists.map((list, index) => (
          <div key={index}>
            <strong>{list}</strong>
            <span onClick={() => deleteItem(index)} style={{ color: "red" }}>
              {" "}
              X
            </span>
          </div>
        ))}
        <button onClick={removeLists}>remove all</button>
      </div>
    </div>
  );
};

export default TodoWithThapa;
// class='fa fa-plus add-btn' // icon
