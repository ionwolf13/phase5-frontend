import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import school2 from '../school2.jpg'
import owl from '../owl.jpg'
import schoolShield2 from '../schoolShield2.jpg'




const AboutContainer = (props) => {

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
      <div className='cont-lvl-1'>
        {/* // <div className={classes.root} className='cont-lvl-1'> */}
        {/* <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}><img src={school2} /></Paper>
          </Grid>
          <Grid item xs={6}>
          
            <Paper className={classes.paper}>
            <h2>About Vanguard Academy </h2>
            <div> 
                        <p>The <strong> Vanguard Academy </strong> provides a rigorous course that gives our students
                        the opportunity to complete high school and an associate’s degree or at least 60 semester 
                        credit hours towards a baccalaureate degree during grades 9-12. 
                        </p>
                    </div>
            </Paper>
          </Grid>
          <Grid item xs={6}>
          
            <Paper className={classes.paper}>
            <h2>Our Mission</h2>
                <div>
                        
                        Our mission is to prepare every student for his / her tomorrow. To increase the
                        opportunities and sucess of each student day by day.
                        

                    </div></Paper>
            
                    
          </Grid>
         
          <Grid item xs={4}>
            <Paper className={classes.paper}><img src={owl} height={500} /></Paper>
          </Grid>
          <Grid item xs={4}>
          
            <Paper className={classes.paper}>
            <h2>Enrollment </h2>
                <div>
                        
                        <strong> Vanguard Academy </strong> is a magnet school of 
                        choice in the Houston Independent School District. 
                        Enrollment is limited. Please go to the enrollment section to see
                        application details and process.  
                        See How to Apply for an overview of the application process.
                    </div></Paper>
            
          </Grid>
          
          <Grid item xs={4}>
            <Paper className={classes.paper}> <img src={schoolShield2} height={400} /></Paper>
          </Grid>
        </Grid>
                */}
                   
                   
        </div>
    )
    
}


export default AboutContainer;