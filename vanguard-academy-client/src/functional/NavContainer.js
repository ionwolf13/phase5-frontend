import React from 'react';
import {Link} from 'react-router-dom'

const NavContainer = ({isAuthenticated,setIsAuthenticated}) => {


    const handleLogout = () => {
        localStorage.clear()
        setIsAuthenticated({auth: false, role: "", isLoggedIn: false})
    }

    return (
        <div className='nav-main-comp'>
                    {(isAuthenticated.isLoggedIn)? 
                            [(isAuthenticated.role === 'stu')? 
                            <div className='nav-comp' id='nav-detail-stu'>
                                <Link className='nav-links' to='/profile'> Profile </Link>
                                <Link className='nav-links' to='/profile/details'> Edit Profile </Link>
                                <Link className='nav-links' to='/learnForm'> Learning Form </Link>
                                <Link className='nav-links'> Schedule </Link>
                                <Link className='nav-links'> Assignments </Link>
                                <Link className='nav-links' to='/courses'> Request Course </Link>
                                <button onClick={handleLogout}> Log Out </button>
                            </div>
                            : 
                            <div className='nav-comp' id='nav-detail-ins'>
                                <Link className='nav-links' to='/profile'> Profile </Link>
                                <Link className='nav-links' to='/profile/details'> Edit Profile </Link>
                                <Link className='nav-links'> Classes </Link>
                                <Link className='nav-links' to='/classAssignments'> Class Assignments </Link>
                                <Link className='nav-links'> Assignment Data Table </Link>
                                <button onClick={handleLogout}> Log Out </button>
                            </div>
                            ]
                    : 
                        <div className='nav-comp' id='nav-detail'>
                            <Link className='nav-links' to='/home'> Home</Link>
                            <Link className='nav-links' to='/about'> About </Link>
                            <Link className='nav-links' to='/welcome'> Welcome </Link>            
                            <Link className='nav-links' to='/admissions'> Admissions </Link>
                            <Link className='nav-links' to='/login'> Log In</Link>
                        </div>
                    }           
        </div>
    )
}

export default NavContainer;