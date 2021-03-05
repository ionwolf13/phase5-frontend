import axios from 'axios';
import React, { useCallback } from 'react';
import RoomContainer from './RoomContainer.js';
// import axios from 'axios';


const AddClassContainer = ({rooms, currentStudent, setCurrentStudentInfo}) => {
    
    const addClassFunction = useCallback((e,room) => {
        e.preventDefault()

        axios({
            method: 'POST',
            url: 'http://localhost:3001/student_rooms',
            data: {
                user_id: currentStudent.id,
                room_id: room.id
                }
            
        })
        .then(res => setCurrentStudentInfo({currentClasses: [...currentStudent.rooms,res]}))

    }, []);

    return (
        <div>
                <h1>All Classes </h1>
                
                {rooms.map(r => 
                <div>
                    <RoomContainer room={r} addClassFunction={addClassFunction}/>
                    <button onClick={(e => {addClassFunction(e,r)})}>Add</button>
                </div>
                )}

                
        </div>
    )
}


export default AddClassContainer;