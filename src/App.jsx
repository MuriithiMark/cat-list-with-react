import React from "react";
import "./App.css";
import CartList_component from "./components/cart_list/CartList.component";
import SearchBox_component from "./components/search_box/SearchBox.component";

function App() {
  return (
    <div className="app">
      <SearchBox_component />
      <CartList_component />
    </div>
  );
}

export default App;
