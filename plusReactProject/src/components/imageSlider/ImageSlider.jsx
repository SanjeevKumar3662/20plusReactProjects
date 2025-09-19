import { useEffect, useState } from "react";

const ImageSlider = ({ limit }) => {
  const [images, setImages] = useState(null);
  const [currImg, setCurrImg] = useState(0);
  const url = `https://picsum.photos/v2/list?page=1&limit=${limit}`;

  useEffect(() => {
    const fetchImages = async () => {
      const res = await fetch(url);
      const data = await res.json();
      // console.log(data);
      setImages(data);
    };
    fetchImages();
  }, [url]);

  const handleCurrImage = (action) => {
    if (action === "left") {
      setCurrImg((currImg) => {
        if (currImg - 1 < 0) {
          return limit - 1;
        } else {
          return currImg - 1;
        }
      });
    } else if (action === "right") {
      setCurrImg((currImg) => {
        if (currImg + 1 >= limit) {
          return 0;
        } else {
          return currImg + 1;
        }
      });
    }
  };

  return (
    <div className="t-container p-1">
      <h1 className="t-h1">Project 4 : ImageSlider</h1>
      <h2>No. of Images : {limit}</h2>
      <div className="flex justify-center items-center ">
        {images &&
          images.length > 0 &&
          images.map((ele) => {
            const imgClass = `w-150  border ${
              currImg === Number(ele.id) ? "" : "hidden"
            }`;
            // console.log(currImg);
            return (
              <img
                className={imgClass}
                key={ele.id}
                src={ele.download_url}
                alt=""
              />
            );
          })}

       
      </div>
       <div>
          <button
            className="p-2 m-2 border h-10"
            onClick={() => handleCurrImage("left")}
          >
            left
          </button>
          <button
            className="p-2 m-2 border h-10 "
            onClick={() => handleCurrImage("right")}
          >
            right
          </button>
        </div>
    </div>
  );
};

export default ImageSlider;
