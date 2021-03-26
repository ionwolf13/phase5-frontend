import React from 'react';
import { DataGrid } from '@material-ui/data-grid';


const AssignmentTableContainer = ({ auth, currentInstructorInfo, setCurrentInstructorInfo}) => {

    console.log(currentInstructorInfo.currentAssignments)
    let updatedObject = {assignment: currentInstructorInfo.currentAssignments, students: {}}
    
    currentInstructorInfo.studentsInClass.map(student => {
        updatedObject.students[`${student.id}`] = {student: {first_Name: [`${student.first_name}`], middle_name:[`${student.middle_name}`], last_name: [`${student.last_name}`], assignments: []}}
        
    })
    let assignmentArr = [] 
    currentInstructorInfo.currentAssignments.map(assign => { 
        // console.log(assign.id)
        assign.student_assignments.map(joiner => {
            Object.keys(updatedObject.students).map(key_id => {
                console.log(key_id,joiner.user_id)
                if(key_id == joiner.user_id){

                    // assignmentArr.push({name: assign.assignment_name, grade: joiner.student_score})
                    // updatedObject.students[key_id].assignments.push({name: assign.assignment_name, grade: joiner.student_score})
                }
            })
        })
    })
    // updatedObject.students
    console.log(updatedObject.students[1].assignments)
    

    // const columns = [{ field: 'id', headerName: 'Student', width: 70 }]

    // updatedObject.assignment.map(a => {
    //         console.log(a)
    //         columns.push({ field: [`assignment${a.id}`], headerName: [`${a.assignment_name}`], width: 130 })

    // })
  
    
    // const rows = [
    //   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    //   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    //   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    //   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 }
    // ];

    return(
        <div>
            <h1>Assignments Data Table</h1>
            <h3>Roster</h3>
            <h3>Assignments</h3>
            <h3></h3>

            <div style={{ height: 400, width: '100%' }}>
                {/* <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection /> */}
            </div>
        </div>
    )
}

export default AssignmentTableContainer;