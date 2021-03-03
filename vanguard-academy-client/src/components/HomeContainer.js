import React from 'react';




const HomeContainer = ({schools}) => { 

    console.log(schools)
    return (
        <div>
            <h1>Home Page</h1>
            <h1> {schools[0].name}</h1>
                 
        </div>
    )
    
}


export default HomeContainer;