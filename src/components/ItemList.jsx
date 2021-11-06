import React from "react";
import Item from "./Item";

function ItemList({ items, edit, deleteItem}) {
  return (
    <>
      {items.map((item) => {
        return (
          <Item
            key={item.id}
            item={item}
            delete={() => deleteItem(item.id)}
            edit={() => edit(item.id)}
          />
        );
      })}
    </>
  );
}

export default ItemList;
