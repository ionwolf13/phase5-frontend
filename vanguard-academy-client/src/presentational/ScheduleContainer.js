import React from 'react'

const ScheduleContainer = ({room}) => {

        // console.log( room.instructor,"this is the schedule")
    return (
        <div>
            <table>
                <tr>Teacher: {room.instructor.first_name} {room.instructor.last_name}</tr>
                <tr>Subject: {room.subject}</tr>
                <tr>Current Grade: 100</tr>
            </table>
            
               
            
        </div>
    )
}

export default ScheduleContainer;