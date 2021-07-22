import React, {useCallback} from 'react';
import axios from 'axios';

const EnrollFormContainer = () => {


    const handleEnrollFormFunction = useCallback((e) => {
        e.preventDefault()

        const [first_name, middle_name, last_name, username, age, email, email_confirmation, password, password_confirmation] = e.target

        axios({
            method: 'POST',
            url: 'http://localhost:3001/users',
            data: { user: {
                first_name: first_name.value,
                middle_name: middle_name.value,
                last_name: last_name.value,
                username: username.value,
                age: age.value,
                email: email.value,
                email_confirmation: email_confirmation.value,
                password: password.value,
                password_confirmation: password_confirmation.value
                }    
            }                
        })
        .then(res => console.log(res, "this the new user"))
        e.target.reset()

    }, []);


    return(
        <div className='lvl-1-comp'>
            <h2 className='lvl-1-headers'>Submit An Application</h2>
            <form  onSubmit={e => handleEnrollFormFunction(e)}>
                <label>First Name</label>
                <input type='text' label='First Name' name='first_name' /><br></br>
                <label>Middle Name</label>
                <input type='text' label='Middle Name' name='middle_name' /><br></br>
                <label>Last name</label>
                <input type='text' label='Last Name' name='last_name' /><br></br>
                <label>Username</label>
                <input type='text' label='Username' name='username' /><br></br>
                <label>Age</label>
                <input type='text' label='Age' name='age' /><br></br>
                <label>Email</label>
                <input type='text' label='Email' name='email' /><br></br>
                <label>Confirm Email</label>
                <input type='text' label='Email' name='email_confirmation' /><br></br>
                <label>Password</label>
                <input type='password' label='Password' name='password' onChange={e => {console.log(e.target.value)}} /><br></br>
                <label>Confirm Password</label>
                <input type='password' label='Confirm Password' name='password_confirmation' onChange={e => {console.log(e.target.value)}} /><br></br>
                <button type='submit' value='submit'>Submit</button>
            </form>
        </div>
    )
}

export default EnrollFormContainer;