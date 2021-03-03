import React from 'react';
import { Router } from 'react-router-dom';
import SignInComponent from '../functional/SignInComponent.js';
import {Link, Route} from 'react-router-dom'




const WelcomeContainer = (props) => {

    // console.log(props.match, "thi si router info")
    // console.log(props.match.path)
    // console.log(students, "this is welcome console")
    // console.log(students[1].first_name)
    return (
        <div>
            <h1>Welcome Page</h1>
            <di>
                <div>
                        <h2> Create an Account</h2>
                        <Link to='/enroll'> Enroll </Link>
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