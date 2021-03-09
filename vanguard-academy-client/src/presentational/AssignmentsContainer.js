import React from 'react';
import IndividualAssignmentContainer from './IndividualAssignmentContainer';
import AssignmentTableContainer from './AssignmentTableContainer.js';

const AssignmentsContainer = ({currentStudentInfo, assignments, auth, currentInstructorInfo, setCurrentInstructorInfo}) => {
    
    
    let assignmentArray = []
    let total = 0 
    let avgGrade = 0
    if(auth.role === "stu"){
        assignments.map(a => {
            a.student_assignments.map(b => {
                if(b.user_id === currentStudentInfo.student.id){
                    assignmentArray.push({assignment: a, grade: b})
                }
            })
        })

        
        assignmentArray.map(a => {
            total += a.grade.student_score
        })
        avgGrade = total/assignmentArray.length
    }
    
    return (
        <div>
            {(auth.role === "stu")? 
            
            <div>
                <h3>Grade Average: { avgGrade }</h3>
                {assignmentArray.map(a => <IndividualAssignmentContainer assignment={a.assignment} grade={a.grade} auth={auth} />)}
            </div> 
            :
            <div>
                <AssignmentTableContainer auth={auth} currentInstructorInfo={currentInstructorInfo} setCurrentInstructorInfo={setCurrentInstructorInfo}/>
            </div>
            }
                        
        </div>
    )
}

export default AssignmentsContainer;