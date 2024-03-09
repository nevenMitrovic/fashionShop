import { Link } from 'react-router-dom';

const SliderComponent = ({ ...item }) => {

    return (
        <div className="sliderComponent">
            <div className="img"><img src={item.image.split('png')[0] + 'PNG'} alt={item.title} /> <div className="button"><Link to={`/product/${item._id}`}><p>Pogledaj artikal</p></Link></div></div>
        </div>
    )
}

export default SliderComponent;