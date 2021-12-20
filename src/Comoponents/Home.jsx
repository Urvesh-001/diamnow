import React, {useState} from 'react'
import { useHistory  } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Home({match}) {

    const history = useHistory();
    const [name,setName] = useState("");
    const [userName,setUserName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [confirmpassword,setConfirmPassword] = useState("")

    
    const submitform =  (e) =>{  
        match = false;
        e.preventDefault();
        if(!name || !userName || !email || !password || !confirmpassword )
        {
            return toast.warning("Please Fill Empty Fields")
        }

        if(password !== confirmpassword)
        {
            return toast.error("Password Do Not Match")
        }
      
       
        const newData = {
            name:name,
            userName:userName,
            email:email,
            password:password,
            confirmpassword:confirmpassword
        }
        var match = sessionStorage.getItem(email)
        console.log(match);
       
        sessionStorage.setItem(email,JSON.stringify(newData))
        history.push('/login')
    }

    return (
        <div className="container">
            <form action='' onSubmit={submitform}>
                <input type='text' placeholder='Name' onChange={(e)=>setName(e.target.value)}/>
                <input type='text' placeholder='Username' onChange={(e)=>setUserName(e.target.value)} />
                <input type='text' placeholder='Email' onChange={(e)=>setEmail(e.target.value)} />
                <input type='text' placeholder='Password'  onChange={(e)=>setPassword(e.target.value)} />
                <input type='text' placeholder='Confirm Password' onChange={(e)=>setConfirmPassword(e.target.value)} />
                <button type='submit'>Login</button>
                <br/>
            </form>
        </div>
    )
}
