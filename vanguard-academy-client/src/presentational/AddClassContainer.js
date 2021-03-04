import axios from 'axios';
import React, { useCallback } from 'react';
import RoomContainer from './RoomContainer.js';
// import axios from 'axios';


const AddClassContainer = ({rooms, student, setCurrentStudent}) => {
    
    const addClassFunction = useCallback((e,room) => {
        e.preventDefault()
        console.log('clicked!!!!',room, student.first_name)
        console.log(room.id,student.id, "this is the ID.......s")

        axios({
            method: 'POST',
            url: 'http://localhost:3001/student_rooms',
            data: {
                user_id: student.id,
                room_id: room.id
                }
            
        })
        .then(res => setCurrentStudent({currentClasses: []}))
        // .then(res => console.log(res))

    }, []);

    return (
        <div>
                <h1>All Classes </h1>
                
                {rooms.map(r => <RoomContainer room={r} addClassFunction={addClassFunction}/>
                )}

                
        </div>
    )
}


export default AddClassContainer;