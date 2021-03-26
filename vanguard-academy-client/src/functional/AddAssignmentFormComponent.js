import React from 'react';

const AddAssignmentFormContainer = () => {



    const handleAdd = (e) => {
        e.preventDefault()
        console.log("clik it ")
        // axios({
        //     method: 'POST',
        //     url: 'http://localhost:3001/login',
        //     data: { user: {
        //         username: e.target.username.value,
        //         password: e.target.password.value
        //     },
        //     r: "ins"    
        //     }
        // axios({
        //     method: 'DELETE',
        //     url: `http://localhost:3001/student_rooms/${res.data.id}`})
        //     .then(res => { console.log(res)
        //       let arr = currentStudent.currentClasses
        //       console.log(arr)
        //       let arr2 = currentStudent.currentClasses.filter(r => r !== room )
        //       console.log(arr2)
        //       setCurrentStudentInfo({...currentStudent, currentClasses: arr2}) 
        //     })
    }


    return(
        <div>
            <h2>Create Assignment </h2>
                {/* <form onSubmit={(e) => {handleStudentSignIn(e)}}>
                        <label>Name</label><br></br>
                        <input type="text" name="assignment_name"/>  <br></br>  
                        <label>Category</label><br></br>
                        <input type="password" name="assignment_topic"/><br></br>
                        <label>Difficulty</label><br></br>
                        <input type="password" name="level_difficulty"/><br></br>
                        <button type="submit" value="submit">Submit</button>
                </form> */}
        </div>
    )
}

export default AddAssignmentFormContainer;