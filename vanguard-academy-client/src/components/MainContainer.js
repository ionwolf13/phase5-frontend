import React, { useState, useEffect } from 'react';
import AboutContainer from './AboutContainer.js';
import EnrollContainer from './EnrollContainer.js';
import HomeContainer from './HomeContainer.js';
import WelcomeContainer from './WelcomeContainer.js';
import axios from 'axios';


const urlUsers = 'http://localhost:3001/users'
const urlSchools = 'http://localhost:3001/schools'
const urlRooms = 'http://localhost:3001/rooms'
const urlStudentRooms = 'http://localhost:3001/student_rooms'

let arr = [urlUsers, urlSchools, urlRooms, urlStudentRooms]

const MainContainer = (props) => {

    let name = "i am in here"

    const [students,setStudents] = useState([]);
    const [schools,setSchool] = useState([]);
    const [rooms,setRooms] = useState([]);
    const [studentRooms,setstudentRooms] = useState([]);
 
    useEffect(() => {

            
            
            const fetchData = async () => {
              const studentsData = await axios(urlUsers);
              const schoolsData = await axios(urlSchools);
              const roomsData = await axios(urlRooms);
              const stuRoomsData = await axios(urlStudentRooms);
    
            //   console.log(studentsData.data)
            //   console.log(schoolsData.data)
            //   console.log(roomsData.data)
            //   console.log(stuRoomsData.data)
              setStudents(studentsData.data)
              setSchool(schoolsData.data)
              setRooms(roomsData.data)
              setstudentRooms(stuRoomsData.data)
            //   console.log(students)
            //   console.log(schools)
            //   console.log(rooms)
            //   console.log(studentRooms)
            };
        
            fetchData();
            
        }, []);
        

    return(
        <div> 
            
            <AboutContainer schools={schools}/>
            <EnrollContainer prop={name}/>
            <HomeContainer schools={schools}/>
            <WelcomeContainer students={students}/>

        </div>
    )




};

export default MainContainer;