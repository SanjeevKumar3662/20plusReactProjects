import { useEffect, useState } from "react";
import "./loadMoreData.css";

export default function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${count * 20}`
      );
      const result = await response.json();

      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  if (loading === true) {
    return <div>Loading data ! Please Wait</div>;
  }

  // console.log(products);

  return (
    <div className="container">
      <div className="loadMoreData-Container">
        {products && products.length
          ? products.map((ele) => {
              console.log(ele);
              return (
                <div className="product" key={ele.id}>
                  <img src={ele.thumbnail} alt={ele.title} height={200} />
                  <p>{ele.title}</p>
                </div>
              );
            })
          : null}
      </div>
      <div className="button-container">
        <button onClick={() => setCount(() => count + 1)}>Load More</button>
      </div>
    </div>
  );
}
