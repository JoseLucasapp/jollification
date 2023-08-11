import React from "react";
import './index.css'

const Home = () => {
    return (
        <div className="home-main">
            <div className="home-left">
                <div className="home-logo">
                    <img src={process.env.PUBLIC_URL + 'images/logomain.png'} alt="" />
                </div>
            </div>
            <div className="home-middle"></div>
            <div className="home-right">
                <div className="home-user-menu">
                    <img src={process.env.PUBLIC_URL + 'images/group4.png'} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home