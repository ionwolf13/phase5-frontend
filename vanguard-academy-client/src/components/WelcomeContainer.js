import React from 'react';
import {Link, Redirect} from 'react-router-dom';


const WelcomeContainer = (props) => {
    
    return (
        <div className='lvl-1-comp'>
            <h1 className='lvl-1-headers'>Welcome Page</h1>
                <div>
                        <h2> Create an Account</h2>
                        <Link to='/enrollmentInfo'> Enroll </Link>
                </div>
                <div>
                        <h2> Sign In </h2>
                        <Link to='/login'> Log In </Link>
                </div>
        </div>
    )
    
}


export default WelcomeContainer;