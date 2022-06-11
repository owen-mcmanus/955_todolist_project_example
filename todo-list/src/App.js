import Item from "./item";
import "./styles/App.css";
import { useState } from "react";

function App() {
  const [data, setData] = useState([
    { text: "Walk the dog", done: false },
    { text: "Eat the cat", done: true },
    { text: "Make the food", done: false },
  ]);
  const [newItem, setNewItem] = useState("");
  return (
    <div className="App">
      <h1 id="title">Todo List</h1>

      <ul>
        {data.map((e, i) => (
          <Item
            key={i}
            text={e.text}
            done={e.done}
            updateDone={(value) => {
              let newData = data;
              newData[i].done = value;
              setData([...newData]);
            }}
            removeElement={() => {
              let newData = data;
              newData.splice(i, 1);
              setData([...newData]);
            }}
          />
        ))}
      </ul>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (newItem) {
            setData([...data, { text: newItem, done: false }]);
            setNewItem("");
          }
        }}
      >
        <input
          placeholder="Add Item..."
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <svg
          onClick={() => {
            if (newItem) {
              setData([...data, { text: newItem, done: false }]);
              setNewItem("");
            }
          }}
          className={newItem ? "" : "disabled"}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          width="27"
        >
          <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" />
        </svg>
      </form>
    </div>
  );
}

export default App;
