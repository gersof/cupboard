import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({


}));

const HomePage = (props) => {
  // const classes = useStyles();

  return (
    //   <div className={classes.root}>
    <div >
      <Container fixed>
        <h1>Hola desde Home</h1>
      </Container>


    </div>
  );
}

export default HomePage;