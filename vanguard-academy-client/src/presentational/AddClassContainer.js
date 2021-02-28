import React from 'react';
import RoomContainer from './RoomContainer.js';


const AddClassContainer = ({rooms}) => {
    
    console.log(rooms,"we are in add class container")
   console.log(rooms.map(r => r.subject))
    return (
        <div>
                <h1>All Classes </h1>
                {rooms.map(r => <RoomContainer room={r}/>)}
                
        </div>
    )
}


export default AddClassContainer;