import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const LoadMoreButton = () => {
  // let skip = 0;
  let maxLimit = 50;
  const [limit, setLimit] = useState(10);
  const [productData, setProductData] = useState(null);
  // const URL = ;

  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await fetch(
          `https://dummyjson.com/products?limit=${limit}&skip=${0}&select=title,images`
        );
        const data = await res.json();
        // console.log(data.products);
        setProductData(data.products);
      };
      fetchData();
    } catch (e) {
      console.error(e.error);
    }
  }, [limit]);
  return (
    <div className="t-container p-0">
      <h1 className="t-h1">Project 5 : "Load More" Button</h1>

      <div className="flex flex-wrap gap-5 justify-center items-center">
        {productData &&
          productData.map((item) => {
            return <ProductCard className="flex-1" key={item.id} {...item} />;
          })}
      </div>
      <button
        className={`btn ${limit >= maxLimit ? "bg-red-600" : "bg-green-500"}`}
        onClick={() => setLimit(limit + 10)}
        disabled={limit >= maxLimit ? true : false}
      >
        {limit >= maxLimit ? "Limit Reached" : "Load More Products"}
      </button>
    </div>
  );
};

export default LoadMoreButton;
