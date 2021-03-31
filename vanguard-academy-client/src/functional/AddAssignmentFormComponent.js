import React from 'react';
import axios from 'axios';

const AddAssignmentFormContainer = ({currentInstructorInfo}) => {



    const handleAddAssignment = (e) => {
        e.preventDefault()
        console.log(e.target, "target value")


        let assignment = {
            instructor_id: currentInstructorInfo.instructor.id,
            assignment_name: e.target.assignment_name.value,
            assignment_topic: e.target.assignment_topic.value,
            level_difficulty: e.target.level_difficulty.value,
            grade_level: e.target.grade_level.value,
            score_average: 100
        }
        axios({
            method: 'POST',
            url: 'http://localhost:3001/assignments',
            data:  { assignment }
        })
        .then(data => console.log(data))
    }

    return(
        <div>
            <h2>Create Assignment </h2>
                <form onSubmit={(e) => {handleAddAssignment(e)}}>
                        <label> Assignment Name </label><br></br>
                        <input type="text" name="assignment_name"/>  <br></br>  
                        <label> Assignment Category </label><br></br>
                        <input type="text" name="assignment_topic"/><br></br>
                        <label> Difficulty </label><br></br>
                        <input type="text" name="level_difficulty"/><br></br>
                        <label> Grade Level </label><br></br>
                        <input type="text" name="grade_level"/>  <br></br> 
                        <label> Score Average </label><br></br>
                        <input type="text" name="score_average"/>  <br></br> 
                        <button type="submit" value="submit">Submit</button>
                </form>
        </div>
    )
}

export default AddAssignmentFormContainer;