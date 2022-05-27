import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { firebaseAuth } from "../../Backend/firebaseHandler";
import './Authcomponent.css';

const AuthPage = () => {
    const navigate = useNavigate();
    const [userinput,setuseinput] = useState({
        email:"",
        pass:""
    })

    const handleChange = (event) => {
      const {name,value} = event.target;
      setuseinput({
          ...userinput,
          [name]:value
      })
    }
    const handleClick = async () => {
        try {
           await createUserWithEmailAndPassword(firebaseAuth,userinput.email,userinput.pass)
           setuseinput({
               email:"",
               pass:""
           })
           alert("Account Created")
           navigate('/students-record');

        }catch(err){
            alert(err)
        }
    }
    return (
        <div className="main-container">
           <div className="input-container">
               <input name="email" className="inputs" placeholder="Email ID" onChange={handleChange} />
               <input name="pass"  className="inputs" placeholder="Password" onChange={handleChange}/>
               <button onClick={handleClick} className='create-account-button'>Create Account</button>
           </div>
        </div>
    )
}

export default AuthPage