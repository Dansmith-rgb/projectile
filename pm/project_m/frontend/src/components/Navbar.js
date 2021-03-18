import React from 'react'
import { Link } from 'react-router-dom';
import '../../static/css/index.css'

const Navbar = () => {
    return (
        <>
            <nav className="home-nav">
                <div class="logo">
                    <Link to='/'><h4>Project Management</h4></Link>
                </div>
                <ul class="nav-links">
                    <li>
                        <Link>SignIn/Join</Link>
                    </li>
                    <li>
                        <Link>About</Link>
                    </li>
                    <li>
                        <Link>Contact Us</Link>
                    </li>
                </ul>
                <div class="burger">
                    <div class="line1"></div>
                    <div class="line2"></div>
                    <div class="line3"></div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
