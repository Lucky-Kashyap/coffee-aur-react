import { useEffect, useState } from "react"

export const ProductList = () => {
    const [products, setProducts] = useState([]);
    // const [count,setCount] = useState(0);

    console.log(products);

    // fetch("http://localhost:8000/products")
    // .then(response => response.json())
    // .then(data => setProducts(data));
    
    useEffect(() => {
        // console.log('Mounted');


        fetch("http://localhost:8000/products")
        .then(response => response.json())
        .then(data => setProducts(data));

        
    },[]);


    // const incrementCount=()=>{
    //     setCount(count+1);
    // }
  return (
    <section>
        { products.map((product) => (
            <div className="card" key={product.id}>
                <p className="id">{product.id}</p>
                <p className="name">{product.name}</p>
                <p className="info">
                    <span>${product.price}</span>
                    <span className={product.in_stock ? "instock" : "unavailable"}>{product.in_stock ? "In Stock" : "Unavailable"}</span>
                </p>
            </div>            
        )) }
    </section>
    
    // <div>
    //   {
    //      console.log('Render')
    //   }
    //     <h2>ProductList</h2>
    //     <p>{count}</p>
    //     <button onClick={incrementCount}>Click Counter</button>
    // </div>
  )
}
