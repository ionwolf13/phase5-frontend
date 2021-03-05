import React, { useCallback , useState, useEffect} from 'react';
import ProfileSection from '../presentational/ProfileSection.js'
import axios from 'axios';

const SignInComponent = ({setCurrentStudentInfo, currentStudentInfo, rooms, setIsAuthenticated}) => {




    const handleSignIn = useCallback((e) => {
        e.preventDefault()
        
        axios({
            method: 'POST',
            url: 'http://localhost:3001/login',
            data: {
                username: e.target.username.value,
                password: e.target.password.value
                }
            
        })
        // .then(res => console.log(res, currentStudentInfo))
        .then(res => {
            setIsAuthenticated({auth: true})
            setCurrentStudentInfo({student: res.data, isLoggedIn: true, errors: res.errors, status: 200, currentClasses: res.data.rooms})})
        })


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
                {/* {console.log(currentStudentInfo.isLoggedIn)} */}
                {currentStudentInfo.isLoggedIn ? <ProfileSection  currentStudentInfo={currentStudentInfo} setCurrentStudentInfo={setCurrentStudentInfo} rooms={rooms}/> : null}
                
            </div>
          
                
        </div>
    )
}

export default SignInComponent;