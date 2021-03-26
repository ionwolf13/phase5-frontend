import React from 'react';
import {Link, Redirect} from 'react-router-dom'

import Button from '@material-ui/core/Button'




const WelcomeContainer = (props) => {
    
    return (
        <div>
            <h1>Welcome Page</h1>
            <di>
                <div>
                        <h2> Create an Account</h2>
                        {/* <Button type='submit' value='submit' variant="contained" color="primary" disableElevation> */}
                        <Link to='/enrollmentInfo'> Enroll </Link>
                        {/* </Button> */}
                        
                </div>
                <div>
                        <h2> Sign In </h2>
                        {/* <Button type='submit' value='submit' variant="contained" color="primary" disableElevation> */}
                        <Link to='/login'> Log In </Link>
                        {/* </Button> */}
                      
                        
                </div>
            </di>
            
        </div>
    )
    
}


export default WelcomeContainer;