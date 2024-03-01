import { useSelector } from "react-redux";

const SignIn = () => {

  const { isSignIn } = useSelector(state => state.signIn);

  const SignIn=()=>{
    
  }

  return (
    <>
      <div className="signin">
        <form>
          <h1>Sign in</h1>
          <label>Username</label><br />
          <input type="text" id="username" placeholder="nevenub" /><br />
          <label>Password</label><br />
          <input type="text" id="password" placeholder="********" />
          <p className="policy">By using our website, you agree to abide by our Terms of Service and acknowledge our Data Policy. We are committed to protecting your privacy and ensuring the security of your information. Please review our Terms of Service and Data Policy for more details on how we collect, use, and protect your data.</p>
          <div className="button"><button type="submit" className="sign">Sign in</button></div>
        </form>
      </div>
    </>
  )
}

export default SignIn;