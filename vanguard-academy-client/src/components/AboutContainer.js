import React from 'react';
import school from '../school2.jpg';


const AboutContainer = () => {
    return (
      <div className='lvl-1-comp'>
        <h2 className='lvl-1-headers'>About Vanguard Academy </h2>
        <div  className='cont-lvl-1'>
            <p>The <strong> Vanguard Academy </strong> provides a rigorous course that gives our students
            the opportunity to complete high school and an associate’s degree or at least 60 semester 
            credit hours towards a baccalaureate degree during grades 9-12. 
            </p>
        </div>
        <img id='school-frame'src={school} alt='school' width='900'/>
        <div>
            <h2>Our Mission</h2>
            <p>
              Our mission is to prepare every student for his / her tomorrow. To increase the
              opportunities and sucess of each student day by day.
            </p>
        </div>
        <div>
            <h2>Enrollment </h2>
            <p>
            <strong> Vanguard Academy </strong> is a magnet school of 
            choice in the Houston Independent School District. 
            Enrollment is limited. Please go to the enrollment section to see
            application details and process.  
            See How to Apply for an overview of the application process.
            </p>
        </div>
               
                   
                   
        </div>
    )
    
}


export default AboutContainer;