import { useEffect, useState } from "react";
import "./slider.css";

export default function Slider({ url, limit = 4 }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  function onClickImageChange(action) {
    if (action === "next") {
      if (currentSlide + 1 < images.length) {
        setCurrentSlide(() => currentSlide + 1);
      } else {
        setCurrentSlide(() => 0);
      }
    } else if (action === "prev") {
      if (currentSlide - 1 > -1) {
        setCurrentSlide(() => currentSlide - 1);
      } else {
        setCurrentSlide(() => images.length - 1);
      }
    }
  }

  async function fetchImages() {
    try {
      setLoading(true);

      const response = await fetch(
        `https://picsum.photos/v2/list?page=1&limit=${limit}`
      );
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <h1>Slider Component</h1>
      <div className="slider-box">
        <button onClick={() => onClickImageChange("prev")}>prev</button>
        {images.map((ele, i) => {
          return (
            <img
              key={i}
              className={i === currentSlide ? "show" : "hide"}
              src={ele.download_url}
              alt=""
              height={500}
              width={500}
            />
          );
        })}
        <button onClick={() => onClickImageChange("next")}>next</button>
      </div>

      <div className="scrollIndicator">
        {images.map((ele, i) => {
          return (
            <div key={i + 10}>
              <i style={{ color: i === currentSlide ? "red" : "lightBlue" }}>
                O
              </i>
            </div>
          );
        })}
      </div>
    </div>
  );
}
