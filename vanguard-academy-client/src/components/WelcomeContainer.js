import React from 'react';
import {Link, Redirect} from 'react-router-dom'

import Button from '@material-ui/core/Button'




const WelcomeContainer = (props) => {
    
    return (
        <div>
            <h1>Welcome Page</h1>
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