import { useState } from "react";
import Logo from "./Logo";
import PackingList from "./PackingList";
import Form from "./Form";
import Stats from "./Status";

function App() {
  const [items, setItems] = useState([]);

  function handleItem(item) {
    setItems((items) => [...items, item]);
  }

  function deleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function resetItems() {
    const confirmed = window.confirm("Are you sure!");
    if (confirmed) {
      setItems([]);
    }
  }

  return (
    <div className="app">
      <Logo></Logo>
      <Form addItem={handleItem}></Form>
      <PackingList
        items={items}
        deleteItem={deleteItem}
        onToggleItem={handleToggleItem}
        resetItems={resetItems}
      ></PackingList>
      <Stats items={items}></Stats>
    </div>
  );
}

export default App;
