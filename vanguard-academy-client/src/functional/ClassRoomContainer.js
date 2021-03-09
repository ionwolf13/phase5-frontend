import React from 'react';
import IndividualClassComponent from './IndividualClassComponent.js';

const ClassRoomContainer = ({studentsInstructors, auth, currentStudentInfo}) => {


    return (
        <div>
            {studentsInstructors.map(ins => <IndividualClassComponent instructor={ins} auth={auth} currentStudentInfo={currentStudentInfo}/>)}
        </div>
    )
}


export default ClassRoomContainer;