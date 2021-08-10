import React from 'react';
// import ProfileSection from '../presentational/ProfileSection.js'
import axios from 'axios';
import {useHistory} from 'react-router-dom'

const SignInComponent = ({setCurrentStudentInfo, currentStudentInfo, rooms, setIsAuthenticated, isAuthenticated, setCurrentInstructorInfo, currentInstructorInfo}) => {

    let history = useHistory();
    
    const handleStudentSignIn = (e) => {
        e.preventDefault()

        axios({
            method: 'POST',
            url: 'http://localhost:3001/login',
            data: { user: {
                username: e.target.username.value,
                password: e.target.password.value
            },
            r: "stu"    
            }
            
        })     
        .then(res => { 
            if(res.data.token){
                    localStorage.token = res.data.token
                    let newData = JSON.parse(res.data.user)
                    setCurrentStudentInfo({student: newData, errors: res.errors, status: 200, currentClasses: newData.rooms, studentAssignments: newData.rooms.map(r => r.instructor)})
                    setIsAuthenticated({auth: true, role: "stu", isLoggedIn: true})    
                    history.push('/profile')
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


        const handleInstructorSignIn = (e) => {
            e.preventDefault()

            axios({
                method: 'POST',
                url: 'http://localhost:3001/login',
                data: { user: {
                    username: e.target.username.value,
                    password: e.target.password.value
                },
                r: "ins"    
                }
                
            })     
            .then(res => { 
                if(res.data.token){
                    
                        localStorage.token = res.data.token
                        let newData = JSON.parse(res.data.user)
                        setCurrentInstructorInfo({instructor: newData, errors: res.errors, status: 200, currentClass: newData.room, studentsInClass: newData.room.users, currentAssignments: newData.assignments})
                        setIsAuthenticated({auth: true, role: "ins", isLoggedIn: true})
                        history.push('/profile')
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
        <div className='lvl-1-comp'>
            <h2 className='lvl-1-headers'> Sign In </h2>
            <div className='sign-cards'>
                <h3>Student</h3>
                <form className='forms-comp' onSubmit={(e) => {handleStudentSignIn(e)}}>
                    <div>
                        <label>Username</label><br></br>
                        <input className='form-inputs' type="text" name="username"/>  <br></br>  
                    </div>
                    <div>
                        <label>PassWord</label><br></br>
                        <input className='form-inputs' type="password" name="password"/><br></br>
                    </div>
                    <button className='form-buttons' type='submit' value='submit' variant="contained" color="primary" disableElevation>
                            Submit
                    </button>
                </form>
            </div>
            <div className='sign-cards'>
                <h3>Faculty</h3>
                <form className='forms-comp' onSubmit={(e) => {handleInstructorSignIn(e)}}>
                        <div>
                            <label>Username</label><br></br>
                            <input className='form-inputs' type="text" name="username"/>  <br></br>  
                        </div>
                        <div>
                            <label>PassWord</label><br></br>
                            <input className='form-inputs' type="password" name="password"/><br></br>
                        </div>
                        <button className='form-buttons' type='submit' value='submit' variant="contained" color="primary" disableElevation>
                            Submit
                        </button>
                </form>
            </div>                       
        </div>
    )
}

export default SignInComponent;