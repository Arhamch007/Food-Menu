import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ["all",...new Set((items.map((item)=>item.category)))];


function App() {
  const [menuItems,setMenuItems]=useState(items);
  const [categories,setCategories]=useState(allCategories);

  const filteredData= (category)=>{
    if (category === "all"){
      setMenuItems(items);
      return;
    }
    const newCategory= items.filter((item)=>item.category===category)
    setMenuItems(newCategory);
  }


  return <section className="menu section">
    <h2 className="title">Our Menu</h2>
    <div className="underline"></div>
    <Categories filteredData = {filteredData} categories={categories} />
    <Menu items={menuItems}/>
  </section>;
}

export default App;
