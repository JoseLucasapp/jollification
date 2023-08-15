import React from "react"
import './index.css'

import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()

    function login() {
        navigate('/home')
    }

    return (
        <div className="login-main">
            <div className="login-base">
                <div className="login-base-logo">
                    <img src={process.env.PUBLIC_URL + 'images/logo.png'} alt="" />
                </div>
                <div className="login-base-inputs">
                    <div className="site-name">
                        <p><span>Jollification</span></p>
                        <p>Login</p>
                    </div>
                    <div className="login-form">
                        <label for="username">Username</label>
                        <input type="text" name="username" id="username" placeholder="Username" />
                        <label for="password">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" />
                        <button onClick={() => login()}>Login</button>
                        <Link to="/registry">Create account</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login