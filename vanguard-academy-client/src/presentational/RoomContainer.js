import React from 'react';
import OthersProfileContainer from './OthersProfileContainer.js';

const RoomContainer = ({room, auth, currentInstructorInfo}) => {

    // console.log(auth, "ROOM")
    // console.log(currentInstructorInfo)
    return(
        <div>
            {(auth.role === "stu")? 
                    <div>   
                        <div>
                                <OthersProfileContainer room={room} auth={auth} />   
                        </div>
                    </div>
            : 
                    <div>
                            <div>
                                <p>Subject: {currentInstructorInfo.currentClass.subject}</p>
                                <p>Time: 14:00</p>
                            </div>
                            <div>
                                <h2>Current Students</h2>
                                {currentInstructorInfo.studentsInClass.map(stu => <OthersProfileContainer auth={auth} student={stu}  currentInstructorInfo={currentInstructorInfo}/>)}
                                </div>
                    </div>
            }
                
        </div>
    )
}

export default RoomContainer;