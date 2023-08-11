import React from "react"
import './index.css'

const Registry = () => {
    return (
        <div className="registry-main">
            <div className="registry-base">
                <div className="registry-base-logo">
                    <img src={process.env.PUBLIC_URL + 'images/logo.png'} alt="" />
                </div>
                <div className="registry-base-inputs">
                    <div className="site-name">
                        <p>Welcome to <span>Jollification</span></p>
                    </div>
                    <div className="registry-form">
                        <label for="username">Username</label>
                        <input type="text" name="username" id="username" placeholder="Username" />
                        <label for="password">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" />
                        <button>Create account</button>
                        <a href="#">Already have an account? login here.</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registry