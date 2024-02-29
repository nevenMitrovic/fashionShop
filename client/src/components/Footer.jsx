import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
          <p>©Fashion Shop All rights reserved.</p>
          <div className="social">
            <div className="soc"><Link to='https://www.twitter.com'><i className="fa-brands fa-twitter"></i></Link></div>
            <div className="soc"><Link to='https://www.instagram.com'><i className="fa-brands fa-instagram"></i></Link></div>
            <div className="soc"><Link to='https://www.facebook.com'><i className="fa-brands fa-square-facebook"></i></Link></div>
          </div>
    </footer>
  )
}

export default Footer;