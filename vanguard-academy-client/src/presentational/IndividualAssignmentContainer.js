import React from 'react';

const IndividualAssignmentContainer = ({assignment}) => {

    return(
        <div>
                <h5> Assignment: {assignment.assignment_name} </h5>
                <h6> Topic: {assignment.Assignment_topic} </h6>
                <h6> Difficulty: {assignment.level_difficulty}</h6>
                <h6> Grade: {assignment.grade_level}</h6>
        </div>
    )
}

export default IndividualAssignmentContainer;