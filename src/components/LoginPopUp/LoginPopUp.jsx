import React, { useState } from 'react'
import './LoginPopUp.css'
import crossicon from '../../assets/red-cross.png'

const LoginPopUp = ({setShowLogin}) => {

const [currState, setCurrState] = useState('Login')

  return (
    <div className='login-popup'>
        <form className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={crossicon} alt=''/>
            </div>
            <div className="login-popup-inputs">
                {currState==='Login' ? <></>:<input type="text" placeholder='Your Name' required />}
                <input type="email" placeholder='Your email' required />
                <input type="password" placeholder='Password' required/>
            </div>
            <button>{currState=== 'Sing Up' ? 'Create Account': 'Login'}</button>
            <div className="login-popup-conditions">
                <input type='checkbox' required/>
                <p>Accept terms and conditions to continue</p>
                <div>
                    {currState==='Login'
                    ?<p>Create new account? <span onClick={()=>setCurrState('Sing Up')}>Click here</span></p>
                    :<p>Already have an account? <span onClick={()=>setCurrState('Login')}>Login here</span></p>
                    }
                </div>
            </div>
        </form>
    </div>
  )
}

export default LoginPopUp