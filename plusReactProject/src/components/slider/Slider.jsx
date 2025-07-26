import { useEffect, useState } from "react";
import "./slider.css";

export default function Slider({ url, limit=4 }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  function onClickImageChange(action){
    if(action === "next"&& currentSlide+1 < images.length){
      setCurrentSlide(()=>currentSlide+1);
    }else if(action === "prev" && currentSlide-1 > -1){
      setCurrentSlide(()=>currentSlide-1);
    }
  }

  async function fetchImages() {
    try {
      setLoading(true);

      const response = await fetch(`https://picsum.photos/v2/list?page=1&limit=${limit}`);
      const data = await response.json();
      console.log(data);

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
    }
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  if (loading) {
    return <div>Loading data ......</div>;
  }

  if (errorMsg !== null) {
    return <div>Error occured ! (errorMsg)</div>;
  }
// console.log(images[currentSlide].download_url);

  return (
    <div className="container">
      {/* <h1>Slider Component</h1> */}
      <h1>More Projects Comming soon.</h1>
      <div className="slider-box">
        <img
          src={images[currentSlide] === undefined?"https://picsum.photos/id/0/5000/3333":`${images[currentSlide].download_url}`}
          alt=""
          width="500"
          height="500"
        />
      </div>
      <button onClick={()=>onClickImageChange("prev")}>prev</button>
      <button onClick={()=>onClickImageChange("next")}>next</button>
    </div>
  );
}
