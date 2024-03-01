import { registerNull, registerUser } from "../redux/slice/registerSlice";
import { userSchema } from "../validations/userValidation";
import { useSelector, useDispatch } from "react-redux";



const SignUp = () => {

  const { isRegister } = useSelector(state => state.register);
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
      const obj = { regStatus: { message: 'Unesite Email,Username i Password!' } };
      dispatch(registerUser(obj));
    }
  }


  return (
    <div className="signup">
      {isRegister === null ? (
        <form onSubmit={createUser}>
          <h1>Sign up</h1>
          <label>Email</label><br />
          <input type="text" id="email" placeholder="nevenmitrovic@example.com" /><br />
          <label>Username</label><br />
          <input type="text" id="username" placeholder="nevenub" /><br />
          <label>Password</label><br />
          <input type="text" id="password" placeholder="********" />
          <p className="policy">By using our website, you agree to abide by our Terms of Service and acknowledge our Data Policy. We are committed to protecting your privacy and ensuring the security of your information. Please review our Terms of Service and Data Policy for more details on how we collect, use, and protect your data.</p>
          <div className="button"><button type="submit" className="sign">Sign up</button></div>
        </form>
      ) : (
        <>
          <form onSubmit={createUser}>
            <h1>Sign up</h1>
            <label>Email</label><br />
            <input type="text" id="email" placeholder="nevenmitrovic@example.com" /><br />
            <label>Username</label><br />
            <input type="text" id="username" placeholder="nevenub" /><br />
            <label>Password</label><br />
            <input type="text" id="password" placeholder="********" />
            <p className="policy">By using our website, you agree to abide by our Terms of Service and acknowledge our Data Policy. We are committed to protecting your privacy and ensuring the security of your information. Please review our Terms of Service and Data Policy for more details on how we collect, use, and protect your data.</p>
            <div className="button"><button type="submit" className="sign">Sign up</button></div>
          </form>
          <div className="message" style={isRegister.message === 'Korisnik je uspesno registrovan!' ? { color: "green" } : {}}><span>{isRegister.message}</span></div>
        </>
      )}
    </div>
  )
}

export default SignUp;