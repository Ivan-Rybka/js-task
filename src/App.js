import React, { useEffect, useState } from 'react';
import './App.css';
import json from "./products.json";
import SortBlock from './components/SortBlock';
import Body from "./components/body";

function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(json.products);
    }, []);

    function sortDescendingArray() {
        let sortedProducts = [...products].sort((a, b) => a.price - b.price);
        return setProducts(sortedProducts);
    }

    function sortAscendingArray() {
        let sortedProducts = [...products].sort((a, b) => b.price - a.price);
        return setProducts(sortedProducts);
    }

    function sortAlphabet() {
        let sortedProducts = [...products].sort(function (a, b) {
            return a.name.localeCompare(b.name); //using String.prototype.localCompare()
        });
        return setProducts(sortedProducts);
    }

  return (
    <div className="App">
        <SortBlock
            sortAscendingArray={() => sortAscendingArray()}
            sortDescending={() => sortDescendingArray()}
            sortAlphabet={() => sortAlphabet()}
        />
        <Body products={products}/>
    </div>
  );
}

export default App;
