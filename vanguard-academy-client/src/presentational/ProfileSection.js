import React from 'react'
import ScheduleContainer from './ScheduleContainer.js';
import AddClassContainer from './AddClassContainer.js';
import ProfileDetailContainer from './ProfileDetailContainer.js';
import ClassRoomContainer from '../functional/ClassRoomContainer.js';

const ProfileSection = ({currentStudentInfo, rooms, setCurrentStudentInfo}) => {

    return(
        <div>
            
                 
                <div> 
                        <h1>Profile </h1>
                            <ProfileDetailContainer currentStudent={currentStudentInfo.student} setCurrentStudentInfo={setCurrentStudentInfo}/>
                        <h2> Current Schedule </h2>
                            <ScheduleContainer studentRooms={currentStudentInfo.currentClasses} currentStudent={currentStudentInfo.student} setCurrentStudentInfo={setCurrentStudentInfo}/>
                        <h2> View Assignments </h2>
                            <ClassRoomContainer studentsInstructors={currentStudentInfo.studentAssignments}/>
                        <h3> Add Class </h3>
                            <AddClassContainer rooms={rooms} currentStudent={currentStudentInfo.student} setCurrentStudentInfo={setCurrentStudentInfo}/>
                </div>
                
        </div>
    )


}

export default ProfileSection;
