import React from 'react';

const ProfileDetailContainer = ({student}) => {

    return(
        <div>
                <div>
                        
                        
                        <div>
                            <table>
                                <caption>{student.first_name} {student.middle_name} {student.last_name }</caption>
                                <tr><h3></h3></tr>
                                <tr><strong>Details</strong></tr>
                                <tr>Grade: {student.grade}</tr>
                                <tr>GPA: {student.grade}</tr>
                            </table>
                        </div>
                </div> 
        </div>
    )
}

export default ProfileDetailContainer;