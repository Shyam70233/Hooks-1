import React, { useState } from 'react';
import './style.css';

export default function App() {
  const initialState = {
    item: '',
    qty: 0,
    price: 0,
  };
  const [stock, setstock] = useState([initialState]);
  const addmoreitem = () => {
    setstock([...stock, initialState]);
  };
  const handleChange = (i, name, e) => {
    let value = e.target.value;
    setstock(
      stock?.map((x, index) => (index === i ? { ...x, [name]: value } : x))
    );
  };

  const totalPrice = stock
    .map((x) => +x.price)
    .reduce((sum, next) => sum + next);

  const totalQty = stock.map((x) => +x.qty).reduce((sum, next) => sum + next);
  return (
    <div>
      <button onClick={addmoreitem}>Add More</button>
      {stock?.map((itemss, index) => (
        <div className="stock-item">
          <h2>Items : {index} </h2>
          <input
            onChange={(e) => handleChange(index, 'item', e)}
            value={itemss.item}
            placeholder="Enter item"
          />
          <input
            onChange={(e) => handleChange(index, 'qty', e)}
            value={itemss.qty}
            placeholder="Enter qty"
          />
          <input
            onChange={(e) => handleChange(index, 'price', e)}
            value={itemss.price}
            placeholder="Enter price"
          />
        </div>
      ))}
      <h1>
        Totaltem : {stock.length}
        totalPrice : {totalPrice}
        totalQty : {totalQty}
      </h1>
    </div>
  );
}
