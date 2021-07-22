import React from 'react';
import EditProfileFormContainer from '../functional/EditProfileFormContainer.js';
import DeleteProfileContainer from '../functional/DeleteProfileContainer.js';


const ProfileDetailContainer = ({currentStudent, setCurrentStudentInfo, auth, currentInstructor, setCurrentInstructorInfo}) => {

    
    return(
        <div className='lvl-2-comp'>
            {(auth.role === "stu")? 
                <div>
                        <div>
                            {currentStudent.student.first_name} {currentStudent.student.middle_name} {currentStudent.student.last_name }
                                <div>
                                    <h2>Details</h2>
                                </div>
                                <div>
                                    Grade: {currentStudent.student.grade}        
                                </div>
                                <div>
                                    GPA: 3.8
                                </div>
                                <div>
                                    Username: {currentStudent.student.username}
                                </div>
                                <div>
                                    Email: {currentStudent.student.email}
                                </div>
                        </div>
                        <EditProfileFormContainer currentStudent={currentStudent} setCurrentStudentInfo={setCurrentStudentInfo} auth={auth}/>
                        <DeleteProfileContainer student={currentStudent}/>
                </div>
            : 
                <div>
                        <h1>Instructor</h1>
                        
                        <div>
                                <h2>{currentInstructor.instructor.first_name} {currentInstructor.instructor.middle_name} {currentInstructor.instructor.last_name }</h2>
                                <div>
                                    <h2>Details</h2>
                                </div>

                                <div>
                                    <p>Teaching Grade: 9</p>
                                </div>

                                <div>
                                    <p>Course: {currentInstructor.currentClass.subject}</p>
                                    <p>Room #: {currentInstructor.currentClass.room_number}</p>
                                </div>

                                <div>
                                    <p>Username: {currentInstructor.instructor.username}</p>
                                </div>
                                <div>
                                    <p>Contact Information:</p>
                                    <p>Email: {currentInstructor.instructor.email}</p>
                                    <p>Phone:</p>
                                </div>
                        </div>
                        <EditProfileFormContainer currentInstructor={currentInstructor} setCurrentInstructorInfo={setCurrentInstructorInfo} auth={auth}/> 
                </div>
            }
        </div>
    )
}

export default ProfileDetailContainer;