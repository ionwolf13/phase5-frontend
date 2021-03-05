import React from 'react';

const RoomContainer = ({room, addClassFunction}) => {

    // console.log(room)
    return(
        <div>
                <div>
                    instructor: {room.instructor.first_name} <br></br>
                    subject: {room.subject}<br></br>
                    <br></br>
                </div>
        </div>
    )
}

export default RoomContainer;