
const Filter = () => {


    return (
        <div className="filt">
            <h2>Filters</h2>
            <div className="search">
                <label>Pretraži</label><br />
                <input type="text" id="search" />
            </div>
            <div className="range">
                <label>Cena</label><br />
                <input type="range" id="range" min={0} max={100000} /><span className="price">{ }</span>
            </div>
            <div className="category">
                <input type="checkbox" id="aksesoari" />
                <label> Aksesoari</label><br />
                <input type="checkbox" id="duksevi" />
                <label> Duksevi</label><br />
                <input type="checkbox" id="dzemperi" />
                <label> Dzemperi</label><br />
                <input type="checkbox" id="farmerke" />
                <label> Farmerke</label><br />
                <input type="checkbox" id="kosulje" />
                <label> Kosulje</label><br />
                <input type="checkbox" id="majice" />
                <label> Majice</label><br />
            </div>
        </div>
    )
};

export default Filter;
