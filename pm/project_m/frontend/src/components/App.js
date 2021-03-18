import React from 'react'
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Dashboard from './DashBoard';
import Registration from './Registration';

const App = () => {
    return (

        <Router>
            
            <Route path='/' exact render={(props) => (
                <Home />
            )} />
            <Route path='/dashboard' render={() => (<Dashboard />)} />
            <Route path='/registration' render={() => (<Registration />)} />

        </Router>    
            
     
    )
}

export default App;