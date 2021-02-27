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
const urlInstructors = 'http://localhost:3001/instructors'



const MainContainer = (props) => {

    let name = "i am in here"

    const [students,setStudents] = useState([]);
    const [schools,setSchool] = useState([]);
    const [rooms,setRooms] = useState([]);
    const [studentRooms,setstudentRooms] = useState([]);
    const [instructors, setInstructors] = useState([]);
 
    useEffect(() => {

            
      // Promise.all([
      //   fetch(urlUsers),
      //   fetch(urlSchools),
      //   fetch(urlRooms),
      //   fetch(urlStudentRooms),
      //   fetch(urlInstructors)
      // ])
      // .then(async([res1, res2,res3,res4]) => {
      //     const a = await res1.json();
      //     const b = await res2.json();
      //     const c = await res3.json();
      //     const d = await res4.json();
      //     console.log(a, "this is the value a")
      //     console.log(b, "this is the value b")
      //     console.log(c, "this is the value c")
      //     console.log(d, "this is the value d")
      // .then( )
      // .catch(error => {
      //   console.log(error);
      // });
      // })
            
            const fetchData = async () => {
              // async function fetchData
              const studentsData = await axios(urlUsers);
              const schoolsData = await axios(urlSchools);
              const roomsData = await axios(urlRooms);
              const stuRoomsData = await axios(urlStudentRooms);
              const instructorsData = await axios(urlInstructors);
    
              // console.log(studentsData.data[0].rooms)
              // console.log(schoolsData.data)
              // console.log(roomsData.data[0].instructor)
              // console.log(stuRoomsData.data)
              // console.log(instructorsData.data)
              setStudents(studentsData.data)
              setSchool(schoolsData.data)
              setRooms(roomsData.data)
              setstudentRooms(stuRoomsData.data)
              setInstructors(instructorsData.data)
              // console.log(students)
              // console.log(schools)
              // console.log(rooms)
              // console.log(studentRooms)
            };
        
            fetchData();
            
        }, []);
      

    return(
        <div> 
            
            <AboutContainer schools={schools}/>
            <EnrollContainer schools={schools}/>
            <HomeContainer schools={schools}/>
            <WelcomeContainer students={students} rooms={rooms}/>

        </div>
    )




};

export default MainContainer;