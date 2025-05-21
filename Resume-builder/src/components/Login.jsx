import React from 'react'

export default function Login() {
  return (
    <div className='Login-container'>
        <form>
            <h2>Login</h2>
            <div className='email'>            
                <input type="email" placeholder='Email' required/>
                <i class="fa-solid fa-envelope"></i>
            </div>
            <div className='password'>
                <input type="password" placeholder='Password' required/>
                <i class="fa-solid fa-eye"></i>
            </div>
            <a className='f-p' href="">Forgot password?</a>
            <button>Login</button>
            <p>Not a user ? <a href="">signup now</a></p>

        </form>
    </div>
  )
}
