import React from 'react'
import ScheduleContainer from './ScheduleContainer.js';
import AddClassContainer from './AddClassContainer.js';
import ProfileDetailContainer from './ProfileDetailContainer.js';
import ClassRoomContainer from '../functional/ClassRoomContainer.js';
import AssignmentsContainer from './AssignmentsContainer.js';

const ProfileSection = ({currentStudentInfo, rooms, setCurrentStudentInfo, isAuthenticated, currentInstructorInfo, setCurrentInstructorInfo}) => {
   
    console.log(rooms)
    return(
        <div>
            
            {(isAuthenticated.role === "stu")? 
                <div> 
                        {/* <h1>Student Profile </h1>
                            <ProfileDetailContainer auth={isAuthenticated} currentStudent={currentStudentInfo} setCurrentStudentInfo={setCurrentStudentInfo}/> */}
                        <h2> Current Schedule </h2>
                            <ScheduleContainer auth={isAuthenticated} studentRooms={currentStudentInfo.currentClasses} currentStudent={currentStudentInfo} setCurrentStudentInfo={setCurrentStudentInfo}/>
                        <h2> View Assignments </h2>
                            <ClassRoomContainer studentsInstructors={currentStudentInfo.studentAssignments} auth={isAuthenticated} currentStudentInfo={currentStudentInfo}/>
                        {/* <h3> Add Class </h3>
                            <AddClassContainer rooms={rooms} currentStudent={currentStudentInfo} setCurrentStudentInfo={setCurrentStudentInfo} auth={isAuthenticated}/> */}
                </div>
            : 
                <div>
                        <h1> Faculty Page </h1>
                        
                        <div> 
                                    {/* <h1>Profile </h1>
                                        <ProfileDetailContainer auth={isAuthenticated} currentInstructor={currentInstructorInfo} setCurrentInstructorInfo={setCurrentInstructorInfo}/> */}
                                    <h2> Current Class </h2>
                                        <ScheduleContainer auth={isAuthenticated} currentInstructorInfo={currentInstructorInfo}/>
                                    <h2> Current Assignments </h2>
                                        <AssignmentsContainer auth={isAuthenticated} currentInstructorInfo={currentInstructorInfo} setCurrentInstructorInfo={setCurrentInstructorInfo}/> 
                                        
                        </div>
                </div>
            }
                 
                
                
        </div>
    )


}

export default ProfileSection;
