import axios from 'axios';
import React, { useState } from 'react'

const Login = () => {
    const [emailId, setEmailId] = useState("rohit@gmail.com");
    const [password, setPassword] = useState("rohit@123");

const handleLogin = async() =>{
  try{const res = await axios.post("http://localhost:7777/login",{
    emailId,
    password,
   });}
   catch(err){
    console.error(err);
   }
};
  return (
    <div className="flex justify-center my-10">
    <div className="card bg-base-300 w-96 shadow-sm">
  <div className="card-body">
    <h2 className="card-title justify-center">Login</h2>
    <div>
        <fieldset className="fieldset my-2">
        <legend className="label-text">Email ID</legend>
        <input type="text" value={emailId} placeholder="Type here" 
        className="input input-bordered w-full max-w-xs"
        onChange={(e) => setEmailId(e.target.value)}
        />
        </fieldset>
    </div>
    <div>
        <fieldset className="fieldset my-2">
        <legend className="label-text">Password</legend>
        <input type="text" value={password} placeholder="Type here" 
        className="input input-bordered w-full max-w-xs"
        onChange={(e) => setPassword(e.target.value)}
        />
        </fieldset>
    </div>
    <div className="card-actions justify-center m-2">
      <button className="btn btn-primary" onClick={handleLogin}>Login</button>
    </div>
  </div>
</div>
</div>
  )
}

export default Login
