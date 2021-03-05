import React from 'react';

const ProfileDetailContainer = ({currentStudent}) => {

    return(
        <div>
                <div>
                        
                        
                        <div>
                            {currentStudent.first_name} {currentStudent.middle_name} {currentStudent.last_name }
                            <div>
                            Details
                            </div>
                            <div>
                            Grade: {currentStudent.grade}
                                
                            </div>
                            <div>
                            GPA: {currentStudent.grade}
                            </div>
                                
                            
                        </div>
                </div> 
        </div>
    )
}

export default ProfileDetailContainer;