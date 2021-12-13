import React from 'react'
import './Login.css';

function Login(){
    return(
        <>
        <div className='login'>
                <h1>LOGIN</h1>
            <div className='login-wrap'>
                <h3>username</h3>
                <input type='text' placeholder='username'/>
                <h3> password</h3>
                <input type='password' placeholder='password'/>
            </div>

            <button>LOGIN</button>

        </div>
        </>
    )
}
export default Login;