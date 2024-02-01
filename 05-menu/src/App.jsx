import { useState } from "react";
import Title from "./Title";
import data from "./data";
import Menu from "./Menu";
import Categories from "./Categories";
import menu from "./data";

// const tempCategories = data.map((item) => {
//   item.category;
// });
// const tempSet = new Set(tempCategories);
// const tempItems = ["all", ...tempSet];

const allCategories = ["all", ...new Set(data.map((item) => item.category))];

const App = () => {
  const [items, setItems] = useState(data);
  const [categories, setCategories] = useState(allCategories);
  const filterItems = (category) => {
    if (category === "all") {
      setItems(menu);
      return;
    }
    const newItems = data.filter((item) => item.category === category);
    setItems(newItems);
  };
  return (
    <main>
      <section className="menu">
        <Title text=" Our Menu" />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={items} />
      </section>
    </main>
  );
};
export default App;
