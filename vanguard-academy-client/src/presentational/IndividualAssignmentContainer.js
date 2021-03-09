import React from 'react';

const IndividualAssignmentContainer = ({assignment, grade, student, auth, currentInstructorInfo}) => {

    return(
        <div>
            {(auth.role === "stu")? 
                <div>
                    <h5> Assignment: {assignment.assignment_name} </h5>
                    <h6> Topic: {assignment.assignment_topic} </h6>
                    <h6> Difficulty: {assignment.level_difficulty}</h6>
                    <h6> Grade: {grade.student_score}</h6>
                </div>
            : 
                <div>
                    <h5> Assignment: {assignment.assignment_name} </h5>
                    <h6> Topic: {assignment.assignment_topic} </h6>
                    <h6> Difficulty: {assignment.level_difficulty}</h6>
                    <h6> Grade: {grade.student_score} {grade.assignment_id} {grade.id}</h6>
            </div>
            }
        </div>
    )
}

export default IndividualAssignmentContainer;