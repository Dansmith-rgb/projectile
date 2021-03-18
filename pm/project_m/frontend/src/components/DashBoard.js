import React from 'react'
import Sidebar from './SideBar';
import '../../static/css/Dashboard.css';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import PeopleIcon from '@material-ui/icons/People';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HistoryIcon from '@material-ui/icons/History';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Avatar } from '@material-ui/core'


const DashBoard = () => {
    return (
        <>
            <nav className="dashboard-right-nav">
                <ul className="side-nav-links-burger">
                    <li>
                        <div style={{ display: 'flex',
                            alignItems: 'center',
                            flexWrap: 'wrap'}}>
                            <HomeIcon style={{ paddingRight: '10px', color: 'white', }}/>
                            <Link className="link-burger" to='/'>Home</Link>
                        </div>
                    </li>
                    <li>
                        <div style={{ display: 'flex',
                            alignItems: 'center',
                            flexWrap: 'wrap'}}>
                        <PeopleIcon style={{ paddingRight: '10px', color: 'white', }} /><Link className="link-burger">People</Link>
                        </div>
                    </li>
                    <li>
                        <div style={{ display: 'flex',
                            alignItems: 'center',
                            flexWrap: 'wrap'}}>
                        <AccountTreeIcon style={{ paddingRight: '10px', color: 'white', }} /><Link className="link-burger">Projects</Link>
                        </div>
                    </li>
                    <li>
                        <div style={{ display: 'flex',
                            alignItems: 'center',
                            flexWrap: 'wrap'}}>
                        <HistoryIcon style={{ paddingRight: '10px', color: 'white', }} /><Link className="link-burger">Past Projects</Link>
                        </div>
                    </li>
                    <li>
                        <div style={{ display: 'flex',
                            alignItems: 'center',
                            flexWrap: 'wrap'}}>
                        <SettingsIcon style={{ paddingRight: '10px', color: 'white', }} /><Link className="link-burger">Settings</Link>
                        </div>
                    </li>
                    <li>
                        <div style={{ display: 'flex',
                            alignItems: 'center',
                            flexWrap: 'wrap'}}>
                        <ExitToAppIcon style={{ paddingRight: '10px', color: 'white', }} /><Link className="link-burger">Logout</Link>
                        </div>
                    </li>
                
                </ul>
                <div className="burger-dashboard">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
                
            </nav>
            <Sidebar />
        </>
    )
}

export default DashBoard
