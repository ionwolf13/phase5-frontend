import React from 'react';
import axios from 'axios';

const EditProfileFormContainer = ({currentStudent, setCurrentStudentInfo, auth, currentInstructor, setCurrentInstructorInfo}) => {
   
    const handleEnrollFormFunction = (e) => {
        e.preventDefault()

        const [username, email, email_confirmation, password, password_confirmation] = e.target

        
        let urlAdapter = ""
        if(auth.role === "stu"){
            urlAdapter = `http://localhost:3001/users/${currentStudent.student.id}`
            let user = {
                username: username.value,
                email: email.value,
                email_confirmation: email_confirmation.value,
                password: password.value,
                password_confirmation: password_confirmation.value
                }

            Object.entries(user).forEach(arr => {
                                if(!user[arr[0]]){
                        delete user[arr[0]]
            }})          
            if(Object.keys(user).length !== 0){
                axios({
                        method: 'PATCH',
                        url: urlAdapter,
                        data: { user }
                    })
                    .then(res => { 
                        setCurrentStudentInfo({...currentStudent, student: res.data})
                    })
            }
            else{
                return null
            }

        }
        else{
            urlAdapter = `http://localhost:3001/instructors/${currentInstructor.instructor.id}`
            let instructor = {
                username: username.value,
                email: email.value,
                email_confirmation: email_confirmation.value,
                password: password.value,
                password_confirmation: password_confirmation.value
                }
                Object.entries(instructor).forEach(arr => {
                    if(!instructor[arr[0]]){
                            delete instructor[arr[0]]
                        }
                })
            if(Object.keys(instructor).length !== 0){
                axios({
                        method: 'PATCH',
                        url: urlAdapter,
                        data: { instructor }
                    })
                    .then(res => { 
                        setCurrentInstructorInfo({...currentInstructor, instructor: res.data})  
                    })
            }
            else{
                return null
            }
        }
        e.target.reset()
    }

    return(

        <div className='form-cont'>   
            <h1>Edit Profile</h1>
                <form className='forms-comp' onSubmit={e => handleEnrollFormFunction(e)}>
                        <div className='form-sections'>
                            <label>Username</label>
                            <input className='form-inputs' type='text' label='Username' name='username' /><br></br>
                        </div>
                        <div className='form-sections'>
                            <label>Email</label>
                            <input className='form-inputs' type='text' label='Email' name='email' /><br></br>
                        </div>
                        <div className='form-sections'>
                            <label>Confirm Email</label>
                            <input className='form-inputs' type='text' label='Email' name='email_confirmation' /><br></br>
                        </div>
                        <div className='form-sections'>
                            <label>Password</label>
                            <input className='form-inputs' type='password' label='Password' name='password'/><br></br>
                        </div>
                        <div className='form-sections'>
                            <label>Confirm Password</label>
                            <input className='form-inputs' type='password' label='Confirm Password' name='password_confirmation'/><br></br>
                        </div>
                        <button className='form-buttons' id='edit-form-button' type='submit' value='submit'>Submit</button>
                    </form>
        </div>
    )
}


export default EditProfileFormContainer;