import { useEffect } from "react";

const LoadMoreButton = () => {
  let skip = 10;
  const URL = `https://dummyjson.com/products?limit=10&skip=${skip}&select=title,images`;

  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await fetch(URL);
        const data = await res.json();
        console.log(data.products);
      };
      fetchData();
    } catch (e) {
      console.error(e.error);
    }
  }, [URL]);
  return (
    <div className="t-container">
      <h1 className="t-h1">Project 5 : "Load More" Button</h1>
    </div>
  );
};

export default LoadMoreButton;
