import React from 'react';
import axios from 'axios';

const DeleteProfileContainer = ({student}) => {

    
    const deleteFunction = (e) => {
        e.preventDefault()
        console.log("http://localhost:3001/users/",student.id)
        axios({
            method: 'DELETE',
            url: `http://localhost:3001/users/${student.id}`})
            .then(res => console.log(res))

    }

    return(
        <div>
            <div>
                <button onClick={e => deleteFunction(e)}>Delete Profile</button>
            </div>      
        </div>
    )
}

export default DeleteProfileContainer;