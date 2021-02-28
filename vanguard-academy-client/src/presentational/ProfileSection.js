import React from 'react'
import ScheduleContainer from './ScheduleContainer.js';
import AssignmentsContainer from './AssignmentsContainer.js';
import AddClassContainer from './AddClassContainer.js';
import ProfileDetailContainer from './ProfileDetailContainer.js';

const ProfileSection = ({students, rooms}) => {

    
    return(
        <div>
            
                {students.map(stu => 
                <div> 
                    <h1>Profile </h1>
                        <ProfileDetailContainer student={stu}/>
                    <h2> Current Schedule </h2>
                        <ScheduleContainer rooms={stu.rooms}/>
                    
                    
                    <h2> View Assignments </h2>
                        <AssignmentsContainer />
                </div>)}
                <h3> Add Class </h3>
                        <AddClassContainer rooms={rooms}/>
        </div>
    )


}

export default ProfileSection;
