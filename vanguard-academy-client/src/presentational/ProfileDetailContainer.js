import React from 'react';

const ProfileDetailContainer = ({student}) => {

    return(
        <div>
                <div>
                        
                        
                        <div>
                            {student.first_name} {student.middle_name} {student.last_name }
                            <div>
                            Details
                            </div>
                            <div>
                            Grade: {student.grade}
                                
                            </div>
                            <div>
                            GPA: {student.grade}
                            </div>
                                
                            
                        </div>
                </div> 
        </div>
    )
}

export default ProfileDetailContainer;