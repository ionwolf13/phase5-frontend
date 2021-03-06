import axios from 'axios';
import React from 'react';
import RoomContainer from './RoomContainer.js';


const AddClassContainer = ({rooms, currentStudent, setCurrentStudentInfo, auth}) => {
    
    const handleFunc = (e,room) => {
        

        e.preventDefault()
        if(currentStudent.currentClasses.find(e => e.id === room.id)){
            alert("You're Already In This Class.")
            
        }
        else{
            
            axios({
                method: 'POST',
                url: 'http://localhost:3001/student_rooms',
                data: {
                    user_id: currentStudent.student.id,
                    room_id: room.id
                    }
                
            })
            .then(res => { 
               
                    let arr = []
                    arr = currentStudent.currentClasses   
                    let arr2 = [...arr, res.data]
                    setCurrentStudentInfo({...currentStudent, currentClasses: arr2})
                })
        }
    }

    return (
        <div>
                <h1>All Classes </h1>
                
                {rooms.map(r => 
                <div>
                    <RoomContainer room={r} handleFunc={handleFunc} auth={auth}/>
                    <button onClick={(e => {handleFunc(e,r)})}>Add</button>
                </div>
                )}

                
        </div>
    )
}


export default AddClassContainer;