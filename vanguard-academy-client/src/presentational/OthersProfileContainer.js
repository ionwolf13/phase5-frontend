import React from 'react';
import IndividualAssignmentContainer from './IndividualAssignmentContainer.js';

const OthersProfileContainer = ({room, auth, currentInstructorInfo, student}) => {
        
    let assignmentsArr = null
    let assignmentWGradesArr = []
    let assignmentObject = []

    if(auth === "ins"){
        
        const getStudentAssignments = () => {
        assignmentsArr = student.assignments.filter(a => a.instructor_id === currentInstructorInfo.instructor.id)
        currentInstructorInfo.currentAssignments.map(a => {
            for(let i = 0; i < assignmentsArr.length; i++){
                if((a.id === assignmentsArr[i].id)){
                    a.student_assignments.map(b => {if(b.user.id === student.id){
                        assignmentWGradesArr.push(b)
                    }})
                }
            }
            
        })
        return assignmentsArr
    }
    
    const setSudentAssignmentObject = () => {
        let object = {}
        assignmentsArr.map(a => {
            assignmentWGradesArr.map(b => {
                if(a.id === b.assignment_id){
                    assignmentObject.push({assignment: a, grade_joiner: b, student: b.user})
                }
            })
            
        })

        
    } 


    getStudentAssignments()
    setSudentAssignmentObject()
}
    return(
            <div>
                {(auth.role === 'stu')? 
               
                        
                <div> 
                        <h1>Instructor</h1>
                        <h2>{room.instructor.first_name} {room.instructor.middle_name} {room.instructor.last_name }</h2>
                            <div>
                                <h2>Details</h2>
                            </div>

                            <div>
                                <p>Teaching Grade: 9</p>
                            </div>

                            <div>
                                <p>Course: {room.subject}</p>
                                <p>Room #: {room.room_number}</p>
                            </div>

                            <div>
                                <p>Username: {room.instructor.username}</p>
                            </div>

                            <div>
                                Contact Information:
                                <div>
                                    <p>Email: {room.instructor.email}</p>
                                    <p>Phone:</p>
                                </div>
                            </div> 
                            instructor: {room.instructor.first_name} <br></br>
                            subject: {room.subject}<br></br>
                            <br></br>
                </div>
                :
                <div>
                        <div>
                        <h3>Student Details</h3>
                            <p> Name: {student.first_name} {student.middle_name} {student.last_name }</p>
                                <div>
                                    
                                    <p>Grade: {student.grade}</p>
                                    <p>GPA: {student.grade}</p>
                                    <p>Username: {student.username}</p>
                                    <p>Email: {student.email}</p>
                                </div>
                        </div>
                        
                        
                        <div>
                            {assignmentObject.map(a => <IndividualAssignmentContainer assignment={a.assignment} grade={a.grade_joiner} student={a.student} auth={auth}/>)}
                        </div>
                </div>
                }
                    
            </div>
    )
}

export default OthersProfileContainer;