import React, { useState, useEffect } from 'react';
import AboutContainer from './AboutContainer.js';
import EnrollContainer from './EnrollContainer.js';
import HomeContainer from './HomeContainer.js';
import WelcomeContainer from './WelcomeContainer.js';
import axios from 'axios';
import NavContainer from '../functional/NavContainer.js';
import FooterContainer from '../presentational/FooterContainer.js';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
// import {Redirect} from 'react-router';
import SignInComponent from '../functional/SignInComponent.js';
import ProfileSection from '../presentational/ProfileSection.js';


const urlUsers = 'http://localhost:3001/users'
const urlSchools = 'http://localhost:3001/schools'
const urlRooms = 'http://localhost:3001/rooms'
const urlStudentRooms = 'http://localhost:3001/student_rooms'
const urlInstructors = 'http://localhost:3001/instructors'



const MainContainer = (props) => {

    
    const [students,setStudents] = useState([]);
    const [schools,setSchool] = useState([]);
    const [rooms,setRooms] = useState([]);
    const [studentRooms,setstudentRooms] = useState([]);
    const [instructors, setInstructors] = useState([]);
    const [currentStudent, setCurrentStudent] = useState({isLoggedIn: false, student: {}, errors: [], status: 200, currentClasses: []})
 
    useEffect(() => {

            
            const fetchData = async () => {
              // async function fetchData
              const studentsData = await axios(urlUsers);
              const schoolsData = await axios(urlSchools);
              const roomsData = await axios(urlRooms);
              const stuRoomsData = await axios(urlStudentRooms);
              const instructorsData = await axios(urlInstructors);
    
            //   console.log(studentsData.data[0].rooms)
              // console.log(schoolsData.data)
              // console.log(roomsData.data[0].instructor)
              // console.log(stuRoomsData.data)
              // console.log(instructorsData.data)
              setStudents(studentsData.data)
              setSchool(schoolsData.data)
              setRooms(roomsData.data)
              setstudentRooms(stuRoomsData.data)
              setInstructors(instructorsData.data)
              
            };
        
            fetchData();
            
        }, []);
      

    return(
        <div> 
            <NavContainer/>
            <Router>
                <Switch>
                    <Route exact path='/home' render={routerProps => <HomeContainer {...routerProps} schools={schools}/>}/>
                    <Route exact path='/about' render={routerProps => <AboutContainer {...routerProps} schools={schools}/>}/>
                    <Route exact path='/enroll' render={routerProps => <EnrollContainer {...routerProps} schools={schools}/>}/>
                    <Route path='/welcome' render={routerProps => <WelcomeContainer {...routerProps}/>}/>
                    <Route exact path='/login' render={routerProps => <SignInComponent {...routerProps} rooms={rooms} setCurrentStudent={setCurrentStudent} currentStudent={currentStudent}/>
                        // {currentStudent.isLoggedIn ? <Redirect to=''/> : <SignInComponent />}
                        }/>
                    {/* <Route path='/profile' render={routerProps => <ProfileSection {...routerProps}  currentStudent={currentStudent} rooms={rooms}/>}/> */}
                </Switch>
            </Router>
            <FooterContainer/>
        </div>
    )




};

export default MainContainer;