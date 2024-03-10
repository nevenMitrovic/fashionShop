import { useDispatch, useSelector } from "react-redux";
import { comboSaleNew } from "../redux/slice/filterSlice";




const SaleFilter = () => {
  const dispatch = useDispatch();

  let { comboSaleNewState } = useSelector(state => state.filters)

  const setSale = (e) => {
    const obj = { value: e.target.value };
    dispatch(comboSaleNew(obj));
  }

  return (
    <div className="saleFilter">
      <select id="saleFilter" value={comboSaleNewState} onChange={(e) => setSale(e)}>
        <option value="0">Izaberi kolekciju</option>
        <option value="s">Sale</option>
        <option value="n">New</option>
      </select>
    </div>
  )
};
export default SaleFilter;
