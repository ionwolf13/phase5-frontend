import React from 'react';
// import ProfileSection from '../presentational/ProfileSection.js'
import axios from 'axios';
import {useHistory} from 'react-router-dom'
import Button from '@material-ui/core/Button'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'

const SignInComponent = ({setCurrentStudentInfo, currentStudentInfo, rooms, setIsAuthenticated, isAuthenticated, setCurrentInstructorInfo, currentInstructorInfo}) => {


    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        paper: {
          padding: theme.spacing(2),
          textAlign: 'center',
          color: theme.palette.text.secondary,
        },
      }));
    
      const classes = useStyles();


    let history = useHistory();
    
    const handleStudentSignIn = (e) => {
        e.preventDefault()
        
        

        axios({
            method: 'POST',
            url: 'http://localhost:3001/login',
            data: { user: {
                username: e.target.username.value,
                password: e.target.password.value
            },
            r: "stu"    
            }
            
        })     
        .then(res => { 
            if(res.data.token){
                    localStorage.toke = res.data.token
                    let newData = JSON.parse(res.data.user)
                    setCurrentStudentInfo({student: newData, errors: res.errors, status: 200, currentClasses: newData.rooms, studentAssignments: newData.rooms.map(r => r.instructor)})
                    setIsAuthenticated({auth: true, role: "stu", isLoggedIn: true})    
                    history.push('/profile')
            }
            else{
                    alert('Invalid Login Info')
            }
        })
        // .then(res => {
        //     setIsAuthenticated({auth: true})
        //     setCurrentStudentInfo({student: res.data, isLoggedIn: true, errors: res.errors, status: 200, currentClasses: res.data.rooms, studentAssignments: res.data.rooms.map(r => r.instructor)})})
        e.target.reset()
        }


        const handleInstructorSignIn = (e) => {
            e.preventDefault()

            axios({
                method: 'POST',
                url: 'http://localhost:3001/login',
                data: { user: {
                    username: e.target.username.value,
                    password: e.target.password.value
                },
                r: "ins"    
                }
                
            })     
            .then(res => { 
                if(res.data.token){
                    
                        localStorage.token = res.data.token
                        let newData = JSON.parse(res.data.user)
                        setCurrentInstructorInfo({instructor: newData, errors: res.errors, status: 200, currentClass: newData.room, studentsInClass: newData.room.users, currentAssignments: newData.assignments})
                        setIsAuthenticated({auth: true, role: "ins", isLoggedIn: true})
                        history.push('/profile')
                }
                else{
                        alert('Invalid Login Info')
                }
            })
            // .then(res => {
            //     setIsAuthenticated({auth: true})
            //     setCurrentStudentInfo({student: res.data, isLoggedIn: true, errors: res.errors, status: 200, currentClasses: res.data.rooms, studentAssignments: res.data.rooms.map(r => r.instructor)})})
            e.target.reset()
        }
        
    return(

       
        <div>
                <div className={classes.root}>
                <Grid item xs={12}>
                        <Paper className={classes.paper}>
                                <h3> Sign In </h3>
                        </Paper>
                        </Grid>
                        <br/>                        
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <div>
                                <h3>Student</h3>
                                <form onSubmit={(e) => {handleStudentSignIn(e)}}>
                                        <label>Username</label><br></br>
                                        <input type="text" name="username"/>  <br></br>  
                                        <label>PassWord</label><br></br>
                                        <input type="password" name="password"/><br></br>
                                        <Button type='submit' value='submit' variant="contained" color="primary" disableElevation>
                                                Submit
                                        </Button>
                                </form>
                            </div>
                        </Paper>
                        </Grid>
                        
                        <Grid item xs={6}>
                        <Paper className={classes.paper}>
                        <div>
                            <h3>Faculty</h3>
                            <form onSubmit={(e) => {handleInstructorSignIn(e)}}>
                                    <label>Username</label><br></br>
                                    <input type="text" name="username"/>  <br></br>  
                                    <label>PassWord</label><br></br>
                                    <input type="password" name="password"/><br></br>
                                    <Button type='submit' value='submit' variant="contained" color="primary" disableElevation>
                                        Submit
                                    </Button>
                            </form>
                        </div>
                        </Paper>
                        </Grid>
                </Grid>
            </div>
            {/* <div>
                {isAuthenticated.isLoggedIn? 
                [ (isAuthenticated.role === "stu")? 
                <div> 
                    <ProfileSection isAuthenticated={isAuthenticated} currentStudentInfo={currentStudentInfo} setCurrentStudentInfo={setCurrentStudentInfo} rooms={rooms}/>
                </div>
                : <div>
                    <ProfileSection isAuthenticated={isAuthenticated}  currentInstructorInfo={currentInstructorInfo} setCurrentInstructorInfo={setCurrentInstructorInfo}/>
                </div>]
                : null}
            </div> */}
            
                
        </div>
    )
}

export default SignInComponent;