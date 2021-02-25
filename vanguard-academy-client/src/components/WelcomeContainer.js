import React from 'react';




const WelcomeContainer = ({students}) => {

    console.log(students, "this is welcome console")
    console.log(students[1].first_name)
    return (
        <div>
            <h1>Welcome Page</h1>
            <h1>{students[1].first_name}</h1>
        </div>
    )
    
}


export default WelcomeContainer;