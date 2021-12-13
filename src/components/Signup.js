import React from 'react'
import './Login.css';

function Signup(){
    return(
        <>
        <div className='signup'>
                <h1>CREATE ACCOUNT</h1>
            <div className='login-wrap'>
                <h3>username</h3>
                <input type='text' placeholder='username'/>
                <h3>email</h3>
                <input type='email' placeholder='project@gmail.com'/>
                <h3> password</h3>
                <input type='password' placeholder='password'/>
                <h3>retype password</h3>
                <input type='password' placeholder='password'/>
            </div>

            <button>signup</button>

        </div>
        </>
    )
}
export default Signup;