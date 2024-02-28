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



function App() {

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
              <Route path='*' element={<Error/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
