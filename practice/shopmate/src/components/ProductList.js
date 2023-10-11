import { useCallback, useEffect, useState } from "react";

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [url, setURL] = useState("http://localhost:8000/products");

  // const [count, setCount] = useState(0);

  // console.log(products);

  // fetch("http://localhost:8000/products")
  // .then(response => response.json())
  // .then(data => setProducts(data));

  // useEffect(() => {
  //   // console.log('Mounted');

  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => setProducts(data));
  // }, [url]);

  // useEffect(() => {
  //   console.log(count);
  // }, [count]);

  // const incrementCount=()=>{
  //     setCount(count+1);
  // }

  const fetchProducts =useCallback(
       
  async()=>{
    const res = await fetch(url);
    const data = await res.json();
    setProducts(data);
  }
    ,[url]);
 

  useEffect(()=>{
   

    fetchProducts();

    console.log('----');

  },[fetchProducts]);


  return (
    <section>
      <div className="filter">
        {/* <button onClick={() => setCount(count + 1)}>{count}</button> */}
        <button onClick={() => setURL("http://localhost:8000/products")}>
          All
        </button>
        <button
          onClick={() => setURL("http://localhost:8000/products?in_stock=true")}
        >
          In Stock only
        </button>
      </div>
      {products.map((product) => (
        <div className="card" key={product.id}>
          <p className="id">{product.id}</p>
          <p className="name">{product.name}</p>
          <p className="info">
            <span>${product.price}</span>
            <span className={product.in_stock ? "instock" : "unavailable"}>
              {product.in_stock ? "In Stock" : "Unavailable"}
            </span>
          </p>
        </div>
      ))}
    </section>

    // <div>
    //   {
    //      console.log('Render')
    //   }
    //     <h2>ProductList</h2>
    //     <p>{count}</p>
    //     <button onClick={incrementCount}>Click Counter</button>
    // </div>
  );
};
