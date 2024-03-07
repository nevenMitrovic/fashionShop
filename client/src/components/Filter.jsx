import { useDispatch } from "react-redux";
import { useState } from "react";
import { searchFilter, rangeFilter, checkFilter } from "../redux/slice/filterSlice";



const Filter = () => {

    const dispatch = useDispatch();
    const [stateRange, setStateRange] = useState(1000);

    const setSearch = (e) => {
        let obj = { value: e.target.value };
        dispatch(searchFilter(obj));
    }

    const setRange = (e) => {
        let obj = { value: e.target.value };
        dispatch(rangeFilter(obj));
    }

    const setCheck = (e) => {
        if (e.target.checked) {
            let obj = { value: e.target.value, state: true };
            dispatch(checkFilter(obj));
        } else {
            let obj = { value: e.target.value, state: false };
            dispatch(checkFilter(obj));
        }
    }

    return (
        <div className="filt">
            <h2>Filters</h2>
            <div className="search">
                <label>Pretraži</label><br />
                <input type="text" id="search" onChange={(e) => setSearch(e)} />
            </div>
            <div className="range">
                <label>Cena</label><br />
                <input type="range" id="range" min={0} max={20000} value={stateRange} onChange={(e) => { setStateRange(e.target.value); setRange(e) }} /><span className="price"> {stateRange}RSD</span>
            </div>
            <div className="category">
                <input type="checkbox" id="aksesoari" value='Aksesoari' onChange={(e) => setCheck(e)} />
                <label> Aksesoari</label><br />
                <input type="checkbox" id="duksevi" value='Duksevi' onChange={(e) => setCheck(e)} />
                <label> Duksevi</label><br />
                <input type="checkbox" id="dzemperi" value='Dzemperi' onChange={(e) => setCheck(e)} />
                <label> Dzemperi</label><br />
                <input type="checkbox" id="farmerke" value='Farmerke' onChange={(e) => setCheck(e)} />
                <label> Farmerke</label><br />
                <input type="checkbox" id="kosulje" value='Košulje' onChange={(e) => setCheck(e)} />
                <label> Košulje</label><br />
                <input type="checkbox" id="majice" value='Majice' onChange={(e) => setCheck(e)} />
                <label> Majice</label><br />
            </div>
        </div>
    )
};

export default Filter;
