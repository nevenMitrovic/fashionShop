import { infoPassword, registerUser, updatePass, updateVisibility } from "../redux/slice/registerSlice";
import { userSchema } from "../validations/userValidation";
import { useSelector, useDispatch } from "react-redux";



const SignUp = () => {

  const { isRegister, passwordVisible, password, passInfo } = useSelector(state => state.register);
  const dispatch = useDispatch();

  const createUser = async (e) => {
    e.preventDefault();
    let formData = {
      email: e.target[0].value,
      username: e.target[1].value,
      password: e.target[2].value
    };
    let validation = await userSchema.isValid(formData);
    if (validation) {
      const { email, username, password } = formData;
      const server = await fetch('http://localhost:5000/fashionshop/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, username, password })
      });
      const message = await server.json();
      const obj = { regStatus: message };
      dispatch(registerUser(obj));
    } else {
      const obj = { regStatus: { message: 'Uneti podaci nisu ispravni! Pokušajte ponovo!' } };
      dispatch(registerUser(obj));
      console.log(password)
    }
  }

  const passwordUpdate = (e) => {
    let obj = { password: e.target.value };
    dispatch(updatePass(obj));
    console.log(password)
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

  const infoVisibility=()=>{
    if(passInfo){
      let obj={visibility:false};
      dispatch(infoPassword(obj));
    }else{
      let obj={visibility:true};
      dispatch(infoPassword(obj));
    }
  }

  return (
    <div className="signup">
      {isRegister === null ? (
        <>
        <form onSubmit={createUser}>
          <h1>Sign up</h1>
          <label>Email</label><br />
          <input type="text" id="email" placeholder="nevenmitrovic@example.com" /><br />
          <label>Username</label><br />
          <input type="text" id="username" placeholder="nevenub" /><br />
          <label>Password</label><br />
          <input type={passwordVisible ? "text" : "password"} id="password" placeholder="********" onChange={passwordUpdate} onPointerEnter={()=>infoVisibility()} onPointerLeave={()=>infoVisibility()}/> <span className="eye" onClick={() => visibility()}>{passwordVisible ? (<i className="fa-solid fa-eye-slash"></i>) : (<i className="fa-solid fa-eye"></i>)}</span>
          <p className="policy">By using our website, you agree to abide by our Terms of Service and acknowledge our Data Policy. We are committed to protecting your privacy and ensuring the security of your information. Please review our Terms of Service and Data Policy for more details on how we collect, use, and protect your data.</p>
          <div className="button"><button type="submit" className="sign">Sign up</button></div>
        </form>
      {passInfo?<div className="info"><p>Password mora sadrzati osam karaktera koji sadrze minimum jedno veliko slovo, jedno malo, jedan broj i jedan simbol!</p></div>:<></>}
        </>
      ) : (
        <>
          <form onSubmit={createUser}>
            <h1>Sign up</h1>
            <label>Email</label><br />
            <input type="text" id="email" placeholder="nevenmitrovic@example.com" /><br />
            <label>Username</label><br />
            <input type="text" id="username" placeholder="nevenub" /><br />
            <label>Password</label><br />
            <input type={passwordVisible ? "text" : "password"} id="password" placeholder="********" onChange={passwordUpdate} onPointerEnter={()=>infoVisibility()} onPointerLeave={()=>infoVisibility()}/> <span className="eye" onClick={() => visibility()}>{passwordVisible ? (<i className="fa-solid fa-eye-slash"></i>) : (<i className="fa-solid fa-eye"></i>)}</span>
            <p className="policy">By using our website, you agree to abide by our Terms of Service and acknowledge our Data Policy. We are committed to protecting your privacy and ensuring the security of your information. Please review our Terms of Service and Data Policy for more details on how we collect, use, and protect your data.</p>
            <div className="button"><button type="submit" className="sign">Sign up</button></div>
          </form>
          <div className="message" style={isRegister.message === 'Korisnik je uspesno registrovan!' ? { color: "green" } : {}}><span>{isRegister.message}</span></div>
          {passInfo?<div className="info"><p>Password mora sadrzati osam karaktera koji sadrze minimum jedno veliko slovo, jedno malo, jedan broj i jedan simbol!</p></div>:<></>}
        </>
      )}
    </div>
  )
}

export default SignUp;