import {BrowserRouter,Routes,Route} from 'react-router-dom';
import MainLayout from './pages/MainLayout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Cart from './pages/Cart';
import Error from './pages/Error';
import Woman from './pages/Woman';
import Man from './pages/Man';
import Sale from './pages/Sale';
import Product from './components/Product';
import GetCookie from './cookies/GetCookie';
import { useDispatch } from 'react-redux';
import { staySignIn } from './redux/slice/signSlice';




function App() {

  const dispatch=useDispatch();

  let user=GetCookie('save');

  if(user!==undefined){
    let username=user.split(',')[0].split('"')[3];
    let token=user.split(',')[1].split('"')[3];
    let obj={username,token,signIn:true};
    dispatch(staySignIn(obj));
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout/>}>
              <Route index element={<Home/>}></Route>
              <Route path='/shop' element={<Shop/>}></Route>
              <Route path='/about' element={<AboutUs/>}></Route>
              <Route path='/contact' element={<Contact/>}></Route>
              <Route path='/signup' element={<SignUp/>}></Route>
              <Route path='/signin' element={<SignIn/>}></Route>
              <Route path='/cart' element={<Cart/>}></Route>
              <Route path='/woman' element={<Woman/>}></Route>
              <Route path='/man' element={<Man/>}></Route>
              <Route path='/sale' element={<Sale/>}></Route>
              <Route path='/product/:id' element={<Product/>}></Route>
              <Route path='*' element={<Error/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
