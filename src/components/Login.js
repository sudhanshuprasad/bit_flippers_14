import React from 'react'
import {Link} from 'react-router-dom'
import { useNavigate, useState } from 'react';

const Login = () => {

    const [login, setLogin] = useState(false);
    const navigate = useNavigate();

    const handleLogin=()=>{
        console.log("loged in")
        navigate('/home')
    }

  return (
      <div id='login-parent' /* className='active' */>
            <div /* className='transparent' */>
            </div>
            <div className='login-container'>
                <div className='login'>
                    <div>
                        <label htmlFor='User_ID'>Enter ID:</label><br />
                        <input type="text" name='User_ID' id='User_Id' placeholder='User ID'></input><br />
                    </div>
                    <div>
                        <label htmlFor='password'>Enter password:</label><br />
                        <input type="password" name="password" id="password" placeholder='Password'></input><br />
                    </div>
                    <div>
                        <button onClick={handleLogin}>Login</button>
                        <br />
                    </div>
                    <div>
                        <p>New User?</p>
                        <Link to="/signup" >Sign Up</Link>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Login