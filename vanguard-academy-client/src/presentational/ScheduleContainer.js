import React, {useCallback} from 'react'
import axios from 'axios';
import RoomContainer from './RoomContainer.js';

const ScheduleContainer = ({studentRooms, currentStudent, setCurrentStudentInfo}) => {

        const removeClassFunction = useCallback((e,room) => {
            e.preventDefault()
            
            axios.get('http://localhost:3001/student_rooms', {
                params: {
                  room_id: room.id,
                  user_id: currentStudent.id
                }
              })
              .then(res => {axios({
                      method: 'DELETE',
                      url: `http://localhost:3001/student_rooms/${res.data.id}`})
                    .then(res => setCurrentStudentInfo({currentClasses: studentRooms.filter(r => r.id !== 1)}))
                    })
                
        }, []);

    return (
        <div>
                <div>
                {studentRooms.map(room =>
                    <div>
                    <RoomContainer room={room}/>
                    <button onClick={(e) => {removeClassFunction(e,room)}}>Remove</button>
                    </div>
                    )}
                    
                </div>
        </div>
    )
}

export default ScheduleContainer;