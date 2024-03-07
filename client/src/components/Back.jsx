import { useNavigate } from "react-router-dom";

const Back = () => {
    const navigate = useNavigate();
    return (
        <div className="back" onClick={()=>navigate(-1)}><i className="fa-solid fa-arrow-left"></i></div>
    )
}

export default Back;