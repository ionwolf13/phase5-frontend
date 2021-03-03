import React from 'react'
import ScheduleContainer from './ScheduleContainer.js';
import AssignmentsContainer from './AssignmentsContainer.js';
import AddClassContainer from './AddClassContainer.js';
import ProfileDetailContainer from './ProfileDetailContainer.js';

const ProfileSection = ({currentStudent, rooms}) => {

    console.log(currentStudent, "this is the students")
    console.log("hre wer are")
    return(
        <div>
            
                 
                <div> 
                    <h1>Profile </h1>
                        <ProfileDetailContainer student={currentStudent.student}/>
                    <h2> Current Schedule </h2>
                        <ScheduleContainer rooms={currentStudent.currentClasses}/>
                    
                    
                    <h2> View Assignments </h2>
                        <AssignmentsContainer />
                        <h3> Add Class </h3>
                        <AddClassContainer rooms={rooms} student={currentStudent.student}/>
                </div>
                
        </div>
    )


}

export default ProfileSection;
