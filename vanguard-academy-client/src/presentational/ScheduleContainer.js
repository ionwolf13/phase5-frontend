import React from 'react'
import RoomContainer from './RoomContainer.js';

const ScheduleContainer = ({rooms}) => {

        console.log(rooms,"this is the schedule")
    return (
        <div>
                <div>
                {rooms.map(room => <RoomContainer room={room}/>)}
                </div>
        </div>
    )
}

export default ScheduleContainer;