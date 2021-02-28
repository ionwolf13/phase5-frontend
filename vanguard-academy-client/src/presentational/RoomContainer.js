import React from 'react';

const RoomContainer = ({room}) => {

    console.log(room,"this is the room")
    
   
    return(
        <div>
                <div>
                        {room.subject}
                </div>
        </div>
    )
}

export default RoomContainer;