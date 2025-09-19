import { useEffect, useState } from "react";

const ImageSlider = ({ limit }) => {
  const imgObj = [
    {
      id: "0",
      author: "Alejandro Escamilla",
      width: 5000,
      height: 3333,
      url: "https://unsplash.com/photos/yC-Yzbqy7PY",
      download_url: "https://picsum.photos/id/0/5000/3333",
    },
    {
      id: "1",
      author: "Alejandro Escamilla",
      width: 5000,
      height: 3333,
      url: "https://unsplash.com/photos/LNRyGwIJr5c",
      download_url: "https://picsum.photos/id/1/5000/3333",
    },
    {
      id: "2",
      author: "Alejandro Escamilla",
      width: 5000,
      height: 3333,
      url: "https://unsplash.com/photos/N7XodRrbzS0",
      download_url: "https://picsum.photos/id/2/5000/3333",
    },
    {
      id: "3",
      author: "Alejandro Escamilla",
      width: 5000,
      height: 3333,
      url: "https://unsplash.com/photos/Dl6jeyfihLk",
      download_url: "https://picsum.photos/id/3/5000/3333",
    },
    {
      id: "4",
      author: "Alejandro Escamilla",
      width: 5000,
      height: 3333,
      url: "https://unsplash.com/photos/y83Je1OC6Wc",
      download_url: "https://picsum.photos/id/4/5000/3333",
    },
  ];
  const [images, setImages] = useState(imgObj);
  const [currImg, setCurrImg] = useState(0);
  // const url = `https://picsum.photos/v2/list?page=1&limit=${limit}`;

  // useEffect(() => {
  //   const fetchImages = async () => {
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     console.log(data);
  //     setImages(data);
  //   };
  //   fetchImages();
  // }, []);

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
    <div className="t-container">
      <h1 className="t-h1">Project 4 : ImageSlider</h1>
      <h2>No. of Images : {limit}</h2>
      <div className="flex justify-center items-center">
        <button
          className="p-2 border h-10"
          onClick={() => handleCurrImage("left")}
        >
          left
        </button>

        {images &&
          images.length > 0 &&
          images.map((ele) => {
            const imgClass = `w-150 h-150 border ${
              currImg === Number(ele.id) ? "inline" : "hidden"
            }`;
            console.log(currImg);
            return (
              <img
                className={imgClass}
                key={ele.id}
                src={ele.download_url}
                alt=""
              />
            );
          })}

        <button
          className="p-2 border h-10"
          onClick={() => handleCurrImage("right")}
        >
          right
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
