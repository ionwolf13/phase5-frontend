import React from 'react'
import ScheduleContainer from './ScheduleContainer.js';
import AssignmentsContainer from './AssignmentsContainer.js';
import AddClassContainer from '../functional/AddClassContainer.js';
import ProfileDetailContainer from './ProfileDetailContainer.js';

const ProfileSection = ({students, rooms}) => {

    // console.log(students[0].rooms, "we are in profile")
    // debugger
    // console.log(students[0].rooms, "we are in profile")
    // let thisThingy = "here you go"
    return(
        <div>
            
                {students.map(stu => 
                <div> 
                    <h1>Profile </h1>
                        <ProfileDetailContainer student={stu}/>
                    <h2> Current Schedule </h2>
                        {stu.rooms.map(room => <ScheduleContainer room={room}/>)}
                    <h3> Add Class </h3>
                        <AddClassContainer rooms={rooms}/>
                    
                    <h3> View Assignments </h3>
                        <AssignmentsContainer />
                </div>)}
                
        </div>
    )


}

export default ProfileSection;
