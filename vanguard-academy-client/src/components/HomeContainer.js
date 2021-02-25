import React from 'react';




const HomeContainer = ({schoolProp}) => {

    
    return (
        <div>
            <h1>Home Page</h1>
                   <h1>{schoolProp[0].name}</h1> 
        </div>
    )
    
}


export default HomeContainer;