import React from 'react';
import {Link} from 'react-router-dom'




const WelcomeContainer = (props) => {

    return (
        <div>
            <h1>Welcome Page</h1>
            <di>
                <div>
                        <h2> Create an Account</h2>
                        <Link to='/enrollmentInfo'> Enroll </Link>
                </div>
                <div>
                        <h2> Sign In </h2>
                       <Link to='/login'> Log In </Link>
                        
                </div>
            </di>
            
        </div>
    )
    
}


export default WelcomeContainer;