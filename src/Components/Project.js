import React from 'react';
import './Internship.css'


export default function Project(props) {
    return (
    <div class={"Card "+props.class}>
        <h1>{props.project_name}</h1>
        <p>{props.description}</p>

        <p>Key Skills: {props.key_skills}</p>

    </div>
    );
  }