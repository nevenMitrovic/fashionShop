
const ProductCard = ({product}) => {

  return (
    <div className="productCard">
        <div className="img"><img src={product.image} alt={product.title} /></div>
    </div>
  )
}

export default ProductCard;