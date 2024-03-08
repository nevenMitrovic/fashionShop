import { Link } from "react-router-dom";

const ServerError = () => {
  return (
    <div className='error'>
      <div className="elements">
        <h1>500</h1>
        <h3>OPPS! WE HAVE PROBLEMS WITH SERVER!</h3>
        <p>Sorry, the page you're looking for doesn't exist. If you think something is broken, report a problem.</p>
        <Link to="/"><button className="button">Home</button></Link>
      </div>
    </div>
  )
}

export default ServerError;