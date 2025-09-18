import { useEffect, useState } from "react";

const ImageSlider = ({ limit }) => {
  const [images, setImages] = useState(null);
  const url = `https://picsum.photos/v2/list?page=1&limit=${limit}`;

  useEffect(() => {
    const fetchImages = async () => {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setImages(data);
    };
    fetchImages();
  }, []);

  return (
    <div className="t-container">
      <h1 className="t-h1">Project 4 : ImageSlider</h1>
      <h2>No. of Images : {limit}</h2>
      <div className="flex">
        {images &&
          images.length > 0 &&
          images.map((ele) => {
            return <img key={ele.id} src={ele.download_url} alt="" />;
          })}
      </div>
    </div>
  );
};

export default ImageSlider;
