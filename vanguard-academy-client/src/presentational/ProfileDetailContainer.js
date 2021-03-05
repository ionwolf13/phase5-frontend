import React from 'react';
import EditProfileFormContainer from '../functional/EditProfileFormContainer.js';
import DeleteProfileContainer from '../functional/DeleteProfileContainer.js';


const ProfileDetailContainer = ({currentStudent, setCurrentStudentInfo}) => {

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
                                <div>
                                    Username: {currentStudent.username}
                                </div>
                        </div>
                        <div>
                            <EditProfileFormContainer currentStudent={currentStudent} setCurrentStudentInfo={setCurrentStudentInfo}/>
                        </div>
                        <div>
                            <DeleteProfileContainer student={currentStudent}/>
                        </div>
                </div> 
        </div>
    )
}

export default ProfileDetailContainer;