import React from 'react';
import {Link} from 'react-router-dom';
import enroll from '../enroll.jpg'


const AddmissionsInfoContainer = () => {

    return(
        <div className='lvl-1-comp'>
            <h1 className='lvl-1-headers'> Admissions </h1>
            <div className=''>
                <h2>HOW TO APPLY</h2>
                <div>
                    <p> <strong>Thank you for your interest in Vanguard Academy </strong>.</p>
                    <p> The application process period for 2021-2022 is now open. 
                        You can submit an online application at HISD Choice starting September 19th. 
                        The deadline to apply for Phase 1 is November 6, 2020.
                        It is highly recommended that you apply as soon as possible as late 
                        applicants are considered on a space available basis.
                    </p>
                </div>
                <div>
                    <h2>HOW TO SUBMIT AN APPLICATION</h2>
                    <p>
                        Online Application Demonstration from HISD Office of School Choice on Vimeo.
                        Please view our narrated online School Choice application demonstration video.
                    </p>
                </div>         
                <h2>QUALIFYING CRITERIA</h2>
                <div>
                    <p>Students must have a minimum matrix score of "75" in order to qualify.</p>
                </div>
                <img src={enroll}/>
                <div>
                    <h2>APPLICATION INFORMATION</h2>
                    <p>
                    For more information regarding the magnet application process, please 
                    visit the Office of School Choice website.
                    </p>
                    <p>
                        Magnet Matrix Calculator: How to calculate your child's matrix score
                        Online Application: HISD Choice
                        Paper Application Information found here
                    </p>
                </div>
                      
                <Link to='/enrollmentInfo'> Enrollment </Link>
                
                <Link to='/importantDates'> Important Dates </Link>
                
            </div>
            
                   
                  
                
                
                
        </div>
    )
}


export default AddmissionsInfoContainer;