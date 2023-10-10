import { useEffect, useState } from "react"

export const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [count,setCount] = useState(0);

    console.log(products);

    // fetch("http://localhost:8000/products")
    // .then(response => response.json())
    // .then(data => setProducts(data));
    
    useEffect(() => {
        console.log('Mounted');


        fetch("http://localhost:8000/products")
        .then(response => response.json())
        .then(data => setProducts(data));
    },[]);


    const incrementCount=()=>{
        setCount(count+1);
    }
  return (
    <div>
        <h2>ProductList</h2>
        <p>{count}</p>
        <button onClick={incrementCount}>Click Counter</button>
    </div>
  )
}
