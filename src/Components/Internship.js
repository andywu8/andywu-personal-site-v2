import React, {useState} from 'react';
import './Components.css'
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });
export default function Internship(props) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <h1>{props.company}</h1>
            <h2>{props.title}</h2>
            <p>Duration: {props.duration}</p>
            <p>Key Skills: {props.key_skills}</p>
        </Card>
        /* <div class="left">
            <img class ="company_logo" src={props.img_src} alt="company_logo"></img>
        </div> */

    );
  }