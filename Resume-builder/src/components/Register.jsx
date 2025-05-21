import React from 'react'

export default function Register() {
  return (
    <div className='signup-container'>
        <form>
            <h2>Signup</h2>
            <div className='email'>            
                <input type="email" placeholder='Email' required/>
                <i class="fa-solid fa-envelope"></i>
            </div>
            <div className='password pass1'>
                <input type="password" placeholder='Password' required/>

            </div>
            <div className='password'>
                <input type="password" placeholder='Confirm password' required/>
                <i class="fa-solid fa-eye"></i>
            </div>
            <button>Signup</button>
            <p>Alredy user? <a href="">Login page</a></p>

        </form>
    </div>
  )
}
