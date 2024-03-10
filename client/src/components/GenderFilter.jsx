import { useDispatch, useSelector } from "react-redux";
import { comboGender } from "../redux/slice/filterSlice";


const GenderFilter = () => {
    const dispatch = useDispatch();

    let { comboGenderState } = useSelector(state => state.filters)

    const setGender = (e) => {
        let obj = { value: e.target.value };
        dispatch(comboGender(obj));
    }

    return (
        <div className="gender">
            <select id="gender" value={comboGenderState} onChange={(e) => setGender(e)}> 
                <option value="0">Izaberi pol</option>
                <option value="Muškarci">Muškarci</option>
                <option value="Žene">Žene</option>
            </select>
        </div>
    )
};

export default GenderFilter;
