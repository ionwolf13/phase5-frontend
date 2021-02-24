import React, { Component } from 'react';

const urlUsers = 'http://localhost:3001/users'
const urlSchools = 'http://localhost:3001/schools'
const urlRooms = 'http://localhost:3001/rooms'
const urlStudentRooms = 'http://localhost:3001/student_rooms'

class MainContainer extends Component {

    constructor(){
        super()
        this.state={
            studentRoster: []
        }
    }
    // state = {}

    componentDidMount(){

        fetch(urlStudentRooms)
        .then(res => res.json())
        .then(res => console.log(res))
        
    }



   render(){
       return(
           <div> 
               <h1>We are in the MainContainer</h1>
           </div>
       )
   }



}

export default MainContainer;