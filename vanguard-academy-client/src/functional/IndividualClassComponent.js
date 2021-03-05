import React from 'react';
import AssignmentsContainer from '../presentational/AssignmentsContainer';


const IndividualClassComponent = ({instructor}) => {

    return(
        <div>
                <h3>Instructor: {instructor.first_name} {instructor.last_name}</h3>
                <div>
                    <h3> Current Assignments </h3>
                    <AssignmentsContainer assignments={instructor.assignments}/>
                </div>
        </div>
    )
}

export default IndividualClassComponent;