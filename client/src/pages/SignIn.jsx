import { useDispatch, useSelector } from "react-redux";
import { sign } from "../redux/slice/signSlice";
import { useNavigate } from "react-router-dom";
import { updatePass, updateVisibility } from "../redux/slice/registerSlice";



const SignIn = () => {

  const { isSignIn, message } = useSelector(state => state.signIn);
  const { passwordVisible, password } = useSelector(state => state.register);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const SignIn = async (e) => {
    e.preventDefault();
    let obj;
    let formData = {
      username: e.target[0].value,
      password: e.target[1].value
    };
    const server = await fetch('http://localhost:5000/fashionshop/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: formData.username, password: formData.password })
    });
    const response = await server.json();
    if (response.message === 'Uspesno ste se ulogovali!') {
      obj = { signIn: true, message: response.message, username: formData.username, token: response.token };
      dispatch(sign(obj));
      navigate('/shop');
    } else {
      obj = { signIn: false, message: response.message };
      dispatch(sign(obj));
    }
  }

  const passwordUpdate = (e) => {
    let obj = { password: e.target.value };
    dispatch(updatePass(obj));
  }

  const visibility = () => {
    if (passwordVisible) {
      let obj = { visibility: false };
      dispatch(updateVisibility(obj));
    } else {
      let obj = { visibility: true };
      dispatch(updateVisibility(obj));
    }
  }

  return (
    <>
      <div className="signin">
        {message !== "Nisu ispravni kredencijali!" ? (
          <form onSubmit={SignIn}>
            <h1>Sign in</h1>
            <label>Username</label><br />
            <input type="text" id="username" placeholder="nevenub" /><br />
            <label>Password</label><br />
            <input type={passwordVisible ? "text" : "password"} id="password" placeholder="********" onChange={passwordUpdate} /> <span className="eye" onClick={() => visibility()}>{passwordVisible ? (<i className="fa-solid fa-eye-slash"></i>) : (<i className="fa-solid fa-eye"></i>)}</span>
            <p className="policy">By using our website, you agree to abide by our Terms of Service and acknowledge our Data Policy. We are committed to protecting your privacy and ensuring the security of your information. Please review our Terms of Service and Data Policy for more details on how we collect, use, and protect your data.</p>
            <div className="button"><button type="submit" className="sign">Sign in</button></div>
          </form>) : (
          <>
            <form onSubmit={SignIn}>
              <h1>Sign in</h1>
              <label>Username</label><br />
              <input type="text" id="username" placeholder="nevenub" /><br />
              <label>Password</label><br />
              <input type={passwordVisible ? "text" : "password"} id="password" placeholder="********" onChange={passwordUpdate} />
              <p className="policy">By using our website, you agree to abide by our Terms of Service and acknowledge our Data Policy. We are committed to protecting your privacy and ensuring the security of your information. Please review our Terms of Service and Data Policy for more details on how we collect, use, and protect your data.</p>
              <div className="button"><button type="submit" className="sign">Sign in</button></div>
            </form>
            <div className="message">{message}</div>
          </>
        )}
      </div>
    </>
  )
}

export default SignIn;