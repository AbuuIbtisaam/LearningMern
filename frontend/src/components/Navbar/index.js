import * as React from 'react';
import {AppBar, MenuItem, Tooltip, Button, Avatar, Container, Menu, Typography, Toolbar, Box, Grid, makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) =>( {
    root: {
        flexGrow: 1,
        backgroundColor: "white"

    },
    container: {        
        backgroundColor: "white",
        color: "black"
    },
    small: {
        width: theme.spacing(4),
        height: theme.spacing(4),
    },
}))

const Navbar = ({history}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container maxWidth={"xl"}>
                <AppBar position="static" className={classes.container} elevation={0}>
                    <Toolbar>  
                        <Grid container spacing={3} justifyContent="space-between" alignItems='center'>
                            <Grid item>
                                <Typography variant="h6">Projects App</Typography>
                            </Grid>
                            <Grid item>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item>
                                        <Typography>Projects</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Avatar src='' className={classes.small}/>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>              
                    </Toolbar>
                </AppBar>
            </Container>
        </div>
    );
  }
  export default Navbar