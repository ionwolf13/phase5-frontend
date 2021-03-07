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
                    }
            })
                        
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

        <div>
            <div>
                <form  onSubmit={e => handleEnrollFormFunction(e)}>
                        <label>Username</label>
                        <input type='text' label='Username' name='username' /><br></br>
                        <label>Email</label>
                        <input type='text' label='Email' name='email' /><br></br>
                        <label>Confirm Email</label>
                        <input type='text' label='Email' name='email_confirmation' /><br></br>
                        <label>Password</label>
                        <input type='password' label='Password' name='password'/><br></br>
                        <label>Confirm Password</label>
                        <input type='password' label='Confirm Password' name='password_confirmation'/><br></br>
                        <button type='submit' value='submit'>Submit</button>
                    </form>
            </div>
            
        </div>
    )
}


export default EditProfileFormContainer;