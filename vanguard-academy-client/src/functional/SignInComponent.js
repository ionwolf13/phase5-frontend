import React from 'react';
import ProfileSection from '../presentational/ProfileSection.js'
import axios from 'axios';

const SignInComponent = ({setCurrentStudentInfo, currentStudentInfo, rooms, setIsAuthenticated}) => {

    const handleSignIn = (e) => {
        e.preventDefault()
        
        axios({
            method: 'POST',
            url: 'http://localhost:3001/login',
            data: { user: {
                username: e.target.username.value,
                password: e.target.password.value
            }    
            }
            
        })     
        .then(res => {
            if(res.data.token){
                    localStorage.toke = res.data.token
                    let newData = JSON.parse(res.data.user)
                    setCurrentStudentInfo({student: newData, isLoggedIn: true, errors: res.errors, status: 200, currentClasses: newData.rooms, studentAssignments: newData.rooms.map(r => r.instructor)})
            }
            else{
                    alert('Invalid Login Info')
            }
        })
        // .then(res => {
        //     setIsAuthenticated({auth: true})
        //     setCurrentStudentInfo({student: res.data, isLoggedIn: true, errors: res.errors, status: 200, currentClasses: res.data.rooms, studentAssignments: res.data.rooms.map(r => r.instructor)})})
        e.target.reset()
        }

        
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
                {currentStudentInfo.isLoggedIn ? <ProfileSection  currentStudentInfo={currentStudentInfo} setCurrentStudentInfo={setCurrentStudentInfo} rooms={rooms}/> : null}
            </div>
          
                
        </div>
    )
}

export default SignInComponent;