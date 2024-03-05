import { useDispatch, useSelector } from "react-redux";
import { updateInfo } from "../redux/slice/messageSlice";
import { useEffect } from "react";

const Contact = () => {

  const { messageContact, infoMessage } = useSelector(state => state.contact);
  const { username, token } = useSelector(state => state.signIn)
  const dispatch = useDispatch();

  const sendMessage = async (e) => {
    e.preventDefault();
    try {
      if (username !== null && token !== null) {
        let formMessage = document.querySelector('#contactMessage').value;
        if (formMessage !== '') {
          const server = await fetch('http://localhost:5000/fashionshop/contact/message', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, token, message: formMessage })
          });
          const response = await server.json();
          dispatch(updateInfo({ info: response.message }));
        }
      } else {
        let obj = { info: 'Morate biti prijavljeni da bi poslali poruku!' };
        dispatch(updateInfo(obj));
      }
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className='contact'>
      <form onSubmit={sendMessage}>
        <h1>Contact</h1>
        <label>Message</label><br />
        <textarea id="contactMessage" cols="47" rows="10"></textarea><br />
        <div className="button"><button type="submit">Send</button></div>
      </form>
      {infoMessage !== null ? (<div className="message" style={infoMessage === 'Poruka je uspesno poslata!' ? { color: "green" } : {}}>{infoMessage}</div>) : (<></>)}
    </div>
  )
}

export default Contact