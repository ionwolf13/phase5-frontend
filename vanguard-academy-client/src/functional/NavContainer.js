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
                                <div><Link className='nav-links' to='/profile'> Profile </Link></div>
                                <div><Link className='nav-links' to='/learnForm'> Learning Form </Link></div>
                                <div><Link className='nav-links'> Schedule </Link></div>
                                <div><Link className='nav-links'> Assignments </Link></div>
                                <div><Link className='nav-links' to='/courses'> Request Course </Link></div>
                                <button onClick={handleLogout}> Log Out </button>
                            </div>
                            : 
                            <div className='nav-comp' id='nav-detail-ins'>
                                <div><Link className='nav-links' to='/profile'> Profile </Link></div>
                                <div><Link className='nav-links' to='/profile/details'> Edit Profile </Link></div>
                                <div><Link className='nav-links'> Classes </Link></div>
                                <div><Link className='nav-links' to='/classAssignments'> Class Assignments </Link></div>
                                <div><Link className='nav-links'> Assignment Data Table </Link></div>
                                <button onClick={handleLogout}> Log Out </button>
                            </div>
                            ]
                    : 
                        <div className='nav-comp' id='nav-detail'>
                            <div><Link className='nav-links' to='/home'> Home</Link></div>
                            <div><Link className='nav-links' to='/about'> About </Link></div>
                            <div><Link className='nav-links' to='/welcome'> Welcome </Link></div>            
                            <div><Link className='nav-links' to='/admissions'> Admissions </Link></div>
                            <div><Link className='nav-links' to='/login'> Log In</Link></div>
                        </div>
                    }           
        </div>
    )
}

export default NavContainer;