import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, removeItm } from "../redux/slice/cartSlice";

const Cart = () => {
  const { cart } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const incQuantity = (e) => {
    let obj = { id: e };
    dispatch(increment(obj));
  }

  const decrQuantity = (e) => {
    let obj = { id: e };
    dispatch(decrement(obj));
  }

  const removeItem = (e) => {
    let obj = { id: e };
    dispatch(removeItm(obj));
  }


  return (
    <div className="cart">
      <table>
        <thead>
        <tr className="head">
          <th>Description</th>
          <th>Size</th>
          <th>Quantity</th>
          <th>Remove</th>
          <th>Price</th>
        </tr>
        </thead>
        <tbody>
        { cart.length===0?(<tr style={{display:"flex",border:"none",padding:"5% 0",fontSize:"25px"}}><td>Nemate dodatih artikala u korpi!</td></tr>):
          cart.map(e => {
            let id = e.id;
            let index=0;
            return (
                <tr key={e.id} className="item">
                  <td className="title"><span className="img"><img src={e.image.split('png')[0] + 'PNG'} alt={e.title} /></span><span className="name">{e.title}</span></td>
                  <td className="size">{e.size}</td>
                  <td className="quantity"><span className="decr" onClick={(e) => decrQuantity(id)}>-</span><span className="qunt">{e.quantity}</span><span className="inc" onClick={(e) => incQuantity(id)}>+</span></td>
                  <td><span className="remove" onClick={(e) => removeItem(id)}>&times;</span></td>
                  <td>{e.price} RSD</td>
                </tr>
            )
          })
        }
        </tbody>
      </table>
      <div className="total"><span>Total:</span><span>{cart.reduce((acc,prod)=>{return acc+prod.quantity*prod.price},0)} RSD</span></div>
      <div className="buy"><button>Buy</button></div>
    </div>
  )
}

export default Cart;