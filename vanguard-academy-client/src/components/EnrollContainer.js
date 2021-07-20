import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'




const EnrollContainer = (props)=> {

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
    return (
        <div className='lvl-1-comp'>


            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        
                            <h2 className='lvl-1-headers'> How To Enroll </h2>
                            <p>
                            To register and enroll your child in the school that he or she is zoned to attend, you will need the following:
                            The child’s birth certificate or other proof of age and identity;
                            Proof of your identity and residential address (driver’s license and utility bill); and
                            A record of your child’s current immunizations signed by a doctor.
                            Your child may be eligible to enroll provisionally if the required immunization
                            process has begun. Texas law requires that a child must be enrolled by the child’s parent or guardian or another person with legal control of the child under a court order. It also requires the district to record the name, address, and date of birth of the person enrolling the student.

                            </p>
                    </Paper>
                    </Grid>
                    <Grid item xs={6}>
                    <Paper className={classes.paper}>
                            <Link to='/enrollmentForm'> Enrollment Form </Link>
                    </Paper>
                    </Grid>
                    
                    
                </Grid>
                </div>
            
            
            
             
        </div>
    )
    
}


export default EnrollContainer;