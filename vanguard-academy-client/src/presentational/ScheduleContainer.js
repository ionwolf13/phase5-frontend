import React from 'react'
import axios from 'axios';
import RoomContainer from './RoomContainer.js';

const ScheduleContainer = ({studentRooms, currentStudent, setCurrentStudentInfo, auth, currentInstructorInfo}) => {


        const removeClassFunction = (e,room) => {
            e.preventDefault()
            
            axios.get('http://localhost:3001/student_rooms', {
                params: {
                  room_id: room.id,
                  user_id: currentStudent.student.id
                }
              })
            .then(res => {
                    axios({
                    method: 'DELETE',
                    url: `http://localhost:3001/student_rooms/${res.data.id}`})
                    .then(res => { console.log(res)
                      let arr = currentStudent.currentClasses
                      console.log(arr)
                      let arr2 = currentStudent.currentClasses.filter(r => r !== room )
                      console.log(arr2)
                      setCurrentStudentInfo({...currentStudent, currentClasses: arr2}) 
                    })
          })
                
        }

    return (
        <div>
            {(auth.role === "stu")? 
                <div>
                    {studentRooms.map(room =>
                        <div>
                            <RoomContainer room={room} auth={auth} currentStudent={currentStudent}/>
                            <button onClick={(e) => {removeClassFunction(e,room)}}>Remove</button>
                        </div>
                        )}
                </div>
            : 
                 <div>
                       <div>
                            <RoomContainer currentInstructorInfo={currentInstructorInfo} auth={auth}/>
                       </div>
                </div>
            }
                
        </div>
    )
}

export default ScheduleContainer;