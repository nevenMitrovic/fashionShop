import { useDispatch, useSelector } from "react-redux";
import { updateMessage } from "../redux/slice/messageSlice";

const Contact = () => {

  const { messageContact } = useSelector(state => state.contact);
  const { username,token } = useSelector(state => state.signIn)
  const dispatch = useDispatch();

  const sendMessage=async(e)=>{
    e.preventDefault();
    try{
    let formMessage=document.querySelector('#contactMessage').value;
    let obj={message:formMessage};
    dispatch(updateMessage(obj));
    const server=await fetch('http://localhost:5000/fashionshop/contact/message',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify()
    })
    }catch(error){
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
    </div>
  )
}

export default Contact