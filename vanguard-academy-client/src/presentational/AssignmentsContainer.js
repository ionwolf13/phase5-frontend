import React from 'react';
import IndividualAssignmentContainer from './IndividualAssignmentContainer';

const AssignmentsContainer = ({assignments}) => {

    return (
        <div>
                {assignments.map(assign => <IndividualAssignmentContainer assignment={assign}/>)}
                          
        </div>
    )
}

export default AssignmentsContainer;