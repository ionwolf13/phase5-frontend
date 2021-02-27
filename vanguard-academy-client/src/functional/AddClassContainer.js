import React from 'react';

const AddClassContaier = ({rooms}) => {
    
    console.log(rooms)

    return (
        <div>
                <div>
                        Current Schedule
                        <div>
                            <table>

                            </table>
                        </div>
                </div>

                <div>
                        Available
                        {/* <div>
                            <table>
                                    <tr>
                                        <th>Instructor</th>
                                        <th>Subject</th>
                                        <th>Room Number</th> 
                                        <th>Time</th>   
                                    </tr>
                                {rooms.map(room => 
                                    {
                                        <tr>
                                            <td>room.instructor.first_name</td>
                                            <td>room.subject</td>
                                            <td>room.room_number</td>
                                            <td>00:00</td>
                                        </tr>

                                    })}

                            </table> */}
                        {/* </div> */}
                </div>
        </div>
    )
}


export default AddClassContaier;