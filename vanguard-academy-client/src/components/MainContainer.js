import React, { useState, useEffect } from 'react';
import AboutContainer from './AboutContainer.js';
import EnrollContainer from './EnrollContainer.js';
import HomeContainer from './HomeContainer.js';
import WelcomeContainer from './WelcomeContainer.js';
import axios from 'axios';
import NavContainer from '../functional/NavContainer.js';
import FooterContainer from '../presentational/FooterContainer.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SignInComponent from '../functional/SignInComponent.js';
import EnrollFormContainer from '../functional/EnrollFormContainer.js';
import AdmissionInfosContainer from './AdmissionsInfoContainer.js';
import ImportantDatesContainer from './ImportantDatesContainer.js';
import ProfileSection from '../presentational/ProfileSection.js';
import LearningFormContainer from '../functional/LearningFormComponent.js';
import ProfileDetailContainer from '../presentational/ProfileDetailContainer.js';
import AddClassContainer from '../presentational/AddClassContainer.js'
import AssignmentsContainer from '../presentational/AssignmentsContainer.js';



const urlRooms = 'http://localhost:3001/rooms'
// const urlStudentRooms = 'http://localhost:3001/student_rooms'
// const urlInstructors = 'http://localhost:3001/instructors'



const MainContainer = (props) => {

        const [rooms,setRooms] = useState([]);
        const [currentInstructorInfo, setCurrentInstructorInfo] = useState({instructor: {}, errors: [], status: 200, currentClasses: []})
        const [currentStudentInfo, setCurrentStudentInfo] = useState({student: {}, errors: [], status: 200, currentClasses: []})
        const [isAuthenticated,setIsAuthenticated] = useState({auth: false, role: null, isLoggedIn: false});
        useEffect(() => {
            const fetchData = async () => {
              
              const roomsData = await axios(urlRooms);
              console.log(roomsData, "this is the async fetch")
              setRooms(roomsData.data)
              
            }
            fetchData()
        }, []);
      
        
    return(
        <div className='main-comp-af1'> 
             
            <Router>
                    <NavContainer isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>
                   
                    <Switch>
                    <React.Fragment>
                        {isAuthenticated.isLoggedIn?
                             <div className='logged-comp' id='comp-af1-lgi'>
                                <Route exact path='/home' render={routerProps => <HomeContainer {...routerProps} />}/>
                                <Route exact path='/about' render={routerProps => <AboutContainer {...routerProps} />}/>
                                <Route exact path='/admissions' render={routerProps => <AdmissionInfosContainer {...routerProps} />}/>
                                <Route exact path='/importantDates' render={routerProps => <ImportantDatesContainer {...routerProps} />}/>
                                <Route exact path='/enrollmentInfo' render={routerProps => <EnrollContainer {...routerProps} />}/>
                                <Route exact path='/enrollmentForm' render={routerProps => <EnrollFormContainer {...routerProps} />}/>
                                <Route path='/welcome' render={routerProps => <WelcomeContainer {...routerProps}/>}/>
                                <Route exact path='/login' render={routerProps => <SignInComponent {...routerProps} rooms={rooms} setCurrentStudentInfo={setCurrentStudentInfo} currentStudentInfo={currentStudentInfo} setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated} currentInstructorInfo={currentInstructorInfo} setCurrentInstructorInfo={setCurrentInstructorInfo}/>}/>
                                <Route exact path='/profile' render={routerProps => <ProfileSection {...routerProps} isAuthenticated={isAuthenticated} currentStudentInfo={currentStudentInfo} setCurrentStudentInfo={setCurrentStudentInfo} rooms={rooms} currentInstructorInfo={currentInstructorInfo} setCurrentInstructorInfo={setCurrentInstructorInfo}/>} />
                                <Route exact path='/learnForm' render={routerProps => <LearningFormContainer {...routerProps} auth={isAuthenticated} currentStudentInfo={currentStudentInfo} setCurrentStudentInfo={setCurrentStudentInfo}/>} />
                                <Route exact path='/profile/details' render={routerProps => <ProfileDetailContainer auth={isAuthenticated} currentStudent={currentStudentInfo} setCurrentStudentInfo={setCurrentStudentInfo} currentInstructor={currentInstructorInfo} setCurrentInstructorInfo={setCurrentInstructorInfo}/>} />
                                <Route exact path='/courses' render={routerProps => <AddClassContainer  rooms={rooms} currentStudent={currentStudentInfo} setCurrentStudentInfo={setCurrentStudentInfo} auth={isAuthenticated} />}/>
                                <Route exact path='/classAssignments' render={routerProps =>  <AssignmentsContainer auth={isAuthenticated} {...routerProps} currentInstructorInfo={currentInstructorInfo} setCurrentInstructorInfo={setCurrentInstructorInfo}/>}/>
                            </div>
                            : 
                            <div className='logged-comp'  id='comp-af1-lgo'>
                                <Route exact path='/home' render={routerProps => <HomeContainer {...routerProps} />}/>
                                <Route exact path='/about' render={routerProps => <AboutContainer {...routerProps} />}/>
                                <Route exact path='/admissions' render={routerProps => <AdmissionInfosContainer {...routerProps} />}/>
                                <Route exact path='/importantDates' render={routerProps => <ImportantDatesContainer {...routerProps} />}/>
                                <Route exact path='/enrollmentInfo' render={routerProps => <EnrollContainer {...routerProps} />}/>
                                <Route exact path='/enrollmentForm' render={routerProps => <EnrollFormContainer {...routerProps} />}/>
                                <Route path='/welcome' render={routerProps => <WelcomeContainer {...routerProps}/>}/>
                                <Route exact path='/login' render={routerProps => <SignInComponent {...routerProps} rooms={rooms} setCurrentStudentInfo={setCurrentStudentInfo} currentStudentInfo={currentStudentInfo} setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated} currentInstructorInfo={currentInstructorInfo} setCurrentInstructorInfo={setCurrentInstructorInfo}/>}/>
                            </div>
                            
                            }
                        </React.Fragment>
                    </Switch>
            </Router>
        </div>
    )




};

export default MainContainer;



                    
            