import React, { useEffect, useState } from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { getProjects, postProject } from '../../utils/api';
import {Button, Container, Dialog, DialogActions, DialogContent, DialogTitle, Grid, InputAdornment, MenuItem, TextField, Typography} from '@material-ui/core';
import {BorderColor, Search} from '@material-ui/icons';
import ProjectCard from '../../components/ProjectCard';

const useStyles = makeStyles({
  root:{
    paddingTop: "40px",
    
  },
  title:{
    marginBottom: "5px"
  },
  subtitle: {
    color: "#717476"
  },
  textField: {
    backgroundColor: "#FFFF",
    outline: 0
  },
  selectField: {
    backgroundColor: "#FFFF",
    outline: 0
  },
  button: {
    height: "100%",
    backgroundColor: "#108AF9",
    color: "#FFFF",
    textTransform: "inherit",
    padding: "5px 20px",
    '&:hover': {
      backgroundColor: "#106EC4"
    }
  },
  notchedOutline: {
    borderWidth: "0px",
    BorderColor: "rgba(255,255,255,0.0) !important",
    color: "rgb(143,146,149)",
    minWidth: "200px",
  }
});


const ProjectsPage = () => {

const classes = useStyles();
const [data, setData] = useState([]);
const [open, setOpen] = useState(false);
const [state, setState] = useState({})

const handleChange = (e) => {
  const name = e.target.name;
  const value = e.target.value;

  setState((old) => ({...old, [name]: value}));
}

const handleSubmit = () => {
  postProject(state).then(() => {
    setState({});
    setOpen(false);
  })
}

useEffect(() => {
    getProjects(setData)
},[])

console.log(data)
  return (
    <Container className={classes.root}>
      <Grid container spacing={5}>
        <Grid item xs = {12}>
          <Typography variant="h5" className={classes.title}>Project list and Create</Typography>
          <Typography variant="body2" className={classes.subtitle}>You can create, edit, and delete the project here</Typography>
        </Grid>
        <Grid item xs = {12}>
          <Grid container spacing={2} justifyContent="space-between" alignItems='center'>
            <Grid item>
              <TextField placeholder='Search project' className={classes.textField} size='small' variant="outlined" InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <Search/>
                  </InputAdornment>
                ),
                classes: {
                  root: classes.notchedOutline,
                  focused: classes.notchedOutline,
                  notchedOutline: classes.notchedOutline,
                },
              }}/>             
            </Grid>
            <Grid item>
              <Grid container spacing={2}>
                <Grid item>
                  <TextField               
                    select
                    size='small'
                    className={classes.selectField}
                    value={0}              
                    variant="outlined"
                    InputProps={{
                    classes: {
                      root: classes.notchedOutline,
                      focused: classes.notchedOutline,
                      notchedOutline: classes.notchedOutline,
                    },
                  }}>
                    <MenuItem value={0}>Sort A-Z Descending</MenuItem>
                    <MenuItem value={1}>Sort A-Z Ascending</MenuItem>
                  </TextField>
                </Grid>
                <Grid item>
                  <Button onClick={() => setOpen(true)} className={classes.button}>Create Project</Button>
                </Grid>
              </Grid>
            </Grid>            
          </Grid>
        </Grid>
        <Grid item xs = {12}>
          <Grid container spacing={3}>
            {data.map((item, i) => (
              <Grid item xs={6} sm={4} md={2} lg={2}>
                <ProjectCard 
                  image={item.image} 
                  title={item.title} 
                  caption={item.caption}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Dialog open={open} onClose={() => setOpen(false)} aria-lebelledby="form-dialog-title">
        
        <DialogTitle id='form-dialog-title'>Create Project</DialogTitle>
        <DialogContent>          
          <TextField
            name='image'
            fullWidth
            label="Image Link"
            value={state.image}
            variant="outlined"
            onChange={handleChange}
            className={classes.dialogInput}                        
          />
          <TextField
            name='title'
            fullWidth
            label="Project Title"
            value={state.title}
            variant="outlined"
            onChange={handleChange}
            className={classes.dialogInput}                        
          />
          <TextField
            name='caption'
            fullWidth
            label="caption"
            value={state.caption}
            variant="outlined"
            onChange={handleChange}
            className={classes.dialogInput}                        
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">Cancel</Button>
          <Button onClick={handleSubmit}>Create</Button>
        </DialogActions>
      </Dialog>
    </Container>
  )
}

export default ProjectsPage