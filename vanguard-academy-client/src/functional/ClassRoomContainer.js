import React from 'react';
import IndividualClassComponent from './IndividualClassComponent.js';

const ClassRoomContainer = ({studentsInstructors}) => {

    return (
        <div>
            {studentsInstructors.map(ins => <IndividualClassComponent instructor={ins}/>)}
        </div>
    )
}


export default ClassRoomContainer;