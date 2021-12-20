import React, {useState} from 'react'
import { useHistory  } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Home({setMatch}) {

    const history = useHistory();
    const [name,setName] = useState("");
    const [userName,setUserName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [confirmpassword,setConfirmPassword] = useState("")

    
    const submitform =  (e) =>{  
        e.preventDefault();
        setMatch(false);
        const userKey = Object.keys(sessionStorage);
        if(!name || !userName || !email || !password || !confirmpassword )
        {
            return toast.warning("Please Fill Empty Fields")
        }

        if(password !== confirmpassword)
        {
            return toast.error("Password Do Not Match")
        }
      
        if(userKey.includes(email))
        {
            setMatch(true);
            return toast.error("Email already exist!")
        }
       
        const newData = {
            name:name,
            userName:userName,
            email:email,
            password:password,
            confirmpassword:confirmpassword
        }
      
       
       
        sessionStorage.setItem(email,JSON.stringify(newData))
        history.push('/login')
    }

    return (
        <div className="container">
            <h2>Registration page </h2>
            <form action='' onSubmit={submitform}>
                <input type='text' placeholder='Name' onChange={(e)=>setName(e.target.value)}/>
                <input type='text' placeholder='Username' onChange={(e)=>setUserName(e.target.value)} />
                <input type='text' placeholder='Email' onChange={(e)=>setEmail(e.target.value)} />
                <input type='text' placeholder='Password'  onChange={(e)=>setPassword(e.target.value)} />
                <input type='text' placeholder='Confirm Password' onChange={(e)=>setConfirmPassword(e.target.value)} />
                <button type='submit'>SignUp</button>
                <br/>
            </form>
        </div>
    )
}
