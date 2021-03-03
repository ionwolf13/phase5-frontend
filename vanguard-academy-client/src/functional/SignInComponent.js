import React, { useCallback , useState, useEffect} from 'react';
import ProfileSection from '../presentational/ProfileSection.js'
import axios from 'axios';

const SignInComponent = ({setCurrentStudent, currentStudent, rooms}) => {




    const handleSignIn = useCallback((e) => {
        e.preventDefault()
        // console.log(e.target.username.value, "this is the event.target")
        
        axios({
            method: 'POST',
            url: 'http://localhost:3001/login',
            data: {
                username: e.target.username.value,
                password: e.target.password.value
                }
            
        })
        .then(res => setCurrentStudent({student: res.data, isLoggedIn: true, errors: res.errors, status: 200, currentClasses: res.data.rooms}))
        // .then(res => console.log(res.data.rooms))
        
    })


    // console.log(currentUser, "this is this part")
    return(
        <div>
            
            <h1>Sign In Page</h1>
            <h3>Please Sign In</h3>
            <form onSubmit={(e) => {handleSignIn(e)}}>
                    <label>Username</label><br></br>
                    <input type="text" name="username"/>  <br></br>  
                    <label>PassWord</label><br></br>
                    <input type="password" name="password"/><br></br>
                    <button type="submit" value="submit">Submit</button>
            </form>
            <div>
                {/* {currentUser.errors} */}
                <ProfileSection  currentStudent={currentStudent} rooms={rooms}/>
            </div>
          
                
        </div>
    )
}

export default SignInComponent;