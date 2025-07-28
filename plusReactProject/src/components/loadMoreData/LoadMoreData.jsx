import { useEffect, useState } from "react";
import "./loadMoreData.css";

export default function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableLoadBtn, setDisableLoadBtn] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const response = await fetch(
          `https://dummyjson.com/products?limit=10&skip=${count === 0? 0 :count * 10}`
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
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (count >= 5) {
      setDisableLoadBtn(true);
    }
  }, [count]);

  if (loading !== false) {
    return <div>Loading data ! Please Wait</div>;
  }

  // console.log(products);

  return (
    <div className="container">
      <h1>Project 5 : Load Items from an API</h1>
      <div className="loadMoreData-Container">
        {products && products.length
          ? products.map((ele) => {
              // console.log(ele);
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
        <button
          onClick={() => setCount(() => count + 1)}
          disabled={disableLoadBtn}
        >
          {disableLoadBtn ? "Limit Exceeded !!" : "Load More"}
        </button>
      </div>
    </div>
  );
}
