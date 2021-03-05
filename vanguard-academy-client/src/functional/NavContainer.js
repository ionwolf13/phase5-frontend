import React from 'react';
import {Link, Router, Route} from 'react-router-dom'

const NavContainer = ({isAuthenticated}) => {

    return (
        <div>
                <div>    
                    {}
                        <Link to='/home'> Home</Link>
                        <Link to='/about'> About </Link>
                        <Link to='/welcome'> Welcome </Link>            
                        <Link to='/admissions'> Admissions </Link>
                        <Link to='/login'> Log In</Link>
                        <Link to='/logout'> Log Out </Link>
                </div>
            
        </div>
    )
}

export default NavContainer;