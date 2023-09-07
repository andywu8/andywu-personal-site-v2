import React from 'react';
import './Components.css';


export default function Project(props) {
    return (
    <div class={"Card "+props.class}>
        <h1>{props.project_name}</h1>
        <p>Dates worked on: {props.date}</p>
        <p>{props.description}</p>
        <p>Key Skills: {props.key_skills}</p>
        <a href="/" class="btn">Learn More</a>

    </div>
    );
  }