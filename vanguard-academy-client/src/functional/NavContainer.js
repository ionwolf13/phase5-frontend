import React from 'react';
import {Link} from 'react-router-dom'

const NavContainer = ({isAuthenticated,setIsAuthenticated}) => {


    const handleLogout = () => {
        localStorage.clear()
        setIsAuthenticated({auth: false, role: "", isLoggedIn: false})
    }

    return (
        <div className='nav-comp-main'>
                <div className='nav-comp-main'>    
                    {(isAuthenticated.isLoggedIn)? 
                            [(isAuthenticated.role === 'stu')? 
                            <div className='nav-comp-main' id='nav-stu-sec'>
                                <Link to='/profile'> Profile </Link>
                                <Link to='/profile/details'> Edit Profile </Link>
                                <Link to='/learnForm'> Learning Form </Link>
                                <Link> Schedule </Link>
                                <Link> Assignments </Link>
                                <Link to='/courses'> Request Course </Link>
                                <button onClick={handleLogout}> Log Out </button>
                            </div>
                            : 
                            <div className='nav-comp-main' id='nav-inst-sec'>
                                <Link to='/profile'> Profile </Link>
                                <Link to='/profile/details'> Edit Profile </Link>
                                <Link> Classes </Link>
                                <Link to='/classAssignments'> Class Assignments </Link>
                                <Link> Assignment Data Table </Link>
                                <button onClick={handleLogout}> Log Out </button>
                            </div>
                            ]
                    : 
                        <div className='nav-comp-main' id='nav-neu-sec'>
                            <Link to='/home'> Home</Link>
                            <Link to='/about'> About </Link>
                            <Link to='/welcome'> Welcome </Link>            
                            <Link to='/admissions'> Admissions </Link>
                            <Link to='/login'> Log In</Link>
                        </div>
                    }
                </div>
            
        </div>
    )
}

export default NavContainer;