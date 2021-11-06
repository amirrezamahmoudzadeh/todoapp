import { useState, useEffect } from "react";
import AddItem from "./components/AddItem";
import ItemList from "./components/ItemList";
import Navbar from "./components/Navbar";
import uuid from "react-uuid";

import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

import "./App.css";

function App() {
  const [isShow, setIsShow] = useState(false);
  const [items, setItems] = useState(
    localStorage.getItem("items")
      ? JSON.parse(localStorage.getItem("items"))
      : []
  );
  const [item, setItem] = useState("");
  const [id, setId] = useState(uuid());

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const itemChangeHandler = (e) => {
    setItem(e.target.value);
  };

  const itemSubmitHandler = (e) => {
    e.preventDefault();
    if (item) {
      const newItem = {
        id: id,
        title: item,
        isDone: false,
      };

      let updatedItems = [...items, newItem];

      setItems(updatedItems);
      setItem("");
      setId(uuid());
      setIsShow(false);
    }
  };

  const deleteItemHandler = (id) => {
    let filteredItems = items.filter((item) => {
      return item.id !== id;
    });
    setItems(filteredItems);
  };

  const editHandler = (id) => {
    setIsShow(true);
    let filteredItems = items.filter((item) => {
      return item.id !== id;
    });

    let selectedItem = items.find((item) => {
      return item.id === id;
    });

    setItems(filteredItems);
    setItem(selectedItem.title);
    setId(id);
  };

  return (
    <div className="App">
      <Navbar />
      <AddItem
        isShow={isShow}
        change={itemChangeHandler}
        submit={itemSubmitHandler}
        item={item}
      />
      <ItemList
        items={items}
        deleteItem={deleteItemHandler}
        edit={editHandler}
      />
      <Fab
        color="primary"
        aria-label="add"
        onClick={() => setIsShow(!isShow)}
        sx={{
          position: "fixed",
          right: 20,
          bottom: 20,
        }}
      >
        <AddIcon />
      </Fab>
    </div>
  );
}

export default App;
