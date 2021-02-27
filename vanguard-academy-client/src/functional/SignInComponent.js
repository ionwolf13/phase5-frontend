import React, {useState,useEffect} from 'react';
import ProfileSection from '../presentational/ProfileSection.js'

const SignInComponent = ({students, rooms}) => {

    return(
        <div>
                <h5> Username: </h5>
                <h5> Password: </h5>
                <ProfileSection students={students} rooms={rooms}/>
        </div>
    )
}

export default SignInComponent;