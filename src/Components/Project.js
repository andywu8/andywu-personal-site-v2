import React from 'react';
import './Components.css';

import {Button} from '@material-ui/core'; 
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function Project(props) {
    const classes = useStyles();
    return (
    <Card className={classes.root} variant="outlined">
        <CardMedia
        sx={{ height: 140 }}
        image={props.image}
      />
        <CardContent>
            <h1>{props.project_name}</h1>
            <p>About: {props.description}</p>
            <p>Dates worked on: {props.date}</p>
            <p>Key Tech: {props.key_tech}</p>
            <Button href={props.github_link} variant="outlined" color="primary">View Github Repo</Button>
        </CardContent>
    </Card>
    );
  }