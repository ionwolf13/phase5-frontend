import React from 'react'
import ScheduleContainer from './ScheduleContainer.js';
import AssignmentsContainer from './AssignmentsContainer.js';
import AddClassContainer from './AddClassContainer.js';
import ProfileDetailContainer from './ProfileDetailContainer.js';

const ProfileSection = ({currentStudentInfo, rooms, setCurrentStudentInfo}) => {

    console.log(currentStudentInfo, "this is the students")
    return(
        <div>
            
                 
                <div> 
                    <h1>Profile </h1>
                        <ProfileDetailContainer currentStudent={currentStudentInfo.student}/>
                    <h2> Current Schedule </h2>
                        <ScheduleContainer studentRooms={currentStudentInfo.currentClasses} currentStudent={currentStudentInfo.student} setCurrentStudentInfo={setCurrentStudentInfo}/>
                        
                    
                    
                    <h2> View Assignments </h2>
                        <AssignmentsContainer />
                        <h3> Add Class </h3>
                        <AddClassContainer rooms={rooms} currentStudent={currentStudentInfo.student} setCurrentStudentInfo={setCurrentStudentInfo}/>
                </div>
                
        </div>
    )


}

export default ProfileSection;
