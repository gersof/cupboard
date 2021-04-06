import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MainMenu from './Navbar';


const useStyles = makeStyles((theme) => ({

  
}));

 const  Dashboard =(props)=>{
    // const classes = useStyles();

    return (
    //   <div className={classes.root}>
      <div >
        <MainMenu />
        <div >
          {props?.children}
        </div>
        
      </div>
    );
  }

  export default Dashboard;