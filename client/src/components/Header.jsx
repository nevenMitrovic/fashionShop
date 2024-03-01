import { Link } from 'react-router-dom';
import slika from '../images/logo.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { setMenu } from '../redux/slice/menuSlice';
import { registerNull } from '../redux/slice/registerSlice';


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

    const setNull=()=>{
        const obj={null:null};
        dispatch(registerNull(obj));
    }


    return (
        <>
        <header>
            <div className="logo"><Link to='/' onClick={()=>setNull()}><img src={slika} alt="logo" /></Link></div>
            <ul className='nav'>
                <li><Link to='/' onClick={()=>setNull()}>Home</Link></li>
                <li onMouseEnter={()=>openMenu()} onMouseLeave={()=>closeMenu()}><Link to='/shop' onClick={()=>setNull()}>Shop</Link></li>
                <li><Link to='/about' onClick={()=>setNull()}>About Us</Link></li>
                <li><Link to='/contact' onClick={()=>setNull()}>Contact</Link></li>
            </ul>
            <div className="right">
                <ul className='r'>
                    <li className='log'><Link to='/signup' onClick={()=>setNull()}>Sign up</Link> / <Link to='/signin' onClick={()=>setNull()}>Sign in</Link></li>
                    <li><Link to='/cart' onClick={()=>setNull()}><i className="fa-solid fa-cart-shopping"></i></Link></li>
                </ul>
            </div>
        </header>
        {open && 
            <div className="dropDown" onMouseEnter={()=>openMenu()} onMouseLeave={()=>closeMenu()}>
                <ul>
                    <li><Link to='/woman' onClick={()=>setNull()}>Woman</Link></li>
                    <li><Link to='/man' onClick={()=>setNull()}>Man</Link></li>
                    <li><Link to='/sale' onClick={()=>setNull()}>Sale</Link></li>
                </ul>
            </div>
        }
        </>
    )
}

export default Header;