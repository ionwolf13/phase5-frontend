import React from 'react';
import {Link} from 'react-router-dom'

const NavContainer = ({isAuthenticated,setIsAuthenticated}) => {

    console.log(isAuthenticated)

    const handleLogout = (e) => {
        localStorage.clear()
        setIsAuthenticated({auth: false, role: "", isLoggedIn: false})
    }

    return (
        <div>
                <div>    
                        <Link to='/home'> Home</Link>
                        <Link to='/about'> About </Link>
                        <Link to='/welcome'> Welcome </Link>            
                        <Link to='/admissions'> Admissions </Link>
                        <Link to='/login'> Log In</Link>
                        <button onClick={e => handleLogout(e)}> Log Out </button>
                </div>
            
        </div>
    )
}

export default NavContainer;