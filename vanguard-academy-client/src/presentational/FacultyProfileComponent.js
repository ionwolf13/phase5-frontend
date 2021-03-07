import React from 'react';
import ScheduleContainer from './ScheduleContainer.js';
import AddClassContainer from './AddClassContainer.js';
import ProfileDetailContainer from './ProfileDetailContainer.js';
import ClassRoomContainer from '../functional/ClassRoomContainer.js';

const FacultyProfileComponent = ({currentInstructorInfo, setCurrentInstructorInfo, isAuthenticated}) => {

    return(

        <div>
            <h1> Faculty Profile </h1>
            <p>{currentInstructorInfo.instructor.first_name}</p>
            <div> 
                        <h1>Profile </h1>
                            <ProfileDetailContainer isAuthenticated={isAuthenticated} currentInstructor={currentInstructorInfo.student} setCurrentInstructorInfo={setCurrentInstructorInfo}/>
                        <h2> Current Schedule </h2>
                            {/* <ScheduleContainer isAuthenticated={isAuthenticated} studentRooms={currentInstructorInfo.currentClasses} currentInstructor={currentInstructorInfo.student} setCurrentInstructorInfo={setCurrentInstructorInfo}/> */}
                        <h2> View Assignments </h2>
                            {/* <ClassRoomContainer isAuthenticated={isAuthenticated} studentsInstructors={currentInstructorInfo.studentAssignments}/> */}
                        {/* <h3> Add Class </h3>
                            <AddClassContainer currentInstructor={currentInstructorInfo.student} setCurrentInstructorInfo={setCurrentInstructorInfo}/> */}
                </div>
        </div>
    )
}

export default FacultyProfileComponent;