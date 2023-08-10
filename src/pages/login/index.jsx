import React from "react"
import './index.css'

const Login = () => {
    return (
        <div className="login-main">
            <div className="login-base">
                <div className="login-base-logo">
                    <img src={process.env.PUBLIC_URL + 'images/logo.png'} alt="" />
                </div>
                <div className="login-base-inputs">
                    <div className="site-name">
                        <p>Welcome to <span>Jollification</span></p>
                    </div>
                    <div className="login-form">
                        <label for="username">Username</label>
                        <input type="text" name="username" id="username" placeholder="Username" />
                        <label for="password">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" />
                        <button>Login</button>
                        <a href="#">Create account</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login