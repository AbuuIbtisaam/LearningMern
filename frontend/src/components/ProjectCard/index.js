import { Avatar, Button, Card, CardContent, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: "center",
        width: "100%",
        height: "100%",
    },
    content: {
        paddingTop: "30px",
        marginBottom: "20px"
    },
    image: {
        width: theme.spacing(9),
        height: theme.spacing(9),
    },
    title: {
        fontWeight: "500",
    },
    caption: {
        color: "#717476"
    },
    button: {
        backgroundColor: "#F4F7FC",
        textTransform: "inherit",
        fontWeight: 400,
        padding: "5px 20px",
        '&:hover': {
        backgroundColor: "#106EC4",
        color: "#FFF"
        }
    }
}))
const ProjectCard = ({image, title, caption}) => {
    const classes = useStyles();
  return (
    <Card className={classes.root} elevation={0}>
        <CardContent className={classes.content}>
            <Grid container spacing={2} justifyContent="center" alignItems='center' direction="column">
                <Grid item>
                    <Avatar src={image} className={classes.image} />
                </Grid>
                <Grid item>
                    <Typography className={classes.title}>{title}</Typography>
                    <Typography variant='body2' className={classes.caption}>{caption}</Typography>
                </Grid>
                <Grid item>
                    <Button className={classes.button}>Explore</Button>
                </Grid>
            </Grid>
        </CardContent>
    </Card>
  )
}

export default ProjectCard