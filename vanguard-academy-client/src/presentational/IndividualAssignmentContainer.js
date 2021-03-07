import React from 'react';

const IndividualAssignmentContainer = ({assignment, grade, student, auth, currentInstructorInfo}) => {
    // console.log(assignment, "here is the AASSIGN")
    // console.log(auth)
    return(
        <div>
            {(auth.role === "stu")? 
                <div>
                    <p>LKJSFOIHOIF</p>
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