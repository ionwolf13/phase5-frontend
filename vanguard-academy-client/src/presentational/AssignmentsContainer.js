import React from 'react';
import IndividualAssignmentContainer from './IndividualAssignmentContainer';
import AssignmentTableContainer from './AssignmentTableContainer.js';

const AssignmentsContainer = ({assignments, auth, currentInstructorInfo, setCurrentInstructorInfo}) => {

    return (
        <div>
            {(auth.role === "stu")? 
            <div>
                {assignments.map(assign => <IndividualAssignmentContainer assignment={assign}/>)}
            </div> 
            :
            <div>
                <AssignmentTableContainer auth={auth} currentInstructorInfo={currentInstructorInfo} setCurrentInstructorInfo={setCurrentInstructorInfo}/>
            </div>
            }
                        
        </div>
    )
}

export default AssignmentsContainer;