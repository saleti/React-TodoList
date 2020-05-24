import React, { useState } from "react";
import TodoList from "./TodoList";
import "./styles.css";

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [newItem, setNewItem] = useState("");

  const handleSubmit = function() {
    if (newItem.length === 0) return;

    const newInput = {
      text: newItem,
      id: Date.now()
    };

    console.log(newInput);
    todoList.push(newInput);
    setTodoList(todoList);
    setNewItem("");
    console.log(todoList);
  };

  return (
    <>
      <div className="App">TODO list</div>
      <div>
        <label htmlFor="newtodo">Add to do item:</label>
        <input
          type="text"
          onChange={event => setNewItem(event.target.value)}
          value={newItem}
        />
        <button onClick={handleSubmit}>Add item {todoList.length + 1}</button>
      </div>
      <TodoList items={todoList} />
    </>
  );
}
