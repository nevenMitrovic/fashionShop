import { Link } from 'react-router-dom';
import slika from '../images/logo.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { setMenu } from '../redux/slice/menuSlice';


const Header = () => {

    const {open}=useSelector(state=>state.menu);
    const dispatch=useDispatch();

    const openMenu=()=>{
        let obj={open:true};
        dispatch(setMenu(obj));
    }

    const closeMenu=()=>{
        let obj={open:false};
        dispatch(setMenu(obj));
    }



    return (
        <>
        <header>
            <div className="logo"><Link to='/'><img src={slika} alt="logo" /></Link></div>
            <ul className='nav'>
                <li><Link to='/'>Home</Link></li>
                <li onMouseEnter={()=>openMenu()} onMouseLeave={()=>closeMenu()}><Link to='/shop'>Shop</Link></li>
                <li><Link to='/about'>About Us</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
            <div className="right">
                <ul className='r'>
                    <li><Link to='/signup'>Sign up</Link> / <Link to='/signin'>Sign in</Link></li>
                    <li><Link to='/cart'><i className="fa-solid fa-cart-shopping"></i></Link></li>
                </ul>
            </div>
        </header>
        {open && 
            <div className="dropDown">aaaaa</div>
        }
        </>
    )
}

export default Header;