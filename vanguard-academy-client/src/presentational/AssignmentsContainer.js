import React from 'react';
import IndividualAssignmentContainer from './IndividualAssignmentContainer';
import AddAssignmentFormContainer from '../functional/AddAssignmentFormComponent.js';

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

        const handleDeleteFunc = (e,assign) => {
            e.preventDefault()
            let currentAssignment = assign
            let arr = currentInstructorInfo.currentAssignments.filter(assignment => (assignment !== currentAssignment))
            
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
        
        const assignAssignmentFunction = (e) => {
            e.preventDefault()
        }

    return (
        <div>
            {(auth.role === "stu")? 
            
            <div>
                <h3>Grade Average: { avgGrade }</h3>
                {assignmentArray.map(a => {<IndividualAssignmentContainer assignment={a.assignment} grade={a.grade} auth={auth} />})}
            </div> 
            :
            <div>
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
                        <h2>Assign to Student(s)</h2>  
                        <form onSubmit={e => assignAssignmentFunction(e)}> 
                        {currentInstructorInfo.studentsInClass.map(stu => 
                            <div>
                                <input type="checkbox" name={stu.first_name} value={stu.id}/>
                                <label> {stu.first_name} </label>
                            </div>
                        )}
                        <button type="submit" value="submit"> Submit </button>
                        </form>
                    </div>
                </div>
            </div>
            }
                        
        </div>
    )
}

export default AssignmentsContainer;