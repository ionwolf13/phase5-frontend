import React from 'react';
import IndividualAssignmentContainer from 'react';

const OthersProfileContainer = ({room, auth, currentInstructorInfo, student}) => {

    console.log(auth, "OTHERS HEREherer!!!!!")
    console.log(student)
    console.log(currentInstructorInfo)
    return(
            <div>
                {(auth.role === 'stu')? 
               
                        
                <div> 
                        {/* <h1>Instructor</h1>
                        <h2>{room.instructor.first_name} {room.instructor.middle_name} {room.instructor.last_name }</h2>
                            <div>
                                <h2>Details</h2>
                            </div>

                            <div>
                                <p>Teaching Grade: 9</p>
                            </div>

                            <div>
                                <p>Course: {room.currentClass.subject}</p>
                                <p>Room #: {room.currentClass.room_number}</p>
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
                            </div> */}
                            {/* instructor: {room.instructor.first_name} <br></br>
                    subject: {room.subject}<br></br>
    <br></br>*/}
                </div>
                :
                <div>
                        <div>
                        <h3>Student Details</h3>
                            {student.first_name} {student.middle_name} {student.last_name }
                                <div>
                                    
                                    <p>Grade: {student.grade}</p>
                                    <p>GPA: {student.grade}</p>
                                    <p>Username: {student.username}</p>
                                    <p>Email: {student.email}</p>
                                </div>
                                <div>
                                    <h3>Assignments</h3>
                                    {/* {student.assignments.filter(assign => {
                                        {(assign.instructor_id === currentInstructorInfo.instructor.id)?  <IndividualAssignmentContainer assignment={assign} auth={auth} /> : null}
                                        
                                    })}  */}
                                </div>
                        </div>
                        
                </div>
                }
                    
            </div>
    )
}

export default OthersProfileContainer;