import React from 'react'
import "./profile.css"
export default function Profile({data}) {
    const userKey = Object.keys(sessionStorage);
    return (
        <div>
            <div className='container2'>
                <p>Name:<label>{data.name}</label></p>
                <p>Email:<label>{data.email}</label></p>
                <p>Username:<label>{data.userName}</label></p>
                <p>Password:<label>{data.password}</label></p>
            </div>
            <div className='container2'>
                <h3>Registered user</h3>
                 {userKey.map((ele,index) =>{
                    if(ele === 'match')
                    {
                        return;
                    }
                    return(
                        <h3>{JSON.parse(sessionStorage.getItem(ele)).name}</h3>
                    )
                         
                 })}   
            </div>
        </div>
        
    )
}
