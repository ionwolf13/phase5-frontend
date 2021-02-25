import React, { Component } from 'react';
import AboutContainer from './AboutContainer.js';
import EnrollContainer from './EnrollContainer.js';
import HomeContainer from './HomeContainer.js';
import WelcomeContainer from './WelcomeContainer.js';

const urlUsers = 'http://localhost:3001/users'
const urlSchools = 'http://localhost:3001/schools'
const urlRooms = 'http://localhost:3001/rooms'
const urlStudentRooms = 'http://localhost:3001/student_rooms'

let arr = [urlUsers, urlSchools, urlRooms, urlStudentRooms]

class MainContainer extends Component {

    constructor(){
        super()
        this.state={
            dataList: [],
            name: "i am in this container",
        }
    }


    componentDidMount(){

        arr.map(url => {
            fetch(url)
            .then(res => res.json())
            .then(newData => this.setState({
                dataList: [...this.state.dataList,newData]
                }))
        })
    
    }



   render(){
       return(
           <div> 
               <AboutContainer prop={this.state.name}/>
               <EnrollContainer prop={this.state.name}/>
               <HomeContainer schoolProp={this.state.dataList[1]}/>
               <WelcomeContainer prop={this.state.name}/>
           </div>
       )
   }



}

export default MainContainer;