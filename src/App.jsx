import { useState } from "react";

import "./App.css";
import CartList_component from "./components/cart_list/CartList.component";
import SearchBox_component from "./components/search_box/SearchBox.component";
import { cat1, cat2, cat3, cat4, cat5, cat6 } from "./assets";

function App() {
  const cats = [
    {
      id: 1,
      name: "Jane",
      image: cat1,
      country: "Kenya",
      description: "A beautiful cat",
    },
    {
      id: 2,
      name: "Doe",
      image: cat2,
      country: "Germany",
      description: "Deutchland master",
    },
    {
      id: 3,
      name: "Fang Hao",
      image: cat3,
      country: "China",
      description: "nihao. wo shi mao",
    },
    {
      id: 4,
      name: "Baraka",
      image: cat4,
      country: "Tanzania",
      description: "mimi ni paka, toka TZ",
    },
    {
      id: 5,
      name: "Chemuu",
      image: cat5,
      country: "Ethiopia",
      description: "Talking to Kenyans",
    },
    {
      id: 6,
      name: "Amhara",
      image: cat6,
      country: "Eritrea",
      description: "Near the horn"
    }
  ];

  const [filteredCats, setFilteredCats] = useState(cats);

  const filterCatByCountry = (country) => {
    console.log(filteredCats);
    const newCats = cats.filter((cat) => cat.country.match(country));
    setFilteredCats(newCats);
    console.log(filteredCats);
  };

  return (
    <div className="app">
      <SearchBox_component onFilter={filterCatByCountry} />
      <CartList_component cats={filteredCats} />
    </div>
  );
}

export default App;
