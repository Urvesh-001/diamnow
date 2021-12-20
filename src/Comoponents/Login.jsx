import React,{useState} from 'react'
import { useHistory  } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Login({setData}) {
    const history = useHistory();
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
   
    const handleSubmit = (e) =>
    {   
        
        e.preventDefault();
        var name = JSON.parse(sessionStorage.getItem(email) )
        setData(name)
        if(email === name.email && password === name.password)
        {
            history.push('/profile')
        }
        else{
            return toast.error("Password Do Not Match")
        }
    }

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Email' onChange={(e)=>setEmail(e.target.value)} />
                <input type='text' placeholder='Password'  onChange={(e)=>setPassword(e.target.value)} />
                <button type='submit'>Login</button>
            </form>
            
        </div>
    )
}
