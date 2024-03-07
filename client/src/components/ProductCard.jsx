
const ProductCard = ({product}) => {

  let image=product.image.split('png')[0]+'PNG';
  let  newPrice=parseInt(product.price-product.price*product.percentage/100);

  return (
    <div className="productCard">
        <div className="img"><img src={image} alt={product.title} /></div>
        <div className="title">{product.title}</div>
          <div className="price">
            {product.sale?(
              <>
              <span className="oldPrice">{product.price} RSD</span>
              <span className="new">{newPrice} RSD</span>
              </>
            ):(
              <span className="standardPrice">{product.price} RSD</span>
            )}
          </div>
          <p className="button">Pogledaj artikal</p>
    </div>
  )
}

export default ProductCard;