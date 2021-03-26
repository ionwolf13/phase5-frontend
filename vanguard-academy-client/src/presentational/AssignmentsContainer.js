import React from 'react';
import IndividualAssignmentContainer from './IndividualAssignmentContainer';
import AssignmentTableContainer from './AssignmentTableContainer.js';
import AddAssignmentFormContainer from '../functional/AddAssignmentFormComponent.js';

const AssignmentsContainer = ({currentStudentInfo, assignments, auth, currentInstructorInfo, setCurrentInstructorInfo}) => {
    console.log(auth)
    
    // console.log(currentInstructorInfo.currentAssignments)
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
   

        const handleDeleteFunc = (e,assign) => {
            e.preventDefault()
            let currentAssignment = assign
            console.log(currentInstructorInfo.currentAssignments)
            let arr = currentInstructorInfo.currentAssignments.filter(assignment => (assignment != currentAssignment))
            console.log(arr)
            console.log("delete it!!", assign)
            // assign.student_assignments.map(joiner => {
            //     axios({
            //         method: 'DELETE',
            //         url: `http://localhost:3001/student_assignments/${joiner.id}`
            //     })
            //         .then(res => console.log(res))       
            // })

            // axios({
            //     method: 'DELETE',
            //     url: `http://localhost:3001/assignments/${assign.id}`
            // })
            //     .then(res => {
            //         let arr = currentInstructorInfo.currentAssignments.filter(assignment => (assignment != currentAssignment))
            //         setCurrentInstructorInfo({...currentInstructorInfo, currentAssignments: arr})
            //     }) 


            
        }

        
    
    
    return (
        <div>
            {(auth.role == "stu")? 
            
            <div>
                <h3>Grade Average: { avgGrade }</h3>
                {assignmentArray.map(a => <IndividualAssignmentContainer assignment={a.assignment} grade={a.grade} auth={auth} />)}
            </div> 
            :
            <div>
                    <div>
                        {currentInstructorInfo.currentAssignments.map(assign => 
                        <div>
                            <IndividualAssignmentContainer auth={auth} instructorAssignment={assign}/> 
                            <button onClick={e => handleDeleteFunc(e,assign)}> Delete Assignment </button>
                        </div>
                        )}
                      <AddAssignmentFormContainer auth={auth} currentInstructorInfo={currentInstructorInfo} setCurrentInstructorInfo={setCurrentInstructorInfo}/>
                        
                    </div>
                    <div>
                        {/* <AssignmentTableContainer auth={auth} currentInstructorInfo={currentInstructorInfo} setCurrentInstructorInfo={setCurrentInstructorInfo}/> */}
                    </div>
            </div>
            }
                        
        </div>
    )
}

export default AssignmentsContainer;