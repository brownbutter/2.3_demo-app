// Counter.js

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [product, setProduct] = useState({
    name: "Fruits",
    count: 0,
  });

  // console.log("count", count);
  // console.log("setCount", setCount);

  // const state = useState[0];
  // const count = useState;

  // const handlerPlus = () => {
  //   setCount((prevCount) => {
  //     return prevCount + 1;
  //   });
  // };

  const handlerPlus = () => {
    setProduct((randomP) => {
      return {
        // name: "Fruits",
        ...randomP,
        count: randomP.count + 1,
      };
    });
  };

  const handlerMinus = () => {
    setProduct((prevProduct) => {
      const number = prevProduct.count - 1 < 0 ? 0 : prevProduct.count - 1;
      return {
        ...prevProduct,
        // count: prevProduct.count - 1,
        count: number,
      };
    });
  };

  const handlerReset = () => {
    setProduct((setZero) => {
      return {
        ...setZero,
        count: 0,
      };
    });
  };

  return (
    <>
      <h2>{product.name}</h2>
      <button onClick={handlerMinus}>-</button>
      <span>{product.count}</span>
      <button onClick={handlerPlus}>+</button>
      {<button onClick={handlerReset}>Reset</button>}
    </>
  );
}
export default Counter;
