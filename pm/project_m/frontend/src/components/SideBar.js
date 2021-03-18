import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../../static/css/Sidebar.css'
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import PeopleIcon from '@material-ui/icons/People';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HistoryIcon from '@material-ui/icons/History';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Avatar } from '@material-ui/core'




const Sidebar = () => {
    return(
        <div className="container">
            <div className="logo">
                <Link to='/dashboard'><h4>Project Management</h4></Link>
            </div>
            <ul className="side-nav-links">
                <li>
                    <div style={{ display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap'}}>
                        <HomeIcon style={{ paddingRight: '10px', color: 'white', }}/>
                        <Link className="link" to='/'>Home</Link>
                    </div>
                </li>
                <li>
                    <div style={{ display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap'}}>
                    <PeopleIcon style={{ paddingRight: '10px', color: 'white', }} /><Link className="link">People</Link>
                    </div>
                </li>
                <li>
                    <div style={{ display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap'}}>
                    <AccountTreeIcon style={{ paddingRight: '10px', color: 'white', }} /><Link className="link">Projects</Link>
                    </div>
                </li>
                <li>
                    <div style={{ display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap'}}>
                    <HistoryIcon style={{ paddingRight: '10px', color: 'white', }} /><Link className="link">Past Projects</Link>
                    </div>
                </li>
                <li>
                    <div style={{ display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap'}}>
                    <SettingsIcon style={{ paddingRight: '10px', color: 'white', }} /><Link className="link">Settings</Link>
                    </div>
                </li>
                <li>
                    <div style={{ display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap'}}>
                    <ExitToAppIcon style={{ paddingRight: '10px', color: 'white', }} /><Link className="link">Logout</Link>
                    </div>
                </li>
                
            </ul>

            <div className="user-icon" style={{display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap'}}>
                <Link to='/dashboard'>
                    <Avatar>CS</Avatar>
                </Link>
                <h3>Colin</h3>
                
                    <ArrowForwardIosIcon className="forward-user-icon" />
                
            </div>
            
        </div>
    )
}

export default Sidebar;