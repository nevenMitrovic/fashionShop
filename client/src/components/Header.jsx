import { Link } from 'react-router-dom';
import slika from '../images/logo.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { setMenu } from '../redux/slice/menuSlice';
import { registerNull } from '../redux/slice/registerSlice';
import { messageNull, signO } from '../redux/slice/signSlice';
import { updateInfoNull } from '../redux/slice/messageSlice';
import RemoveCookie from '../cookies/RemoveCookie';




const Header = () => {

    const { open } = useSelector(state => state.menu);
    const { isSignIn, username } = useSelector(state => state.signIn);
    const { cart } = useSelector(state => state.cart);
    const dispatch = useDispatch();


    const openMenu = () => {
        let obj = { open: true };
        dispatch(setMenu(obj));
    }

    const closeMenu = () => {
        let obj = { open: false };
        dispatch(setMenu(obj));
    }

    const setNull = () => {
        const obj = { null: null };
        dispatch(registerNull(obj));
    }

    const setMessageNull = () => {
        const obj = { null: null };
        dispatch(messageNull(obj));
    }

    const logOut = () => {
        const obj = { signOut: false, token: null, username: null };
        dispatch(signO(obj));
        RemoveCookie('save');
    }

    const updateInfoMessage = () => {
        const obj = { null: null };
        dispatch(updateInfoNull(obj));
    }


    return (
        <>
            <header>
                <div className="logo"><Link to='/' onClick={() => { setNull(); setMessageNull(); updateInfoMessage() }}><img src={slika} alt="logo" /></Link></div>
                <ul className='nav'>
                    <li><Link to='/' onClick={() => { setNull(); setMessageNull(); updateInfoMessage() }}>Home</Link></li>
                    <li onMouseEnter={() => { setNull(); setMessageNull(); updateInfoMessage(); openMenu() }} onMouseLeave={() => closeMenu()}><Link to='/shop' onClick={() => setNull()}>Shop</Link></li>
                    <li><Link to='/about' onClick={() => { setNull(); setMessageNull(); updateInfoMessage() }}>About Us</Link></li>
                    <li><Link to='/contact' onClick={() => { setNull(); setMessageNull(); updateInfoMessage() }}>Contact</Link></li>
                </ul>
                <div className="right">
                    <ul className='r'>
                        {!isSignIn ?
                            (<li className='log'><Link to='/signup' onClick={() => { setNull(); setMessageNull(); updateInfoMessage() }}>Sign up</Link> / <Link to='/signin' onClick={() => setNull()}>Sign in</Link></li>) :
                            (<li className='log'>{username} / <span className='logout' onClick={() => logOut()}>Sign out</span></li>)
                        }
                        <li className='cart'><Link to='/cart' onClick={() => { setNull(); setMessageNull(); updateInfoMessage() }}><i className="fa-solid fa-cart-shopping"><span className='length'>{cart.length===0?(<></>):(cart.length)}</span></i></Link></li>
                    </ul>
                </div>
            </header>
            {open &&
                <div className="dropDown" onMouseEnter={() => openMenu()} onMouseLeave={() => closeMenu()}>
                    <ul>
                        <li><Link to='/women' onClick={() => { setNull(); setMessageNull(); updateInfoMessage() }}>Women</Link></li>
                        <li><Link to='/men' onClick={() => { setNull(); setMessageNull(); updateInfoMessage() }}>Men</Link></li>
                        <li><Link to='/sale' onClick={() => { setNull(); setMessageNull(); updateInfoMessage() }}>Sale</Link></li>
                    </ul>
                </div>
            }
        </>
    )
}

export default Header;