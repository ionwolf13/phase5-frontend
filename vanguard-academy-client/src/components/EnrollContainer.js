import React from 'react';
import {Link} from 'react-router-dom';




const EnrollContainer = (props)=> {

    
    return (
        <div>
            <h2> How To Enroll </h2>
            <p>
            To register and enroll your child in the school that he or she is zoned to attend, you will need the following:
            The child’s birth certificate or other proof of age and identity;
            Proof of your identity and residential address (driver’s license and utility bill); and
            A record of your child’s current immunizations signed by a doctor.
            Your child may be eligible to enroll provisionally if the required immunization process has begun. Texas law requires that a child must be enrolled by the child’s parent or guardian or another person with legal control of the child under a court order. It also requires the district to record the name, address, and date of birth of the person enrolling the student.

            </p>
            <Link to='/enrollmentForm'> Enrollment Form </Link>
             </div>
    )
    
}


export default EnrollContainer;