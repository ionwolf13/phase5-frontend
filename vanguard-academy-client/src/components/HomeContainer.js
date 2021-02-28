import React from 'react';




const HomeContainer = ({schools, students, instructors, rooms}) => {

    // console.log(schools)
    return (
        <div>
            <h1>Home Page</h1>
            {schools.map(s => <p>{s.name}</p>)}
            {students.map(s => <p>{s.first_name}</p>)}
            {instructors.map(s => <p>{s.first_name}</p>)}
            {rooms.map(s => <p>{s.subject}</p>)}
            {/* <h1> {schools[0].name}</h1> */}
                 
        </div>
    )
    
}


export default HomeContainer;