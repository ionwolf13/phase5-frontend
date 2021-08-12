import React from 'react';
import owl from '../pictures/owl.jpg'
const HomeContainer = (props) => { 

    
    return (
        <div className='lvl-1-comp'>
            <h1 className='lvl-1-headers'> Welcome To Vanguard Academy </h1>
            <img id='owl' src={owl} alt='smart owl' height='125'/>
            <div>
                <h2>Excel</h2>
            </div>
            <div>
                <h2>Grow</h2>
            </div>
            <div> 
                <h2>Learn</h2>
            </div>
        </div>
    )
    
}


export default HomeContainer;