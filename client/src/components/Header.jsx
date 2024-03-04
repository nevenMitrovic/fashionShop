import { Link } from 'react-router-dom';
import slika from '../images/logo.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { setMenu } from '../redux/slice/menuSlice';
import { registerNull } from '../redux/slice/registerSlice';
import { messageNull, signO } from '../redux/slice/signSlice';



const Header = () => {

    const { open } = useSelector(state => state.menu);
    const { isSignIn, username } = useSelector(state => state.signIn);
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
        const obj = { signOut: false, token: null };
        dispatch(signO(obj));
    }


    return (
        <>
            <header>
                <div className="logo"><Link to='/' onClick={() => { setNull(); setMessageNull() }}><img src={slika} alt="logo" /></Link></div>
                <ul className='nav'>
                    <li><Link to='/' onClick={() => { setNull(); setMessageNull() }}>Home</Link></li>
                    <li onMouseEnter={() => { setNull(); setMessageNull() }} onMouseLeave={() => closeMenu()}><Link to='/shop' onClick={() => setNull()}>Shop</Link></li>
                    <li><Link to='/about' onClick={() => { setNull(); setMessageNull() }}>About Us</Link></li>
                    <li><Link to='/contact' onClick={() => { setNull(); setMessageNull() }}>Contact</Link></li>
                </ul>
                <div className="right">
                    <ul className='r'>
                        {!isSignIn ?
                            (<li className='log'><Link to='/signup' onClick={() => { setNull(); setMessageNull() }}>Sign up</Link> / <Link to='/signin' onClick={() => setNull()}>Sign in</Link></li>) :
                            (<li className='log'>{username} / <span className='logout' onClick={() => logOut()}>LogOut</span></li>)
                        }
                        <li><Link to='/cart' onClick={() => { setNull(); setMessageNull() }}><i className="fa-solid fa-cart-shopping"></i></Link></li>
                    </ul>
                </div>
            </header>
            {open &&
                <div className="dropDown" onMouseEnter={() => openMenu()} onMouseLeave={() => closeMenu()}>
                    <ul>
                        <li><Link to='/woman' onClick={() => { setNull(); setMessageNull() }}>Woman</Link></li>
                        <li><Link to='/man' onClick={() => { setNull(); setMessageNull() }}>Man</Link></li>
                        <li><Link to='/sale' onClick={() => { setNull(); setMessageNull() }}>Sale</Link></li>
                    </ul>
                </div>
            }
        </>
    )
}

export default Header;