import React from 'react';
import AssignmentsContainer from '../presentational/AssignmentsContainer';


const IndividualClassComponent = ({instructor, auth, currentStudentInfo}) => {


    return(
        <div>
                <h3>Instructor: {instructor.first_name} {instructor.last_name}</h3>
                <div>
                    <h3> Current Assignments </h3>
                    <AssignmentsContainer assignments={instructor.assignments} auth={auth} currentStudentInfo={currentStudentInfo} />
                </div>
        </div>
    )
}

export default IndividualClassComponent;