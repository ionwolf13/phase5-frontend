import React from 'react';

const AssignmentTableContainer = ({ auth, currentInstructorInfo, setCurrentInstructorInfo}) => {

    let updatedObject = {assignment: [], students: [student => []]}
    let obj = {}

    // const organizedObject = () => {

    //     currentInstructorInfo.currentAssignments.map(a => {
    //         obj.assignments[a.assignment_name] = {category: '', students}
    //         obj.assignments[a.assignment_name][category] = a.assignment_topic
    //         obj.
        
    //     })
    // }
    // organizedObject()
    // console.log(obj)



    return(
        <div>
            <h1>Assignments Data Table</h1>
            <h3>Roster</h3>
            <h3>Assignments</h3>
            <h3></h3>
        </div>
    )
}

export default AssignmentTableContainer;