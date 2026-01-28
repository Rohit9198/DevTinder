import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';

const Login = () => {
    const [email, setEmail] = useState("rohitsi88@gmail.com");
    const [password, setPassword] = useState("rohit@9198");
    const dispatch = useDispatch();
    const navigate = useNavigate();

const handleLogin = async() =>{
  try{const res = await axios.post(BASE_URL + "/login",
    {
    email,
    password,
   },
   {withCredentials: true}
  );
   dispatch(addUser(res.data));
   return navigate("/");
  }catch(err){
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
        <legend className="label-text">Email</legend>
        <input type="text" value={email} placeholder="Type here" 
        className="input input-bordered w-full max-w-xs"
        onChange={(e) => setEmail(e.target.value)}
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
