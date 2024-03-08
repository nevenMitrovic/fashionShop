import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const { cart } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="cart">
      <table>
          <tr className="head">
            <th>Description</th>
            <th>Size</th>
            <th>Quantity</th>
            <th>Remove</th>
            <th>Price</th>
          </tr>
          {
            cart.map(e => {
              return (
                <tr key={e._id} className="item">
                  <td className="title"><div className="img"><img src={e.image.split('png')[0] + 'PNG'} alt={e.title} /></div><span className="name">{e.title}</span></td>
                  <td className="size">{e.size}</td>
                  <td className="quantity"><div className="inc">+</div><div className="qunt">{e.quantity}</div><div className="decr">-</div></td>
                  <td><div className="remove">&times;</div></td>
                  <td>{e.price} RSD</td>
                </tr>
              )
            })
          }
      </table>
    </div>
  )
}

export default Cart;