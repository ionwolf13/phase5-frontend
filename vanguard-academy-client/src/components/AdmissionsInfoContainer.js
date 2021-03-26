import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import enroll from '../enroll.jpg'


const AddmissionsInfoContainer = () => {

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

    return(

        
        <div>
            <h1> Admissions </h1>
            <div className={classes.root}>
                <Grid container spacing={8}>
                        <Grid item xs>
                            <Paper className={classes.paper}>
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
                            </Paper>
                        </Grid>
                        <Grid item xs>
                            <Paper className={classes.paper}>
                            <div>
                                <h2>HOW TO SUBMIT AN APPLICATION</h2>
                                <p>
                                    Online Application Demonstration from HISD Office of School Choice on Vimeo.
                                    Please view our narrated online School Choice application demonstration video.
                                </p>
        
                            </div>
                            
                            </Paper>
                        </Grid>
                        
                </Grid>
                
                <Grid container spacing={3}>
                <Grid item xs>
                            <Paper className={classes.paper}>
                            <h2>QUALIFYING CRITERIA</h2>
                            <div>
                     
                                <p>Students must have a minimum matrix score of "75" in order to qualify.</p>
                         
                             </div>
                             <img src={enroll}/>
                            
                            </Paper>
                        </Grid>
                        <Grid item xs>
                            <Paper className={classes.paper}> 
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
                        </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper className={classes.paper}>
                            <Link to='/enrollmentInfo'> Enrollment </Link>
                            
                            </Paper>
                        </Grid>
                        <Grid item xs>
                            <Paper className={classes.paper}>
                            <Link to='/importantDates'> Important Dates </Link>
                            </Paper>
                        </Grid>
                </Grid>
            </div>
            
                   
                  
                
                
                
        </div>
    )
}


export default AddmissionsInfoContainer;