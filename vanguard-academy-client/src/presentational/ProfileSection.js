import React from 'react'
import ScheduleContainer from './ScheduleContainer.js';
import AddClassContainer from './AddClassContainer.js';
import ProfileDetailContainer from './ProfileDetailContainer.js';
import ClassRoomContainer from '../functional/ClassRoomContainer.js';
import AssignmentsContainer from './AssignmentsContainer.js';

const ProfileSection = ({currentStudentInfo, rooms, setCurrentStudentInfo, isAuthenticated, currentInstructorInfo, setCurrentInstructorInfo}) => {
   
    console.log(rooms)
    return(
        <span>
            {(isAuthenticated.role === "stu")? 
                <div className='lvl-2-comp' id='tr1-st'> 
                    <div className='profile-column'>
                        <h4>Student: {currentStudentInfo.student.first_name} {currentStudentInfo.student.middle_name} {currentStudentInfo.student.last_name }</h4>
                        <img src='' alt='profile image' height='50'/>
                        <h4>Details</h4>
                        <p>ID# 900326109 </p>
                        <p>Grade: {currentStudentInfo.student.grade} </p>
                        <p>GPA: 3.8</p>
                        <p>Username: {currentStudentInfo.student.username} </p>
                        <p>Email: {currentStudentInfo.student.email}</p>
                    </div>
                    <div className='school-column'>
                        <h2 className='pro-sec' id='tr1-st-h1'> Current Schedule </h2>
                        <ScheduleContainer auth={isAuthenticated} studentRooms={currentStudentInfo.currentClasses} currentStudent={currentStudentInfo} setCurrentStudentInfo={setCurrentStudentInfo}/>
                        <h2 className='pro-sec' id='tr1-st-h2'> View Assignments </h2>
                        <ClassRoomContainer studentsInstructors={currentStudentInfo.studentAssignments} auth={isAuthenticated} currentStudentInfo={currentStudentInfo}/>
                    </div>
                        {/* <h1>Student Profile </h1>
                            <ProfileDetailContainer auth={isAuthenticated} currentStudent={currentStudentInfo} setCurrentStudentInfo={setCurrentStudentInfo}/> */}
                        
                        {/* <h3> Add Class </h3>
                            <AddClassContainer rooms={rooms} currentStudent={currentStudentInfo} setCurrentStudentInfo={setCurrentStudentInfo} auth={isAuthenticated}/> */}
                </div>
            : 
                <div className='lvl-2-comp' id='tr1-in'>
                    <div className='profile-column'>
                        <h4 className='pro-sec' id='tr1-in-h4'> Instructor: {currentInstructorInfo.instructor.first_name} {currentInstructorInfo.instructor.middle_name} {currentInstructorInfo.instructor.last_name } </h4>
                        <img src='' alt='profile image' height='50'/>
                            <h4>Details</h4>
                            <p>Teaching Grade: 9</p>
                            <p>Room #: {currentInstructorInfo.currentClass.room_number}</p>
                            <p>Username: {currentInstructorInfo.instructor.username}</p>
                            <h4>Contact Information:</h4>
                            <p>Email: {currentInstructorInfo.instructor.email}</p>
                            <p>Phone: (999)-999-9999</p>
                        <h4>Courses</h4>
                        <p>course 1</p>
                        <p>course 1</p>
                        <p>course 1</p>
                        <p>course 1</p>
                        <p>course 1</p>
                    </div>
                    <div className='school-column'>
                        <h2 className='pro-sec' id='uf1-st-h2'> Current Class </h2>
                        <ScheduleContainer auth={isAuthenticated} currentInstructorInfo={currentInstructorInfo}/>
                    </div>
                                    {/* <h1>Profile </h1>
                                        <ProfileDetailContainer auth={isAuthenticated} currentInstructor={currentInstructorInfo} setCurrentInstructorInfo={setCurrentInstructorInfo}/> */}
                                    
                                    {/* <h2> Current Assignments </h2>
                                        <AssignmentsContainer auth={isAuthenticated} currentInstructorInfo={currentInstructorInfo} setCurrentInstructorInfo={setCurrentInstructorInfo}/>  */}
                </div>
            }
        </span>
    )


}

export default ProfileSection;

