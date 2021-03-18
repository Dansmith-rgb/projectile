import React from 'react'

import '../../static/css/Header.css'
import { Link } from 'react-router-dom';

const Header = ({name}) => {
    return (
        <div>
            <nav>
                
                <div class="burger">
                    <div class="line1"></div>
                    <div class="line2"></div>
                    <div class="line3"></div>
                </div>
                
            </nav>
            
        </div>
    )
}

export default Header
