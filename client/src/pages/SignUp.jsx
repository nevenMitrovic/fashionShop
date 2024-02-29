import { registerUser } from "../redux/slice/registerSlice";
import { userSchema } from "../validations/userValidation";
import { useSelector, useDispatch } from "react-redux";

const SignUp = () => {

  const { isValid, formData } = useSelector(state => state.register);
  const dispatch = useDispatch();

  const createUser = async (e) => {
    e.preventDefault();
    let formData = {
      email: e.target[0].value,
      username: e.target[1].value,
      password: e.target[2].value
    };
    let validation = await userSchema.isValid(formData);
    let obj = { validator: validation, formData: formData };
    dispatch(registerUser(obj));
    const response = await regUser();
  }
  const regUser = async () => {
    try {
      const { username, password, email } = formData;
      if (isValid) {
        const server = await fetch('http://localhost:5000/fashionshop/users/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password, email })
        })
        const response = server.json(); //UBACITI STANJE ZA ODGOVOR!!!!!!!!!!!!
      } else {
        console.log({ error: 'Kredencijali nisu ispravni!' });
      }
    } catch (error) {
      console.log(error)
    }
  }









  return (
    <div className="signup">
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
    </div>
  )
}

export default SignUp