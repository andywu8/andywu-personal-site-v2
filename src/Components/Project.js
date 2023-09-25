import React from 'react';
import './Components.css';

import {Button} from '@material-ui/core'; 
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

export default function Project(props) {
    return (
    <Card>
        <h1>{props.project_name}</h1>
        <p>About: {props.description}</p>
        <p>Dates worked on: {props.date}</p>
        <p>Key Tech: {props.key_tech}</p>
        <Button href={props.github_link} variant="outlined" color="primary">View Github Repo</Button>
        {/* <a href={props.github_link} class="btn">View Github</a> */}
    </Card>
    );
  }