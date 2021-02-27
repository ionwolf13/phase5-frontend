import React from 'react';
import SignInComponent from '../functional/SignInComponent.js';




const WelcomeContainer = ({students, rooms}) => {

    // console.log(students, "this is welcome console")
    // console.log(students[1].first_name)
    return (
        <div>
            <h1>Welcome Page</h1>
            <h3>Please Sign In</h3>
            <SignInComponent students={students} rooms={rooms}/>
        </div>
    )
    
}


export default WelcomeContainer;