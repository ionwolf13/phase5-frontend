import React from 'react'
import { useState } from 'react';
import ScheduleContainer from './ScheduleContainer.js';
import EditProfileFormContainer from '../functional/EditProfileFormContainer.js';
import AddClassContainer from './AddClassContainer.js';
import ProfileDetailContainer from './ProfileDetailContainer.js';
import ClassRoomContainer from '../functional/ClassRoomContainer.js';
import AssignmentsContainer from './AssignmentsContainer.js';
import profileDefault from '../pictures/icons/profileIcon.png'

const ProfileSection = ({profileButton, setProfileButton, currentStudentInfo, rooms, setCurrentStudentInfo, isAuthenticated, currentInstructorInfo, setCurrentInstructorInfo}) => {
    
    const updateButton = (e,choiceT) => {
        
        e.preventDefault();
        setProfileButton({choice: choiceT})
    }

    return(
        <span>
            {(isAuthenticated.role === "stu")? 
                <div className='lvl-2-comp' id='tr1-st'> 
                    <div className='profile-column'>
                        <h4>Student: {currentStudentInfo.student.first_name} {currentStudentInfo.student.middle_name} {currentStudentInfo.student.last_name }</h4>
                        <div className='image-cont'>
                            <img className='profile-image' src={profileDefault} alt='Profile' height='50'/>
                        </div>
                        <h4>Details</h4>
                        <p>ID# 900326109 </p>
                        <p>Grade: {currentStudentInfo.student.grade} </p>
                        <p>Username: {currentStudentInfo.student.username} </p>
                        <p>Email: {currentStudentInfo.student.email}</p>
                        <div className='button-cont'>
                            <button onClick={e => updateButton(e, 'home')} className='profile-buttons' >Home</button>
                            <button onClick={e => updateButton(e, 'schedule')} className='profile-buttons' >Schedule</button>
                            <button onClick={e => updateButton(e, 'edit')} className='profile-buttons' >Edit Profile</button>
                        </div>
                    </div>
                    <div className='school-column'>
                        {(profileButton.choice === "home")? 
                            <div>
                                <h1>Home</h1>
                            </div>
                        :
                        [(profileButton.choice === 'schedule')? 
                            <div>
                                <h1>
                                    Schedule
                                </h1>
                                
                            </div>
                        :
                            <EditProfileFormContainer />
                        ]}
                    </div>
                        
                </div>
            : 
                <div className='lvl-2-comp' id='tr1-in'>
                    <div className='profile-column'>
                        <h4 className='pro-sec' id='tr1-in-h4'> Instructor: {currentInstructorInfo.instructor.first_name} {currentInstructorInfo.instructor.middle_name} {currentInstructorInfo.instructor.last_name } </h4>
                        <div className='image-cont'>
                            <img className='profile-image' src={profileDefault} alt='Profile' height='50'/>
                        </div>
                            <h4>Details</h4>
                            <p>Teaching Grade: 9</p>
                            <p>Room #: {currentInstructorInfo.currentClass.room_number}</p>
                            <p>Username: {currentInstructorInfo.instructor.username}</p>
                            <h4>Contact Information:</h4>
                            <p>Email: {currentInstructorInfo.instructor.email}</p>
                            <p>Phone: (999)-999-9999</p>
                            <div className='button-cont'>
                                <button onClick={e => updateButton(e, 'home')} className='profile-buttons' >Home</button>
                                <button onClick={e => updateButton(e, 'schedule')} className='profile-buttons' >Schedule</button>
                                <button onClick={e => updateButton(e, 'edit')} className='profile-buttons' >Edit Profile</button>
                            </div>
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