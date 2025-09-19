const ProductCard = ({ title, images }) => {
  return (
    <div className="w-50 border rounded max-sm:w-20">
      <img src={images && images[0]} alt={title} title={title} />
      <div className="text-center max-sm:text-sm">{title}</div>
    </div>
  );
};

export default ProductCard;
